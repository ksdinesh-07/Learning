
const socket = io({
    autoConnect: true,
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000
});

const loginScreen = document.getElementById("login-screen");
const chatScreen = document.getElementById("chat-screen");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const messagesElement = document.getElementById("messages");
const usersList = document.getElementById("users-list");
const userCount = document.getElementById("user-count");
const recipientName = document.getElementById("recipient-name");
const recipientStatus = document.getElementById("recipient-status");
const networkStatus = document.getElementById("network-status");
const socketStatus = document.getElementById("socket-status");
const logoutButton = document.getElementById("logout-button");
document.getElementById("logged-in-user").textContent =`Logged in as: ${current_username}`;

const database_name = "private-chat-db";
const store_name = "outgoing-messages";

let database = null;
let current_username = "";
let selected_recipient = "";
let online_users = [];
let server_messages = [];
let local_messages = [];
let is_syncing = false;

function set_status(element, message, online) {
    element.textContent = message;
    element.classList.toggle("online", online);
    element.classList.toggle("offline", !online);
}

function update_connection_status() {
    set_status(
        networkStatus,
        navigator.onLine ? "Network online" : "Network offline",
        navigator.onLine
    );

    set_status(
        socketStatus,
        socket.connected ? "Connected" : "Disconnected",
        socket.connected
    );

    if (selected_recipient) {
        recipientStatus.textContent = is_user_online(selected_recipient)
            ? "Online · Private conversation"
            : "Offline · Messages can be queued";
    } else {
        recipientStatus.textContent = "No conversation selected";
    }
}

function is_user_online(username) {
    return online_users.some((user) => {
        return user.username === username && user.online;
    });
}

function normalize_users(users) {
    if (!Array.isArray(users)) {
        return [];
    }

    return users
        .map((user) => {
            if (typeof user === "string") {
                return { username: user, online: true };
            }

            if (user && typeof user.username === "string") {
                return {
                    username: user.username,
                    online: Boolean(user.online)
                };
            }

            return null;
        })
        .filter(Boolean)
        .filter((user) => user.username !== current_username);
}

function open_database() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(database_name, 1);

        request.onupgradeneeded = () => {
            const db = request.result;

            if (!db.objectStoreNames.contains(store_name)) {
                db.createObjectStore(store_name, {
                    keyPath: "message_id"
                });
            }
        };

        request.onsuccess = () => {
            database = request.result;
            resolve(database);
        };

        request.onerror = () => reject(request.error);
    });
}

function save_local_message(message) {
    return new Promise((resolve, reject) => {
        if (!database) {
            reject(new Error("IndexedDB is not ready."));
            return;
        }

        const transaction = database.transaction(store_name, "readwrite");
        transaction.objectStore(store_name).put(message);

        transaction.oncomplete = () => resolve(message);
        transaction.onerror = () => reject(transaction.error);
    });
}

function get_local_messages() {
    return new Promise((resolve, reject) => {
        if (!database) {
            resolve([]);
            return;
        }

        const transaction = database.transaction(store_name, "readonly");
        const request = transaction.objectStore(store_name).getAll();

        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => reject(request.error);
    });
}

function get_all_messages() {
    const combined = new Map();

    for (const message of server_messages) {
        if (message?.message_id) {
            combined.set(message.message_id, message);
        }
    }

    for (const message of local_messages) {
        if (message?.message_id && !combined.has(message.message_id)) {
            combined.set(message.message_id, message);
        }
    }

    return [...combined.values()].sort((first, second) => {
        return new Date(first.timestamp) - new Date(second.timestamp);
    });
}

function get_conversation_messages() {
    if (!current_username || !selected_recipient) {
        return [];
    }

    return get_all_messages().filter((message) => {
        return (
            (message.sender === current_username &&
                message.recipient === selected_recipient) ||
            (message.sender === selected_recipient &&
                message.recipient === current_username)
        );
    });
}

function render_messages() {
    messagesElement.replaceChildren();

    if (!selected_recipient) {
        const empty = document.createElement("p");
        empty.className = "empty-state";
        empty.textContent = "Choose a person to start a conversation.";
        messagesElement.appendChild(empty);
        return;
    }

    const conversation = get_conversation_messages();

    if (conversation.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty-state";
        empty.textContent = `Start a conversation with ${selected_recipient}.`;
        messagesElement.appendChild(empty);
        return;
    }

    for (const message of conversation) {
        const container = document.createElement("article");

        container.className = "message";
        container.classList.add(
            message.sender === current_username
                ? "own-message"
                : "received-message"
        );

        const sender = document.createElement("strong");
        sender.textContent = message.sender === current_username
            ? "You"
            : message.sender;

        const content = document.createElement("p");
        content.textContent = message.content;

        const details = document.createElement("small");
        const time = message.timestamp
            ? new Date(message.timestamp).toLocaleTimeString()
            : "";

        const labels = {
            pending: "Pending sync",
            sent: "Sent to server",
            delivered: "Delivered",
            read: "Read"
        };

        const status = message.sender === current_username
            ? labels[message.status] || "Pending sync"
            : "Received";

        details.textContent = `${time} · ${status}`;

        container.append(sender, content, details);
        messagesElement.appendChild(container);

        if (
            message.sender === selected_recipient &&
            message.recipient === current_username &&
            message.status !== "read" &&
            socket.connected
        ) {
            socket.emit("read-message", {
                message_id: message.message_id
            });
        }
    }

    messagesElement.scrollTop = messagesElement.scrollHeight;
}

function render_users() {
    usersList.replaceChildren();

    const users = new Map();

    for (const user of online_users) {
        users.set(user.username, user);
    }

    for (const message of get_all_messages()) {
        const other_username = message.sender === current_username
            ? message.recipient
            : message.sender;

        if (other_username && other_username !== current_username) {
            if (!users.has(other_username)) {
                users.set(other_username, {
                    username: other_username,
                    online: is_user_online(other_username)
                });
            }
        }
    }

    const sorted_users = [...users.values()].sort((first, second) => {
        return first.username.localeCompare(second.username);
    });

    userCount.textContent = String(sorted_users.length);

    if (sorted_users.length === 0) {
        const empty = document.createElement("p");
        empty.className = "muted";
        empty.textContent = "No other users are available yet.";
        usersList.appendChild(empty);
        return;
    }

    for (const user of sorted_users) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "user-button";

        if (user.username === selected_recipient) {
            button.classList.add("selected");
        }

        const name = document.createElement("span");
        name.textContent = user.username;

        const status = document.createElement("small");
        status.textContent = user.online ? "Online" : "Offline";

        button.append(name, status);

        button.addEventListener("click", () => {
            selected_recipient = user.username;
            recipientName.textContent = selected_recipient;

            update_connection_status();
            render_users();
            render_messages();
        });

        usersList.appendChild(button);
    }
}

async function refresh_local_messages() {
    local_messages = await get_local_messages();
    render_users();
    render_messages();
}

async function load_server_history() {
    if (!socket.connected || !current_username) {
        return;
    }

    socket.emit("request-history", (result) => {
        if (result?.success && Array.isArray(result.messages)) {
            server_messages = result.messages;
            render_users();
            render_messages();
        }
    });
}

function send_pending_message(message) {
    return new Promise((resolve) => {
        if (!socket.connected || !current_username) {
            resolve(false);
            return;
        }

        socket.timeout(8000).emit(
            "private-message",
            {
                message_id: message.message_id,
                recipient: message.recipient,
                content: message.content
            },
            async (error, result) => {
                if (error || !result?.success) {
                    console.warn(
                        "Message remains pending:",
                        result?.message || "Server acknowledgment timed out."
                    );

                    resolve(false);
                    return;
                }

                try {
                    const updated_message = {
                        ...message,
                        status: result.status
                    };

                    await save_local_message(updated_message);
                    await refresh_local_messages();

                    resolve(true);
                } catch (save_error) {
                    console.error("Unable to update message status:", save_error);
                    resolve(false);
                }
            }
        );
    });
}

async function sync_pending_messages() {
    if (is_syncing || !database || !socket.connected || !current_username) {
        return;
    }

    is_syncing = true;

    try {
        local_messages = await get_local_messages();

        const pending = local_messages.filter((message) => {
            return (
                message.sender === current_username &&
                message.status === "pending"
            );
        });

        for (const message of pending) {
            if (!socket.connected) {
                break;
            }

            await send_pending_message(message);
        }
    } catch (error) {
        console.error("Pending message synchronization failed:", error);
    } finally {
        is_syncing = false;
    }
}

function register_current_user() {
    if (!current_username || !socket.connected) {
        return;
    }

    socket.emit("register-user", current_username, async (result) => {
        if (!result?.success) {
            console.error(result?.message || "Unable to register.");
            return;
        }

        online_users = normalize_users(result.users);

        await load_server_history();
        await refresh_local_messages();
        update_connection_status();
        render_users();

        await sync_pending_messages();
    });
}

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim().toLowerCase();

    if (!/^[a-z0-9_-]{2,30}$/.test(username)) {
        alert("Use 2–30 letters, numbers, underscores or hyphens.");
        return;
    }

    if (!socket.connected) {
        alert("The server is not connected yet.");
        return;
    }

    if (!database) {
        alert("Local message storage is still initializing.");
        return;
    }

    socket.emit("register-user", username, async (result) => {
        if (!result?.success) {
            alert(result?.message || "Unable to join the chat.");
            return;
        }

        current_username = result.username;
        online_users = normalize_users(result.users);

        loginScreen.classList.add("hidden");
        chatScreen.classList.remove("hidden");

        await refresh_local_messages();
        await load_server_history();

        render_users();
        update_connection_status();
        await sync_pending_messages();
    });
});

messageForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const content = messageInput.value.trim();

    if (!current_username) {
        alert("Join the chat first.");
        return;
    }

    if (!selected_recipient) {
        alert("Select a person before sending a message.");
        return;
    }

    if (!content || !database) {
        return;
    }

    const message = {
        message_id: crypto.randomUUID(),
        sender: current_username,
        recipient: selected_recipient,
        content,
        timestamp: new Date().toISOString(),
        status: "pending"
    };

    try {
        await save_local_message(message);
        messageInput.value = "";

        await refresh_local_messages();

        if (socket.connected) {
            await send_pending_message(message);
        }
    } catch (error) {
        console.error("Unable to save the message:", error);
        alert("Unable to save this message locally.");
    }
});

logoutButton.addEventListener("click", () => {
    socket.emit("unregister-user");

    current_username = "";
    selected_recipient = "";
    online_users = [];
    server_messages = [];

    usernameInput.value = "";
    recipientName.textContent = "Select a person";

    chatScreen.classList.add("hidden");
    loginScreen.classList.remove("hidden");

    render_users();
    render_messages();
    update_connection_status();
});

socket.on("connect", () => {
    update_connection_status();

    if (current_username) {
        register_current_user();
    }
});

socket.on("disconnect", () => {
    update_connection_status();
});

socket.on("connect_error", (error) => {
    console.error("Socket connection error:", error.message);
    update_connection_status();
});

socket.on("presence-update", (users) => {
    online_users = normalize_users(users);
    render_users();
    update_connection_status();
});

socket.on("message-history", (messages) => {
    if (Array.isArray(messages)) {
        server_messages = messages;
        render_users();
        render_messages();
    }
});

socket.on("private-message", async (message) => {
    if (!message?.message_id) {
        return;
    }

    const index = server_messages.findIndex((item) => {
        return item.message_id === message.message_id;
    });

    if (index === -1) {
        server_messages.push(message);
    } else {
        server_messages[index] = message;
    }

    try {
        await save_local_message(message);
        await refresh_local_messages();
    } catch (error) {
        console.error("Unable to save received message:", error);
        render_users();
        render_messages();
    }
});

socket.on("message-status", async (update) => {
    if (!update?.message_id) {
        return;
    }

    server_messages = server_messages.map((message) => {
        return message.message_id === update.message_id
            ? { ...message, status: update.status }
            : message;
    });

    const local_message = local_messages.find((message) => {
        return message.message_id === update.message_id;
    });

    if (local_message) {
        await save_local_message({
            ...local_message,
            status: update.status
        });

        await refresh_local_messages();
    } else {
        render_messages();
    }
});

window.addEventListener("online", () => {
    update_connection_status();

    if (socket.connected) {
        sync_pending_messages();
    }
});

window.addEventListener("offline", update_connection_status);

async function initialize_service_worker() {
    if (!("serviceWorker" in navigator)) {
        return;
    }

    try {
        await navigator.serviceWorker.register("/sw.js");
    } catch (error) {
        console.error("Service Worker registration failed:", error);
    }
}

async function initialize_app() {
    update_connection_status();

    try {
        await open_database();
        await refresh_local_messages();
    } catch (error) {
        console.error("IndexedDB initialization failed:", error);
    }

    await initialize_service_worker();
}

initialize_app();
