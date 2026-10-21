
"use strict";

// LINKED LIST: Recent files

class FileNode {
    constructor(name) {
        this.name = name;
        this.next = null;
    }
}

class RecentFilesList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(name) {
        const node = new FileNode(name);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    remove_latest() {
        if (this.head === null) {
            return false;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return true;
        }

        let current = this.head;

        while (current.next !== this.tail) {
            current = current.next;
        }

        current.next = null;
        this.tail = current;

        return true;
    }

    get_all() {
        const files = [];
        let current = this.head;

        while (current !== null) {
            files.push(current.name);
            current = current.next;
        }

        return files;
    }
}

const recent_files = new RecentFilesList();

function render_recent_files() {
    const container = document.getElementById("recent_files");
    container.replaceChildren();

    const files = recent_files.get_all();

    if (files.length === 0) {
        container.textContent = "No recent files.";
        return;
    }

    files.forEach((name, index) => {
        const item = document.createElement("span");
        item.className = "file-node";
        item.textContent = name;

        container.appendChild(item);

        if (index < files.length - 1) {
            container.append(" → ");
        }
    });

    container.append(" → null");
}

document.getElementById("open_file_btn").addEventListener("click", () => {
    const input = document.getElementById("recent_file_input");
    const name = input.value.trim();

    if (!name) {
        alert("Enter a file name.");
        return;
    }

    recent_files.add(name);
    input.value = "";
    render_recent_files();
});

document.getElementById("remove_recent_btn").addEventListener("click", () => {
    if (!recent_files.remove_latest()) {
        alert("No recent files to remove.");
    }

    render_recent_files();
});


// TREE: Folder hierarchy

class FolderNode {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.children = [];
    }
}

class FileSystemTree {
    constructor() {
        this.root = new FolderNode("Root", "folder");
    }

    find(name, node = this.root) {
        if (node.name === name) {
            return node;
        }

        for (const child of node.children) {
            const result = this.find(name, child);

            if (result !== null) {
                return result;
            }
        }

        return null;
    }

    add(name, type, parent_name = "Root") {
        const parent = this.find(parent_name);

        if (!parent || parent.type !== "folder") {
            return false;
        }

        if (parent.children.some(child => child.name === name)) {
            return false;
        }

        parent.children.push(new FolderNode(name, type));
        return true;
    }
}

const file_system = new FileSystemTree();

function render_folder_tree() {
    const container = document.getElementById("folder_tree");
    container.replaceChildren();

    function render_node(node, parent) {
        const item = document.createElement("div");
        item.className = "tree-item";

        const label = document.createElement("div");
        const icon = node.type === "folder" ? "📁" : "📄";

        label.textContent = `${icon} ${node.name}`;
        item.appendChild(label);

        parent.appendChild(item);

        if (node.children.length > 0) {
            const children = document.createElement("div");
            children.className = "tree-children";

            node.children.forEach(child => {
                render_node(child, children);
            });

            item.appendChild(children);
        }
    }

    render_node(file_system.root, container);
}

document.getElementById("add_item_btn").addEventListener("click", () => {
    const name = document.getElementById("folder_name_input").value.trim();
    const parent = document.getElementById("parent_folder_input").value.trim();
    const type = document.getElementById("item_type").value;

    if (!name) {
        alert("Enter a folder or file name.");
        return;
    }

    const added = file_system.add(name, type, parent || "Root");

    if (!added) {
        alert("Parent folder not found, or an item with this name already exists there.");
        return;
    }

    document.getElementById("folder_name_input").value = "";
    document.getElementById("parent_folder_input").value = "";

    render_folder_tree();
});


// GRAPH: File dependencies

class DependencyGraph {
    constructor() {
        this.adjacency_list = new Map();
    }

    add_file(name) {
        if (this.adjacency_list.has(name)) {
            return false;
        }

        this.adjacency_list.set(name, new Set());
        return true;
    }

    connect(from, to) {
        if (!this.adjacency_list.has(from) ||
            !this.adjacency_list.has(to)) {
            return false;
        }

        if (from === to) {
            return false;
        }

        this.adjacency_list.get(from).add(to);
        return true;
    }

    find_path(start, destination) {
        if (!this.adjacency_list.has(start) ||
            !this.adjacency_list.has(destination)) {
            return null;
        }

        const queue = [[start]];
        const visited = new Set([start]);

        while (queue.length > 0) {
            const path = queue.shift();
            const current = path[path.length - 1];

            if (current === destination) {
                return path;
            }

            for (const neighbor of this.adjacency_list.get(current)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([...path, neighbor]);
                }
            }
        }

        return null;
    }
}

const dependency_graph = new DependencyGraph();

function render_dependency_graph() {
    const container = document.getElementById("dependency_graph");
    container.replaceChildren();

    if (dependency_graph.adjacency_list.size === 0) {
        container.textContent = "No files added.";
        return;
    }

    for (const [name, dependencies] of dependency_graph.adjacency_list) {
        const item = document.createElement("div");
        item.className = "graph-item";

        const text = dependencies.size > 0
            ? `${name} → ${[...dependencies].join(", ")}`
            : `${name} → No dependencies`;

        item.textContent = text;
        container.appendChild(item);
    }
}

document.getElementById("add_file_btn").addEventListener("click", () => {
    const input = document.getElementById("dependency_file");
    const name = input.value.trim();

    if (!name) {
        alert("Enter a file name.");
        return;
    }

    if (!dependency_graph.add_file(name)) {
        alert("This file already exists in the graph.");
        return;
    }

    input.value = "";
    render_dependency_graph();
});

document.getElementById("connect_files_btn").addEventListener("click", () => {
    const from = document.getElementById("dependency_from").value.trim();
    const to = document.getElementById("dependency_to").value.trim();

    if (!dependency_graph.connect(from, to)) {
        alert("Add both files first. A file cannot depend on itself.");
        return;
    }

    document.getElementById("dependency_from").value = "";
    document.getElementById("dependency_to").value = "";

    render_dependency_graph();
});

document.getElementById("find_path_btn").addEventListener("click", () => {
    const start = document.getElementById("path_from").value.trim();
    const destination = document.getElementById("path_to").value.trim();
    const result = document.getElementById("path_result");

    const path = dependency_graph.find_path(start, destination);

    result.textContent = path
        ? `Dependency path: ${path.join(" → ")}`
        : "No path found. Check the file names and dependencies.";
});


// INITIAL DEMONSTRATION DATA

recent_files.add("index.html");
recent_files.add("style.css");
recent_files.add("script.js");
render_recent_files();

file_system.add("Documents", "folder");
file_system.add("Images", "folder");
file_system.add("notes.txt", "file", "Documents");
file_system.add("project.pdf", "file", "Documents");
render_folder_tree();

dependency_graph.add_file("index.html");
dependency_graph.add_file("style.css");
dependency_graph.add_file("theme.css");

dependency_graph.connect("index.html", "style.css");
dependency_graph.connect("style.css", "theme.css");

render_dependency_graph();
