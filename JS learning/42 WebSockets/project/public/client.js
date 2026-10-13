
const socket = io();

const joinScreen = document.getElementById("join-screen");
const chatScreen = document.getElementById("chat-screen");
const joinForm = document.getElementById("join-form");
const messageForm = document.getElementById("message-form");
const usernameInput = document.getElementById("username");
const roomInput = document.getElementById("room-id");
const messageInput = document.getElementById("message-input");
const messages = document.getElementById("messages");
const currentRoom = document.getElementById("current-room");
const connectionStatus = document.getElementById("connection-status");

let joined = false;

joinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const roomId = roomInput.value.trim().toUpperCase();

    if (!username || !roomId) return;

    socket.emit("join-room", { username, roomId }, (result) => {
        if (!result?.success) {
            alert(result?.message || "Unable to join the room.");
            return;
        }

        joined = true;
        joinScreen.classList.add("hidden");
        chatScreen.classList.remove("hidden");
        currentRoom.textContent = result.roomId;
        connectionStatus.textContent =
            `Connected · Socket ID: ${result.socketId}`;

        messages.replaceChildren();
        addSystemMessage(`You joined room ${result.roomId}`);
        messageInput.focus();
    });
});

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = messageInput.value.trim();

    if (!text || !joined || !socket.connected) return;

    socket.emit("chat-message", text);
    messageInput.value = "";
    messageInput.focus();
});

socket.on("chat-message", (message) => {
    addMessage(message);
});

socket.on("system-message", (message) => {
    addSystemMessage(message.text);
});

socket.on("connect", () => {
    connectionStatus.textContent = joined
        ? "Reconnected — please rejoin your room"
        : "Connected to server";
});

socket.on("disconnect", () => {
    joined = false;
    connectionStatus.textContent = "Disconnected from server";
});

document.getElementById("leave-button").addEventListener("click", () => {
    // Leaving the page's chat UI does not disconnect the socket.
    // Reloading gives a clean state for this simple demo.
    window.location.reload();
});

function addMessage(message) {
    const item = document.createElement("div");
    item.className = "message";

    const heading = document.createElement("div");
    heading.className = "message-heading";

    const name = document.createElement("strong");
    name.textContent = message.username;

    const time = document.createElement("small");
    time.textContent = message.time;

    const body = document.createElement("p");
    body.textContent = message.text;

    heading.append(name, time);
    item.append(heading, body);
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
}

function addSystemMessage(text) {
    const item = document.createElement("div");
    item.className = "system-message";
    item.textContent = text;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
}
