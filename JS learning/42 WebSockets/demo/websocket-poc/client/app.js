const connection_status = document.getElementById("connection_status");
const message_input = document.getElementById("message_input");
const send_button = document.getElementById("send_button");
const disconnect_button = document.getElementById("disconnect_button");
const messages = document.getElementById("messages");

const socket = new WebSocket("ws://localhost:5001");

socket.addEventListener("open", function () {
    connection_status.textContent = "Connected";
    console.log("WebSocket connection opened");
});

socket.addEventListener("message", function (event) {
    const message_element = document.createElement("p");

    message_element.textContent = `Server: ${event.data}`;

    messages.appendChild(message_element);
});

socket.addEventListener("error", function (error) {
    console.error("WebSocket error:", error);
});

socket.addEventListener("close", function () {
    connection_status.textContent = "Disconnected";
    console.log("WebSocket connection closed");
});

send_button.addEventListener("click", function () {
    const message = message_input.value;

    if (message === "") {
        return;
    }

    socket.send(message);

    const message_element = document.createElement("p");

    message_element.textContent = `You: ${message}`;

    messages.appendChild(message_element);

    message_input.value = "";
});

disconnect_button.addEventListener("click", function () {
    socket.close();
});