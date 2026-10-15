
const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, "data");
const MESSAGE_FILE = path.join(DATA_DIR, "messages.json");

fs.mkdirSync(DATA_DIR, { recursive: true });

if (!fs.existsSync(MESSAGE_FILE)) {
    fs.writeFileSync(MESSAGE_FILE, "[]", "utf8");
}

let message_history = [];

try {
    message_history = JSON.parse(
        fs.readFileSync(MESSAGE_FILE, "utf8")
    );

    if (!Array.isArray(message_history)) {
        message_history = [];
    }
} catch {
    message_history = [];
}

function save_messages() {
    fs.writeFileSync(
        MESSAGE_FILE,
        JSON.stringify(message_history, null, 2),
        "utf8"
    );
}

const online_users = new Map();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        service: "chat-server",
        online_users: online_users.size,
        saved_messages: message_history.length
    });
});


function get_online_users() {
    const known_users = new Set();

    for (const message of message_history) {
        known_users.add(message.sender);
        known_users.add(message.recipient);
    }

    for (const username of online_users.keys()) {
        known_users.add(username);
    }

    return Array.from(known_users).map((username) => ({
        username,
        online: online_users.has(username) &&
            online_users.get(username).size > 0
    }));
}

function send_presence() {
    io.emit("presence-update", get_online_users());
}

function add_user_socket(username, socket_id) {
    if (!online_users.has(username)) {
        online_users.set(username, new Set());
    }

    online_users.get(username).add(socket_id);
}

function remove_user_socket(username, socket_id) {
    if (!username || !online_users.has(username)) {
        return;
    }

    const sockets = online_users.get(username);
    sockets.delete(socket_id);

    if (sockets.size === 0) {
        online_users.delete(username);
    }
}

function deliver_pending_messages(username) {
    const sockets = online_users.get(username);

    if (!sockets || sockets.size === 0) {
        return;
    }

    for (const message of message_history) {
        if (
            message.recipient === username &&
            message.status === "sent"
        ) {
            message.status = "delivered";
            message.delivered_at = new Date().toISOString();

            for (const socket_id of sockets) {
                io.to(socket_id).emit("private-message", message);
            }

            io.to(message.sender).emit("message-status", {
                message_id: message.message_id,
                status: "delivered",
                delivered_at: message.delivered_at
            });
        }
    }

    save_messages();
}

io.on("connection", (socket) => {
    console.log("Connected:", socket.id);

    socket.on("register-user", (raw_username, callback) => {
        const username = String(raw_username || "")
            .trim()
            .slice(0, 30)
            .toLowerCase();

        if (!/^[a-z0-9_-]{2,30}$/.test(username)) {
            callback?.({
                success: false,
                message:
                    "Use 2–30 letters, numbers, underscores or hyphens."
            });
            return;
        }

        if (socket.data.username) {
            remove_user_socket(
                socket.data.username,
                socket.id
            );
        }

        socket.data.username = username;
        add_user_socket(username, socket.id);

        callback?.({
            success: true,
            username,
            users: get_online_users()
        });

        socket.emit("message-history", message_history.filter(
            (message) =>
                message.sender === username ||
                message.recipient === username
        ));

        send_presence();
        deliver_pending_messages(username);

        console.log(`${username} connected`);
    });

    socket.on("get-history", () => {
        const username = socket.data.username;

        if (!username) return;

        socket.emit("message-history", message_history.filter(
            (message) =>
                message.sender === username ||
                message.recipient === username
        ));
    });

    socket.on("private-message", (payload, callback) => {
        const sender = socket.data.username;

        if (!sender || !payload || typeof payload !== "object") {
            callback?.({
                success: false,
                message: "Register before sending messages."
            });
            return;
        }

        const message_id = String(payload.message_id || "");
        const recipient = String(payload.recipient || "")
            .trim()
            .toLowerCase();
        const text = String(payload.text || "").trim().slice(0, 2000);

        if (
            !message_id ||
            message_id.length > 100 ||
            !/^[a-z0-9_-]{2,30}$/.test(recipient) ||
            !text ||
            recipient === sender
        ) {
            callback?.({
                success: false,
                message: "Invalid recipient or message."
            });
            return;
        }

        const existing = message_history.find(
            (message) => message.message_id === message_id
        );

        if (existing) {
            if (
                existing.sender !== sender ||
                existing.recipient !== recipient ||
                existing.text !== text
            ) {
                callback?.({
                    success: false,
                    message: "Message ID conflict."
                });
                return;
            }

            callback?.({
                success: true,
                message_id,
                status: existing.status
            });
            return;
        }

        const message = {
            message_id,
            sender,
            recipient,
            text,
            created_at: new Date().toISOString(),
            status: "sent"
        };

        const recipient_sockets = online_users.get(recipient);

        if (recipient_sockets && recipient_sockets.size > 0) {
            message.status = "delivered";
            message.delivered_at = new Date().toISOString();
        }

        message_history.push(message);
        save_messages();

        if (recipient_sockets && recipient_sockets.size > 0) {
            for (const socket_id of recipient_sockets) {
                io.to(socket_id).emit("private-message", message);
            }
        }

        callback?.({
            success: true,
            message_id,
            status: message.status
        });

        io.to(sender).emit("message-status", {
            message_id,
            status: message.status,
            delivered_at: message.delivered_at || null
        });

        console.log(
            `Private message: ${sender} -> ${recipient} (${message.status})`
        );
    });

    socket.on("read-message", (message_id) => {
        const username = socket.data.username;
        if (!username) return;

        const message = message_history.find(
            (item) =>
                item.message_id === message_id &&
                item.recipient === username
        );

        if (!message || message.status === "read") return;

        message.status = "read";
        message.read_at = new Date().toISOString();
        save_messages();

        io.to(message.sender).emit("message-status", {
            message_id,
            status: "read",
            read_at: message.read_at
        });
    });

    socket.on("disconnect", () => {
        const username = socket.data.username;

        remove_user_socket(username, socket.id);

        if (username) {
            console.log(`${username} disconnected`);
            send_presence();
        }
    });
});

server.listen(PORT, () => {
    console.log(`Chat server running at http://localhost:${PORT}`);
});
