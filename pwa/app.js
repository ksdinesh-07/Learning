
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const emptyMessage = document.getElementById("empty-message");
const clearCompletedButton = document.getElementById("clear-completed");

const reminderForm = document.getElementById("reminder-form");
const reminderTask = document.getElementById("reminder-task");
const reminderDelay = document.getElementById("reminder-delay");
const reminderStatus = document.getElementById("reminder-status");

const connectionStatus = document.getElementById("connection-status");
const connectionDot = document.getElementById("connection-dot");

const STORAGE_KEY = "pwa-demo-tasks";

let tasks = loadTasks();
let reminderTimer = null;
let reminderId = null;
let serviceWorkerRegistration = null;

// Load saved tasks safely.
function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    if (!Array.isArray(saved)) {
      return [];
    }

    return saved.filter(task =>
      task &&
      typeof task.id === "string" &&
      typeof task.name === "string" &&
      typeof task.completed === "boolean"
    );
  } catch (error) {
    console.error("Could not load tasks:", error);
    return [];
  }
}

// Save tasks in the browser.
function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch (error) {
    console.error("Could not save tasks:", error);
    alert("Tasks could not be saved in browser storage.");
    return false;
  }
}

// Display all tasks.
function renderTasks() {
  taskList.replaceChildren();

  tasks.forEach(task => {
    const item = document.createElement("li");
    item.className = "task-item";

    if (task.completed) {
      item.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute(
      "aria-label",
      `Mark ${task.name} as ${task.completed ? "incomplete" : "completed"}`
    );

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;

      if (saveTasks()) {
        renderTasks();
      }
    });

    const name = document.createElement("span");
    name.className = "task-name";
    name.textContent = task.name;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter(item => item.id !== task.id);

      if (reminderId === task.id) {
        cancelReminder("The task was deleted. Its reminder was cancelled.");
      }

      if (saveTasks()) {
        renderTasks();
      }
    });

    item.append(checkbox, name, deleteButton);
    taskList.appendChild(item);
  });

  const count = tasks.length;
  taskCount.textContent = `${count} ${count === 1 ? "task" : "tasks"}`;

  emptyMessage.hidden = count !== 0;

  renderReminderOptions();
}

// Add a new task.
taskForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = taskInput.value.trim();

  if (!name) {
    return;
  }

  tasks.push({
    id: crypto.randomUUID(),
    name,
    completed: false
  });

  if (saveTasks()) {
    taskInput.value = "";
    renderTasks();
    taskInput.focus();
  } else {
    tasks.pop();
  }
});

// Populate the reminder dropdown.
function renderReminderOptions() {
  const previousValue = reminderTask.value;

  reminderTask.replaceChildren();

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a task";
  reminderTask.appendChild(placeholder);

  tasks
    .filter(task => !task.completed)
    .forEach(task => {
      const option = document.createElement("option");
      option.value = task.id;
      option.textContent = task.name;
      reminderTask.appendChild(option);
    });

  if (tasks.some(task =>
    task.id === previousValue && !task.completed
  )) {
    reminderTask.value = previousValue;
  }
}

// Cancel the currently scheduled reminder.
function cancelReminder(message) {
  if (reminderTimer !== null) {
    clearTimeout(reminderTimer);
    reminderTimer = null;
  }

  reminderId = null;

  if (message) {
    reminderStatus.textContent = message;
  }
}

// Schedule a task reminder.
reminderForm.addEventListener("submit", async event => {
  event.preventDefault();

  const selectedId = reminderTask.value;
  const task = tasks.find(item =>
    item.id === selectedId && !item.completed
  );

  if (!task) {
    reminderStatus.textContent =
      "Please select an incomplete task.";
    return;
  }

  if (!("Notification" in window)) {
    reminderStatus.textContent =
      "Notifications are not supported by this browser.";
    return;
  }

  if (!("serviceWorker" in navigator)) {
    reminderStatus.textContent =
      "Service Workers are not supported by this browser.";
    return;
  }

  let permission = Notification.permission;

  if (permission === "default") {
    try {
      permission = await Notification.requestPermission();
    } catch (error) {
      reminderStatus.textContent =
        "Could not request notification permission.";
      return;
    }
  }

  if (permission !== "granted") {
    reminderStatus.textContent =
      "Allow notifications in your browser settings to continue.";
    return;
  }

  try {
    // Wait for the Service Worker to become active.
    const registration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration = registration;

    // Replace the previous reminder.
    cancelReminder();

    const delaySeconds = Number(reminderDelay.value);
    const scheduledTaskId = task.id;
    const scheduledTaskName = task.name;

    reminderId = scheduledTaskId;

    reminderStatus.textContent =
      `Reminder set for "${scheduledTaskName}" in ${delaySeconds} seconds.`;

    reminderTimer = setTimeout(async () => {
      reminderTimer = null;
      reminderId = null;

      // Do not remind the user if the task was deleted or completed.
      const currentTask = tasks.find(item =>
        item.id === scheduledTaskId && !item.completed
      );

      if (!currentTask) {
        reminderStatus.textContent =
          "The task is no longer active. Reminder skipped.";
        return;
      }

      try {
        await registration.showNotification("Task Reminder", {
          body: `It's time to work on: ${scheduledTaskName}`,
          icon: "./icon.svg",
          badge: "./icon.svg",
          tag: `task-reminder-${scheduledTaskId}`,
          data: {
            url: new URL("./index.html", location.href).href
          }
        });

        reminderStatus.textContent =
          `Notification sent for "${scheduledTaskName}".`;
      } catch (error) {
        console.error("Notification failed:", error);
        reminderStatus.textContent =
          "Could not display the notification. Check browser settings.";
      }
    }, delaySeconds * 1000);
  } catch (error) {
    console.error("Service Worker error:", error);
    reminderStatus.textContent =
      "Service Worker is not ready. Check its registration.";
  }
});

// Remove all completed tasks.
clearCompletedButton.addEventListener("click", () => {
  const completedIds = new Set(
    tasks.filter(task => task.completed).map(task => task.id)
  );

  if (completedIds.has(reminderId)) {
    cancelReminder("The completed task was removed. Reminder cancelled.");
  }

  tasks = tasks.filter(task => !task.completed);

  if (saveTasks()) {
    renderTasks();
  }
});

// Update the connection indicator.
function updateConnectionStatus() {
  const online = navigator.onLine;

  connectionStatus.textContent = online ? "Online" : "Offline";
  connectionDot.classList.toggle("online", online);
  connectionDot.classList.toggle("offline", !online);
}

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

// Register the Service Worker.
async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    console.warn("Service Workers are not supported.");
    return;
  }

  try {
    serviceWorkerRegistration =
      await navigator.serviceWorker.register("./service-worker.js");

    console.log("Service Worker registered successfully.");
  } catch (error) {
    console.error("Service Worker registration failed:", error);
  }
}

// Initialize the application.
renderTasks();
updateConnectionStatus();
registerServiceWorker();
