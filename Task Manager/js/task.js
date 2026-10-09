export function setup_task_modal() {

    // Grab all the elements
    const add_task_button = document.querySelector(".add-task-button");
    const add_task_page = document.getElementById("add_task_page");
    const close_task_modal = document.getElementById("close-task-modal");
    const cancel_task_modal = document.getElementById("cancel-task-modal");
    const add_task_form = document.getElementById("add_task_form");


    // store
    const storage_key = "task_data";
    function get_tasks() {
        return JSON.parse(localStorage.getItem(storage_key)) || [];
    }

    function save_tasks(task_data) {
        localStorage.setItem(storage_key, JSON.stringify(task_data));
    }

    function render_tasks() {
        const task_list = document.getElementById("task-list");
        const empty_task_state = document.getElementById("empty-task-state");

        const task_data = get_tasks();

        task_list.replaceChildren();

        empty_task_state.hidden = task_data.length > 0;

        task_data.forEach(task => {
            const task_card = document.createElement("article");
            task_card.className = "task-card";

            const task_header = document.createElement("div");
            task_header.className = "task-card-header";

            const task_title = document.createElement("h3");
            task_title.textContent = task.task_title;

            const task_description = document.createElement("p");
            task_description.textContent =task.task_description || "No description provided";

            const task_badges = document.createElement("div");
            task_badges.className = "task-badges";

            const priority_badge = document.createElement("span");
            priority_badge.className = `priority-badge ${task.task_priority}`;
            priority_badge.textContent = task.task_priority;

            const due_date_badge = document.createElement("span");
            due_date_badge.className = "due-date-badge";
            due_date_badge.textContent = task.task_due_date;

            const status_select = document.createElement("select");
            status_select.className = "task-status-select";

            const status_options = [
                { value: "todo", label: "To Do" },
                { value: "in-progress", label: "In Progress" },
                { value: "done", label: "Completed" }
            ];

            status_options.forEach(option_data => {
                const option = document.createElement("option");
                option.value = option_data.value;
                option.textContent = option_data.label;
                option.selected = task.task_status === option_data.value;

                status_select.append(option);
            });

            status_select.addEventListener("change", () => {
                const tasks = get_tasks();
                const selected_task = tasks.find(
                    item => item.task_id === task.task_id
                );

                if (selected_task) {
                    selected_task.task_status = status_select.value;
                    save_tasks(tasks);
                }
            });

            task_header.append(task_title);
            task_badges.append(priority_badge, due_date_badge);

            task_card.append(
                task_header,
                task_description,
                task_badges,
                status_select
            );

            task_list.append(task_card);
        });
    }

    // Open / Close Modal

    // Open the modal when the add task button is clicked
    add_task_button.addEventListener("click", () => {
        add_task_page.classList.add("show");
    });

    // Close the modal when the X button is clicked
    close_task_modal.addEventListener("click", () => {
        add_task_page.classList.remove("show");
    });

    // Close + reset the form when cancel is clicked
    cancel_task_modal.addEventListener("click", () => {
        add_task_page.classList.remove("show");
        add_task_form.reset();
        clearErrors();
    });

    // Close the modal when clicking on the dark overlay background
    add_task_page.addEventListener("click", (event) => {
        if (event.target === add_task_page) {
            add_task_page.classList.remove("show");
        }
    });


    // Validation Helpers

    // Remove the error state from every form group
    function clearErrors() {
        const errorGroups = add_task_form.querySelectorAll('.form_group.has-error');
        errorGroups.forEach(group => group.classList.remove('has-error'));
    }

    // Inputs that require validation
    const requiredInputs = [
        document.getElementById("task-title"),
        document.getElementById("task-due-date"),
        document.getElementById("task-priority")
    ];

    // Clear the error state as soon as the user fills a field
    requiredInputs.forEach(input => {
        if (input.tagName === 'SELECT') {
            input.addEventListener('change', () => {
                if (input.value !== '') {
                    input.closest('.form_group').classList.remove('has-error');
                    input.classList.add('has-value'); // for the floating label
                }
            });
        } else {
            input.addEventListener('input', () => {
                if (input.value.trim() !== '') {
                    input.closest('.form_group').classList.remove('has-error');
                }
            });
        }
    });


    // --- Form Submission ---

    add_task_form.addEventListener("submit", (event) => {
        event.preventDefault();

        let isValid = true;

        const titleInput = document.getElementById("task-title");
        const dueDateInput = document.getElementById("task-due-date");
        const priorityInput = document.getElementById("task-priority");

        // Title is required
        if (titleInput.value.trim() === '') {
            titleInput.closest('.form_group').classList.add('has-error');
            isValid = false;
        }

        // Due date is required
        if (dueDateInput.value.trim() === '') {
            dueDateInput.closest('.form_group').classList.add('has-error');
            isValid = false;
        }

        // Priority is required
        if (priorityInput.value === '') {
            priorityInput.closest('.form_group').classList.add('has-error');
            isValid = false;
        }

        // Stop here if anything is missing
        if (!isValid) {
            return;
        }

        // -- the task object ---

        const task_description = document.getElementById("task-description").value;
        const task_status = document.getElementById("task-status").value;
        const new_task = {
            task_id: crypto.randomUUID(),
            task_title: titleInput.value.trim(),
            task_description,
            task_due_date: dueDateInput.value,
            task_priority: priorityInput.value,
            task_status,
            created_at: new Date().toISOString()
        };

        const task_data = get_tasks();
        task_data.push(new_task);
        save_tasks(task_data);
        console.log(task_data);        
            
        render_tasks();

        // Reset the form, clear errors, and close the modal
        add_task_form.reset();
        clearErrors();
        add_task_page.classList.remove("show");
    });

}