
class EventEmitter {
    constructor() {
        this.events = {};
    }

    //method registers a function to listen for a particular event.
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        // Return a function to unsubscribe.
        return () => {
            this.events[eventName] =
                this.events[eventName].filter(
                    listener => listener !== callback
                );
        };
    }

    emit(eventName, data) {
        const listeners = this.events[eventName] || [];

        listeners.forEach(function (listener) {
            listener(data);
        });
    }
}

const eventEmitter = new EventEmitter();
const tasks = [];

const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskList = document.getElementById("taskList");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const activityLog = document.getElementById("activityLog");

function logActivity(message) {
    const item = document.createElement("li");
    item.textContent =
        new Date().toLocaleTimeString() + " — " + message;

    if (activityLog.firstElementChild?.textContent ===
        "Waiting for task events...") {
        activityLog.replaceChildren();
    }

    activityLog.prepend(item);
}

// Observer 1: updates dashboard when tasks change.
eventEmitter.subscribe("tasksChanged", function () {
    totalCount.textContent = tasks.length;

    completedCount.textContent =
        tasks.filter(task => task.completed).length;
});

// Observer 2: records task events.
eventEmitter.subscribe("taskAdded", function (task) {
    logActivity('Task added: "' + task.title + '"');
});

eventEmitter.subscribe("taskCompleted", function (task) {
    logActivity('Task completed: "' + task.title + '"');
});

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskTitle.value.trim();

    if (!title) return;

    const task = {
        id: crypto.randomUUID(),
        title: title,
        completed: false
    };

    tasks.push(task);

    renderTasks();

    // Notify subscribers about the changes.
    eventEmitter.emit("taskAdded", task);
    eventEmitter.emit("tasksChanged", tasks);

    taskForm.reset();
});

function renderTasks() {
    taskList.replaceChildren();

    tasks.forEach(function (task) {
        const row = document.createElement("div");
        row.className = "task-row";

        const title = document.createElement("span");
        title.textContent =
            (task.completed ? "✓ " : "") + task.title;

        const button = document.createElement("button");
        button.type = "button";
        button.textContent =
            task.completed ? "Completed" : "Complete";
        button.disabled = task.completed;

        button.addEventListener("click", function () {
            task.completed = true;

            renderTasks();

            // Notify subscribers after completion.
            eventEmitter.emit("taskCompleted", task);
            eventEmitter.emit("tasksChanged", tasks);
        });

        row.append(title, button);
        taskList.appendChild(row);
    });
}
