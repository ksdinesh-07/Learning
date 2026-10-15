
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
const demoNetwork = document.getElementById("demo-network");
const demoSocket = document.getElementById("demo-socket");
const pendingCount = document.getElementById("pending-count");
const cachedCount = document.getElementById("cached-count");
const syncButton = document.getElementById("sync-button");
const logoutButton = document.getElementById("logout-button");
const activityLog = document.getElementById("activity-log");

const required_elements = {
    loginScreen,
    chatScreen,
    loginForm,
    usernameInput,
    messageForm,
    messageInput,
    messagesElement,
    usersList,
    userCount,
    recipientName,
    recipientStatus,
    networkStatus,
    socketStatus,
    demoNetwork,
    demoSocket,
    pendingCount,
    cachedCount,
    syncButton,
    logoutButton,
    activityLog
};

const missing_elements = Object.entries(required_elements)
    .filter(([, element]) => !element)
    .map(([name]) => name);

if (missing_elements.length > 0) {
    console.error("Missing HTML elements:", missing_elements);
    throw new Error(
        `Missing HTML elements: ${missing_elements.join(", ")}`
    );
}

const database_name = "private-chat-db";
const database_version = 1;
const store_name = "outgoing-messages";

let database = null;
let current_username = "";
let selected_recipient = "";
let online_users = [];
let server_messages = [];
let local_messages = [];
let service_worker_registration = null;
let is_syncing = false;

function log_activity(message) {
    const entry = document.createElement("p");
    entry.textContent = `${new Date().toLocaleTimeString()} - ${message}`;

    activityLog.prepend(entry);

    while (activityLog.children.length > 30) {
        activityLog.lastElementChild.remove();
    }
}

function set_status(element, message, online = false) {
    element.textContent = message;
    element.classList.toggle("online", online);
    element.classList.toggle("offline", !online);
}

function update_connection_status() {
    const network_online = navigator.onLine;

    set_status(
        networkStatus,
        network_online ? "Online" : "Offline",
        network_online
    );

    demoNetwork.textContent = network_online ? "Online" : "Offline";

    set_status(
        socketStatus,
        socket.connected ? "Connected" : "Disconnected",
        socket.connected
    );

    demoSocket.textContent = socket.connected
        ? "Connected"
        : "Disconnected";

    recipientStatus.textContent = selected_recipient
        ? `${is_user_online(selected_recipient) ? "Online" : "Offline"} · Private conversation`
        : "No conversation selected";
}

function is_user_online(username) {
    return online_users.some((user) => {
        if (typeof user === "string") {
            return user === username;
        }

        return user?.username === username && user?.online !== false;
    });
}

function normalize_users(users) {
    if (!Array.isArray(users)) {
        return [];
    }

    return users
        .map((user) => {
            if (typeof user === "string") {
                return {
                    username: user,
                    online: true
                };
            }

            if (user && typeof user.username === "string") {
                return {
                    username: user.username,
                    online: user.online !== false
                };
            }

            return null;
        })
        .filter(Boolean)
        .filter((user) => user.username !== current_username);
}

function open_database() {
    return new Promise((resolve, reject) => {
        if (!("indexedDB" in window)) {
            reject(new Error("IndexedDB is not supported by this browser."));
            return;
        }

        const request = indexedDB.open(database_name, database_version);

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

            database.onversionchange = () => {
                database.close();
                database = null;
            };

            resolve(database);
        };

        request.onerror = () => {
            reject(request.error || new Error("Unable to open IndexedDB."));
        };
    });
}

function save_local_message(message) {
    return new Promise((resolve, reject) => {
        if (!database) {
            reject(new Error("The local database is not ready."));
            return;
        }

        const transaction = database.transaction(store_name, "readwrite");
        const store = transaction.objectStore(store_name);

        store.put(message);

        transaction.oncomplete = () => resolve(message);
        transaction.onerror = () => {
            reject(transaction.error || new Error("Unable to save message."));
        };
        transaction.onabort = () => {
            reject(transaction.error || new Error("Saving message was aborted."));
        };
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
        request.onerror = () => {
            reject(request.error || new Error("Unable to load local messages."));
        };
    });
}

function delete_local_message(message_id) {
    return new Promise((resolve, reject) => {
        if (!database || !message_id) {
            resolve();
            return;
        }

        const transaction = database.transaction(store_name, "readwrite");
        transaction.objectStore(store_name).delete(message_id);

        transaction.oncomplete = () => resolve();
        transaction.onerror = () => {
            reject(transaction.error || new Error("Unable to delete message."));
        };
    });
}

function get_all_messages() {
    const messages_by_id = new Map();

    for (const message of server_messages) {
        if (message?.message_id) {
            messages_by_id.set(message.message_id, message);
        }
    }

    for (const message of local_messages) {
        if (!message?.message_id) {
            continue;
        }

        const existing = messages_by_id.get(message.message_id);

        messages_by_id.set(message.message_id, {
            ...existing,
            ...message,
            status: existing?.status === "read"
                ? "read"
                : message.status || existing?.status || "pending"
        });
    }

    return [...messages_by_id.values()].sort((first, second) => {
        return new Date(first.timestamp || 0) -
            new Date(second.timestamp || 0);
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
        const empty_message = document.createElement("p");
        empty_message.className = "empty-state";
        empty_message.textContent =
            "Choose a person to start a conversation.";

        messagesElement.appendChild(empty_message);
        return;
    }

    const conversation_messages = get_conversation_messages();

    if (conversation_messages.length === 0) {
        const empty_message = document.createElement("p");
        empty_message.className = "empty-state";
        empty_message.textContent =
            `Start your private conversation with ${selected_recipient}.`;

        messagesElement.appendChild(empty_message);
        return;
    }

    for (const message of conversation_messages) {
        const message_container = document.createElement("article");

        message_container.className = "message";
        message_container.classList.add(
            message.sender === current_username ? "own-message" : "received-message"
        );

        const sender_element = document.createElement("strong");
        sender_element.textContent = message.sender === current_username
            ? "You"
            : message.sender;

        const content_element = document.createElement("p");
        content_element.textContent = message.content || "";

        const details_element = document.createElement("small");
        const message_time = message.timestamp
            ? new Date(message.timestamp).toLocaleTimeString()
            : "";

        let status_text = "";

        if (message.sender === current_username) {
            const status_labels = {
                pending: "Pending sync",
                sent: "Sent",
                delivered: "Delivered",
                read: "Read"
            };

            status_text = status_labels[message.status] ||
                (socket.connected ? "Sent" : "Pending sync");
        } else {
            status_text = "Received";
        }

        details_element.textContent = `${message_time} · ${status_text}`;

        message_container.append(
            sender_element,
            content_element,
            details_element
        );

        messagesElement.appendChild(message_container);

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

    const users = [...online_users];

    for (const message of get_all_messages()) {
        const other_username = message.sender === current_username
            ? message.recipient
            : message.sender;

        if (
            other_username &&
            other_username !== current_username &&
            !users.some((user) => user.username === other_username)
        ) {
            users.push({
                username: other_username,
                online: is_user_online(other_username)
            });
        }
    }

    users.sort((first, second) => {
        return first.username.localeCompare(second.username);
    });

    userCount.textContent = String(users.length);

    if (users.length === 0) {
        const empty_message = document.createElement("p");
        empty_message.className = "muted";
        empty_message.textContent = "No other users are available yet.";
        usersList.appendChild(empty_message);
        return;
    }

    for (const user of users) {
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
    if (!database) {
        return;
    }

    try {
        local_messages = await get_local_messages();
        update_pending_count();
        render_users();
        render_messages();
    } catch (error) {
        console.error("Unable to refresh local messages:", error);
    }
}

function update_pending_count() {
    const pending_messages = local_messages.filter((message) => {
        return (
            message.sender === current_username &&
            message.status === "pending"
        );
    });

    pendingCount.textContent = String(pending_messages.length);
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
    return new Promise(async (resolve) => {
        if (!socket.connected || !current_username) {
            resolve(false);
            return;
        }

        try {
            socket.timeout(8000).emit(
                "private-message",
                {
                    message_id: message.message_id,
                    sender: current_username,
                    recipient: message.recipient,
                    content: message.content,
                    timestamp: message.timestamp
                },
                async (error, result) => {
                    if (error || !result?.success) {
                        log_activity(
                            `Message to ${message.recipient} remains pending.`
                        );
                        resolve(false);
                        return;
                    }

                    const updated_message = {
                        ...message,
                        status: result.status || "sent"
                    };

                    await save_local_message(updated_message);
                    await refresh_local_messages();

                    log_activity(`Message sent to ${message.recipient}.`);
                    resolve(true);
                }
            );
        } catch (error) {
            console.error("Message sending failed:", error);
            resolve(false);
        }
    });
}

async function sync_pending_messages() {
    if (is_syncing) {
        return;
    }

    if (!database || !socket.connected || !current_username) {
        log_activity("Cannot sync: waiting for the connection.");
        return;
    }

    is_syncing = true;
    syncButton.disabled = true;

    try {
        local_messages = await get_local_messages();

        const pending_messages = local_messages.filter((message) => {
            return (
                message.status === "pending" &&
                message.sender === current_username
            );
        });

        if (pending_messages.length === 0) {
            log_activity("No pending messages.");
            return;
        }

        log_activity(
            `Syncing ${pending_messages.length} pending message(s).`
        );

        for (const message of pending_messages) {
            if (!socket.connected) {
                log_activity("Connection lost. Remaining messages are saved.");
                break;
            }

            await send_pending_message(message);
        }
    } catch (error) {
        console.error("Unable to sync pending messages:", error);
        log_activity("Sync failed. Messages remain saved locally.");
    } finally {
        is_syncing = false;
        syncButton.disabled = false;
        await refresh_local_messages();
    }
}

function register_current_user() {
    if (!current_username || !socket.connected) {
        return;
    }

    socket.emit("register-user", current_username, async (result) => {
        if (!result?.success) {
            log_activity(result?.message || "Unable to reconnect the user.");
            return;
        }

        online_users = normalize_users(result.users || []);
        render_users();
        update_connection_status();

        await load_server_history();
        await sync_pending_messages();
    });
}

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim().toLowerCase();

    if (!/^[a-z0-9_-]{2,30}$/.test(username)) {
        alert(
            "Use 2–30 characters: lowercase letters, numbers, underscores or hyphens."
        );
        return;
    }

    if (!socket.connected) {
        alert("Connect to the server before joining.");
        return;
    }

    if (!database) {
        alert("Local message storage is not ready. Please wait and try again.");
        return;
    }

    socket.emit("register-user", username, async (result) => {
        if (!result?.success) {
            alert(result?.message || "Unable to register.");
            return;
        }

        current_username = result.username || username;
        online_users = normalize_users(result.users || []);

        loginScreen.classList.add("hidden");
        chatScreen.classList.remove("hidden");

        log_activity(`Logged in as ${current_username}.`);

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
        alert("Join the chat before sending messages.");
        return;
    }

    if (!selected_recipient) {
        alert("Select a person before sending a private message.");
        return;
    }

    if (!content) {
        return;
    }

    if (!database) {
        alert("Local storage is not ready. Please try again.");
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
        await refresh_local_messages();

        messageInput.value = "";

        if (socket.connected) {
            await send_pending_message(message);
        } else {
            log_activity(
                `Message saved offline for ${selected_recipient}.`
            );
        }
    } catch (error) {
        console.error("Unable to save message:", error);
        alert("The message could not be saved locally.");
    }
});

syncButton.addEventListener("click", () => {
    sync_pending_messages();
});

logoutButton.addEventListener("click", () => {
    current_username = "";
    selected_recipient = "";
    online_users = [];
    server_messages = [];

    usernameInput.value = "";

    chatScreen.classList.add("hidden");
    loginScreen.classList.remove("hidden");

    recipientName.textContent = "Select a person";
    recipientStatus.textContent = "No conversation selected";

    render_messages();
    render_users();
    update_connection_status();

    log_activity("Returned to the login screen.");
});

socket.on("connect", () => {
    log_activity("Connected to the chat server.");
    update_connection_status();

    if (current_username) {
        register_current_user();
    }
});

socket.on("disconnect", () => {
    log_activity("Disconnected. Pending messages remain saved locally.");
    update_connection_status();
});

socket.on("connect_error", (error) => {
    log_activity(`Connection error: ${error.message}`);
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

    const existing_index = server_messages.findIndex(
        (item) => item.message_id === message.message_id
    );

    if (existing_index === -1) {
        server_messages.push(message);
    } else {
        server_messages[existing_index] = {
            ...server_messages[existing_index],
            ...message
        };
    }

    try {
        await save_local_message({
            ...message,
            status: message.status || "delivered"
        });

        await refresh_local_messages();
    } catch (error) {
        console.error("Unable to save received message:", error);
        render_users();
        render_messages();
    }

    log_activity(`Message received from ${message.sender}.`);
});

socket.on("message-status", async (update) => {
    if (!update?.message_id) {
        return;
    }

    const local_message = local_messages.find(
        (message) => message.message_id === update.message_id
    );

    if (local_message) {
        await save_local_message({
            ...local_message,
            status: update.status || local_message.status
        });

        await refresh_local_messages();
    }

    server_messages = server_messages.map((message) => {
        return message.message_id === update.message_id
            ? { ...message, status: update.status || message.status }
            : message;
    });

    render_messages();
});

window.addEventListener("online", () => {
    log_activity("Network connection restored.");
    update_connection_status();

    if (socket.connected) {
        sync_pending_messages();
    }
});

window.addEventListener("offline", () => {
    log_activity("Network offline. New messages will be saved locally.");
    update_connection_status();
});

navigator.serviceWorker?.addEventListener("message", (event) => {
    if (event.data?.type === "SYNC_PENDING_MESSAGES") {
        sync_pending_messages();
    }
});

async function initialize_service_worker() {
    if (!("serviceWorker" in navigator)) {
        cachedCount.textContent = "Unsupported";
        log_activity("Service Workers are not supported.");
        return;
    }

    try {
        service_worker_registration =
            await navigator.serviceWorker.register("/sw.js");

        log_activity("Service Worker registered.");

        const cache_names = await caches.keys();
        let total_cached_files = 0;

        for (const cache_name of cache_names) {
            const cache = await caches.open(cache_name);
            const keys = await cache.keys();
            total_cached_files += keys.length;
        }

        cachedCount.textContent = String(total_cached_files);
    } catch (error) {
        console.error("Service Worker registration failed:", error);
        cachedCount.textContent = "Unavailable";
        log_activity("Service Worker registration failed.");
    }
}

async function initialize_app() {
    update_connection_status();

    try {
        await open_database();
        await refresh_local_messages();
        log_activity("Local message storage is ready.");
    } catch (error) {
        console.error("IndexedDB initialization failed:", error);
        log_activity("Local message storage could not be initialized.");
    }

    await initialize_service_worker();
}

initialize_app();
