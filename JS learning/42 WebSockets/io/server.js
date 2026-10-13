
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const http_server = createServer(app);
const io = new Server(http_server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("chat_message", (message_data) => {
        const chat_message = {
            username: String(message_data.username).slice(0, 30),
            message: String(message_data.message).slice(0, 1000),
            sent_at: new Date().toLocaleTimeString()
        };

        io.emit("receive_message", chat_message);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

http_server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
