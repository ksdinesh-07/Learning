const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const networkStatus = document.getElementById("network-status");
const swStatus = document.getElementById("sw-status");

function updateNetworkStatus() {
    networkStatus.textContent = navigator.onLine
        ? "Online — Internet connection may be available"
        : "Offline — Running with cached resources";
}

window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);

updateNetworkStatus();

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = taskInput.value.trim();
    if (!task) return;

    const item = document.createElement("li");
    item.textContent = task;
    taskList.appendChild(item);

    taskInput.value = "";
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
        .then(() => {
            swStatus.textContent = "Service Worker: registered";
        })
        .catch((error) => {
            swStatus.textContent = "Service Worker registration failed";
            console.error(error);
        });
} else {
    swStatus.textContent = "Service Workers are not supported";
}