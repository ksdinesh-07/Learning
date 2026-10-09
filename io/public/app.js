
const socket = io();

const username_input = document.getElementById("username");
const message_input = document.getElementById("message-input");
const chat_form = document.getElementById("chat-form");
const message_list = document.getElementById("message-list");
const connection_status = document.getElementById("connection-status");

socket.on("connect", () => {
    connection_status.textContent = "Connected";
});

socket.on("disconnect", () => {
    connection_status.textContent = "Disconnected. Reconnecting...";
});

chat_form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = username_input.value.trim();
    const message = message_input.value.trim();

    if (!username || !message) {
        return;
    }

    socket.emit("chat_message", {
        username,
        message
    });

    message_input.value = "";
    message_input.focus();
});

socket.on("receive_message", (chat_message) => {
    const message_item = document.createElement("li");
    message_item.className = "message-item";

    const message_header = document.createElement("div");
    message_header.className = "message-header";

    const username_element = document.createElement("strong");
    username_element.textContent = chat_message.username;

    const time_element = document.createElement("time");
    time_element.textContent = chat_message.sent_at;

    const message_text = document.createElement("p");
    message_text.className = "message-text";
    message_text.textContent = chat_message.message;

    message_header.append(username_element, time_element);
    message_item.append(message_header, message_text);
    message_list.append(message_item);

    message_list.scrollTop = message_list.scrollHeight;
});
