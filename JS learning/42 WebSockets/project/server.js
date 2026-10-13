
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
    console.log("Connected:", socket.id);

    socket.on("join-room", ({ username, roomId }, callback) => {
        username = String(username || "").trim().slice(0, 30);
        roomId = String(roomId || "").trim().toUpperCase().slice(0, 30);

        if (!username || !roomId) {
            return callback?.({
                success: false,
                message: "Username and session ID are required."
            });
        }

        // Leave the previous room if this socket joins another.
        for (const room of socket.rooms) {
            if (room !== socket.id) {
                socket.leave(room);
            }
        }

        socket.data.username = username;
        socket.data.roomId = roomId;
        socket.join(roomId);

        callback?.({
            success: true,
            socketId: socket.id,
            roomId
        });

        socket.to(roomId).emit("system-message", {
            text: `${username} joined the chat`,
            time: new Date().toLocaleTimeString()
        });

        console.log(`${username} joined room ${roomId}`);
    });

    socket.on("chat-message", (text) => {
        const username = socket.data.username;
        const roomId = socket.data.roomId;

        if (!username || !roomId || typeof text !== "string") {
            return;
        }

        text = text.trim().slice(0, 2000);
        if (!text) return;

        // Broadcast to everyone in this room, including the sender.
        io.to(roomId).emit("chat-message", {
            username,
            text,
            time: new Date().toLocaleTimeString()
        });
    });

    socket.on("disconnect", () => {
        console.log("Disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Chat server running at http://localhost:${PORT}`);
});
