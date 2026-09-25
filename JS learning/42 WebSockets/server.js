const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static("public"));

let online_users = 0;
io.on("connection", function (socket) {
    console.log("User connected:", socket.id);
    online_users++;
    io.emit("online_users", online_users);
    socket.on("chat_message", function (message_data) {
        console.log("Message received:", message_data);
        io.emit("receive_message", message_data);
    });
    socket.on("disconnect", function () {
        console.log("User disconnected:", socket.id);
        online_users--;
        io.emit("online_users", online_users);
    });
});

const PORT = 5000;
server.listen(PORT, function () {
    console.log(`Server running at http://localhost:${PORT}`);
});