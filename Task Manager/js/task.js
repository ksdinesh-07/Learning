
import { getRuleEffects } from "./rule-engine.js";
import { animateRemove } from "./animate.js";

const STORAGE_KEY = "task_data";

const icon_paths = {
    drag: "./assets/drag_icon-light.svg",
    up: "./assets/angle-up.svg",
    down: "./assets/subtask_icon-light.svg",
    edit: "./assets/edit_icon-light.svg",
    delete: "./assets/delete_icon-light.svg",
    calendar: "./assets/due_date_icon.svg",
    flag: "./assets/flag_icon-light.svg",
    plus: "./assets/add_icon-light.svg"
};

let toastTimeout = null;

function showToast(message) {
    document.querySelector(".toast-notification")?.remove();
    clearTimeout(toastTimeout);

    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");

    const icon = document.createElement("div");
    icon.className = "toast-icon";
    icon.textContent = "✓";

    const text = document.createElement("div");
    text.className = "toast-message";
    text.textContent = message;

    const close = document.createElement("button");
    close.type = "button";
    close.className = "toast-close";
    close.textContent = "×";
    close.setAttribute("aria-label", "Close notification");

    close.addEventListener("click", () => {
        clearTimeout(toastTimeout);
        toast.remove();
    });

    toast.append(icon, text, close);
    document.body.appendChild(toast);

    toastTimeout = setTimeout(() => toast.remove(), 4000);
}

export function setup_task_modal() {
    const task_list = document.getElementById("task-list");
    const empty_state = document.getElementById("empty-task-state");
    const modal = document.getElementById("add_task_page");
    const form = document.getElementById("add_task_form");
    const title_input = document.getElementById("task-title");
    const description_input = document.getElementById("task-description");
    const due_date_input = document.getElementById("task-due-date");
    const priority_input = document.getElementById("task-priority");
    const status_input = document.getElementById("task-status");
    const modal_title = document.getElementById("task-modal-title");
    const task_search = document.getElementById("task-search");

    const status_filter = document.getElementById("status-filter");
    const priority_filter = document.getElementById("priority-filter");
    const sort_filter = document.getElementById("sort-filter");

    if (!task_list || !modal || !form) {
        console.error("Check the task HTML element IDs.");
        return;
    }

    let editing_task_id = null;
    let dragged_task_id = null;

    function create_id() {
        return globalThis.crypto?.randomUUID?.() ||
            `${Date.now()}-${Math.random()}`;
    }

    function get_tasks() {
        try {
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            return Array.isArray(data) ? data : [];
        } catch {
            return [];
        }
    }

    function save_tasks(tasks) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }

    function get_subtasks(task) {
        if (!Array.isArray(task.task_subtasks)) task.task_subtasks = [];
        return task.task_subtasks;
    }

    function priority_value(value) {
        const priority = String(value || "medium").toLowerCase();
        return ["high", "medium", "low"].includes(priority) ? priority : "medium";
    }

    function status_value(value) {
        const statuses = {
            todo: "Todo",
            "to do": "Todo",
            active: "In Progress",
            "in progress": "In Progress",
            "in-progress": "In Progress",
            stalled: "Stalled",
            "on hold": "Stalled",
            "on-hold": "Stalled",
            hold: "Stalled",
            completed: "Completed",
            complete: "Completed",
            done: "Completed"
        };
        return statuses[String(value || "Todo").toLowerCase()] || "Todo";
    }

    function make_icon(path, alt = "") {
        const image = document.createElement("img");
        image.src = path;
        image.alt = alt;
        image.draggable = false;
        image.addEventListener("error", () => {
            console.error("SVG could not be loaded:", path);
        });
        return image;
    }

    function make_button(class_name, path, label) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `icon-button ${class_name}`;
        button.setAttribute("aria-label", label);
        button.setAttribute("data-tooltip", label);
        button.title = label;
        button.append(make_icon(path));
        return button;
    }

    function make_badge(class_name, label, icon_path) {
        const badge = document.createElement("span");
        badge.className = class_name;
        badge.append(make_icon(icon_path));
        badge.append(document.createTextNode(label));
        return badge;
    }

    function update_task(task_id, callback) {
        const tasks = get_tasks();
        const task = tasks.find(item => String(item.task_id) === String(task_id));
        if (!task) return;
        callback(task);
        save_tasks(tasks);
        render_tasks();
    }

    function move_task(task_id, direction) {
        const tasks = get_tasks();
        const current_index = tasks.findIndex(
            task => String(task.task_id) === String(task_id)
        );
        if (current_index === -1) return;

        const new_index = current_index + direction;
        if (new_index < 0 || new_index >= tasks.length) return;

        [tasks[current_index], tasks[new_index]] =
            [tasks[new_index], tasks[current_index]];

        save_tasks(tasks);
        render_tasks();
    }

    function move_subtask(task_id, subtask_id, direction) {
        const tasks = get_tasks();
        const task = tasks.find(item => String(item.task_id) === String(task_id));
        if (!task) return;

        const subtasks = get_subtasks(task);
        const current_index = subtasks.findIndex(
            subtask => String(subtask.subtask_id) === String(subtask_id)
        );
        if (current_index === -1) return;

        const new_index = current_index + direction;
        if (new_index < 0 || new_index >= subtasks.length) return;

        [subtasks[current_index], subtasks[new_index]] =
            [subtasks[new_index], subtasks[current_index]];

        save_tasks(tasks);
        render_tasks();
    }

    function make_subtask_section(task) {
        const section = document.createElement("section");
        section.className = "task-subtasks";

        const heading = document.createElement("div");
        heading.className = "subtask-heading";

        const heading_toggle = make_button(
            "subtask-toggle-button", icon_paths.down, "Collapse subtasks"
        );
        heading_toggle.setAttribute("aria-expanded", "true");

        const count = document.createElement("span");
        count.className = "subtask-count";

        const list = document.createElement("ul");
        list.className = "subtask-list";

        const add_form = document.createElement("form");
        add_form.className = "subtask-add-form";

        const add_input = document.createElement("input");
        add_input.type = "text";
        add_input.placeholder = "Add subtask";
        add_input.maxLength = 200;
        add_input.setAttribute("aria-label", "Add subtask");

        const add_button = document.createElement("button");
        add_button.type = "submit";
        add_button.className = "add-subtask-button";
        add_button.setAttribute("aria-label", "Add subtask");
        add_button.append(make_icon(icon_paths.plus));

        add_form.append(add_input, add_button);

        let section_collapsed = false;

        function update_count() {
            const subtasks = get_subtasks(task);
            count.textContent = `Subtasks (${subtasks.length})`;
            count.title = `${subtasks.filter(item => item.is_completed).length} completed`;
        }

        function set_section_collapsed(collapsed) {
            section_collapsed = collapsed;
            list.hidden = collapsed;
            add_form.hidden = collapsed;

            const icon_path = collapsed ? icon_paths.up : icon_paths.down;
            const label = collapsed ? "Expand subtasks" : "Collapse subtasks";

            const img = heading_toggle.querySelector("img");
            if (img) img.src = icon_path;

            heading_toggle.setAttribute("aria-label", label);
            heading_toggle.setAttribute("data-tooltip", label);
            heading_toggle.title = label;
            heading_toggle.setAttribute("aria-expanded", String(!collapsed));
        }

        heading_toggle.addEventListener("click", () => {
            set_section_collapsed(!section_collapsed);
        });

        function make_subtask_row(subtask) {
            const item = document.createElement("li");
            item.className = "subtask-item";

            const content = document.createElement("div");
            content.className = "subtask-content";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = Boolean(subtask.is_completed);
            checkbox.setAttribute(
                "aria-label",
                `Complete ${subtask.subtask_title || "subtask"}`
            );

            const text = document.createElement("span");
            text.className = "subtask-text";
            text.textContent = subtask.subtask_title || "";

            if (subtask.is_completed) text.classList.add("completed");

            checkbox.addEventListener("change", () => {
                update_task(task.task_id, current_task => {
                    const target = get_subtasks(current_task).find(
                        entry => String(entry.subtask_id) === String(subtask.subtask_id)
                    );
                    if (target) target.is_completed = checkbox.checked;
                });
            });

            content.append(checkbox, text);

            const actions = document.createElement("div");
            actions.className = "subtask-actions";

            const up_button = make_button("subtask-move-up", icon_paths.up, "Move up");
            up_button.addEventListener("click", () => {
                move_subtask(task.task_id, subtask.subtask_id, -1);
            });

            const down_button = make_button("subtask-move-down", icon_paths.down, "Move down");
            down_button.addEventListener("click", () => {
                move_subtask(task.task_id, subtask.subtask_id, 1);
            });

            const edit_button = make_button("edit-subtask-button", icon_paths.edit, "Edit");
            edit_button.addEventListener("click", () => {
                const new_title = window.prompt("Edit subtask", subtask.subtask_title || "");
                if (new_title === null || !new_title.trim()) return;

                const updated_title = new_title.trim();
                const current_tasks = get_tasks();
                const current_task = current_tasks.find(
                    entry => String(entry.task_id) === String(task.task_id)
                );
                const target = current_task
                    ? get_subtasks(current_task).find(
                        entry => String(entry.subtask_id) === String(subtask.subtask_id)
                    )
                    : null;
                if (!target) return;

                update_task(task.task_id, current_task => {
                    const target_subtask = get_subtasks(current_task).find(
                        entry => String(entry.subtask_id) === String(subtask.subtask_id)
                    );
                    if (target_subtask) target_subtask.subtask_title = updated_title;
                });

                showToast("All set! Your changes have been saved successfully!");
            });

            const delete_button = make_button("delete-subtask-button", icon_paths.delete, "Delete");
            delete_button.addEventListener("click", () => {
                openDeleteConfirmation(
                    subtask.subtask_title || "Untitled subtask",
                    "subtask",
                    () => {
                        const current_tasks = get_tasks();
                        const current_task = current_tasks.find(
                            entry => String(entry.task_id) === String(task.task_id)
                        );
                        if (!current_task) return;

                        const exists = get_subtasks(current_task).some(
                            entry => String(entry.subtask_id) === String(subtask.subtask_id)
                        );
                        if (!exists) return;

                        update_task(task.task_id, current_task => {
                            current_task.task_subtasks = get_subtasks(current_task).filter(
                                entry => String(entry.subtask_id) !== String(subtask.subtask_id)
                            );
                        });

                        showToast("Done! Your item has been removed.");
                    }
                );
            });

            actions.append(up_button, down_button, edit_button, delete_button);
            item.append(content, actions);
            return item;
        }

        function render_subtasks() {
            list.replaceChildren();
            get_subtasks(task).forEach(subtask => {
                list.append(make_subtask_row(subtask));
            });
            update_count();
        }

        add_form.addEventListener("submit", event => {
            event.preventDefault();
            const value = add_input.value.trim();
            if (!value) { add_input.focus(); return; }

            update_task(task.task_id, current_task => {
                get_subtasks(current_task).push({
                    subtask_id: create_id(),
                    subtask_title: value,
                    is_completed: false
                });
            });

            add_input.value = "";
            showToast(`Nice work! Your new subtask "${value}" is now in the list!`);
        });

        heading.append(heading_toggle, count);
        section.append(heading, add_form, list);
        render_subtasks();

        return {
            element: section,
            set_collapsed: set_section_collapsed,
            is_collapsed: () => section_collapsed
        };
    }

    function make_task_card(task) {
        const card = document.createElement("article");
        card.className = "task-card";
        card.dataset.taskId = String(task.task_id);

        const header = document.createElement("div");
        header.className = "task-card-header";

        const heading_group = document.createElement("div");
        heading_group.className = "task-heading-group";

        const drag_handle = make_button("drag-handle", icon_paths.drag, "Drag to reorder task");
        drag_handle.draggable = true;

        const title = document.createElement("h3");
        title.className = "task-title";
        title.textContent = task.task_title || "Untitled task";

        heading_group.append(drag_handle, title);

        const actions = document.createElement("div");
        actions.className = "task-card-actions";

        const up_button = make_button("task-move-up", icon_paths.up, "Move up");
        up_button.addEventListener("click", () => move_task(task.task_id, -1));

        const down_button = make_button("task-move-down", icon_paths.down, "Move down");
        down_button.addEventListener("click", () => move_task(task.task_id, 1));

        const edit_button = make_button("edit-task-button", icon_paths.edit, "Edit");
        edit_button.addEventListener("click", () => open_edit_modal(task));

        const delete_button = make_button("delete-task-button", icon_paths.delete, "Delete");
        delete_button.addEventListener("click", () => {
            openDeleteConfirmation(
                task.task_title || "Untitled task",
                "task",
                () => {
                    animateRemove(card, () => {
                        const tasks = get_tasks().filter(
                            entry => String(entry.task_id) !== String(task.task_id)
                        );
                        save_tasks(tasks);
                        render_tasks();
                        showToast("Done! Your item has been removed.");
                    });
                }
            );
        });

        actions.append(up_button, down_button, edit_button, delete_button);
        header.append(heading_group, actions);

        const description = document.createElement("p");
        description.className = "task-description";
        description.textContent = task.task_description || "";

        const badges = document.createElement("div");
        badges.className = "task-badges";

        const priority = priority_value(task.task_priority);
        badges.append(
            make_badge(
                `priority-badge ${priority}`,
                priority[0].toUpperCase() + priority.slice(1),
                icon_paths.flag
            )
        );

        if (task.task_due_date) {
            const date_parts = task.task_due_date.split("-");
            const formatted_date = date_parts.length === 3
                ? `${date_parts[2]}/${date_parts[1]}/${date_parts[0]}`
                : task.task_due_date;

            badges.append(make_badge("due-date-badge", formatted_date, icon_paths.calendar));
        }

        const status_row = document.createElement("div");
        status_row.className = "task-status-row";

        const status_label = document.createElement("label");
        status_label.textContent = "Status";

        const status_select = document.createElement("select");
        status_select.className = "task-status-select";
        status_select.setAttribute("aria-label", "Task status");

        ["Todo", "In Progress", "Stalled", "Completed"].forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            status_select.append(option);
        });

        status_select.value = status_value(task.task_status);

        if (status_select.value === "Completed") {
            card.classList.add("is-completed");
        }

        status_select.addEventListener("change", () => {
            const new_status = status_select.value;
            card.classList.toggle("is-completed", new_status === "Completed");

            update_task(task.task_id, current_task => {
                current_task.task_status = new_status;
                if (new_status === "Completed") {
                    current_task.completed_at =
                        current_task.completed_at || new Date().toISOString();
                } else {
                    current_task.completed_at = null;
                }
            });
        });

        status_row.append(status_label, status_select);

        const subtask_section = make_subtask_section(task);

        card.append(header, description, badges, status_row, subtask_section.element);

        // Apply custom rules
        const effects = getRuleEffects(task, "tasks");

        if (effects.highlight) {
            card.style.background = effects.highlight;
            card.dataset.ruleHighlight = effects.highlight;
        }

        if (effects.badge) {
            const rule_badge = document.createElement("span");
            rule_badge.className = `rule-badge rule-badge-${effects.badge}`;
            rule_badge.textContent = effects.badge.toUpperCase();
            heading_group.append(rule_badge);
        }

        // Drag-and-drop
        drag_handle.addEventListener("dragstart", event => {
            dragged_task_id = String(task.task_id);
            card.classList.add("is-dragging");
            event.dataTransfer.setData("text/plain", dragged_task_id);
            event.dataTransfer.effectAllowed = "move";
        });

        drag_handle.addEventListener("dragend", () => {
            dragged_task_id = null;
            task_list.querySelectorAll(".task-card").forEach(element => {
                element.classList.remove("is-dragging", "drag-over");
            });
        });

        card.addEventListener("dragover", event => {
            event.preventDefault();
            if (dragged_task_id !== String(task.task_id)) {
                card.classList.add("drag-over");
                event.dataTransfer.dropEffect = "move";
            }
        });

        card.addEventListener("dragleave", event => {
            if (!card.contains(event.relatedTarget)) {
                card.classList.remove("drag-over");
            }
        });

        card.addEventListener("drop", event => {
            event.preventDefault();
            card.classList.remove("drag-over");

            const source_id = event.dataTransfer.getData("text/plain");
            const target_id = String(task.task_id);
            if (!source_id || source_id === target_id) return;

            const tasks = get_tasks();
            const from = tasks.findIndex(entry => String(entry.task_id) === source_id);
            const to = tasks.findIndex(entry => String(entry.task_id) === target_id);
            if (from === -1 || to === -1) return;

            const [moved] = tasks.splice(from, 1);
            tasks.splice(to, 0, moved);

            save_tasks(tasks);
            render_tasks();
        });

        return card;
    }

    function render_tasks() {
        const all_tasks = get_tasks();
        const search_text = (task_search?.value || "").trim().toLowerCase();
        const selected_status = status_filter?.value || "all";
        const selected_priority = priority_filter?.value || "all";

        let filtered_tasks = all_tasks.filter(task => {
            const title = String(task.task_title || "").toLowerCase();
            const description = String(task.task_description || "").toLowerCase();
            const matches_search = title.includes(search_text) || description.includes(search_text);

            const raw_status = String(task.task_status || "Todo").trim().toLowerCase();
            const normalized_status = {
                "todo": "todo",
                "to do": "todo",
                "in progress": "in-progress",
                "in-progress": "in-progress",
                "active": "in-progress",
                "stalled": "stalled",
                "on hold": "stalled",
                "on-hold": "stalled",
                "hold": "stalled",
                "completed": "done",
                "done": "done"
            }[raw_status] || "todo";

            const matches_status = selected_status === "all" || normalized_status === selected_status;
            const task_priority = priority_value(task.task_priority);
            const matches_priority = selected_priority === "all" || task_priority === selected_priority;

            return matches_search && matches_status && matches_priority;
        });

        const sort_by = sort_filter?.value || "created-at";
        const priority_order = { high: 1, medium: 2, low: 3 };

        filtered_tasks.sort((a, b) => {
            switch (sort_by) {
                case "due-date": {
                    const date_a = a.task_due_date || "9999-12-31";
                    const date_b = b.task_due_date || "9999-12-31";
                    return date_a.localeCompare(date_b);
                }
                case "priority":
                    return priority_order[priority_value(a.task_priority)] -
                        priority_order[priority_value(b.task_priority)];
                case "ascending":
                    return (a.task_title || "").localeCompare(b.task_title || "", undefined, { sensitivity: "base" });
                case "descending":
                    return (b.task_title || "").localeCompare(a.task_title || "", undefined, { sensitivity: "base" });
                case "created-at":
                default:
                    return String(b.created_at || "").localeCompare(String(a.created_at || ""));
            }
        });

        task_list.replaceChildren();

        if (empty_state) {
            empty_state.hidden = filtered_tasks.length > 0;
            if (all_tasks.length === 0) {
                empty_state.textContent = "No tasks yet. Add your first task!";
            } else if (search_text && filtered_tasks.length === 0) {
                empty_state.textContent = "No tasks found. Try a different search.";
            } else {
                empty_state.textContent = "No tasks match your selected filters.";
            }
        }

        filtered_tasks.forEach(task => {
            task_list.append(make_task_card(task));
        });
    }

    function open_add_modal() {
        editing_task_id = null;
        form.reset();
        if (modal_title) modal_title.textContent = "Add Task";
        if (priority_input) priority_input.value = "medium";
        if (status_input) status_input.value = "Todo";
        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
        title_input?.focus();
    }

    function open_edit_modal(task) {
        editing_task_id = task.task_id;
        title_input.value = task.task_title || "";
        description_input.value = task.task_description || "";
        due_date_input.value = task.task_due_date || "";
        priority_input.value = priority_value(task.task_priority);
        status_input.value = status_value(task.task_status);

        if (modal_title) modal_title.textContent = "Edit Task";
        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
        title_input.focus();
    }

    function close_modal() {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        form.reset();
        editing_task_id = null;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();

        const task_title = title_input.value.trim();
        if (!task_title) { title_input.focus(); return; }

        const task = {
            task_title,
            task_description: description_input.value.trim(),
            task_due_date: due_date_input.value,
            task_priority: priority_value(priority_input.value),
            task_status: status_value(status_input.value),
            completed_at: status_value(status_input.value) === "Completed"
                ? new Date().toISOString()
                : null
        };

        const tasks = get_tasks();
        const is_editing = editing_task_id !== null;

        if (is_editing) {
            const index = tasks.findIndex(
                entry => String(entry.task_id) === String(editing_task_id)
            );
            if (index !== -1) {
                tasks[index] = { ...tasks[index], ...task };
            } else {
                return;
            }
        } else {
            tasks.push({
                task_id: create_id(),
                ...task,
                created_at: new Date().toISOString(),
                task_subtasks: []
            });
        }

        save_tasks(tasks);
        close_modal();
        render_tasks();

        showToast(is_editing
            ? "All set! Your changes have been saved successfully!"
            : `Nice work! Your new task "${task.task_title}" is now in the list!`);
    });

    document.querySelector(".add-task-button")?.addEventListener("click", open_add_modal);
    document.getElementById("close-task-modal")?.addEventListener("click", close_modal);
    document.getElementById("cancel-task-modal")?.addEventListener("click", close_modal);

    modal.addEventListener("click", event => {
        if (event.target === modal) close_modal();
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.style.display !== "none") {
            close_modal();
        }
    });

    task_search?.addEventListener("input", render_tasks);
    status_filter?.addEventListener("change", render_tasks);
    priority_filter?.addEventListener("change", render_tasks);
    sort_filter?.addEventListener("change", render_tasks);

    render_tasks();
}

/* DELETE CONFIRMATION POPUP */
const deleteModal = document.getElementById("delete-confirm-modal");
const deleteMessage = document.getElementById("delete-confirm-message");
const deleteConfirmBtn = document.getElementById("delete-confirm-btn");
const deleteCancelBtn = document.getElementById("delete-cancel-btn");
const deleteCloseBtn = document.getElementById("delete-modal-close");

let pendingDeleteAction = null;

function openDeleteConfirmation(itemName, itemType, deleteAction) {
    if (!deleteModal || !deleteMessage) {
        console.error("Delete confirmation modal is missing from tasks.html");
        return;
    }

    deleteMessage.replaceChildren();
    deleteMessage.append(document.createTextNode("Are you sure you want to delete "));

    const nameElement = document.createElement("strong");
    nameElement.textContent = itemName;

    deleteMessage.append(nameElement, document.createTextNode(` (${itemType})?`));
    pendingDeleteAction = deleteAction;
    deleteModal.style.display = "flex";
}

function closeDeleteConfirmation() {
    if (deleteModal) deleteModal.style.display = "none";
    pendingDeleteAction = null;
}

deleteCloseBtn?.addEventListener("click", closeDeleteConfirmation);
deleteCancelBtn?.addEventListener("click", closeDeleteConfirmation);

deleteModal?.addEventListener("click", event => {
    if (event.target === deleteModal) closeDeleteConfirmation();
});

deleteConfirmBtn?.addEventListener("click", () => {
    if (typeof pendingDeleteAction !== "function") return;
    const action = pendingDeleteAction;
    closeDeleteConfirmation();
    action();
});