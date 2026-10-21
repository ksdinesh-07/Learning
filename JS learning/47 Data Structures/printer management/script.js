
const print_queue = [];
const undo_stack = [];
const job_ids = new Set();
const print_jobs = new Map();

let next_job_id = 1;

const user_name_input = document.getElementById("user_name");
const document_name_input = document.getElementById("document_name");
const add_button = document.getElementById("add_button");
const print_button = document.getElementById("print_button");
const undo_button = document.getElementById("undo_button");
const pending_jobs = document.getElementById("pending_jobs");
const completed_jobs = document.getElementById("completed_jobs");
const message = document.getElementById("message");

function display_jobs() {
    pending_jobs.innerHTML = "";
    completed_jobs.innerHTML = "";

    for (const job_id of print_queue) {
        const job = print_jobs.get(job_id);
        const item = document.createElement("li");

        item.textContent = `Job ${job.id}: ${job.document_name} — ${job.user_name} (${job.status})`;

        pending_jobs.appendChild(item);
    }

    for (const [job_id, job] of print_jobs) {
        if (job.status === "Completed") {
            const item = document.createElement("li");

            item.textContent = `Job ${job_id}: ${job.document_name} — ${job.user_name} (${job.status})`;

            completed_jobs.appendChild(item);
        }
    }
}

add_button.addEventListener("click", function () {
    const user_name = user_name_input.value.trim();
    const document_name = document_name_input.value.trim();

    if (!user_name || !document_name) {
        message.textContent = "Please enter both fields.";
        return;
    }

    const job = {
        id: next_job_id++,
        user_name: user_name,
        document_name: document_name,
        status: "Pending"
    };

    if (job_ids.has(job.id)) {
        message.textContent = "Duplicate job ID.";
        return;
    }

    job_ids.add(job.id);
    print_jobs.set(job.id, job);
    print_queue.push(job.id);
    undo_stack.push(job.id);

    message.textContent = `Job ${job.id} added successfully.`;

    user_name_input.value = "";
    document_name_input.value = "";

    display_jobs();
});

print_button.addEventListener("click", function () {
    if (print_queue.length === 0) {
        message.textContent = "No pending jobs to print.";
        return;
    }

    const job_id = print_queue.shift();
    const job = print_jobs.get(job_id);

    job.status = "Completed";

    message.textContent = `Printing completed: ${job.document_name}`;

    display_jobs();
});

undo_button.addEventListener("click", function () {
    if (undo_stack.length === 0) {
        message.textContent = "No job available to undo.";
        return;
    }

    const job_id = undo_stack.pop();
    const job = print_jobs.get(job_id);

    if (!job || job.status !== "Pending") {
        message.textContent = "The latest addition cannot be undone.";
        return;
    }

    const queue_index = print_queue.indexOf(job_id);

    if (queue_index !== -1) {
        print_queue.splice(queue_index, 1);
    }

    print_jobs.delete(job_id);
    job_ids.delete(job_id);

    message.textContent = `Job ${job_id} removed successfully.`;

    display_jobs();
});
