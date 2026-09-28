const todo_form = document.getElementById("todo_form");
const todo_input = document.getElementById("todo_input");
const todo_list = document.getElementById("todo_list");

let todos = [];

function add_todo(task) {
    const todo = {
        id: Date.now(),
        title: task,
        completed: false
    };
    todos.push(todo);
    render_todos();
}

function render_todos() {
    todo_list.innerHTML = "";
    todos.forEach((todo) => {
        const list_item = document.createElement("li");
        list_item.className = "todo_item";

        const todo_content = document.createElement("div");
        todo_content.className = "todo_content";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        const todo_text = document.createElement("span");
        todo_text.className = "todo_text";
        todo_text.textContent = todo.title;

        if (todo.completed) {
            todo_text.classList.add("completed");
        }
        checkbox.addEventListener("change", () => {
            toggle_todo(todo.id);
        });

        todo_content.appendChild(checkbox);
        todo_content.appendChild(todo_text);

        const delete_button = document.createElement("button");
        delete_button.className = "delete_button";
        delete_button.textContent = "Delete";

        delete_button.addEventListener("click", () => {
            delete_todo(todo.id);
        });

        list_item.appendChild(todo_content);
        list_item.appendChild(delete_button);

        todo_list.appendChild(list_item);
    });
}

function toggle_todo(todo_id) {
    const todo = todos.find((item) => item.id === todo_id);
    if (!todo) {
        return;
    }
    todo.completed = !todo.completed;
    render_todos();
}

function delete_todo(todo_id) {
    todos = todos.filter((todo) => todo.id !== todo_id);
    render_todos();
}

todo_form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = todo_input.value.trim();
    if (task === "") {
        return;
    }
    add_todo(task);
    todo_input.value = "";
    todo_input.focus();
});


render_todos();