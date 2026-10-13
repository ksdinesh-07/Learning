
function createTask(type, title) {
    const common = {
        id: crypto.randomUUID(),
        title: title,
        createdAt: new Date().toLocaleString()
    };

    switch (type) {
        case "task":
            return {
                ...common,
                type: "Regular Task",
                completed: false
            };

        case "habit":
            return {
                ...common,
                type: "Daily Habit",
                frequency: "Every day",
                completed: false
            };

        case "reminder":
            return {
                ...common,
                type: "Reminder",
                reminderTime: "Not scheduled"
            };

        default:
            throw new Error("Unknown task type");
    }
}

const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskType = document.getElementById("taskType");
const taskList = document.getElementById("taskList");

const createdTasks = [];

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskTitle.value.trim();

    if (!title) return;

    // Factory creates the correct object.
    const task = createTask(taskType.value, title);

    createdTasks.push(task);

    renderTasks();

    console.log("Factory created:", task);

    taskForm.reset();
});

function renderTasks() {
    taskList.replaceChildren();

    createdTasks.forEach(function (task) {
        const card = document.createElement("article");
        card.className = "task-item";

        const heading = document.createElement("h3");
        heading.textContent = task.title;

        const type = document.createElement("span");
        type.className = "task-type";
        type.textContent = task.type;

        const details = document.createElement("p");
        details.textContent =
            task.frequency
                ? "Frequency: " + task.frequency
                : task.reminderTime
                    ? "Reminder: " + task.reminderTime
                    : "Completed: No";

        const date = document.createElement("small");
        date.textContent = "Created: " + task.createdAt;

        card.append(heading, type, details, date);
        taskList.appendChild(card);
    });
}
