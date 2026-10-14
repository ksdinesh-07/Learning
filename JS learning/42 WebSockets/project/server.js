
import express from "express";
import { createServer } from "node:http";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Server } from "socket.io";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const http_server = createServer(app);
const io = new Server(http_server);

const port = process.env.PORT || 3000;
const public_directory = path.join(__dirname, "public");
const data_directory = path.join(__dirname, "data");
const messages_file = path.join(data_directory, "messages.json");

let messages = [];
let write_queue = Promise.resolve();

const online_users = new Map();
const known_users = new Set();

app.use(express.static(public_directory));

app.get("/api/health", (request, response) => {
    response.json({
        success: true,
        message: "Chat server is running"
    });
});

async function initialize_storage() {
    await mkdir(data_directory, { recursive: true });

    try {
        const file_content = await readFile(messages_file, "utf8");
        messages = JSON.parse(file_content);

        if (!Array.isArray(messages)) {
            messages = [];
        }
    } catch (error) {
        if (error.code !== "ENOENT") {
            throw error;
        }

        await writeFile(messages_file, "[]", "utf8");
    }

    for (const message of messages) {
        if (message.sender) {
            known_users.add(message.sender);
        }

        if (message.recipient) {
            known_users.add(message.recipient);
        }
    }
}

function persist_messages() {
    write_queue = write_queue.then(() => {
        return writeFile(
            messages_file,
            JSON.stringify(messages, null, 2),
            "utf8"
        );
    });

    return write_queue;
}

function get_user_list() {
    return [...known_users]
        .sort()
        .map((username) => ({
            username,
            online: (online_users.get(username)?.size || 0) > 0
        }));
}

function emit_presence() {
    io.emit("presence-update", get_user_list());
}

function get_user_history(username) {
    return messages.filter((message) => {
        return (
            message.sender === username ||
            message.recipient === username
        );
    });
}

function acknowledge(callback, result) {
    if (typeof callback === "function") {
        callback(result);
    }
}

function remove_user_socket(socket) {
    const username = socket.data.username;

    if (!username) {
        return;
    }

    const user_sockets = online_users.get(username);

    if (user_sockets) {
        user_sockets.delete(socket.id);

        if (user_sockets.size === 0) {
            online_users.delete(username);
        }
    }

    socket.leave(username);
    delete socket.data.username;

    emit_presence();
}

async function deliver_pending_messages(username) {
    const user_sockets = online_users.get(username);

    if (!user_sockets || user_sockets.size === 0) {
        return;
    }

    const pending_messages = messages.filter((message) => {
        return (
            message.recipient === username &&
            message.status === "sent"
        );
    });

    for (const message of pending_messages) {
        message.status = "delivered";

        await persist_messages();

        io.to(username).emit("private-message", message);

        io.to(message.sender).emit("message-status", {
            message_id: message.message_id,
            status: "delivered"
        });
    }
}

io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("register-user", async (requested_username, callback) => {
        try {
            const username = String(requested_username || "")
                .trim()
                .toLowerCase();

            if (!/^[a-z0-9_-]{2,30}$/.test(username)) {
                acknowledge(callback, {
                    success: false,
                    message: "Username must be 2–30 letters, numbers, underscores or hyphens."
                });
                return;
            }

            if (socket.data.username && socket.data.username !== username) {
                remove_user_socket(socket);
            }

            socket.data.username = username;

            if (!online_users.has(username)) {
                online_users.set(username, new Set());
            }

            online_users.get(username).add(socket.id);
            known_users.add(username);

            await socket.join(username);

            socket.emit("message-history", get_user_history(username));
            emit_presence();

            await deliver_pending_messages(username);

            acknowledge(callback, {
                success: true,
                username,
                users: get_user_list()
            });
        } catch (error) {
            console.error("Registration error:", error);

            acknowledge(callback, {
                success: false,
                message: "Unable to register this user."
            });
        }
    });

    socket.on("request-history", (callback) => {
        const username = socket.data.username;

        if (!username) {
            acknowledge(callback, {
                success: false,
                message: "Register before requesting history."
            });
            return;
        }

        acknowledge(callback, {
            success: true,
            messages: get_user_history(username)
        });
    });

    socket.on("private-message", async (payload, callback) => {
        try {
            const sender = socket.data.username;
            const recipient = String(payload?.recipient || "")
                .trim()
                .toLowerCase();
            const content = String(payload?.content || "").trim();
            const message_id = String(payload?.message_id || "");

            if (!sender) {
                acknowledge(callback, {
                    success: false,
                    message: "Register before sending messages."
                });
                return;
            }

            if (!/^[a-z0-9_-]{2,30}$/.test(recipient)) {
                acknowledge(callback, {
                    success: false,
                    message: "Invalid recipient username."
                });
                return;
            }

            if (recipient === sender) {
                acknowledge(callback, {
                    success: false,
                    message: "You cannot send a private message to yourself."
                });
                return;
            }

            if (!content || content.length > 2000 || !message_id) {
                acknowledge(callback, {
                    success: false,
                    message: "A message ID and message content are required."
                });
                return;
            }

            let message = messages.find((item) => {
                return item.message_id === message_id;
            });

            if (message) {
                if (
                    message.sender !== sender ||
                    message.recipient !== recipient ||
                    message.content !== content
                ) {
                    acknowledge(callback, {
                        success: false,
                        message: "Message ID conflicts with an existing message."
                    });
                    return;
                }
            } else {
                const recipient_online =
                    (online_users.get(recipient)?.size || 0) > 0;

                message = {
                    message_id,
                    sender,
                    recipient,
                    content,
                    timestamp: new Date().toISOString(),
                    status: recipient_online ? "delivered" : "sent"
                };

                messages.push(message);
                known_users.add(sender);
                known_users.add(recipient);

                await persist_messages();

                if (recipient_online) {
                    io.to(recipient).emit("private-message", message);

                    io.to(sender).emit("message-status", {
                        message_id,
                        status: "delivered"
                    });
                }

                emit_presence();
            }

            acknowledge(callback, {
                success: true,
                message_id,
                status: message.status
            });
        } catch (error) {
            console.error("Private message error:", error);

            acknowledge(callback, {
                success: false,
                message: "The server could not process the message."
            });
        }
    });

    socket.on("read-message", async (payload) => {
        try {
            const username = socket.data.username;

            if (!username || !payload?.message_id) {
                return;
            }

            const message = messages.find((item) => {
                return (
                    item.message_id === payload.message_id &&
                    item.recipient === username
                );
            });

            if (!message || message.status === "read") {
                return;
            }

            message.status = "read";

            await persist_messages();

            io.to(message.sender).emit("message-status", {
                message_id: message.message_id,
                status: "read"
            });
        } catch (error) {
            console.error("Read receipt error:", error);
        }
    });

    socket.on("unregister-user", () => {
        remove_user_socket(socket);
    });

    socket.on("disconnect", () => {
        remove_user_socket(socket);
        console.log("Socket disconnected:", socket.id);
    });
});

await initialize_storage();

http_server.listen(port, () => {
    console.log(`Chat server running at http://localhost:${port}`);
});
