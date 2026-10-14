//o(n) linear
// const small_list=Array.from({length:1000},(_,index)=>index);
// const big_list=Array.from({length:10000},(_,index)=>index);
// // console.log(small_list);
// // console.log(big_list);

// function process_list(data){
//     let total=0
//     for (const number of data){
//         total+=number;
//     }
//     return total;
// }

//small result
// starts the timer ---> small list is a label
// console.time('small list');
// const small_result=process_list(small_list);
// console.timeEnd('small list');
// console.log('small list result:',small_result);

// //big result
// console.time('small list')
// const big_result=process_list(big_list);
// console.timeEnd('small list');
// console.log('Big result:',big_result);


// const small_start_time=performance.now();
// const small_result=process_list(small_list)
// const small_end_time=performance.now();
// const small_execution_time=small_end_time-small_start_time;
// console.log('Small list result',small_result);
// console.log('Execution time:',small_execution_time.toFixed(2),'ms')


// const big_start_time=performance.now();
// const big_result=process_list(big_list)
// const big_end_time=performance.now();
// const big_execution_time=big_end_time-big_start_time;
// console.log('Big list result',big_result);
// console.log('Execution time:',big_execution_time.toFixed(2),'ms')

// sum of all number form 1 to n

function sum_of_number(num){
    // let sum=0;
    // for (let i=1;i<=num;i++){
    //     sum=sum+i;
    // }
    return num * (num+1)/2;
}

console.log(sum_of_number(5)); // 15
console.log(sum_of_number(10)) //55


// Stack — Browser history / Undo feature
// Concept: LIFO (Last In, First Out). The last item added is the first item removed.
class UndoManager {
    constructor() {
        this.actions = [];
    }

    add_action(action) {
        this.actions.push(action);
    }

    undo() {
        if (this.actions.length === 0) {
            return "Nothing to undo";
        }

        return this.actions.pop();
    }
}

const editor = new UndoManager();

editor.add_action("Type heading");
editor.add_action("Add paragraph");
editor.add_action("Insert image");

console.log(editor.undo());
console.log(editor.undo());
console.log(editor.actions);



// Queue — Customer support tickets
// Concept: FIFO (First In, First Out). The first item added is the first item processed.
class SupportQueue {
    constructor() {
        this.tickets = [];
    }

    add_ticket(ticket) {
        this.tickets.push(ticket);
    }

    process_ticket() {
        if (this.tickets.length === 0) {
            return "No pending tickets";
        }

        return this.tickets.shift();
    }
}

const support = new SupportQueue();

support.add_ticket("Ticket-101");
support.add_ticket("Ticket-102");
support.add_ticket("Ticket-103");

console.log(support.process_ticket());
console.log(support.tickets);


class Node {
    constructor(song) {
        this.song = song;
        this.next = null;
    }
}

// Linked List — Music playlist
// Concept: Each node stores data and a reference to the next node.
class Playlist {
    constructor() {
        this.head = null;
    }

    add_song(song) {
        const new_node = new Node(song);

        if (this.head === null) {
            this.head = new_node;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = new_node;
    }

    display() {
        let current = this.head;

        while (current !== null) {
            console.log(current.song);
            current = current.next;
        }
    }
}

const playlist = new Playlist();

playlist.add_song("Song A");
playlist.add_song("Song B");
playlist.add_song("Song C");

playlist.display();


// Set — Remove duplicate email addresses
// Concept: A Set stores unique values. Duplicate values are automatically ignored.

const registered_emails = [
    "user1@example.com",
    "user2@example.com",
    "user1@example.com",
    "user3@example.com",
    "user2@example.com"
];

const unique_emails = new Set(registered_emails);

console.log([...unique_emails]);
console.log(unique_emails.has("user1@example.com"));

unique_emails.add("user4@example.com");
unique_emails.delete("user3@example.com");

console.log([...unique_emails]);



const inventory = new Map();

inventory.set("LAPTOP-101", {
    name: "Laptop",
    stock: 10,
    price: 55000
});

inventory.set("MOUSE-201", {
    name: "Wireless Mouse",
    stock: 25,
    price: 800
});

// Map — Product inventory
// Concept: A Map stores key-value pairs. Keys can be strings, numbers, objects, or other values.

function check_stock(product_id) {
    const product = inventory.get(product_id);

    if (!product) {
        return "Product not found";
    }

    return product.stock;
}

console.log(check_stock("LAPTOP-101"));

inventory.get("LAPTOP-101").stock -= 1;

console.log(check_stock("LAPTOP-101"));
console.log(inventory.has("MOUSE-201"));


// 6. Graph — Social network connections
// Concept: A graph contains vertices (people) and edges (connections between people).


class SocialNetwork {
    constructor() {
        this.connections = new Map();
    }

    add_person(name) {
        if (!this.connections.has(name)) {
            this.connections.set(name, new Set());
        }
    }

    add_friend(person, friend) {
        this.add_person(person);
        this.add_person(friend);

        this.connections.get(person).add(friend);
        this.connections.get(friend).add(person);
    }

    show_friends(person) {
        return [...(this.connections.get(person) ?? [])];
    }
}

const network = new SocialNetwork();

network.add_friend("Dinesh", "Arun");
network.add_friend("Dinesh", "Priya");
network.add_friend("Arun", "Kumar");

console.log(network.show_friends("Dinesh"));
console.log(network.show_friends("Arun"));

// Tree — Organization hierarchy
// Concept: A tree represents hierarchical relationships through parent and child nodes.

class TreeNode {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    add_child(child) {
        this.children.push(child);
    }
}

const manager = new TreeNode("Manager");
const developer = new TreeNode("Developer");
const designer = new TreeNode("Designer");

manager.add_child(developer);
manager.add_child(designer);

developer.add_child(new TreeNode("Junior Developer"));
designer.add_child(new TreeNode("UI Designer"));

function display_tree(node, level = 0) {
    console.log(`${" ".repeat(level * 2)}${node.name}`);

    for (const child of node.children) {
        display_tree(child, level + 1);
    }
}

display_tree(manager);