# JavaScript Notes

My personal notes on JavaScript, written while learning the language properly instead of copy-pasting from Stack Overflow. Everything here is in my own words, with examples taken from the kind of thing I actually build — e-commerce carts, login flows, product lists, order status.

If you're reading this and you're also learning JS, feel free to use it. Just know it's study material, not documentation.

## Contents

1. [Introduction to JavaScript](#1-introduction-to-javascript)
2. [Variables and Data Types](#2-variables-and-data-types)
3. [How JavaScript Runs Your Code](#3-how-javascript-runs-your-code)
4. [Operators](#4-operators)
5. [Control Flow](#5-control-flow)
6. [Loops](#6-loops)
7. [Functions](#7-functions)
8. [Hoisting](#8-hoisting)
9. [Scope and Closures](#9-scope-and-closures)
10. [Arrays](#10-arrays)
11. [Objects](#11-objects)
12. [Strings](#12-strings)
13. [Numbers and Math](#13-numbers-and-math)
14. [Dates](#14-dates)
15. [Things I Keep Forgetting](#15-things-i-keep-forgetting)

## How to run the examples

Everything here runs in either a browser console or Node.

```bash
# Node
node example.js

# or just open devtools in the browser and paste
```

A few examples use `prompt()` and `document.querySelector()` — those are browser-only. They won't work in Node.

## 1. Introduction to JavaScript

The three web languages split responsibilities like this:

| Language | Responsibility |
|---|---|
| HTML | Structure and content |
| CSS | Presentation and layout |
| JavaScript | Behaviour and logic |

On a product card: HTML creates the image, name, price and button. CSS handles the colours and spacing. JavaScript makes **Add to Cart** actually do something.

### Before JavaScript existed

Early sites were basically documents. HTML gave you headings, paragraphs, images, links, tables, forms and lists — but no way to *decide* anything. The flow was always:

```
User clicks link → browser requests → server processes → server returns HTML → browser renders
```

That's fine for documents, painful for applications. Validating an email address meant a full round trip to the server.

Two things filled the gap before JS:

- **Server-side processing** — still essential today, but wasteful for small interactions.
- **Java applets** — more capable, but needed a plugin and brought security, performance and integration problems with them.

The web needed something lightweight that lived inside the browser.

### Where the language came from

Brendan Eich built it at Netscape in 1995. The name changed twice before release:

```
Mocha → LiveScript → JavaScript
```

It shipped with Netscape Navigator 2.0. **JavaScript is not Java** — the name was a marketing decision, nothing more.

Microsoft then shipped their own implementation, JScript, in Internet Explorer. Same idea, different behaviour, and suddenly the same code did different things in different browsers.

### ECMAScript

Standardisation work started in November 1996 under Ecma International's TC39 committee. The standard is **ECMA-262**, the language it defines is **ECMAScript**, and the first edition was adopted in June 1997.

So: JavaScript is the language you write; ECMAScript is the spec it implements.

## 2. Variables and Data Types

A variable is a named reference to a value.

```js
let age = 21;
//  │    │  └── value
//  │    └───── assignment operator
//  └────────── declaration keyword + name
```

### `var`, `let`, `const`

```js
var name = "Dinesh";   // old style
let age = 21;          // can be reassigned
const country = "India"; // must be initialised, cannot be reassigned
```

| | Reassign | Redeclare in same scope | Scope |
|---|---|---|---|
| `var` | yes | yes | function |
| `let` | yes | no | block |
| `const` | no | no | block |

The block-scope difference is the one that actually bites you:

```js
var price = 100;
if (true) {
  var price = 80;
}
console.log(price); // 80  ← the outer one got overwritten

let cost = 100;
if (true) {
  let cost = 80;
}
console.log(cost); // 100 ← separate binding
```

Use `const` by default, `let` when the value genuinely changes, `var` basically never.

`const` prevents *reassignment*, not mutation — you can still push to a `const` array or edit a `const` object's properties.

### Declaration vs assignment vs initialisation

```js
let a;        // declaration (value is undefined)
a = 21;       // assignment
let b = 21;   // initialisation (both at once)
```

### Primitive types

| Type | Example | Notes |
|---|---|---|
| String | `"Dinesh"` | single, double or backtick quotes |
| Number | `21`, `32.5` | integers and decimals both |
| Boolean | `true` / `false` | |
| Undefined | `let x;` | declared, no value yet |
| Null | `let x = null;` | deliberately empty |
| BigInt | `12345678901234567890n` | note the `n` suffix |
| Symbol | `Symbol("id")` | always unique |

`undefined` vs `null` is the distinction people trip on: `undefined` is *JavaScript hasn't put anything here*, `null` is *I decided there's nothing here*. Clearing `currentUser` on logout is `null`. A declared-but-unset variable is `undefined`.

BigInt exists because regular Numbers lose precision on very large integers. Real uses: crypto wallet amounts in Wei, Twitter/Discord snowflake IDs, encryption keys.

Symbols are unique even when the description matches:

```js
Symbol("id") === Symbol("id"); // false
```

### Non-primitive types

Objects, arrays and functions — anything that holds multiple values or behaviour.

```js
const student = { name: "Dinesh", age: 21, department: "AI & DS" };
const marks = [80, 75, 90, 85];
function add(a, b) { return a + b; }
```

Access object properties with dot or bracket notation, array elements by index (starting at 0).

### `typeof`

```js
typeof "Dinesh"     // "string"
typeof 21           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof 100n         // "bigint"
typeof Symbol("id") // "symbol"
typeof null         // "object"  ← historical bug, null is NOT an object
```

The `typeof null` result is a bug from 1995 that can never be fixed without breaking the web. Don't read anything into it.

### Dynamic typing

A variable can hold any type, and change type later:

```js
let value = 100;
value = "Hello";
value = true;
```

Convenient, but it means type errors show up at runtime instead of while you're writing.

## 3. How JavaScript Runs Your Code

Source code doesn't become output directly. Rough pipeline:

```
Source code → Engine → Parser → Global Execution Context
  → Memory creation → Code execution → Call Stack
  → Web APIs → Task Queue → Event Loop → back to Call Stack
```

### The runtime environment

```
Browser
└── JavaScript Runtime
    ├── Engine
    │   ├── Memory Heap   (objects, arrays, functions)
    │   └── Call Stack    (what's executing right now)
    ├── Web APIs          (DOM, timers, fetch, storage)
    ├── Task Queue        (callbacks waiting their turn)
    └── Event Loop        (moves callbacks into the stack)
```

Engines by browser: **V8** (Chrome, Node), **SpiderMonkey** (Firefox), **JavaScriptCore** (Safari).

### Execution contexts

Before running anything, the engine creates a Global Execution Context with two parts: a memory/environment part that holds the bindings, and an execution part that runs the statements. Every function call creates its own context on top.

The **memory creation phase** happens first — bindings for `products`, `cart`, `addToCart` all get prepared before a single line executes. Function declarations are fully available. `let` and `const` bindings exist but can't be touched until initialisation — that gap is the **Temporal Dead Zone**:

```js
console.log(cart);  // ReferenceError
const cart = [];
```

### The call stack

Last in, first out. Each call pushes a frame, each return pops it.

```js
function checkout() {
  validateCart();
  calculateTotal();
  createOrder();
}
```

Clicking checkout gives you roughly:

```
┌──────────────────────────┐
│ validateCart()           │ ← running
├──────────────────────────┤
│ checkout()               │
├──────────────────────────┤
│ click callback           │
├──────────────────────────┤
│ Global Execution Context │
└──────────────────────────┘
```

`validateCart()` pops, `calculateTotal()` pushes, and so on.

### Single threaded, but not blocking

JavaScript has **one** call stack. It executes one thing at a time. So how does a 2-second timer not freeze the page?

```js
setTimeout(() => console.log("Hello"), 2000);
```

The timer isn't JavaScript's job — the browser handles it. JS registers the callback and moves on. When the timer finishes, the browser drops the callback into the task queue. The **event loop** checks whether the call stack is empty, and only then lets the callback through.

That's the whole trick: the language is single threaded, the environment around it isn't.

## 4. Operators

An operator performs an operation on one or more operands.

```js
let finalPrice = 1000 - 200; // 800
//                    ↑ operator
```

### Arithmetic

| Operator | Meaning | Example |
|---|---|---|
| `+` | addition | `100 + 20` → `120` |
| `-` | subtraction | `5000 - 1200` → `3800` |
| `*` | multiplication | `500 * 3` → `1500` |
| `/` | division | `450 / 5` → `90` |
| `%` | remainder | `23 % 5` → `3` |
| `**` | exponentiation | `2 ** 3` → `8` |
| `++` | increment by 1 | `count++` |
| `--` | decrement by 1 | `count--` |

### Assignment

`=` assigns. The rest are shorthand — `score += 5` is just `score = score + 5`.

```js
let score = 10;
score += 5;   // 15
score -= 2;   // 13
score *= 2;   // 26
score /= 2;   // 13
score %= 5;   // 3
score **= 2;  // 9
```

### Comparison

Always returns a boolean.

| Operator | Checks |
|---|---|
| `>` `<` `>=` `<=` | ordering |
| `==` | equal **after type coercion** |
| `===` | equal in value **and** type |
| `!=` | not equal, coercion allowed |
| `!==` | not equal in value or type |

```js
100 == "100";   // true  ← string got converted
100 === "100";  // false ← different types
```

Use `===` and `!==`. Always. `==` doing silent conversions is where the weird bugs come from.

### Logical

```js
age >= 18 && hasLicense   // both must be true
isAdmin || isManager      // at least one true
!loggedIn                 // flips the boolean
```

Typical use: a login check needs correct email **and** correct password **and** an active account. A permission check passes if you're admin **or** manager.

### Bitwise

These work on the binary representation of numbers.

```
5 = 0101
3 = 0011

5 & 3  = 0001 = 1    both bits 1
5 | 3  = 0111 = 7    at least one bit 1
5 ^ 3  = 0110 = 6    bits differ
~5     = -6          every bit flipped
5 << 1 = 1010 = 10   shift left  (×2)
10 >> 1 = 0101 = 5   shift right (÷2)
10 >>> 1 = 5         shift right, zero-fill
```

Mostly used for permission flags, binary data, pixel manipulation and performance-sensitive integer work. Rare in everyday app code.

### Ternary

```js
const message = age >= 18 ? "Adult" : "Minor";
```

The same as an `if/else` that only assigns a value. Good for short conditions, bad if you start nesting them.

## 5. Control Flow

By default JS runs top to bottom. Control flow lets it make decisions.

### `if` / `else if` / `else`

```js
if (marks >= 90)      console.log("Grade A");
else if (marks >= 75) console.log("Grade B");
else if (marks >= 50) console.log("Grade C");
else                  console.log("Fail");
```

Important detail: JS stops at the **first** true condition. With `marks = 95`, both `>= 75` and `>= 50` are also true — they never get checked.

### `switch`

Better than a long `else if` chain when you're comparing one value against fixed options.

```js
switch (orderStatus) {
  case "pending":
    console.log("Your order is being processed");
    break;
  case "shipped":
    console.log("Your order is on the way");
    break;
  case "delivered":
    console.log("Your order has been delivered");
    break;
  default:
    console.log("Invalid order status");
}
```

Forget `break` and execution falls through into the next case. That's occasionally useful and usually a bug.

## 6. Loops

| Loop | Use it when |
|---|---|
| `for` | you know how many iterations |
| `while` | you repeat until a condition flips |
| `do...while` | the body must run at least once |
| `for...in` | you want an object's keys |
| `for...of` | you want an iterable's values |
| `forEach()` | you want to run a function per array element |

```js
const products = ["T-Shirt", "Jeans", "Shoes"];

for (let i = 0; i < products.length; i++) console.log(products[i]);

for (const product of products) console.log(product);

products.forEach((product, index) => console.log(index, product));
```

`for...in` is for objects:

```js
const user = { name: "Dinesh", age: 21, city: "Coimbatore" };

for (const key in user) {
  console.log(key, user[key]);
}
// name Dinesh
// age 21
// city Coimbatore
```

### `break` and `continue`

`break` exits the loop entirely. `continue` skips the current iteration only.

```js
for (const p of products) {
  if (p.stock === 0) continue;   // skip out-of-stock
  console.log(p.name);
}
```

## 7. Functions

A reusable block of code that does one job.

```js
function welcome(name) {
  console.log(`Welcome, ${name}`);
}

welcome("Dinesh");
```

**Parameters** are the names in the definition. **Arguments** are the values you pass in.

```js
function calculateTotal(price, quantity) { // parameters
  return price * quantity;
}
calculateTotal(500, 2); // arguments → 1000
```

`console.log()` *displays* a value. `return` *sends it back* so the caller can use it. Very different things.

### Three ways to write one

```js
// declaration
function calculateTotal(price, quantity) {
  return price * quantity;
}

// expression
const calculateTotal = function (price, quantity) {
  return price * quantity;
};

// arrow
const calculateTotal = (price, quantity) => price * quantity;
```

Declaring a function doesn't run it. It runs when you call it.

## 8. Hoisting

Declarations are processed when the execution context is created, before any code runs.

Function declarations are fully hoisted — this works:

```js
greet();
function greet() { console.log("Hello"); }
```

Function expressions and arrow functions assigned to `const`/`let` are not — this throws:

```js
greet();                              // ReferenceError
const greet = () => console.log("Hello");
```

The binding exists, but you can't touch it before its initialisation line. Temporal Dead Zone again.

## 9. Scope and Closures

Scope decides where a variable is reachable.

- **Global** — declared outside everything, reachable anywhere.
- **Function/local** — declared inside a function, gone outside it.
- **Block** — `let` and `const` inside `{ }` stay inside those braces.

```js
if (true) {
  let age = 21;
}
console.log(age); // ReferenceError
```

### Lexical scope

A function can see the variables of wherever it was **written**, not wherever it's called from.

```js
const company = "Litorox";
function outer() {
  const department = "Development";
  function inner() {
    const role = "Developer";
    console.log(company, department, role); // all three reachable
  }
  inner();
}
```

`inner` → `outer` → global. That's the **scope chain**.

### Shadowing

An inner variable with the same name hides the outer one. They're two separate bindings.

```js
let price = 1000;
function product() {
  let price = 500;
  console.log(price); // 500
}
product();
console.log(price);   // 1000
```

### Closures

A function that remembers its outer variables even after the outer function has finished.

```js
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
```

`count` isn't reachable from outside — `console.log(count)` throws. But the returned function still has it. That's private state, and it's the basis for a lot of real patterns: counters, event handlers, function factories, keeping config inside a function, anything that needs to remember something between calls.

## 10. Arrays

An ordered collection, indexed from 0.

```js
const products = ["T-Shirt", "Jeans", "Shoes"];
products[0];        // "T-Shirt"
products[1] = "Jacket";
```

### Methods that change the original

| Method | Does |
|---|---|
| `push(value)` | add to the end |
| `pop()` | remove from the end |
| `unshift(value)` | add to the start |
| `shift()` | remove from the start |
| `splice(start, deleteCount, ...items)` | add/remove/replace anywhere |

```js
const items = ["T-Shirt", "Jeans", "Shoes"];

items.splice(1, 1);              // remove 1 at index 1
items.splice(1, 0, "Jeans");     // insert without removing
items.splice(1, 1, "Jacket");    // replace
```

### Methods that return something new

| Method | Does |
|---|---|
| `slice(start, end)` | copy a section, `end` not included |
| `map(fn)` | transform every element into a new array |
| `reduce(fn, initial)` | collapse everything into one value |

```js
const prices = [100, 200, 300];

prices.slice(1, 3);                    // [200, 300]
prices.map(p => p + 50);               // [150, 250, 350]
prices.reduce((sum, p) => sum + p, 0); // 600
```

`prices` is unchanged after all three. That's the point — `splice` mutates, `slice` and `map` don't.

`reduce` walks the array carrying an accumulator. Starting at `0`: `0+100 → 100+200 → 300+300 → 600`. Cart totals are the obvious use.

## 11. Objects

Key–value pairs describing one thing.

```js
const product = {
  name: "T-Shirt",
  price: 499,
  stock: 20
};

product.name;        // dot notation
product["price"];    // bracket notation
product.stock = 25;  // update
product.size = "XL"; // add
delete product.size; // remove
```

**Array vs object**: an array is an *ordered list of things*. An object is *one thing with named parts*.

### Methods and `this`

A function stored on an object is a method. `this` refers to the object it was called on.

```js
const product = {
  name: "Laptop",
  price: 99499,
  showPrice() {
    console.log(this.price);
  }
};
product.showPrice(); // 99499
```

Keeping data and the behaviour that acts on it in one place is the whole reason methods exist.

### Nesting

Objects hold objects, and objects hold arrays of objects. API responses look like this constantly.

```js
const order = {
  orderId: 101,
  products: [
    { name: "T-Shirt", price: 499 },
    { name: "Jeans", price: 999 }
  ]
};

order.products[0].name;   // "T-Shirt"
order.products[1].price;  // 999
```

### Destructuring

Pull properties out into variables instead of writing `user.x` everywhere.

```js
const user = { name: "Dinesh", email: "dinesh@example.com", department: "AI & DS" };

const { name, email, department } = user;

// rename while extracting
const { name: productName, price: productPrice } = product;
```

Extremely handy with API responses.

### Static helpers

```js
Object.keys(product);    // ["name", "price", "stock"]
Object.values(product);  // ["T-Shirt", 499, 20]
Object.entries(product); // [["name","T-Shirt"], ["price",499], ["stock",20]]
```

Use these when you need to loop over an object whose shape you don't know ahead of time.

## 12. Strings

Text. Three ways to write one:

```js
const a = "double";
const b = 'single';
const c = `backtick`;
```

`.length` counts every character, spaces included:

```js
"Mouse".length;      // 5
"Dinesh KS".length;  // 9
```

### Concatenation vs template literals

```js
const message = "Hello " + name + ", your " + product + " costs ₹" + price;

// much better
const message = `Hello ${name}, your ${product} costs ₹${price}`;
```

`${}` can hold any expression, not just a variable:

```js
`Final price: ₹${price - discount}`
```

### Escaping

Backslash escapes a quote that would otherwise end the string.

```js
"He said \"Hello\"";
'It\'s available';
```

Or just use the other quote type and skip the escaping entirely.

### Common methods

| Method | Returns |
|---|---|
| `toUpperCase()` / `toLowerCase()` | case-converted copy |
| `trim()` | copy without leading/trailing whitespace |
| `includes(text)` | `true` / `false` |
| `startsWith(text)` / `endsWith(text)` | `true` / `false` |
| `charAt(index)` | one character |
| `indexOf(text)` | first position, or `-1` if absent |
| `replace(old, new)` | copy with the first match replaced |
| `split(separator)` | an array |
| `substring(start, end)` | a section |

```js
"   Dinesh   ".trim();             // "Dinesh"
"Oversized T-Shirt".includes("T-Shirt"); // true
"invoice.pdf".endsWith(".pdf");    // true
"T-Shirts,Jeans,Shoes".split(","); // ["T-Shirts", "Jeans", "Shoes"]
```

Strings are immutable — none of these change the original, they all hand back a new string. Assign the result or it's lost.

Normalising case before comparing is the standard fix for user input: `WOMEN`, `Women` and `women` should all match.

## 13. Numbers and Math

### Conversion and checking

```js
parseInt("499");       // 499
parseInt("499.99");    // 499  ← decimal dropped
parseFloat("499.99");  // 499.99
(499.5).toFixed(2);    // "499.50"  ← note: a STRING
isNaN("hello");        // true
isNaN(100);            // false
```

Why `parseInt` matters: input fields give you strings, and `"3" + 2` is `"32"`, not `5`. Convert before you calculate.

`toFixed()` returning a string is fine for display (`₹499.50`) and wrong for further maths.

### The `Math` object

```js
Math.round(4.6);   // 5  — nearest
Math.floor(4.9);   // 4  — always down
Math.ceil(4.1);    // 5  — always up
Math.abs(-50);     // 50 — drop the sign
Math.pow(2, 3);    // 8  — same as 2 ** 3
Math.random();     // 0.347829... between 0 and 1
Math.max(...marks); // largest
Math.min(...marks); // smallest
```

`Math.max`/`Math.min` take separate arguments, so spread the array with `...` when you have one.

## 14. Dates

```js
const now = new Date();                  // right now
const specific = new Date("2026-09-18"); // a fixed date
```

### Getting parts out

```js
date.getFullYear();  // 2026
date.getMonth();     // 8   ← ZERO-indexed. September is 8.
date.getDate();      // 18  ← day of the month
date.getDay();       // 5   ← day of the WEEK, Sunday = 0
date.getHours();
date.getMinutes();
date.getSeconds();
```

Two traps in one place: months start at 0, and `getDate()` and `getDay()` mean completely different things.

### Formatting

```js
date.toDateString();            // "Fri Sep 18 2026"
date.toTimeString();            // "10:30:45 GMT+0530 (India Standard Time)"
date.toISOString();             // "2026-09-18T10:30:45.000Z"
date.toLocaleDateString("en-IN"); // "18/09/2026"
date.toLocaleTimeString("en-IN"); // "10:30:45 am"
```

Rule of thumb: **ISO for storing and sending, locale for showing the user.** APIs and databases want `2026-09-18T10:30:45.000Z`; people want `18/09/2026`.

Custom format with padding:

```js
const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const year = date.getFullYear();
`${day}/${month}/${year}`; // "18/09/2026"
```

Remember the `+ 1` on the month.

### Timestamps

Milliseconds since 1 January 1970 UTC (the Unix epoch).

```js
Date.now();             // 1789704000000
new Date().getTime();   // same thing
```

Compare and subtract timestamps instead of formatted strings:

```js
const start = new Date("2026-09-18");
const end = new Date("2026-09-20");
const days = (end - start) / (1000 * 60 * 60 * 24); // 2
```

Dates subtract directly because they coerce to their timestamps.

## 15. Things I Keep Forgetting

- `typeof null` is `"object"`. It's a bug, not a fact about null.
- Months are 0-indexed in `Date`. Days of the month are not.
- `toFixed()` gives you a string.
- `==` coerces types; `===` doesn't. Use `===`.
- `slice` copies, `splice` mutates. The names are almost the same and the behaviour isn't.
- String methods never modify the original — assign the result.
- `const` stops reassignment, not mutation.
- `let` and `const` can't be used before their declaration line (TDZ). `var` can, and gives you `undefined`.
- `if/else if` stops at the first match even if later conditions are also true.
- Array `.length` is a count; the last index is `length - 1`.

## Status

Still adding to this. Next up: DOM manipulation, events, `async`/`await`, promises and the fetch API.

---

Notes by **Dinesh**. Corrections welcome — if something here is wrong, I'd rather know.
