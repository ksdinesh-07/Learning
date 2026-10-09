const STORAGE_KEY = "tasks";

const PRIORITY_ORDER = { high: 0, medium: 1, low: 2 };

const STATUS_LABELS = {
    "todo": "Todo",
    "in-progress": "In progress",
    "on-hold": "On hold",
    "completed": "Completed"
};

let tasks = load_tasks();

function load_tasks() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

function save_tasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function escape_html(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}

// yyyy-mm-dd -> dd-mm-yyyy
function format_date(value) {
    const [year, month, day] = value.split("-");
    return `${day}-${month}-${year}`;
}

function get_visible_tasks() {
    const status = document.getElementById("status-filter").value;
    const priority = document.getElementById("priority-filter").value;
    const sort = document.getElementById("sort-filter").value;
    const query = document.getElementById("task-search").value.trim().toLowerCase();

    const list = tasks.filter((task) => {
        const matches_status = status === "all" || task.status === status;
        const matches_priority = priority === "all" || task.priority === priority;
        const matches_search =
            task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query);

        return matches_status && matches_priority && matches_search;
    });

    list.sort((a, b) => {
        switch (sort) {
            case "due-date":
                return a.due_date.localeCompare(b.due_date);
            case "priority":
                return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
            case "created-at":
                return b.created_at - a.created_at;
            case "ascending":
                return a.title.localeCompare(b.title);
            case "descending":
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });

    return list;
}

function render_tasks() {
    const task_list = document.getElementById("task-list");
    const empty_state = document.getElementById("empty-task-state");
    const visible = get_visible_tasks();

    empty_state.style.display = visible.length === 0 ? "" : "none";

    task_list.innerHTML = visible
        .map((task) => `
            <article class="task-card" data-id="${task.id}">
                <div class="task-card-top">
                    <h3 class="task-card-title">${escape_html(task.title)}</h3>
                    <span class="badge priority-${task.priority}">${task.priority}</span>
                </div>

                ${task.description
                    ? `<p class="task-card-description">${escape_html(task.description)}</p>`
                    : ""}

                <div class="task-card-bottom">
                    <span class="task-card-due">Due: ${format_date(task.due_date)}</span>
                    <span class="badge status-${task.status}">${STATUS_LABELS[task.status]}</span>
                </div>
            </article>
        `)
        .join("");
}

export function setup_task_modal() {
    const add_task_button = document.querySelector(".add-task-button");
    const add_task_page = document.getElementById("add_task_page");
    const close_task_modal = document.getElementById("close-task-modal");
    const cancel_task_modal = document.getElementById("cancel-task-modal");
    const add_task_form = document.getElementById("add_task_form");

    const task_due_date = document.getElementById("task-due-date");
    const date_icon = document.getElementById("date-icon");

    // Open the native date picker from the custom calendar icon
    date_icon.addEventListener("click", () => {
        task_due_date.type = "date";
        task_due_date.showPicker();
    });

    function clearErrors() {
        add_task_form
            .querySelectorAll(".form_group.has-error")
            .forEach((group) => group.classList.remove("has-error"));
    }

    function reset_form() {
        add_task_form.reset();                 // Status returns to Todo
        task_due_date.type = "text";           // Back to the floating-label state
        add_task_form
            .querySelectorAll("select.has-value")
            .forEach((select) => select.classList.remove("has-value"));
        clearErrors();
    }

    function close_modal() {
        add_task_page.classList.remove("show");
    }

    // Open modal
    add_task_button.addEventListener("click", () => {
        add_task_page.classList.add("show");
    });

    // Close (X button)
    close_task_modal.addEventListener("click", close_modal);

    // Cancel: close and reset
    cancel_task_modal.addEventListener("click", () => {
        close_modal();
        reset_form();
    });

    // Close when clicking the overlay background
    add_task_page.addEventListener("click", (event) => {
        if (event.target === add_task_page) {
            close_modal();
        }
    });

    // Close with the Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            close_modal();
        }
    });

    // --- Validation: clear the error as soon as the user fixes the field ---

    const requiredInputs = [
        document.getElementById("task-title"),
        document.getElementById("task-due-date"),
        document.getElementById("task-priority")
    ];

    requiredInputs.forEach((input) => {
        const event_name = input.tagName === "SELECT" ? "change" : "input";

        input.addEventListener(event_name, () => {
            if (input.value.trim() !== "") {
                input.closest(".form_group").classList.remove("has-error");
                if (input.tagName === "SELECT") {
                    input.classList.add("has-value");
                }
            }
        });
    });

    // --- Submit: validate, save, render ---

    add_task_form.addEventListener("submit", (event) => {
        event.preventDefault();

        const titleInput = document.getElementById("task-title");
        const dueDateInput = document.getElementById("task-due-date");
        const priorityInput = document.getElementById("task-priority");

        let isValid = true;

        requiredInputs.forEach((input) => {
            if (input.value.trim() === "") {
                input.closest(".form_group").classList.add("has-error");
                isValid = false;
            }
        });

        if (!isValid) return;

        const new_task = {
            id: crypto.randomUUID(),
            title: titleInput.value.trim(),
            description: document.getElementById("task-description").value.trim(),
            due_date: dueDateInput.value,          // yyyy-mm-dd
            priority: priorityInput.value,
            status: document.getElementById("task-status").value || "todo",
            created_at: Date.now()
        };

        tasks.push(new_task);
        save_tasks();
        render_tasks();

        reset_form();
        close_modal();
    });

    // --- Filters, sort, search ---

    ["status-filter", "priority-filter", "sort-filter"].forEach((id) => {
        document.getElementById(id).addEventListener("change", render_tasks);
    });

    document.getElementById("task-search").addEventListener("input", render_tasks);

    // Show saved tasks on page load
    render_tasks();
}