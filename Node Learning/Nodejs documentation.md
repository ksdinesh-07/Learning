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

