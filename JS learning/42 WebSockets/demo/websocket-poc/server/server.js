import { WebSocketServer } from "ws";

const websocket_server = new WebSocketServer({
    port: 5001
});

console.log("WebSocket server running on ws://localhost:5000");

websocket_server.on("connection", function (socket) {

    console.log("Client connected");

    socket.send("Welcome to WebSocket server");

    socket.on("message", function (message) {

        const received_message = message.toString();

        console.log("Client:", received_message);

        socket.send(`Server received: ${received_message}`);

    });

    socket.on("close", function () {

        console.log("Client disconnected");

    });

});