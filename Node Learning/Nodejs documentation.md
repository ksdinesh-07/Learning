# Node.js 

Node.js is a runtime environment that allows JavaScript to run outside the browser. Normally, JavaScript is commonly associated with browsers, where it is used to make web pages interactive. Node.js allows the same JavaScript language to be used for backend development, command-line applications, file processing, APIs, real-time applications, and many other tasks.

Node.js is built around Google's V8 JavaScript engine. V8 is responsible for understanding and executing JavaScript code, while Node.js provides additional features that allow JavaScript to communicate with the operating system.


---

# V8 Engine and Node.js Runtime

## What is V8?

V8 is a JavaScript engine developed by Google.

It is mainly written in C++ and is responsible for executing JavaScript code.

For example:

```js
const employee_name = "Arun";

console.log(employee_name);
```

The JavaScript code itself is not directly understood by the computer's processor.

V8 takes the JavaScript code and converts it into instructions that can be executed by the computer.

A simplified view is:

```text
JavaScript Code
       ↓
      V8
       ↓
Machine Instructions
       ↓
CPU executes them
```

V8 is also used by Google Chrome.

This means Chrome and Node.js both use V8 to execute JavaScript, but they provide different environments around the engine.

---

## What is Node.js?

Node.js is a JavaScript runtime environment.

A runtime environment provides the things required to execute a programming language outside its original environment.

Node.js takes the V8 engine and adds additional capabilities such as:

```text
File System
Networking
HTTP
Operating System access
Timers
Streams
Events
Process management
```

For example, JavaScript running in a browser normally cannot directly read any file from your computer.

Node.js provides the `fs` module, which allows JavaScript programs to work with files.

```js
import { readFile } from "node:fs";

readFile("data.txt", "utf8", (error, data) => {
    if (error) {
        console.log(error.message);
        return;
    }

    console.log(data);
});
```

The `readFile()` functionality is provided by Node.js, not by JavaScript itself.

---

## V8 and Node.js are different

It is important not to think that V8 and Node.js are the same thing.

V8 is the JavaScript engine.

Node.js is the runtime environment that uses V8 and provides additional APIs.

A simple way to remember it is:

```text
                 Node.js
        ┌──────────────────────┐
        │                      │
        │       V8 Engine      │
        │   Executes JavaScript│
        │                      │
        │   Node.js APIs       │
        │                      │
        │   Event Loop         │
        │                      │
        │   Streams            │
        │                      │
        │   File System        │
        │                      │
        │   Networking         │
        │                      │
        └──────────────────────┘
```

V8 executes JavaScript.

Node.js provides the environment and APIs around V8.

---

## How Node.js executes a program

Suppose we have:

```js
console.log("Hello Node.js");
```

When we run:

```powershell
node app.js
```

the operating system starts the Node.js program.

Node.js initializes the runtime environment and loads the JavaScript file.

V8 then executes the JavaScript.

The flow can be understood as:

```text
node app.js
     ↓
Node.js starts
     ↓
V8 loads JavaScript
     ↓
JavaScript is executed
     ↓
Output is produced
```

When the program performs asynchronous work such as reading a file or receiving a network request, Node.js can use its asynchronous infrastructure to handle that work without blocking JavaScript execution.

---

# Node.js Architecture

A simplified Node.js architecture looks like this:

```text
Your JavaScript Code
        ↓
       V8
        ↓
   Node.js APIs
        ↓
      libuv
        ↓
Operating System
```

Each part has a different responsibility.

### JavaScript

This is the code written by the developer.

```js
console.log("Application started");
```

### V8

V8 executes the JavaScript code.

### Node.js APIs

Node.js provides APIs such as:

```text
fs
http
path
events
stream
crypto
os
process
```

### libuv

libuv provides important asynchronous infrastructure used by Node.js.

It is mainly written in C.

It is responsible for things such as the Event Loop and supports asynchronous operations including file-system operations, networking, timers, and a thread pool for certain types of work.

### Operating System

The operating system ultimately manages resources such as:

```text
Files
Network connections
Memory
Processes
Sockets
Hardware resources
```

---

# The Event Loop

The Event Loop is one of the most important concepts in Node.js.

Node.js uses the Event Loop to handle asynchronous operations while keeping JavaScript execution primarily on a single main thread.

For example:

```js
console.log("Start");

setTimeout(() => {
    console.log("File processing completed");
}, 2000);

console.log("End");
```

The output is:

```text
Start
End
File processing completed
```

The timer does not stop the entire JavaScript program for two seconds.

Instead, Node.js registers the timer and continues executing other JavaScript.

When the timer is ready, its callback can be processed later by the Event Loop.

---

# Why the Event Loop is needed

Imagine a server receiving thousands of requests.

If Node.js waited synchronously for every operation:

```text
Request
   ↓
Wait for database
   ↓
Wait for file
   ↓
Wait for network
   ↓
Send response
```

the server could spend a lot of time waiting.

Instead, asynchronous programming allows Node.js to start an operation and continue handling other work.

A simplified example:

```text
Request A
   ↓
Start database operation
   ↓
Node.js continues

Request B
   ↓
Start database operation
   ↓
Node.js continues

Request C
   ↓
Start database operation
   ↓
Node.js continues

Database result becomes available
   ↓
Callback is scheduled
   ↓
Event Loop
   ↓
JavaScript callback executes
```

This is one of the reasons Node.js is useful for applications that perform many I/O operations.

---

# Event Loop Phases

The Node.js Event Loop has several phases.

Important phases include:

```text
Timers
   ↓
Pending callbacks
   ↓
Poll
   ↓
Check
   ↓
Close callbacks
```

The exact internal behavior is more detailed, but these phases provide a useful beginner-level mental model.

---

# Timers Phase

The timers phase handles callbacks associated with functions such as:

```js
setTimeout()
setInterval()
```

Example:

```js
setTimeout(() => {
    console.log("Timer completed");
}, 1000);
```

The important point is that:

```js
setTimeout(callback, 1000);
```

does not mean:

> Execute this callback exactly after one second.

It means approximately:

> Make this callback eligible to run after at least the specified delay, when Node.js gets the opportunity to execute it.

So other work can affect when the callback actually runs.

---

# Poll Phase

The poll phase is associated with I/O-related work.

I/O means Input/Output.

Examples include:

```text
File operations
Network operations
Incoming connections
Socket activity
```

For example:

```js
import { readFile } from "node:fs";

readFile("data.txt", "utf8", (error, data) => {
    console.log(data);
});
```

Node.js starts the file operation.

When the result is available, the related callback becomes ready to be processed.

The Event Loop can then execute the callback.

---

# Check Phase and setImmediate()

The check phase is where callbacks registered with `setImmediate()` are executed.

Example:

```js
setImmediate(() => {
    console.log("Immediate callback");
});
```

`setImmediate()` is especially useful when you want a callback to execute during the check phase of the Event Loop.

A common example is inside an I/O callback:

```js
import { readFile } from "node:fs";

readFile("data.txt", () => {
    setImmediate(() => {
        console.log("Immediate callback");
    });
});
```

When `setImmediate()` is scheduled from an I/O callback, it commonly runs before a `setTimeout(..., 0)` scheduled in the same callback.

---

# process.nextTick()

`process.nextTick()` is slightly different from the normal Event Loop phases.

Example:

```js
console.log("Start");

process.nextTick(() => {
    console.log("Next tick");
});

console.log("End");
```

Output:

```text
Start
End
Next tick
```

The callback registered with `process.nextTick()` is processed after the current JavaScript operation finishes, before the Event Loop continues through its normal phases.

It has a very high priority.

Because of this, using `process.nextTick()` repeatedly can prevent the Event Loop from getting an opportunity to process other work.

For example, continuously scheduling more `nextTick()` callbacks can cause Event Loop starvation.

---

# setTimeout(), setImmediate(), and process.nextTick()

These three functions are related to asynchronous execution, but they are not interchangeable.

```text
process.nextTick()
       ↓
Very high priority
       ↓
Before continuing normal Event Loop phases


setTimeout()
       ↓
Timers phase


setImmediate()
       ↓
Check phase
```

A simple mental model is:

```text
Current JavaScript execution
        ↓
process.nextTick()
        ↓
Event Loop phases
        ↓
timers / poll / check
```

The exact ordering between `setTimeout(0)` and `setImmediate()` can depend on where they are scheduled.

---

# Asynchronous Programming

Asynchronous programming means starting an operation without making the entire JavaScript execution wait for that operation to finish.

Common asynchronous operations include:

```text
File reading
Database requests
Network requests
HTTP requests
Timers
Socket communication
```

For example:

```js
console.log("Request started");

setTimeout(() => {
    console.log("Request completed");
}, 2000);

console.log("Server continues working");
```

Output:

```text
Request started
Server continues working
Request completed
```

The program does not stop executing everything for two seconds.

---

# Callbacks

A callback is a function passed to another function so that it can be executed later.

Example:

```js
function process_employee(employee_name, callback) {
    console.log(`Processing ${employee_name}`);

    callback();
}

process_employee("Arun", () => {
    console.log("Employee processing completed");
});
```

Here:

```js
() => {
    console.log("Employee processing completed");
}
```

is the callback.

Callbacks are commonly used with asynchronous Node.js APIs.

For example:

```js
import { readFile } from "node:fs";

readFile("data.txt", "utf8", (error, data) => {
    if (error) {
        console.log(error.message);
        return;
    }

    console.log(data);
});
```

The callback executes after the file operation completes.

---

# Callback Hell

Callback Hell happens when many asynchronous operations depend on each other and callbacks become deeply nested.

For example:

```js
login_user((user) => {

    get_account(user, (account) => {

        get_transactions(account, (transactions) => {

            generate_statement(transactions, (statement) => {

                send_statement(statement, () => {

                    console.log("Statement sent");

                });

            });

        });

    });

});
```

This code can become difficult to read and maintain.

The structure starts moving toward the right:

```text
login
    ↓
    account
        ↓
        transactions
            ↓
            statement
                ↓
                send
```

This is commonly called the "callback hell" or "pyramid of doom" problem.

---

# Promises

Promises provide a cleaner way to represent the result of an asynchronous operation.

A Promise has three main states:

```text
Pending
   ↓
Fulfilled

or

Pending
   ↓
Rejected
```

Example:

```js
const employee_request = new Promise((resolve, reject) => {

    const employee_found = true;

    if (employee_found) {
        resolve("Employee data received");
    } else {
        reject("Employee not found");
    }

});
```

A Promise can be handled using:

```js
employee_request
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

---

# Promise Chaining

Promise chaining allows multiple asynchronous operations to be connected.

Example:

```js
login_user()
    .then((user) => {
        return get_account(user);
    })
    .then((account) => {
        return get_transactions(account);
    })
    .then((transactions) => {
        return generate_statement(transactions);
    })
    .then((statement) => {
        console.log(statement);
    })
    .catch((error) => {
        console.log(error);
    });
```

Each `.then()` receives the result returned by the previous operation.

The flow is:

```text
login_user()
     ↓
user
     ↓
get_account()
     ↓
account
     ↓
get_transactions()
     ↓
transactions
     ↓
generate_statement()
     ↓
statement
```

This is much easier to manage than deeply nested callbacks.

---

# async and await

`async` and `await` provide another way to work with Promises.

Example:

```js
async function generate_statement() {

    const user = await login_user();

    const account = await get_account(user);

    const transactions = await get_transactions(account);

    const statement = await create_statement(transactions);

    console.log(statement);
}
```

The code looks similar to normal synchronous code, which makes it easier to understand.

However, the operations are still asynchronous.

---

# What async does

When a function is declared with `async`, it always returns a Promise.

```js
async function get_employee() {
    return "Employee data";
}
```

Even though we return a normal string, the function actually returns a Promise.

Conceptually:

```text
async function
      ↓
returns Promise
```

---

# What await does

`await` waits for a Promise to settle inside an async function.

Example:

```js
async function load_employee() {

    const employee = await get_employee();

    console.log(employee);

}
```

`await` pauses the execution of that particular async function until the Promise settles.

It does not block the entire Node.js runtime.

Other asynchronous operations can continue while the function is waiting.

---

# Callback vs Promise vs async/await

The evolution can be understood like this:

```text
Callbacks
    ↓
Callback Hell
    ↓
Promises
    ↓
Promise Chaining
    ↓
async/await
```

Callbacks are still useful and are widely used in Node.js APIs.

Promises provide better composition.

Async/await provides a cleaner syntax for working with Promise-based code.

---

# EventEmitter

EventEmitter is an important Node.js pattern for working with events.

It allows an object to:

```text
Register listeners
       ↓
Emit events
       ↓
Notify listeners
```

Node.js provides EventEmitter through the `events` module.

Example:

```js
import { EventEmitter } from "node:events";

const order_system = new EventEmitter();

order_system.on("order_placed", (order_id) => {
    console.log(`Order ${order_id} has been placed`);
});

order_system.emit("order_placed", 101);
```

Output:

```text
Order 101 has been placed
```

---

# on()

The `.on()` method registers an event listener.

```js
order_system.on("order_placed", (order_id) => {
    console.log(order_id);
});
```

This means:

> Whenever the `order_placed` event occurs, execute this function.

---

# emit()

The `.emit()` method triggers an event.

```js
order_system.emit("order_placed", 101);
```

Here:

```text
Event name → order_placed
Data       → 101
```

The listener receives that data.

---

# once()

The `.once()` method runs a listener only one time.

```js
order_system.once("payment_completed", () => {
    console.log("Payment completed");
});
```

If the event is emitted multiple times:

```js
order_system.emit("payment_completed");
order_system.emit("payment_completed");
order_system.emit("payment_completed");
```

the listener runs only during the first emission.

---

# off()

The `.off()` method removes an event listener.

For this to work correctly, the same function reference must be available.

```js
function handle_order(order_id) {
    console.log(order_id);
}

order_system.on("order_placed", handle_order);

order_system.off("order_placed", handle_order);
```

After removing it, that listener will no longer respond to the event.

---

# EventEmitter in real Node.js applications

EventEmitter is not only used when developers manually create custom events.

Many Node.js APIs use event-based behavior internally.

For example, streams emit events such as:

```text
data
end
error
close
```

So when we write:

```js
file_stream.on("data", (chunk) => {
    console.log(chunk);
});
```

we are listening for an event generated by the stream.

We are not manually calling:

```js
file_stream.emit("data");
```

The stream implementation generates the event automatically when data becomes available.

---

# Streams

A stream allows data to be processed piece by piece instead of loading the entire data into memory at once.

This becomes extremely important when working with large files.

Imagine a file containing:

```text
10 MB
500 MB
2 GB
10 GB
```

If we load the entire file into memory:

```js
const data = read_entire_file();
```

a very large amount of memory may be required.

A stream works differently.

```text
Large File
    ↓
Small chunk
    ↓
Process
    ↓
Small chunk
    ↓
Process
    ↓
Small chunk
    ↓
Process
```

The entire file does not need to exist in memory at the same time.

---

# createReadStream()

Node.js provides `createReadStream()` for reading files as streams.

Example:

```js
import { createReadStream } from "node:fs";

const file_stream = createReadStream("data.txt");

file_stream.on("data", (chunk) => {
    console.log(chunk.toString());
});

file_stream.on("end", () => {
    console.log("File reading completed");
});

file_stream.on("error", (error) => {
    console.log("File reading error:", error.message);
});
```

The stream produces events while reading the file.

---

# The data event

The `data` event is emitted when a chunk of data becomes available.

```js
file_stream.on("data", (chunk) => {
    console.log(chunk.toString());
});
```

The chunk is normally a Buffer when reading a file.

We can convert it to text:

```js
chunk.toString()
```

One important point is that a chunk is not guaranteed to represent a complete line.

For example, a chunk might contain:

```text
Arun,IT,Pre
```

and another chunk might contain:

```text
sent
```

This is why applications that need complete lines often use the `readline` module on top of the readable stream.

---

# The end event

The `end` event occurs when the stream has finished producing data.

```js
file_stream.on("end", () => {
    console.log("Reading completed");
});
```

It tells us:

> There is no more data to read from this stream.

---

# The error event

The `error` event occurs when something goes wrong.

For example, if the file does not exist:

```js
file_stream.on("error", (error) => {
    console.log("File reading error:", error.message);
});
```

This allows the application to handle the problem instead of leaving the error unhandled.

---

# readline with streams

When processing text files line by line, Node.js provides the `readline` module.

Example:

```js
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";

const file_stream = createReadStream("employees.csv");

const line_reader = createInterface({
    input: file_stream
});

line_reader.on("line", (line) => {
    console.log(line);
});
```

Now the application receives complete lines.

This is especially useful for CSV processing.

The flow is:

```text
Large CSV
    ↓
createReadStream()
    ↓
readline
    ↓
line event
    ↓
Process one line
    ↓
Next line
    ↓
Process next line
```

This approach avoids loading the complete CSV into memory.

---

# Streams and EventEmitter

Streams and EventEmitter are closely related in Node.js.

A stream uses events to notify the application about what is happening.

For example:

```text
Readable Stream
      ↓
data event
      ↓
Application processes data

Readable Stream
      ↓
end event
      ↓
Application knows reading is complete

Readable Stream
      ↓
error event
      ↓
Application handles error
```

The important difference is that with a normal custom EventEmitter example, we may manually call `.emit()`.

With streams, Node.js internally emits the events.

---

# CommonJS Modules

CommonJS is one of the module systems supported by Node.js.

It traditionally uses:

```js
require()
```

and:

```js
module.exports
```

Example:

```js
function calculate_total(price, quantity) {
    return price * quantity;
}

module.exports = calculate_total;
```

Another file can import it using:

```js
const calculate_total = require("./calculator");
```

CommonJS was the traditional module system used in Node.js for many years.

---

# ECMAScript Modules

ECMAScript Modules, commonly called ESM, use:

```js
import
export
```

Example:

```js
export function calculate_total(price, quantity) {
    return price * quantity;
}
```

Another file can import it:

```js
import { calculate_total } from "./calculator.js";
```

Modern Node.js applications commonly use ESM as well as CommonJS.

---

# Named exports

A named export exports a specific value by name.

```js
export function create_employee() {
    console.log("Employee created");
}

export function delete_employee() {
    console.log("Employee deleted");
}
```

Import:

```js
import {
    create_employee,
    delete_employee
} from "./employee.js";
```

The names must match the exported names.

---

# Default export

A module can also have a default export.

```js
export default function calculate_salary() {
    console.log("Calculating salary");
}
```

It can be imported as:

```js
import calculate_salary from "./salary.js";
```

The importing file can choose the local name for the default export.

---

# ESM configuration in Node.js

If we want `.js` files to be treated as ECMAScript Modules, we can add:

```json
{
    "name": "node_learning",
    "version": "1.0.0",
    "type": "module"
}
```

The important property is:

```json
"type": "module"
```

Then Node.js understands code such as:

```js
import { createReadStream } from "node:fs";
```

without treating it as CommonJS.

# Why modules are important

Modules allow a large application to be divided into smaller files.

Instead of putting everything into one file:

```text
main.js
```

we can organize the application:

```text
project
│
├── main.js
├── employee.js
├── database.js
├── validation.js
└── utility.js
```

Each file can have a specific responsibility.

For example:

```text
employee.js
    ↓
Employee operations

database.js
    ↓
Database operations

validation.js
    ↓
Input validation

main.js
    ↓
Application flow
```

This makes the application easier to understand, maintain, and reuse.

---

# How all these concepts connect

These concepts are not isolated topics. They work together inside Node.js applications.

Consider a large employee CSV processing application.

The application might work like this:

```text
Node.js Runtime
      ↓
V8 executes JavaScript
      ↓
Node.js File System API
      ↓
createReadStream()
      ↓
Stream reads CSV in chunks
      ↓
readline produces lines
      ↓
EventEmitter-style events notify application
      ↓
Application filters employee records
      ↓
Writable Stream writes results
      ↓
Event Loop coordinates asynchronous work
```

If the application is divided into multiple files:

```text
main.js
employee_parser.js
file_service.js
validation.js
```

ESM can be used to connect these modules.

If the application needs several asynchronous operations, Promises and async/await can be used.

So the concepts fit together rather than existing separately.

## Banking applications

A banking backend can use:

```text
Node.js
    ↓
HTTP API
    ↓
Database
    ↓
Asynchronous operations
    ↓
Promises / async-await
```

Streams can be useful when generating or processing large transaction reports.

EventEmitter-style patterns can be used for internal application events such as transaction processing.

Modules can separate:

```text
authentication
accounts
transactions
reports
validation
```

---

# File processing systems

A large CSV processing application can use:

```text
createReadStream()
        ↓
readline
        ↓
filter records
        ↓
createWriteStream()
```

This allows large files to be processed without loading the complete file into memory.

This is exactly the pattern used in the current Node.js practice project.

---

# Real-time applications

Real-time applications such as chat systems involve many asynchronous operations.

For example:

```text
Client
   ↓
Network request
   ↓
Node.js
   ↓
Event-driven processing
   ↓
Socket communication
   ↓
Other clients
```

# Express.js Routing & HTTP Architecture

Express.js is a web framework for Node.js that makes it easier to build web servers and RESTful APIs.

When using the built-in Node.js `http` module, we need to manually handle many things such as creating the server, checking request methods, checking URLs, and processing request data.

Express.js provides a simpler structure for handling these operations.

The main purpose of this module is to understand how to:

* Create an Express application
* Configure environment variables using `dotenv`
* Handle HTTP request methods
* Use HTTP status codes
* Read data from requests
* Process JSON request payloads
* Organize routes using `express.Router()`
* Build a clean RESTful API structure

---

# Initializing an Express Application

Before creating routes, we need to create an Express application.

First, install Express:

```bash
npm install express
```

Then import Express:

```js
import express from 'express';
```

Create the Express application:

```js
const app = express();
```

Here:

```js
express()
```

creates an Express application.

The returned application is stored inside:

```js
app
```

The `app` object is used to configure the server and create routes.

For example:

```js
app.get('/', (req, res) => {
    res.send('Server is running');
});
```

Start the server:

```js
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
```

The basic flow is:

```text
Client
   ↓
HTTP Request
   ↓
Express Application
   ↓
Route
   ↓
Response
```

---

# Why Express.js Is Used

Node.js provides the built-in `http` module:

```js
import http from 'node:http';
```

We can create a server using it, but handling many routes manually can become difficult.

For example, we may need to manually check:

```text
Request method
Request URL
Request body
Request parameters
Response status
```

Express provides methods such as:

```js
app.get()
app.post()
app.put()
app.patch()
app.delete()
```

This makes API development easier to organize.

For example:

```js
app.get('/users', (req, res) => {
    res.json({
        message: 'Getting users'
    });
});
```

---

# Configuring Environment Variables with dotenv

Applications often contain values that can change depending on the environment.

Examples include:

```text
Port number
Database URL
API keys
Secret keys
Application environment
```

Instead of writing these values directly inside JavaScript files, we can store them in an `.env` file.

Install `dotenv`:

```bash
npm install dotenv
```

Create:

```text
.env
```

Example:

```env
PORT=5000
NODE_ENV=development
API_VERSION=v1
```

Load the environment variables:

```js
import dotenv from 'dotenv';

dotenv.config();
```

Now the values can be accessed through:

```js
process.env.PORT
```

For example:

```js
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
```

The flow is:

```text
.env
 ↓
dotenv
 ↓
process.env
 ↓
Application
```

The `.env` file should normally not be committed to Git because it may contain sensitive information.

Add it to `.gitignore`:

```text
.env
```

---

# HTTP Request Methods

HTTP methods tell the server what operation the client wants to perform.

The commonly used methods in REST APIs are:

```text
GET
POST
PUT
PATCH
DELETE
```

Each method has a different purpose.

---

# GET

`GET` is used to retrieve data from the server.

Example:

```http
GET /api/v1/tasks
```

This means:

> Give me the tasks.

Express route:

```js
app.get('/api/v1/tasks', (req, res) => {
    res.json({
        message: 'Getting tasks'
    });
});
```

GET normally does not modify the server's data.

Common uses:

```text
Get all users
Get all products
Get one task
Get an employee
Get order details
```

---

# POST

`POST` is generally used to create new data.

Example:

```http
POST /api/v1/tasks
```

The client may send:

```json
{
    "title": "Learn Express",
    "priority": "high"
}
```

Express route:

```js
app.post('/api/v1/tasks', (req, res) => {
    res.status(201).json({
        message: 'Task created'
    });
});
```

Common uses:

```text
Create a user
Create a task
Create an order
Create a product
Create a comment
```

---

# PUT

`PUT` is generally used when replacing the representation of an existing resource.

Example:

```http
PUT /api/v1/tasks/10
```

The client may send the complete task information:

```json
{
    "title": "Learn Express.js",
    "description": "Learn routing and middleware",
    "completed": true,
    "priority": "high"
}
```

The server replaces the existing representation with the supplied data.

---

# PATCH

`PATCH` is used for a partial update.

For example, suppose the current task is:

```json
{
    "id": 10,
    "title": "Learn Express",
    "description": "Learn routing",
    "completed": false,
    "priority": "high"
}
```

The client only wants to change `completed`:

```http
PATCH /api/v1/tasks/10
```

Request body:

```json
{
    "completed": true
}
```

Only that part is changed.

The main difference is:

```text
PUT
↓
Replace the resource representation

PATCH
↓
Modify part of the resource
```

---

# DELETE

`DELETE` is used to remove a resource.

Example:

```http
DELETE /api/v1/tasks/10
```

This means:

> Delete task 10.

Express:

```js
app.delete('/api/v1/tasks/:task_id', (req, res) => {
    res.status(200).json({
        message: 'Task deleted'
    });
});
```

Common uses:

```text
Delete a user
Delete a task
Delete a comment
Delete an order
```

---

# HTTP Status Codes

HTTP status codes tell the client what happened when processing the request.

For REST APIs, it is important to return a status code that correctly describes the result.

Some commonly used status codes are:

```text
200 → Successful request
201 → Resource successfully created
204 → Successful request with no response body
400 → Bad request
401 → Authentication required or failed
403 → Forbidden
404 → Resource not found
409 → Conflict
500 → Internal server error
```

---

# 200 OK

`200` means the request was successfully processed.

Example:

```js
res.status(200).json({
    success: true,
    tasks: task_data
});
```

Commonly used for successful GET, PUT, and PATCH operations.

---

# 201 Created

`201` indicates that a new resource was successfully created.

For example, after creating a task:

```js
res.status(201).json({
    success: true,
    message: 'Task created successfully',
    task: new_task
});
```

This is commonly used with POST requests that create resources.

---

# 204 No Content

`204` means the request was successful but there is no response body to return.

Example:

```js
res.status(204).send();
```

A common use is a successful deletion where the server does not need to return additional data.

---

# 400 Bad Request

`400` means the request sent by the client is invalid.

For example, an API requires:

```json
{
    "title": "Learn Express"
}
```

but the client sends invalid or missing required data.

The server may return:

```js
res.status(400).json({
    success: false,
    message: 'Title is required'
});
```

---

# 401 Unauthorized

`401` is generally used when authentication is required or the supplied authentication credentials are invalid.

For example:

```text
Request
   ↓
Authentication required
   ↓
No valid authentication
   ↓
401
```

---

# 403 Forbidden

`403` means the server understood the request but the client does not have permission to perform the operation.

For example:

```text
User
 ↓
Authenticated
 ↓
Does not have required permission
 ↓
403 Forbidden
```

---

# 404 Not Found

`404` means the requested resource could not be found.

For example:

```http
GET /api/v1/tasks/999
```

If task `999` doesn't exist:

```js
res.status(404).json({
    success: false,
    message: 'Task not found'
});
```

---

# 409 Conflict

`409` is used when the request conflicts with the current state of the resource.

For example, if a system requires unique email addresses:

```text
Existing user:
john@example.com

New registration:
john@example.com
```

The server could return:

```js
res.status(409).json({
    success: false,
    message: 'Email already exists'
});
```

---

# 500 Internal Server Error

`500` indicates that an unexpected error occurred on the server.

For example:

```js
res.status(500).json({
    success: false,
    message: 'Internal server error'
});
```

The client should not assume that a `500` error is caused by invalid client input.

---

# Reading Request Parameters with req.params

Route parameters are values included directly inside the URL path.

Example:

```js
app.get('/tasks/:task_id', (req, res) => {
    console.log(req.params);
});
```

Request:

```http
GET /tasks/25
```

Express gives:

```js
req.params
```

as:

```js
{
    task_id: '25'
}
```

We can access the value using:

```js
req.params.task_id
```

The value is normally a string, so if we need a number:

```js
const task_id = Number(req.params.task_id);
```

Route parameters are useful when working with a specific resource.

Examples:

```text
/users/10
/products/25
/orders/100
/tasks/5
```

The general structure is:

```text
/resource/:id
```

---

# Reading Query Parameters with req.query

Query parameters are additional values added after `?` in the URL.

Example:

```http
GET /api/v1/tasks?page=2&limit=10
```

The query parameters are:

```text
page = 2
limit = 10
```

Express makes them available through:

```js
req.query
```

For example:

```js
console.log(req.query);
```

produces:

```js
{
    page: '2',
    limit: '10'
}
```

Individual values can be accessed using:

```js
req.query.page
req.query.limit
```

Because query parameter values are normally strings, convert them when numerical calculations are required:

```js
const page = Number(req.query.page);
const limit = Number(req.query.limit);
```

Query parameters are commonly used for:

```text
Filtering
Searching
Sorting
Pagination
```

Examples:

```text
/products?category=shoes
/users?role=admin
/tasks?status=completed
/products?sort=price
/tasks?page=2&limit=10
```

---

# req.params vs req.query

These two are commonly confused.

### req.params

Used to identify a specific resource or part of the URL path.

```http
GET /tasks/25
```

```js
req.params.task_id
```

Result:

```text
25
```

### req.query

Used for optional instructions or filters.

```http
GET /tasks?page=2&limit=10
```

```js
req.query.page
req.query.limit
```

Result:

```text
2
10
```

A simple way to remember:

```text
/tasks/25
       ↑
    req.params


/tasks?page=2
      ↑
   req.query
```

---

# Processing JSON Payloads with express.json()

A **payload** is the actual data sent in the request.

For example, when creating a task, the client may send:

```json
{
    "title": "Learn Express",
    "description": "Learn routing",
    "priority": "high"
}
```

This JSON data is the request payload.

Express provides the JSON middleware:

```js
app.use(express.json());
```

This middleware parses incoming JSON request bodies and makes the resulting JavaScript object available through:

```js
req.body
```

For example:

```js
app.post('/tasks', (req, res) => {

    console.log(req.body);

    res.json({
        success: true
    });
});
```

If the client sends:

```json
{
    "title": "Learn Express",
    "priority": "high"
}
```

then:

```js
req.body
```

contains the corresponding JavaScript object.

We can access individual values:

```js
req.body.title
req.body.priority
```

The request flow is:

```text
Client
   ↓
JSON request body
   ↓
express.json()
   ↓
req.body
   ↓
Route handler
```

`express.json()` is therefore middleware that allows Express to understand JSON request bodies.

---

# Structuring Routes with express.Router()

As an application grows, putting every route inside `server.js` becomes difficult to maintain.

For example, an application may have:

```text
Users
Products
Orders
Tasks
Comments
```

If every route is written in one file, the file can become very large.

Express provides:

```js
express.Router()
```

to organize related routes into separate files.

---

# Express Data Validation and Middleware

Express middleware is one of the most important concepts in an Express.js application. Middleware allows us to execute code between receiving a request and sending a response.

Middleware can be used for logging requests, authentication, validation, modifying request or response data, handling errors, and many other tasks.

In this topic, we learn how middleware works as a pipeline, how to pass information between middleware using `res.locals`, how to handle errors using a custom `AppError` class, and how to validate incoming request data using Zod.

## Middleware Execution Pipeline

When a client sends a request to an Express server, the request does not always directly reach the route handler.

The request can pass through multiple middleware functions first.

For example:

```text
Client Request
      ↓
Application Middleware
      ↓
Router Middleware
      ↓
Custom Middleware
      ↓
Validation Middleware
      ↓
Route Handler
      ↓
Response
```

Each middleware performs a particular task and then decides whether the request should continue.

The `next()` function is used to move execution to the next middleware.

For example:

```js
function request_logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);

    next();
}
```

When `next()` is called, Express continues to the next middleware or route handler.

If `next()` is not called and no response is sent, the request can remain waiting.

## Application-Level Middleware

Application-level middleware is middleware attached directly to the Express application using `app.use()`.

Example:

```js
app.use(request_logger);
```

This middleware can run for requests that pass through the application.

A common use case is request logging.

```js
export function request_logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);

    next();
}
```

If the client sends:

```text
GET /api/v1/tasks
```

the middleware can print:

```text
GET /api/v1/tasks
```

The middleware then calls:

```js
next();
```

so the request can continue.

## Router-Level Middleware

Router-level middleware is attached to an Express router instead of the entire application.

Example:

```js
const task_router = express.Router();

task_router.use((req, res, next) => {
    console.log('Router level middleware');

    next();
});
```

This middleware belongs to `task_router`.

It is useful when middleware should apply only to a particular group of routes.

For example:

```text
/api/v1/tasks
```

can have its own router-level middleware.

## Custom Middleware

Custom middleware is middleware that we create ourselves for a specific application requirement.

For example:

```js
export function check_task_request(req, res, next) {
    console.log('Custom task middleware');

    next();
}
```

We can attach it to a particular route:

```js
task_router.post(
    '/',
    check_task_request,
    (req, res) => {
        // create task
    }
);
```

This means `check_task_request` runs before the route handler.

## The Role of next()

The `next()` function tells Express:

> Continue processing this request.

For example:

```js
function middleware_a(req, res, next) {
    console.log('Middleware A');

    next();
}

function middleware_b(req, res, next) {
    console.log('Middleware B');

    next();
}
```

The execution is:

```text
Request
   ↓
Middleware A
   ↓
next()
   ↓
Middleware B
   ↓
next()
   ↓
Route Handler
```

Without `next()`, Express will not automatically move to the next middleware.

## Passing State with res.locals

Sometimes one middleware needs to create some information and another middleware or route needs to use that information.

Express provides `res.locals` for this purpose.

`res.locals` is an object that belongs to the current request and response cycle.

For example:

```js
res.locals.task_info = {
    request_method: req.method,
    request_url: req.originalUrl,
    received_at: new Date().toISOString()
};
```

Here:

```text
res
 ↓
locals
 ↓
task_info
```

`res.locals` is provided by Express.

`task_info` is a property name created by the developer.

It is not a special Express keyword.

## Reading Data from res.locals

After one middleware stores information:

```js
res.locals.task_info = {
    request_method: req.method,
    request_url: req.originalUrl
};
```

another middleware or route can access it:

```js
console.log(res.locals.task_info);
```

Individual properties can also be accessed:

```js
console.log(res.locals.task_info.request_method);
```

For a POST request, this could produce:

```text
POST
```

## Why Use res.locals

`res.locals` is useful when information needs to move from one middleware to another during the same request.

For example:

```text
Middleware A
     ↓
creates task_info
     ↓
res.locals.task_info
     ↓
Middleware B
     ↓
uses task_info
```

This avoids unnecessarily modifying `req.body` or creating global variables.

The information stored in `res.locals` belongs to the current request. It is not intended to be permanent storage.

## req.body and res.locals

These two objects have different purposes.

`req.body` contains data sent by the client.

For example:

```json
{
    "title": "Complete assignment"
}
```

The application can access it using:

```js
req.body.title
```

`res.locals` contains information created by the application and passed between middleware during the current request.

For example:

```js
res.locals.task_info = {
    request_method: req.method
};
```

So:

```text
req.body
→ client-provided data

res.locals
→ application-generated request information
```

## Custom AppError Class

Applications need to handle errors properly.

JavaScript already provides the built-in `Error` class.

For example:

```js
const error = new Error('Something went wrong');
```

However, an API often needs additional information such as an HTTP status code.

For example:

```text
Task not found
404
```

The normal `Error` class does not provide our application-specific `status_code`.

We can create our own error class by extending `Error`.

```js
export class AppError extends Error {
    constructor(message, status_code) {
        super(message);

        this.status_code = status_code;
        this.is_operational = true;
    }
}
```

## Understanding extends

The `extends` keyword creates inheritance between classes.

```js
class AppError extends Error
```

means:

> AppError inherits from the built-in Error class.

Therefore, `AppError` can use the features provided by `Error`.

## Understanding super

Inside the constructor:

```js
super(message);
```

calls the constructor of the parent class, which is `Error`.

The message is passed to the built-in `Error` class.

For example:

```js
const error = new AppError('Task not found', 404);
```

The resulting object contains information such as:

```text
message
Task not found

status_code
404

is_operational
true
```

The `status_code` and `is_operational` properties are added by our `AppError` class.

## Operational Errors

An operational error is an error that the application expects can happen during normal operation.

Examples include:

```text
Task not found
User not found
Invalid request
Unauthorized request
Resource not found
```

For example:

```js
next(new AppError('Task not found', 404));
```

This represents an expected API error.

The `is_operational` property can be used to identify this type of application error.

## Passing Errors with next

An error can be passed to Express using:

```js
next(error);
```

For example:

```js
next(new AppError('Task not found', 404));
```

When an error is passed to `next()`, Express looks for error-handling middleware.

The flow becomes:

```text
Route
  ↓
Error occurs
  ↓
next(error)
  ↓
Error-handling middleware
  ↓
Response
```

## Global Error-Handling Middleware

Instead of handling errors separately in every route, we can create one central error handler.

Example:

```js
export function error_handler(err, req, res, next) {
    const status_code = err.status_code || 500;

    res.status(status_code).json({
        success: false,
        message: err.message || 'Internal server error'
    });
}
```

The first parameter is `err`.

This is important because Express identifies middleware with four parameters as error-handling middleware.

```js
(err, req, res, next)
```

## Why Use a Global Error Handler

Without centralized error handling, different routes may return errors in different formats.

For example, one route might return:

```json
{
    "error": "Task not found"
}
```

while another might return:

```json
{
    "message": "Task does not exist"
}
```

A global error handler allows the application to maintain a consistent error response.

For example:

```json
{
    "success": false,
    "message": "Task not found"
}
```

## Handling 404 Errors

There are different types of 404 situations.

One situation occurs when a route exists but the requested resource does not exist.

For example:

```text
GET /api/v1/tasks/999
```

If task `999` does not exist:

```js
next(new AppError('Task not found', 404));
```

The error is passed to the global error handler.

Another situation occurs when the requested route itself does not exist.

For example:

```text
GET /api/v1/products
```

if there is no `/api/v1/products` route.

A `not_found` middleware can handle this:

```js
import { AppError } from '../utils/app_error.js';

export function not_found(req, res, next) {
    next(
        new AppError(
            `Route not found: ${req.method} ${req.originalUrl}`,
            404
        )
    );
}
```

## Handling 500 Errors

A `500 Internal Server Error` represents an unexpected server-side error.

For example:

```js
throw new Error('Something went wrong');
```

This error does not contain our custom `status_code`.

Therefore:

```js
const status_code = err.status_code || 500;
```

uses `500` as the default.

The response can be:

```json
{
    "success": false,
    "message": "Something went wrong"
}
```

with HTTP status:

```text
500
```

## Middleware Order

Middleware order is very important in Express.

A typical structure is:

```js
app.use(request_logger);

app.use('/api/v1/tasks', task_router);

app.use(not_found);

app.use(error_handler);
```

The error handler should be placed after the routes and other middleware that can generate errors.

The execution can be understood as:

```text
Request
   ↓
request_logger
   ↓
task_router
   ↓
not_found
   ↓
error_handler
```

When a route calls:

```js
next(error);
```

Express moves the error to the error-handling middleware.

## Request Payload Validation

Clients send data to an API through the request body.

For example:

```json
{
    "title": "Complete assignment",
    "email": "dinesh@gmail.com",
    "due_date": "2026-10-10"
}
```

The server should not blindly trust this data.

The client might send incorrect data such as:

```json
{
    "title": "Complete assignment",
    "email": "hello",
    "due_date": "tomorrow"
}
```

If this invalid data reaches the application logic, it can cause unexpected behavior or runtime problems.

Validation allows us to check the data before processing it.

## Zod

Zod is a JavaScript and TypeScript library used for data validation.

We can define the expected structure of request data using a schema.

For example:

```js
import { z } from 'zod';

export const task_schema = z.object({
    title: z.string(),
    email: z.email(),
    due_date: z.string().date()
});
```

This schema describes the expected data.

The rules are:

```text
title
→ must be a string

email
→ must be a valid email

due_date
→ must be a valid date string
```

## Zod Object Schema

The request body is normally an object.

For example:

```json
{
    "title": "Complete assignment",
    "email": "dinesh@gmail.com",
    "due_date": "2026-10-10"
}
```

Therefore, we use:

```js
z.object({
    ...
})
```

This tells Zod that the expected input should be an object containing the defined fields.

## Email Validation

Zod can validate an email using:

```js
email: z.email()
```

A valid email could be:

```text
dinesh@gmail.com
```

An invalid value could be:

```text
dinesh
```

If the email does not follow the expected email structure, validation fails.

## Date Validation

The task requires date-format validation.

For example:

```js
due_date: z.string().date()
```

This validates a date string such as:

```text
2026-10-10
```

Invalid values include examples such as:

```text
tomorrow
10/10/2026
10-10-2026
```

depending on the format expected by the schema.

## Validation Middleware

The schema only defines the rules. We still need middleware to apply those rules to incoming requests.

Example:

```js
import { task_schema } from '../schemas/task_schema.js';

export function validate_task(req, res, next) {
    const validation_result = task_schema.safeParse(req.body);

    if (!validation_result.success) {
        const error_messages = validation_result.error.issues.map(issue => ({
            field: issue.path[0],
            message: issue.message
        }));

        return res.status(400).json({
            success: false,
            errors: error_messages
        });
    }

    next();
}
```

The important operation is:

```js
task_schema.safeParse(req.body);
```

It gives the request body to Zod for validation.

## Understanding safeParse

`safeParse()` checks the data without directly throwing a validation exception for a normal validation failure.

The result tells us whether validation succeeded.

For valid data:

```js
validation_result.success
```

is:

```text
true
```

For invalid data:

```text
false
```

and Zod provides information about the validation errors.

## Clean Validation Errors

Zod provides detailed information about every validation problem.

We can convert those details into a simpler API response:

```js
const error_messages = validation_result.error.issues.map(issue => ({
    field: issue.path[0],
    message: issue.message
}));
```

The client can then receive:

```json
{
    "success": false,
    "errors": [
        {
            "field": "email",
            "message": "Invalid email address"
        },
        {
            "field": "due_date",
            "message": "Invalid date"
        }
    ]
}
```

This gives the client a clean list of fields that need to be corrected.

## Validation Middleware in the Route

The validation middleware can be placed before the route handler.

For example:

```js
task_router.post(
    '/',
    check_task_request,
    validate_task,
    (req, res) => {
        // create task
    }
);
```

The request must pass through `validate_task` before the route handler executes.

The flow is:

```text
POST /api/v1/tasks
        ↓
check_task_request
        ↓
validate_task
        ↓
Zod validation
        ↓
    Valid?
    /     \
  Yes      No
   ↓        ↓
next()     400
   ↓
Route Handler
```
# Database Integration and Object Relational Mapping

Database integration is an important part of a Node.js application because application data usually needs to be stored permanently rather than kept only in memory. A database allows an application to store, retrieve, update, and delete information whenever it is required.

In a Node.js application, the database is normally accessed through a database driver, ORM, or ODM. The choice depends on the type of database being used and the way the application's data is structured.

For example, an e-commerce application may need to store users, products, and orders. Instead of keeping this information inside JavaScript arrays, the application stores it in a database so the information remains available even after the server is restarted.

## Relational Data Modeling

A relational database stores information in tables. Each table contains rows and columns, and each row normally represents one record.

Popular relational databases include MySQL, PostgreSQL, Microsoft SQL Server, and Oracle.

For example, an e-commerce application could have separate tables for users, products, and orders.

```text
users
--------------------------------
user_id | name          | email
1       | Gowtham       | gowtham@gmail.com
2       | Arul          | arul@gmail.com
```

```text
products
--------------------------------
product_id | name              | price
101        | Dell Laptop       | 62000
102        | Wireless Mouse    | 1200
```

```text
orders
--------------------------------
order_id | user_id | total_amount
5001     | 1       | 63200
5002     | 2       | 1200
```

The `user_id` in the orders table connects an order with a user. This type of connection is called a relationship.

Relational databases are useful when an application has structured data and requires strong relationships between different types of records.

## Primary Keys

A primary key is a column that uniquely identifies each record in a table.

For example:

```text
user_id
1
2
3
```

Each user has a different `user_id`. This allows the application to identify a particular user without depending on the user's name or email address.

In MongoDB, a similar purpose is handled by the `_id` field.

## Foreign Keys

A foreign key is used to create a relationship between tables.

For example:

```text
users
user_id
   1
   2
   3

        ↓

orders
order_id | user_id
5001     | 1
5002     | 2
```

Here, `orders.user_id` refers to `users.user_id`.

This allows the database to determine which user placed an order.

## Non-Relational Data Modeling

Non-relational databases, commonly called NoSQL databases, do not primarily store data using traditional tables and rows.

MongoDB is a popular NoSQL database used with Node.js.

MongoDB stores data as documents inside collections.

A product document may look like this:

```json
{
    "_id": "101",
    "name": "Dell Laptop",
    "price": 62000,
    "stock": 15,
    "category": "Laptops"
}
```

Instead of having separate columns, the document contains fields that describe the product.

MongoDB provides flexibility when the structure of documents may change or when an application needs to work naturally with JSON-like data.

## SQL and NoSQL Modeling

SQL and NoSQL databases approach data relationships differently.

In SQL, related information is commonly separated into different tables and connected using keys.

For example:

```text
users
   |
   | user_id
   ↓
orders
```

In MongoDB, related information can either be embedded inside a document or stored separately and referenced using an ID.

For example, an order can contain its order items directly:

```json
{
    "user_id": "user_101",
    "items": [
        {
            "product_id": "product_201",
            "quantity": 2,
            "price_at_purchase": 62000
        }
    ]
}
```

The appropriate approach depends on how the application reads and manages its data.

## Embedding and Referencing

MongoDB provides two common ways of representing relationships: embedding and referencing.

Embedding means storing related information directly inside the parent document.

For example, an order can contain its items:

```json
{
    "order_id": "5001",
    "user_id": "101",
    "items": [
        {
            "product_id": "201",
            "quantity": 2
        },
        {
            "product_id": "202",
            "quantity": 1
        }
    ]
}
```

This is useful when the related data normally belongs to the parent and is usually retrieved together.

Referencing means storing the ID of another document instead of storing the complete document.

For example:

```json
{
    "order_id": "5001",
    "user_id": "101"
}
```

The application can then use `user_id` to retrieve the corresponding user.

Referencing is useful when the related data is large, shared by multiple documents, or managed independently.

## Database Connection Pooling

A database connection is the communication channel between the Node.js application and the database.

Creating a new database connection for every request can be inefficient because establishing a connection takes time and resources.

Connection pooling solves this problem by maintaining a group of reusable database connections.

The general flow is:

```text
Node.js application
        |
        ↓
Connection Pool
   |    |    |
   ↓    ↓    ↓
 DB   DB   DB
Connection Connections
```

When a request needs to access the database, it can use an available connection from the pool.

After the operation is completed, the connection can be returned to the pool and reused for another request.

This improves application performance and avoids repeatedly creating new database connections.

Mongoose manages the underlying MongoDB connections and provides configuration options for connection pooling.

## Database Connection Events

Database connections can change state during the lifetime of an application. Mongoose provides connection events that allow the application to respond to these changes.

For example:

```js
mongoose.connection.on("connected", () => {
    console.log("MongoDB connection established");
});

mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error.message);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});
```

The `connected` event is triggered when the connection has been successfully established.

The `error` event is useful for detecting database connection errors.

The `disconnected` event is triggered when the application loses its connection to MongoDB.

The `on()` method is used to register a function that should execute when a particular event occurs.

It is important to distinguish between starting a connection and listening for an event.

```js
await mongoose.connect(process.env.MONGODB_URI);
```

This starts the connection process.

```js
mongoose.connection.on("connected", () => {
    console.log("MongoDB connection established");
});
```

This listens for the connection event.

## Indexing Strategies

An index is a data structure that helps the database find records more efficiently.

Without an appropriate index, the database may need to examine many documents to find the required record.

For example, an e-commerce application may frequently search users by email:

```text
Find user where email = "gowtham@gmail.com"
```

Creating an index on the email field can make this type of lookup more efficient.

In Mongoose, an index can be defined in a schema:

```js
const user_schema = new mongoose.Schema({
    name: String,

    email: {
        type: String,
        required: true,
        unique: true
    }
});
```

The `unique` option creates a uniqueness constraint through an index.

Indexes should be created based on actual query patterns. Adding too many indexes can also have a cost because the database needs to maintain those indexes when documents are inserted or updated.

## ODM

ODM stands for Object Document Mapping.

An ODM provides a convenient way for a Node.js application to work with a document-oriented database such as MongoDB.

Mongoose is a commonly used ODM for MongoDB.

The basic flow is:

```text
Node.js
   ↓
Mongoose
   ↓
MongoDB Driver
   ↓
MongoDB
```

Mongoose provides features such as schemas, models, validation, middleware, and population.

This allows developers to work with MongoDB documents using JavaScript objects and Mongoose models instead of writing every database operation directly through the MongoDB driver.

## ORM

ORM stands for Object Relational Mapping.

An ORM is mainly used with relational databases such as PostgreSQL and MySQL.

Popular Node.js ORM tools include Prisma and Sequelize.

An ORM maps application objects and operations to database tables and SQL operations.

For example, instead of manually writing SQL for every operation, an ORM can provide JavaScript or TypeScript methods for creating, reading, updating, and deleting records.

The general flow is:

```text
Node.js
   ↓
ORM
   ↓
SQL Database
```

Prisma and Sequelize are examples of tools that can be used when building Node.js applications with relational databases.

## Mongoose Schema

A schema defines the structure and rules that documents should follow in a MongoDB collection.

For example:

```js
const product_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 1
    },

    stock: {
        type: Number,
        default: 0,
        min: 0
    }
});
```

This schema says that a product must have a `name` and `price`.

The price must be a number and cannot be less than `1`.

The stock is also a number and defaults to `0` if a value is not provided.

Schemas help maintain consistent data even though MongoDB itself is flexible about document structure.

## Mongoose Model

A model is created from a schema and provides the interface used to interact with a MongoDB collection.

For example:

```js
export const product_model = mongoose.model(
    "Product",
    product_schema
);
```

Once the model is created, it can be used to perform database operations.

For example:

```js
const products = await product_model.find();
```

Here, `product_model` communicates with MongoDB and retrieves the product documents.

The relationship between schema and model can be understood as:

```text
Schema
  ↓
Defines structure and rules
  ↓
Model
  ↓
Performs database operations
  ↓
MongoDB Collection
```

## One-to-Many Relationship

A one-to-many relationship occurs when one record can be related to many records.

For example, one user can place many orders.

```text
User
  |
  ├── Order 1001
  ├── Order 1002
  └── Order 1003
```

In MongoDB, the order can store a reference to the user.

```js
user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
}
```

Here, `ref: "User"` tells Mongoose that the referenced document belongs to the `User` model.

This prevents the application from having to duplicate the complete user information inside every order.

## Many-to-Many Relationship

A many-to-many relationship occurs when multiple records from one entity can be related to multiple records from another entity.

In an e-commerce application, one order can contain many products, and one product can appear in many different orders.

```text
Order 1001 ─── Product 101
          └── Product 102

Order 1002 ─── Product 101
          └── Product 103
```

An order item structure can represent this relationship:

```json
{
    "product_id": "101",
    "quantity": 2,
    "price_at_purchase": 62000
}
```

An order can contain an array of these items:

```json
{
    "user_id": "501",
    "items": [
        {
            "product_id": "101",
            "quantity": 2,
            "price_at_purchase": 62000
        },
        {
            "product_id": "102",
            "quantity": 1,
            "price_at_purchase": 1200
        }
    ]
}
```

This approach is especially useful for an order because the order needs to preserve information about what was purchased.

The `price_at_purchase` field is important because the current product price may change later.

For example, if a laptop costs ₹62,000 when the order is placed and its price later changes to ₹65,000, the old order should still show ₹62,000.

## Population in Mongoose

Population is a Mongoose feature that allows referenced documents to be retrieved along with the document containing the reference.

Suppose an order contains:

```js
user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
}
```

Normally, the order may contain only the user's ObjectId.

Using `populate()`:

```js
const orders = await order_model
    .find()
    .populate("user_id");
```

Mongoose retrieves the referenced user and includes the user information in the result.

Without population:

```json
{
    "user_id": "66f123..."
}
```

With population:

```json
{
    "user_id": {
        "_id": "66f123...",
        "name": "Gowtham Kumar",
        "email": "gowtham@gmail.com"
    }
}
```

Population is useful when the application needs information from related documents.

## Joins in SQL

In relational databases, related data is commonly combined using joins.

For example, if users and orders are stored in separate tables, an SQL query can combine them:

```sql
SELECT users.name, orders.total_amount
FROM users
JOIN orders
ON users.user_id = orders.user_id;
```

The join connects records using the relationship between the two tables.

This is conceptually similar to retrieving related documents in MongoDB using population, although the underlying mechanisms are different.

## Population and Joins

Both population and joins help an application work with related data, but they belong to different database approaches.

```text
SQL
 ↓
Tables
 ↓
Foreign Keys
 ↓
JOIN
```

```text
MongoDB + Mongoose
 ↓
Documents
 ↓
References
 ↓
populate()
```

For example, an order may contain a reference to a user.

In SQL, the application can use a `JOIN` to retrieve the user's details.

In Mongoose, the application can use:

```js
.populate("user_id")
```

to retrieve the referenced user.

## Choosing SQL or NoSQL

The choice between SQL and NoSQL depends on the application's requirements.

A relational database can be useful when the application has strongly structured data, complex relationships, and operations that depend heavily on transactions and joins.

A NoSQL database such as MongoDB can be useful when the application works naturally with document-based data, requires flexible document structures, or commonly retrieves related information as part of a document.

Neither approach is universally suitable for every application. The data model and access patterns should be considered before choosing the database.

## E-commerce Database Structure

For the e-commerce API developed in this module, the main models are User, Product, and Order.

```text
User
 ├── name
 ├── email
 ├── phone
 └── role

Product
 ├── name
 ├── description
 ├── price
 ├── stock
 ├── category
 └── status

Order
 ├── user_id
 ├── items
 │    ├── product_id
 │    ├── quantity
 │    └── price_at_purchase
 ├── total_amount
 └── status
```

The `Order` model connects users and products.

```text
User
  │
  │ user_id
  ↓
Order
  │
  ├── product_id → Product
  ├── product_id → Product
  └── product_id → Product
```

This structure allows the application to keep users, products, and orders as separate entities while still maintaining relationships between them.

# Secure Password Hashing with bcrypt

## What is Password Hashing?

Password hashing is the process of converting a user's plain-text password into a one-way hashed value before storing it in the database.

For example, a user enters:

```text
Arul@123
```

The application should **never store**:

```text
Arul@123
```

Instead, bcrypt converts it into a hash similar to:

```text
$2b$10$N9qo8uLOickgx2ZMRZoMye...
```

The hash is stored in the database instead of the original password.

The important point is that **hashing is one-way**. The application does not normally convert the hash back into the original password.

---

## Why Should Passwords Be Hashed?

If passwords were stored as plain text and the database were compromised, an attacker could immediately see users' passwords.

For example:

```text
Email                  Password
--------------------------------------
arul@example.com       Arul@123
```

This is unsafe.

With password hashing:

```text
Email                  Password Hash
----------------------------------------------
arul@example.com       $2b$10$N9qo8uLOickgx...
```

Even if the database is exposed, the original password is not directly stored.

---

## Hashing vs Encryption

Hashing and encryption are different.

### Hashing

```text
Password
   ↓
Hashing
   ↓
Password Hash
```

Hashing is designed to be one-way.

### Encryption

```text
Plain Text
   ↓
Encryption + Key
   ↓
Encrypted Data
   ↓
Decryption + Key
   ↓
Plain Text
```

Encryption is designed to be reversible when the correct key is available.

Passwords should normally be **hashed**, not encrypted.

---

## What is bcrypt?

`bcrypt` is a password-hashing algorithm designed specifically for securely storing passwords.

In Node.js, it can be installed using:

```powershell
npm install bcrypt
```

Then imported using:

```js
import bcrypt from "bcrypt";
```

---

## Password Registration Flow

When a new user registers:

```text
User enters password
        ↓
Plain-text password
        ↓
bcrypt.hash()
        ↓
Password hash
        ↓
Store hash in MongoDB
```

For example:

```js
const hashed_password = await bcrypt.hash(password, 10);
```

The original password should not be stored.

---

## bcrypt.hash()

The syntax is:

```js
bcrypt.hash(password, salt_rounds)
```

Example:

```js
const hashed_password = await bcrypt.hash(password, 10);
```

There are two important values here.

### Password

```js
password
```

This is the password entered by the user.

For example:

```text
Arul@123
```

### Salt Rounds

```js
10
```

This controls how much computational work bcrypt performs while generating the hash.

A higher cost makes password hashing more computationally expensive, which makes large-scale password guessing more difficult.

---

## What is a Salt?

A salt is random data incorporated into password hashing.

Suppose two users choose the same password:

```text
User 1 → Arul@123
User 2 → Arul@123
```

bcrypt uses different random salts, so their resulting hashes can be different.

This prevents identical passwords from simply producing identical stored hash values.

The salt information is incorporated into the bcrypt hash, so bcrypt can use it later during password verification.

---

## Why Do We Use Salt Rounds?

Password hashing should intentionally be slower than normal hashing.

A normal hash function such as SHA-256 is extremely fast.

That is useful for many applications, but password hashing needs a different approach because attackers may try millions of password guesses.

bcrypt deliberately makes each password hashing operation more expensive.

The idea is:

```text
Attacker
   ↓
Millions of guesses
   ↓
bcrypt makes each guess expensive
   ↓
Attack becomes harder
```

---

## Storing the Password Hash

During registration:

```js
const hashed_password = await bcrypt.hash(password, 10);

const user = await user_model.create({
    name,
    email,
    password: hashed_password,
    phone
});
```

The database receives the hash:

```text
password
    ↓
$2b$10$...
```

not:

```text
Arul@123
```

---

## Protecting the Password Field with select: false

In the Mongoose user schema, the password field can be defined as:

```js
password: {
    type: String,
    required: true,
    select: false
}
```

`select: false` means Mongoose will exclude the password field from normal queries.

For example:

```js
const user = await user_model.findOne({ email });
```

The result does not normally contain:

```js
user.password
```

This provides an additional layer of protection against accidentally returning password hashes.

---

## Retrieving the Password Hash During Login

During login, we need the stored hash so that bcrypt can compare it with the password entered by the user.

Because the field has:

```js
select: false
```

we explicitly request it:

```js
const user = await user_model
    .findOne({ email })
    .select("+password");
```

The `+password` means:

> Include the normally excluded password field in this query.

This does **not** mean the password is decrypted.

It only retrieves the already-stored hash.

---

## bcrypt.compare()

During login, the user enters a password again.

For example:

```text
User enters:

Arul@123
```

The database contains:

```text
$2b$10$...
```

We should not hash the entered password manually and compare the strings because bcrypt handles the salt and verification process.

Instead:

```js
const password_match = await bcrypt.compare(
    password,
    user.password
);
```

bcrypt internally checks whether the entered password corresponds to the stored hash.

The result is:

```js
true
```

or:

```js
false
```

---

## Login Flow

The complete login process is:

```text
User enters email + password
            ↓
Find user by email
            ↓
Retrieve password hash
            ↓
bcrypt.compare()
            ↓
      Password correct?
        ↙          ↘
      No            Yes
      ↓              ↓
    401          Continue login
                     ↓
                 Create JWT
```

---

## Why We Don't Return the Password

Even though the password hash exists in the database, it should not be included in API responses.

For example, this is unsafe:

```js
res.json({
    user: user
});
```

because the object could contain sensitive information depending on the query.

Instead, return only the information required by the client:

```js
user: {
    id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role
}
```

The password and password hash should never be returned to the client.

---

## Handling Invalid Login Credentials

When the email does not exist:

```text
Invalid email or password
```

When the email exists but the password is incorrect:

```text
Invalid email or password
```

Both cases should use the same response.

For example:

```js
if (!user) {
    return res.status(401).json({
        success: false,
        message: "Invalid email or password"
    });
}
```

and:

```js
if (!password_match) {
    return res.status(401).json({
        success: false,
        message: "Invalid email or password"
    });
}
```

This prevents the API from unnecessarily revealing whether a particular email address is registered.

---

## bcrypt vs Argon2

Both bcrypt and Argon2 are password-hashing algorithms.

### bcrypt

```text
Widely used
Easy Node.js integration
Mature and well established
```

### Argon2

```text
Modern password-hashing algorithm
Designed to be resistant to certain password-cracking attacks
Supports memory-hard configuration
```

For this project, bcrypt was selected and implemented.

---

## Important Security Rules

Never store:

```text
Plain-text passwords
```

Never return:

```text
Password hashes
```

Never put passwords inside a JWT payload.

Use a password-hashing algorithm such as:

```text
bcrypt
```

or:

```text
Argon2
```

Use an appropriate cost/work factor.

Use generic authentication error messages such as:

```text
Invalid email or password
```

---

## Complete Authentication Password Flow

The complete process implemented in the project is:

```text
                 REGISTRATION

User Password
      ↓
bcrypt.hash()
      ↓
Password Hash
      ↓
MongoDB


                   LOGIN

Email + Password
      ↓
Find User
      ↓
Retrieve Password Hash
      ↓
bcrypt.compare()
      ↓
Password Correct?
      ↓
Generate JWT
      ↓
Return Token
```

