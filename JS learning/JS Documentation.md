# Introduction to JavaScript

    ## JavaScript

        JavaScript (JS) is a programming language used to add behavior and interactivity to web pages and applications.

        HTML ---> Structure 
        CSS ---> Presentation / Design JavaScript ---> Behavior / Logic


        Example:    

            In an e-com application:

                HTML ---> Creates the product card, image, name, price and button 
                
                CSS ---> Controls the layout, colors, spacing and appearance 
                
                JavaScript ---> Makes the Add to Cart button work,Updates quantity and price Handles user interaction.

    ## Web Before JavaScript

        Early websites primarily used HTML (HyperText Markup Language).

        HTML was responsible for describing the structure and content of a document.

        Example:    

            <h1>Welcome</h1> 
            <p>This is my website.</p> 
            <a href="about.html">About Us</a>

            HTML can able to provide:

                -Headings
                -Paragraphs
                -Images
                -Links
                -Tables
                -Forms
                -Lists

            HTML was not designed to provide general programming logic.

            Example:

                when user click the button the HTML cannot check some data or calculate something.

            As Websites becomes more complex,developers,needed a way to add programming behaviour to web.

    ## Need for Browser Scriptiong

        Initially, many web pages behaved mainly like documents.

        A simplified model was:

            User clicks link ---> Browser sends request ---> Server processes request ---> Server sends another HTML page ---> Browser displays new page          

            This worked well for document-based websites.

            However, developers wanted more interactive applications.

            like:   
                Form validation 
                Button interactions 
                Dynamic content 
                Interactive menus 
                Calculations 
                User input processing

                This created a need for scripting directly in the browser.

    ## Tech used before JS:

        There was not one single language that JavaScript simply replaced.

        Different approaches were used to provide more functionality to websites.

        Two important approaches were:

            1. Server-side processing
            2. Java applets
        
        1.Server-Side Processing

            One way to process user interaction was to send the information to a server.

            For example, consider a form:

                User enters information
                        ↓
                User submits form
                        ↓
                Browser sends request
                        ↓
                Server processes request
                        ↓
                Server sends response
                        ↓
                Browser displays result

            This approach is still extremely important today.

            However, for simple interactions, sending every action to the server could be inefficient.

            For example:

                User enters invalid email
                        ↓
                Request sent to server
                        ↓
                Server validates email
                        ↓
                Response sent back
                        ↓
                Browser displays error

            A lightweight browser scripting language could perform simple validation directly in the browser.


        2. Java Applets:

            Another technology used for interactive web content was the Java applet.

            Java applets allowed Java programs to run inside a browser environment using Java support/plugin technology.

            HTML Page
                │
                ├── Text
                ├── Images
                └── Java Applet
                        ↓
                Java Program
                        ↓
                Interactive behavior

            Java applets provided more programming capabilities than plain HTML.

            However, they were not ideal for simple browser interactions because they involved additional runtime/plugin requirements and had security, performance and browser-integration complexities.

            The Web therefore needed a scripting solution that was lightweight and closely integrated with the browser.

    ## Creation of JS:

        During the 1990s, Netscape was developing one of the major web browsers, Netscape Navigator.

        Netscape wanted webpages to support scripting.

        Brendan Eich, who worked at Netscape, created a scripting language for this purpose.

        The language went through several names:

            Mocha
            ↓
            LiveScript
            ↓
            JavaScript

            JavaScript was introduced in Netscape Navigator 2.0 in 1995.

            The important idea was:

            HTML + JavaScript = Interactive Web Page

    ## Mocha
        The language was initially developed under the name:

        Mocha

            Mocha was the early internal/development name of what became JavaScript.

            The language was designed to allow scripting directly within web pages.
    
    ## LiveScript

        The name was later changed to: LiveScript

        The goal was to provide scripting capabilities that could make web pages more dynamic and interactive.

        The language was then released under the name:JavaScript

    ## JavaScript

        In 1995, the language became known as: JavaScript

        It was introduced with Netscape Navigator.

        JavaScript is a separate programming language from Java.

        The similar name was partly related to the popularity and marketing of Java at that time.

        JavaScript was designed specifically to provide lightweight scripting capabilities for web pages.

    ## Early JavaScript Use Cases

        One important early use of JavaScript was client-side form validation.

        For example:

                User enters email
                        ↓
                JavaScript checks input
                        ↓
                Is it valid?
                    ↙       ↘
                Yes          No
                ↓            ↓
            Continue      Show error

            Instead of sending every simple validation request to the server, the browser could perform the validation itself.

        Example:

            if (email === "") {
                alert("Email is required");
            }

        
    ## Microsoft 's jscript

        Netscape was not the only major browser vendor.

        Microsoft had: Internet Explorer

        Microsoft developed its own scripting implementation called:JScript

        JScript was Microsoft's implementation associated with its browser scripting environment.

    ## Browser Compatibility Problem

        Different browser vendors could implement scripting features differently.

        This could lead to code behaving differently between browsers.

        example:

            Developer writes JavaScript
                    │
                    ├───────────────┐
                    ↓               ↓
                Netscape         Internet Explorer
                    ↓               ↓
                Works           Different behavior

        This created a major problem for web developers.

        Developers wanted a common set of language rules that browsers could implement consistently.

        Therefore, the Web needed standardization.

    ## ECMAScript

        In November 1996, work began on standardizing the scripting language.

        The standardization work was handled through Ecma International's Technical Committee 39 (TC39).

        The resulting standard became: ECMA-262

        The standardized language was called: ECMAScript

        The first edition of ECMA-262 was adopted in June 1997.

        Netscape JavaScript + Microsoft JScript + other industry requirements = ECMAScript Standard (ECMA-262)

        The purpose was to establish common rules for the scripting language.

# Variables and Data Types

    ## Variable:

        A variable is a named reference used by a JavaScript program to store and work with a value.

        Example:

            let age = 21;

            here,

                let  ---> variable declaration keyword
                age  ---> variable name
                =    ---> assignment operator
                21   ---> value

        ### Need of variable

            Programs need to work with data.

            For example, a student application need:

                Student name
                Age
                Department
                Email
                Phone number
                Login status

            Instead of repeatedly writing values directly, we can store them in variables.

            Without variables

                console.log("Dinesh");
                console.log(21);
                console.log("AI & DS");
                
            With variables

                let name = "Dinesh";
                let age = 21;
                let department = "AI & DS";

                console.log(name);
                console.log(age);
                console.log(department);

            Gives :
                Dinesh
                21
                AI & DS

                Variables make data reusable and easier to manipulate.

        ### Variable Declaration

            Creating a variable is called declaration.

                JavaScript provides three keywords for declaring variables:

                    var
                    let
                    const

                    Example

                        var name;
                        let age;
                        const country = "India";
            
                Since no value has been assigned, its value is:undefined
                Each keyword has different rules.

        ### Assignment

            Assignment means giving a value to an already declared variable.

                let age;

                age = 21;

                Here:

                    let age; ---> declaration
                    age = 21; ---> assignment

        ### Initialization

            Initialization means declaring a variable and assigning its first value at the same time.

                let age = 21;

                This performs:

                Declaration ---> let age
                Assignment  ---> age = 21

                Therefore:

                    let age = 21;

                    is an initialization.

        ### var

            var is the older way of declaring variables in JavaScript.

            Example

                var name = "Dinesh";

                A var variable can be reassigned.

                    var age = 21;
                    age = 22;
                    console.log(age);

                Output:

                    22

                Redeclaring a var variable

                    A var variable can also be declared again in the same scope.

                        var age = 21;
                        var age = 22;
                        console.log(age);

                        Output:

                            22
            Code

                var price = 100; // Main price
                var hasCoupon = true;

                if (hasCoupon) {
                    var price = 80; 
                    console.log("Inside if-block:", price); // Prints: 80
                }

                console.log("Outside if-block:", price); // Prints: 80


            This behavior can make large programs harder to reason about.

            For modern JavaScript, let and const are generally preferred.


        ### let 

            let is a modern way of declaring a variable whose value may change.

            Reassigining  let

                Example

                    let age = 21;
                    age = 22;
                    console.log(age);

                Output:

                    22

                here let value can be reassigned.

            Redeclaring let

                A let variable cannot be redeclared in the same scope.

                    let age = 21;
                    let age = 22;

                This produces an error.

                Therefore:

                var  ---> can redeclare in the same scope
                let  ---> cannot redeclare in the same scope


            Code 

                let price = 100; 
                let hasCoupon = true;

                if (hasCoupon) {
                let price = 80; 
                console.log("Inside if-block:", price); // Prints: 80
                }

                console.log("Outside if-block:", price); // Prints: 100

        ### Const

            A const variable must receive a value when it is declared.

            const age = 21;

            no error

            if we declare without value:
            
                const age;

                This is invalid.
            
            const is used when a variable should not be reassigned after initialization.

            Reassigning const

                Example

                    const country = "India";
                    country = "USA";

                    JavaScript produces an error because a const variable cannot be reassigned.

            Redeclaring cost

                Example

                    const country = "India";
                    const country = "Canada"; 
            
                    Error: SyntaxError: Identifier 'country' has already been declared


    ##  Value

        A variable stores a value.

        Example:

            let age = 21;

            Here:

                age ---> variable
                21  ---> value

    ## Console

        console.log() is a JavaScript method used to display information in the console.

        It is mainly used to:

            -See the output of your JavaScript code
            -Check the value of a variable
            -Understand what your code is doing
            -Find and debug problems

        Example

            console.log("Hello World");

        output

            Hello World

        console.log("Hello");
        │      │    │
        │      │    └── Value to display
        │      │
        │      └── log() method
        │
        └── console object

        Object

            console is an object provided by the JavaScript environment, such as a browser or Node.js.

            It provides methods that allow you to interact with the developer console.

            Example

                console.log();
                console.error();
                console.warn();

        Log

            console.log("Hello");

            printing Text,Numbers,Variables,Expressions

        Example:    

            const user = {
                name: "Dinesh",
                age: 21,
                department: "AI & DS"
            };
            console.log(user);

        console.warn("Password is weak");
        console.error("Something went wrong");

        are also used

            
# Data Type

    A data type describes what kind of value JavaScript is working with.

    For example:

        let name = "Dinesh";

        "Dinesh" is a: String

        let age = 21;

        21 is a: Number;

    ## JavaScript has several built-in data types.In JavaScript, data types are mainly divided into two categories: Primitive and Non-Primitive (Reference) data types.

        The primitive data types are:

            -String
            -Number
            -BigInt
            -Boolean
            -Undefined
            -Null
            -Symbol

        Non-primitive types are used to represent collections or more complex structures of values.

            -Object
            -Array
            -Function

    ## 1.Primitive Datatype

        ### String

            A String represents text.

            Example
                let name = "Dinesh";

                The value:

                    "Dinesh" is a String.

            we can use Double Quotes "Dinesh"
            We can use Single Quotes 'Dinesh'
            We can use Template Literals `Dinesh`

            all are represent the strings.

            Use cases:

                -Names
                -Emails
                -Addresses
                -Messages
                -Product names
                -Descriptions
                -URLs
                -User input

            Example:

                const productName = "Oversized T-Shirt";
                const email = "user@example.com";

        ### Number

            The Number type represents ordinary numeric values.

            Examples:

                let age = 21;
                let price = 499;
                let temperature = 32.5;

            Both integers and decimal values normally use the Number type.

            Examples:

                21
                499
                32.5
                0.5
                -10

            Example

                let price = 500;
                let quantity = 3;
                let total = price * quantity;
                console.log(total);

            Output:

                1500

            Use cases:  

                Age 
                Price 
                Quantity 
                Marks 
                Percentage 
                Temperature 
                Distance 
                Product stock 
                Order amount

        ### Boolean

            A Boolean represents one of two values:

                -true
                -false
                
            Example
                let isStudent = true;
                let isAdmin = false;

                Boolean values are commonly used when a program needs to represent a yes/no or true/false condition.

            
            Code:   

                let isLoggedIn = true;

                if (isLoggedIn) {
                    console.log("Welcome");
                }

            Output:

                Welcome

            Use cases:  
            
                Is the user logged in?
                Is the product available?
                Is payment completed?
                Is the account active?
                Is dark mode enabled?
                Is the form valid?

        ### Undefined 

            undefined means that a variable exists but does not currently have an assigned value.

            Example

                let age;
                console.log(age);

            Output:

                undefined

                The variable exists, but no value has been assigned to it.

        ### Null

            null represents an intentional absence of a value.

            Example

                let selectedProduct = null;

            This means,the programmer has explicitly assigned null.

            Use cases:  

                -Use Case: The moment you click the "Log Out" button, the system clears your data by setting 
                
                    currentUser = null;

                -Use Case: When a user first opens their cart, they haven't typed in a promo code yet. The application sets 
                    
                    let activeCoupon = null;

        ### BigInt

            JavaScript normally uses Number for numeric values.

            For very large integers where exact integer precision is important, JavaScript provides the BigInt type.

            Example
            
                let bigNumber = 123456789012345678901234567890n;


                The n tells JavaScript that the value is a BigInt.

            Code

                const largeNumber = 123456789012345678901234567890n;
                console.log(largeNumber);

            BigInt is intended for very large integers.

            Use case:   

                -Cryptocurrencies and Blockchain (Bitcoin & Ethereum)
                    
                    Cryptocurrencies use tiny fractions to calculate values. For example, Ethereum calculates fees in a unit called Wei.

                -High-Precision Database IDs (Twitter/X Snowflake)
                    
                    Large social media websites like Twitter/X, Instagram, and Discord generate billions of posts and messages. To make sure every single post has a completely unique identification number (ID), they use 64-bit integers.

                -Security, Encryption, and Hashing
                
                    Security systems keep your credit cards and passwords safe on the web by multiplying gigantic prime numbers together to form secure encryption keys.

        ### Symbol

            Symbol is a primitive data type used to create unique values.

            Example
                let id = Symbol("id");

                If another Symbol is created with the same description:

                let id1 = Symbol("id");
                let id2 = Symbol("id");

                console.log(id1 === id2);  --->                they are still different values.

            Output:

                false

                Each Symbol created this way is unique.

            Use cases:  
                -Safe Security Hashing & JSON Web Tokens (JWT)

                    Web frameworks attach internal server tracking details to request objects using Symbols. Because JSON conversion utilities (JSON.stringify()) completely skip and ignore Symbols, those private server variables are automatically filtered out and never leak to the public web browser.

    ##  2.Non-Primitive Data Types

        Non-primitive data types are data types used to represent complex collections of values or executable behavior.

            Unlike primitive data types, which represent a single simple value, non-primitive values can contain:

                -Multiple values
                -Key-value pairs
                -Other objects
                -Functions
                -Nested data structures

            The main non-primitive types are:

                -Object
                -Array
                -Function

            ### Objects

                An object is a collection of data stored as key-value pairs.

                Example
                    let student = {
                        name: "Dinesh",
                        age: 22,
                        department: "AI & DS"
                    };

                The object contains multiple pieces of information about one student.

                Accessing Object Values

                    Using dot notation:

                        console.log(student.name);
                        console.log(student.age);

                    Output:

                        Dinesh
                        22

                    Using bracket notation:

                        console.log(student["name"]);

                    Output:

                        Dinesh

                Use case

                    Objects are useful when several values belong to the same entity.

                    An e-commerce product can have:

                        let product = {
                            name: "Oversized T-Shirt",
                            price: 499,
                            size: "XL",
                            inStock: true
                        };

                    Instead of creating separate unrelated variables:

                        let productName = "Oversized T-Shirt";
                        let productPrice = 499;
                        let productSize = "XL";
                        let productInStock = true;

                    we can group them together,this makes related information easier to organize and work with.

            ### Array 

                An array is used to store multiple values in an Order collection.

                The values are stored using indexes.
                    
                JavaScript arrays start from index 0.

                Example

                    let marks = [80, 75, 90, 85];
                    console.log(marks[0]);
                    console.log(marks[2]);

                Output:

                    80
                    90

                Use cases:  

                    - let products = [ "T-Shirt", "Jeans", "Hoodie", "Jacket" ];
                    -Product lists
                    -Student marks
                    -Shopping cart items
                    -User lists

            ### Function

                A function is a reusable block of code that performs a particular task.

                Example
                    function greet() {
                        console.log("Hello Dinesh");
                    }
                    greet();

                Output:

                    Hello Dinesh

                Code:
                    function add(a, b) {
                        return a + b;
                    }

                    let result = add(10, 20);
                    console.log(result);

                Output:

                    30

        ### typeof Operator

            JavaScript provides the typeof operator to determine the type of a value.

            String

                let name = "Dinesh";
                console.log(typeof name);   // string
                
            Number

                let age = 21;
                console.log(typeof age);    //number
                
            Boolean

                let isStudent = true;
                console.log(typeof isStudent);    //boolean

            Undefined

                let value;
                console.log(typeof value);    //undefined
                
            BigInt

                let number = 100n;
                console.log(typeof number);     //bigint

            Symbol

                let id = Symbol("id");
                console.log(typeof id);    //symbol

            null

                console.log(typeof null);    //object

                This is a well-known historical behavior of JavaScript.
                Do not conclude that null is an object.

        ### Dynamic Typing

            JavaScript is a dynamically typed language.

            This means a variable does not have to permanently hold values of only one data type.

            Example:

                let value = 100;

                The same variable can later contain a String:

                value = "Hello";

                Now:

                value ---> "Hello" (String)

                It can later contain a Boolean:

                value = true;

                Now:

                value ---> true (Boolean)

            The variable can hold values of different types at different times. 

     ### Variable Assignment

            Consider a real-world shopping application:

            let productPrice = 499;

            Here:

                -productPrice is the variable name
                -499 is the value
                -JavaScript creates a binding between the variable name and its value.

            productPrice ───────> 499

                This relationship is called a variable binding.

        ### Variable Binding

            What is a Variable Binding?

            A variable binding is the association between a name and the value associated with that name.

            For example:

                let customerName = "Dinesh";
                let productPrice = 499;

                Environment
                ┌─────────────────────────┐
                │ customerName → "Dinesh" │
                │ productPrice → 499      │
                └─────────────────────────┘

            JavaScript needs to keep track of these bindings while the program is running.

        ### Environment Records

            When JavaScript executes code, it needs a way to keep track of the variables and functions available in a particular environment.

            JavaScript uses a specification concept called an Environment Record for this purpose.

            example:

                let customerName = "Dinesh";
                let orderTotal = 1299;

            Environment Record
                ┌────────────────────────────┐
                │ customerName → "Dinesh"    │
                │ orderTotal   → 1299        │
                └────────────────────────────┘

            The Environment Record keeps track of bindings such as:

                variable name ─────> associated value

            For example:

                customerName ─────> "Dinesh"
                orderTotal   ─────> 1299

    ## How JavaScript Executes Code

        When we write JavaScript,the code does not directly become output.

        Code:   

            const products = [ { id: 101, name: "Oversized Graphic T-Shirt", price: 499 } ]; 

            const cart = []; 

            function addToCart(product) { 
            cart.push(product); 
            updateCartCount(); 
            } 

            function updateCartCount() { 
            const cartCount = document.querySelector(".cart-count"); 
            cartCount.textContent = cart.length; 
            }

        Flow:   

                JavaScript Source Code 
                        ↓ 
                JavaScript Engine 
                        ↓ 
                     Parser
                        ↓ 
                Global Execution Context 
                        ↓
                Memory Creation 
                        ↓ 
                Code Execution 
                        ↓ 
                    Call Stack 
                        ↓ 
                User Interaction 
                        ↓ 
                Browser APIs / Queues 
                        ↓ 
                    Event Loop 
                        ↓ 
                    Call Stack 
                        ↓ 
                    UI Update

        ### JavaScript Runtime Environment

            A JavaScript Runtime Environment is the environment that provides JavaScript with the components required to execute code.

            When JavaScript runs inside a browser, the browser provides several components.

            Browser
            │
            └── JavaScript Runtime Environment
                │
                ├── JavaScript Engine
                │   ├── Memory Heap
                │   └── Call Stack
                │
                ├── Web APIs
                │
                ├── Callback / Task Queue
                │
                └── Event Loop

            The JavaScript Engine is responsible for executing JavaScript code.

            #### JavaScript Engine

                A JavaScript Engine is the component that understands and executes JavaScript.

                Examples :

                    V8 ---> Chrome
                    SpiderMonkey ---> Firefox
                    JavaScriptCore ---> Safari

                engine flow:

                    1.Parses the code.
                    2.Creates the required execution context.
                    3.Allocates memory.
                    4.Executes the code.
                    5.Optimizes frequently executed code

                1.Parser Reads the code

                    The JavaScript engine first needs to understand the code.

                    The parser reads the JavaScript source code according to the rules of JavaScript.

                    Example:

                        function addToCart(product) {
                            cart.push(product);
                            updateCartCount();
                        }

                        The parser identifies:

                            function
                                ↓
                            Function declaration

                            addToCart
                                ↓
                            Function name

                            product
                                ↓
                            Function parameter

                            cart.push(product) 
                                ↓ 
                            Method call 
                            
                            updateCartCount() 
                                ↓ 
                            Function call


                    Example:

                        const a = ;

                        This contains invalid syntax.

                        The parser detects the problem and a syntax error is produced

                2.Global Execution Context is Created

                    After the code is parsed, JavaScript creates the Global Execution Context (GEC).

                    The Global Execution Context is the environment created to execute the JavaScript code that exists at the global level.

                    Call Stack
                        ┌──────────────────────────────┐
                        │ Global Execution Context     │
                        └──────────────────────────────┘


                    example:

                        const products = [
                            {
                                id: 101,
                                name: "Oversized Graphic T-Shirt",
                                price: 499
                            }
                        ];

                        const cart = [];

                        function addToCart(product) {
                            cart.push(product);
                        }

                        These declarations exist at the top level of the application.

                            Global Execution Context 
                            │ 
                            ├── Environment 
                            │ 
                            └── Global Code Execution

                        The Global Execution Context provides the environment required for executing the application.
                    
                    Parts of Execution Context

                        An execution context can be understood using two major parts:

                            Execution Context
                            │
                            ├── Environment / Memory
                            │
                            └── Code Execution

                        Memory 

                            The environment keeps track of the variables, functions, and other bindings required by the application.

                            Example:

                                const products = [
                                    {
                                        id: 101,
                                        name: "Oversized Graphic T-Shirt",
                                        price: 499
                                    }
                                ];

                                const cart = [];

                                function addToCart(product) {
                                    cart.push(product);
                                }

                            Application Environment

                                products  ---> Product Array
                                cart      ---> Cart Array
                                addToCart ---> Function

                        Code Execution

                            The execution part is where JavaScript statements actually run.

                            Example:

                                const cart = [];

                                cart.push(selectedProduct);

                                JavaScript executes these statements.

                3.Memory Creation Phase

                    Before JavaScript executes the application code, the execution environment prepares the required bindings.


                    const products = [
                        {
                            id: 101,
                            name: "Oversized Graphic T-Shirt",
                            price: 499
                        }
                    ];

                    const cart = []; 
                    function addToCart(product) { 
                        cart.push(product); 
                    }

                    the global environment prepares bindings for:

                        -products
                        -cart
                        -addToCart

                    The function declaration provides the function definition.

                    For let and const, the binding exists before initialization but cannot be accessed until its declaration is initialized.

                    example:

                        console.log(cart);
                        const cart = [];

                        The cart binding is in the Temporal Dead Zone (TDZ) until its initialization is reached.

                        Cause ---> ReferenceError.

                4.Code Execution Phase

                    After the required bindings are prepared, JavaScript begins executing the application code.

                    Suppose the application registers an event listener:

                        const addButton = document.querySelector("#add-to-cart");

                        addButton.addEventListener("click", () => {
                            addToCart(selectedProduct);
                        });

                        JavaScript first executes:

                            document.querySelector("#add-to-cart");

                            The browser's DOM functionality finds the Add to Cart button.

                        Then:

                            addButton.addEventListener(...)

                            registers a function that should execute when the user clicks the button.

                            At this stage, JavaScript does not execute the callback immediately.

                            It registers the callback and continues.

                5.Memory Heap

                    The Memory Heap is an area used by the JavaScript engine for dynamically allocated data.

                    example
                        
                        the e-commerce application may receive product data:

                        const product = {
                            id: 101,
                            name: "Oversized Graphic T-Shirt",
                            price: 499,
                            sizes: ["S", "M", "L", "XL"],
                            images: [
                                "front.jpg",
                                "back.jpg"
                            ]
                        };

                        JavaScript Environment
                            │
                            │ product
                            ↓
                        Memory Heap

                        ┌─────────────────────────────┐
                        │ Product Object              │
                        │                             │
                        │ id: 101                     │
                        │ name: Oversized T-Shirt     │
                        │ price: 499                  │
                        │ sizes → Array               │
                        │ images → Array              │
                        └─────────────────────────────┘

                        The variable product refers to the object.

                    Call Stack

                        The Call Stack keeps track of currently executing JavaScript.

                        This is why the Call Stack follows the:
                            LIFO ---> Last In First Out

                            Consider the user clicking:

                                [ Add to Cart ]

                                The registered click callback needs to execute.

                            Call Stack

                                ┌──────────────────────────┐
                                │ Click Event Callback     │
                                ├──────────────────────────┤
                                │ Global Execution Context │
                                └──────────────────────────┘

                            The callback executes:

                                addToCart(selectedProduct);

                                Now addToCart() must execute.

                            Call Stack

                                ┌──────────────────────────┐
                                │ addToCart()              │
                                ├──────────────────────────┤
                                │ Click Event Callback     │
                                ├──────────────────────────┤
                                │ Global Execution Context │
                                └──────────────────────────┘

                                When addToCart() finishes, it is removed from the call stack.

                                Then the click callback finishes.

                            Call Stack

                                ┌──────────────────────────┐
                                │ Global Execution Context │
                                └──────────────────────────┘

                                This is how the call stack manages active JavaScript execution.

                    Function Execution Works

                        In a real checkout application:

                            function checkout() {
                                validateCart();
                                calculateTotal();
                                createOrder();
                            }

                        When the user clicks:

                            [ Checkout ]

                        JavaScript executes:

                            checkout();

                            A new Function Execution Context is created for checkout().


                        Call Stack

                            ┌──────────────────────────┐
                            │ checkout()               │
                            ├──────────────────────────┤
                            │ Click Event Callback     │
                            ├──────────────────────────┤
                            │ Global Execution Context │
                            └──────────────────────────┘

                            Inside checkout(): ---> validateCart(); is called.

                        Call Stack

                            ┌──────────────────────────┐
                            │ validateCart()           │
                            ├──────────────────────────┤
                            │ checkout()               │
                            ├──────────────────────────┤
                            │ Click Event Callback     │
                            └──────────────────────────┘

                            After validation completes, validateCart() is removed.

                            calculateTotal(); ---> executes.

                            createOrder(); ---> executes.

                        Each function creates its own execution context while it is executing.

                    ### JavaScript is Single Threaded

                        JavaScript is generally described as a single-threaded programming language.

                        This means JavaScript has one main Call Stack where JavaScript code is executed.

                        Example:

                            console.log("Start");

                            console.log("Middle");

                            console.log("End");

                            JavaScript executes the statements one by one.

                        Call Stack

                            ┌──────────────────────────┐
                            │ console.log("End")       │
                            ├──────────────────────────┤
                            │ console.log("Middle")    │
                            ├──────────────────────────┤
                            │ console.log("Start")     │
                            └──────────────────────────┘

                            The functions are executed and removed from the stack as they finish.

                        JavaScript uses one main thread for executing JavaScript code.

                    ### Web API

                        JavaScript running in a browser can use features provided by the browser.

                        These browser-provided features are commonly called Web APIs.

                        Examples

                            DOM API
                            Timer API
                            Fetch API
                            Event API
                            Storage API
                            
                        Example:

                            setTimeout(() => {
                                console.log("Hello");
                            }, 2000);

                        The timer functionality is provided by the browser environment.

                        JavaScript does not keep the timer function running on the Call Stack for two seconds.

                        Instead, the browser handles the timer.

                    ### Callback Function

                        A callback is a function that is provided to another function or API so that it can be executed later.

                        Example:

                            setTimeout(() => {
                                console.log("Hello");
                            }, 2000);

                        Here:

                            () => {
                                console.log("Hello");
                            }

                        is the callback function.

                        The callback does not execute immediately.
                        It is registered to run later.

                    ### Callback / Task Queue

                        When a browser API finishes an asynchronous operation, the associated callback can be placed into a queue.

                        example: 

                            setTimeout(() => {
                                console.log("Hello");
                            }, 2000);

                        After the timer completes:

                            Browser Timer
                                ↓
                            Callback / Task Queue

                        The callback waits in the queue until the Call Stack is available.

                    ### Queue

                        Callback / Task Queue

                        ┌──────────────────────────┐
                        │ setTimeout callback      │
                        └──────────────────────────┘
                        
                        The callback does not directly jump into the Call Stack.

                        Something needs to check whether the Call Stack is available.

                        That is the responsibility of the Event Loop.

                    ### Event Loop

                        The Event Loop continuously checks whether JavaScript can execute a waiting callback.

                        It mainly coordinates between:

                            Call Stack
                                ↕
                            Callback / Task Queue


                        Basic Flow

                                    ┌───────────────┐
                                    │   Call Stack  │
                                    └───────┬───────┘
                                            │
                                            │
                                    Event Loop
                                            │
                                            ↓
                                    ┌───────────────┐
                                    │  Task Queue   │
                                    └───────────────┘

                        If the Call Stack is empty and a callback is waiting in the appropriate queue, the Event Loop allows the callback to be processed.
                        

                ##### Memory Concepts

                    Inside the JavaScript Engine, two important concepts for understanding execution are:

                        JavaScript Engine
                        │
                        ├── Memory Heap
                        │
                        └── Call Stack

                    They have different responsibilities.

                    Memory Heap

                        Used for managing dynamically allocated data.

                    Call Stack

                        Used for keeping track of currently executing functions.

                    Memory Heap

                        The Memory Heap is a memory area used by the JavaScript engine for dynamically allocated data.

                        Objects, arrays, and functions are commonly represented in the heap.

                        example, 
                            consider an e-commerce application:

                            const product = {
                                name: "Oversized T-Shirt",
                                price: 499,
                                quantity: 2
                            };

                            product
                            │
                            ▼
                            Memory Heap

                            ┌──────────────────────────────┐
                            │ name     → "Oversized T-Shirt"
                            │ price    → 499               │
                            │ quantity → 2                 │
                            └──────────────────────────────┘

                            The object contains key-value pairs.

                    ## Call Stack

                        The Call Stack is a data structure used by the JavaScript engine to keep track of currently executing code and function calls.

                        Call Stack = a stack that keeps track of what JavaScript is currently executing.

                        example:

                            function calculateTotal() {
                                console.log("Calculating order total");
                            }
                            calculateTotal();

                            When calculateTotal() is called, JavaScript needs to keep track of that function while it executes.


                        Call Stack

                            ┌─────────────────────────────┐
                            │ calculateTotal()            │ ← currently executing
                            ├─────────────────────────────┤
                            │ Global Execution Context    │
                            └─────────────────────────────┘

                            After the function finishes:

                        Call Stack

                            ┌─────────────────────────────┐
                            │ Global Execution Context    │
                            └─────────────────────────────┘

                            The function call is removed from the stack.


# Operators

    An opeator is a symbol that tells js to perform an operation on one or more values.

    example:    

        let price = 1000;
        let discount = 200;
        let finalPrice = price - discount;
        console.log(finalPrice);

    output

        800
    
        here 10+5 
        800 ---> operand
        - ---> operator
        200 ---> operand 

        JavaScript provides different types of operator for different purposes.

    ## Types of Operators

        The major operator categories are:

            -Arithmetic Operators
            -Assignment Operators
            -Comparision Operators
            -Logical Operators
            -Bitwise Operators
            -Ternary Operators

        ### Arithmetic Operators
            -Addition
            -Subtraction
            -Multiplication
            -Division
            -Reminder
            -Exponentiation
            -Increment
            -Decrement

            ### Addition

                Adds two values.

                let productPrice = 100;
                let deliveryCharge = 20;
                console.log(productPrice + deliveryCharge);

                Output:

                    120

                Use case:

                    Calculating a shopping cart total:

                    let shirtPrice = 500;
                    let pantPrice = 1000;
                    let total = shirtPrice + pantPrice;
                    console.log(total);

                Output:

                    1500

            ### Subtraction

                Subtracts one value from another.

                    let balance = 5000;
                    let expense = 1200;
                    let remaining = balance - expense;
                    console.log(remaining);

                Output:

                    3800

                Use cases:
                
                    Remaining bank balance
                    Remaining stock
                    Discount calculation
                    Remaining time

            ### Multiplication

                Multiplies values.

                let price = 500;
                let quantity = 3;
                let total = price * quantity;
                console.log(total);

            Output:

                1500
                This is commonly used in e-commerce applications.

            ### Division

                Divides one value by another.

                let totalMarks = 450;
                let subjects = 5;
                console.log(totalMarks / subjects);

            Output:

                90

            Use Case:

                Splitting bills
                Calculating averages
                Calculating percentages
                Pagination calculations

            ### Reminder

                The % operator returns the remainder after division.

                let totalItems = 23;
                let boxCapacity = 5;
                let remainingItems = totalItems % boxCapacity;
                console.log(remainingItems);

                Output:

                    3


            ### Exponentiation **

                Raises a number to a power.

                let initial_population = 1000;
                let years = 3;
                console.log(initial_population * 2 ** years);


                Output:

                    8000


            ### Increment ++

                Increases a value by 1.

                    let count = 5;
                    count++;
                    console.log(count);

                Output:

                    6

                here,
                    count = count + 1;
                
                Use cases:

                Counters:
                    Page views
                    Likes
                    Quantity
                    Number of attempts
                    Cart items

            ### Decrement --

                Decreases a value by 1.

                    let count = 5;
                    count--;
                    console.log(count);

                Output:

                    4
                
                Here,

                    count = count - 1;

        ### Assignment Operators

            Assignment operators are used to store or update values in variables.

            The basic assignment operator is:=

            Example:

            let age = 21;

            The value 21 is assigned to the variable age.

            note ===> ( add+=5 ) = (add+5) both are same it is an shothand property 

            #### Basic Assignment =

                let price = 500;

                Store 500 in the variable price.

            #### Addition Assignment +=

                let score = 10;
                score += 5;
                console.log(score);

                Output:

                    15

            #### Subtraction Assignment -=

                let balance = 1000;
                balance -= 200;
                console.log(balance);

                Output:

                    800

            #### Multiplication Assignment *=

                let price = 100;
                price *= 3;
                console.log(price);

                Output:

                    300

            #### Division Assignment /=

                let amount = 1000;
                amount /= 4;
                console.log(amount);

                Output:

                    250

            #### Remainder Assignment %=

                let totalItems = 10;
                totalItems %= 3;
                console.log(totalItems);

                Output:

                    1

            #### Exponentiation Assignment **=

                let growthFactor = 2;
                growthFactor **= 3;
                console.log(growthFactor);

                output

                    8
                    
        ### Comparison Operators

            Comparison operators are used to compare values.

            The result of a comparison is always a Boolean value:   

                true or false

            Example:    

                let availableStock = 20;
                let requestedQuantity = 10;
                console.log(availableStock > requestedQuantity);
                
                Output

                    true

            #### Greater than >

                let availableStock = 20;
                let requestedQuantity = 10;
                console.log(availableStock > requestedQuantity);

                output

                    true

            #### Less than <
                
                let deliveryDays = 3;
                let expectedDays = 5;
                console.log(deliveryDays < expectedDays);

                output

                    true

            #### Greater than or equal >=

                let orderQuantity = 15;
                let minimumQuantity = 10;
                console.log(orderQuantity >= minimumQuantity);

                output

                    true

            #### Less than or Equal <=

                let productPrice = 499;
                let budget = 500;
                console.log(productPrice <= budget);

                output

                    true

            #### Equal ==

                == checks two values are equal after allowing type conversion.

                let enteredCode = 100;
                let validCode = "100";
                console.log(enteredCode == validCode);

                output

                    true
                
                here , the number (5) and the string ("5")  are used to convert one value before comparing.

                Because of this behaviour, modern JavaScript code generally prefers === when strict equality is intended.


            #### Strict Equal

                === checks both:

                1.Value
                2.Data type
                
                let userId = 101;
                let loggedInUserId = 101;
                console.log(userId === loggedInUserId);

                Output:

                    true


            #### Not Equal !=

                Checks whether values are different, with type conversion allowed.

                let productPrice = 499;
                let oldPrice = 599;
                console.log(productPrice != oldPrice);

                Output:

                    true
                    
            #### Strict Not Equal !==

                Checks whether either the value or the type is different.

                let userId = 101;
                let enteredId = "101";
                console.log(userId !== enteredId);

                Output:

                    true

                Because:

                    101  ---> number
                   "101" ---> string

        ### Logical Operators

            Logical operators are used to combine or reverse conditions.

            The three main logical operators are:

                &&
                ||
                !

            #### Logical AND &&

                && 

            Both conditions must be true.

            Example:

                let age = 25;
                let hasLicense = true;
                console.log(age >= 18 && hasLicense);

            Output:

                true

            Because:

                age >= 18       ---> true
                hasLicense      ---> true

                true && true    ---> true

            If either condition is false:

                let age = 16;
                let hasLicense = true;
                console.log(age >= 18 && hasLicense);

            Output:

                false


            Use case

                Login systems often require multiple conditions:

                    Correct email
                        AND
                    Correct password
                        AND
                    Account is active

                All required conditions must be satisfied.

            #### Logical OR ||

                || 

                At least one condition must be true.

            Example:

                let isAdmin = false;
                let isManager = true;
                console.log(isAdmin || isManager);

            Output:

                true

            Because:

                false || true
                true
            
            Use case

                A user may have permission if they are either:

                    Admin OR Manager
            
            #### Logical NOT !

                ! reverses a Boolean value.

                let loggedIn = true;
                console.log(!loggedIn);

                Output:

                    false

                Use case

                    Checking the opposite condition:

                        if (!loggedIn) {
                            console.log("Please login");
                        }

        ### Bitwise Operator

            Bitwise operators work with the individual bits of numbers.

            Before understanding bitwise operators, remember that computers represent numbers internally using binary.

            Example

                Decimal 5

            represented as

                0101

            Example

                Decimal 3

            represented as

                0011

            Bitwise operators work on these binary representations.

            #### Bitwise AND &

                each corresponding bit is compared.

                The result is 1 only when both bits are 1.

                Example:

                    5 & 3

                      0101 ---> 5
                    & 0011 ---> 3

                      0001 ---> 1

                    let userPermission = 5;
                    let requiredPermission = 3;
                    console.log(userPermission & requiredPermission);

                Output

                    1

                use case

                    Bitwise AND is commonly used to check whether a particular permission/flag is enabled.

            #### Bitwise OR |

                The result is 1 when at least one bit is 1

                Example

                    5 & 3

                      0101 ---> 5
                    | 0011 ---> 3

                      0111 

                    let userPermission = 5;
                    let newPermission = 3;
                    userPermission = userPermission | newPermission;
                    console.log(userPermission);     

                Output

                    7

            #### Bitwise XOR ^

                XOR means:

                    The bits must be different to produce 1.

                    Example

                        5 & 3

                        0101 ---> 5
                      ^ 0011 ---> 3

                        0110 

                        let featureSettings = 5;
                        let darkMode = 3;
                        featureSettings = featureSettings ^ darkMode;
                        console.log(featureSettings);

                    Output:

                        6

            #### Bitwise NOT ~

                ~ flips each bit:

                    0 ---> 1
                    1 ---> 0

                Example:

                    let value = 5;
                    value = ~value;
                    console.log(value);

                Output:

                    -6

            #### Left Shift <<

                Moves the bits to the left.

                let storageUnits = 5;
                storageUnits = storageUnits << 1;
                console.log(storageUnits);

                    0101
                    
                    1010

                Output:

                    10

                shifting left by one position is equivalent to multiplying by 2.

            #### Right Shift >>

                Moves bits to the right while preserving the sign.

                let dataSize = 10;
                dataSize = dataSize >> 1;
                console.log(dataSize);

                    1010
                    
                    0101

                Output:

                    5

            #### Unsigned Right Shift >>>

                Moves bits to the right and fills the left side with zeros.

                let dataSize = 10;
                dataSize = dataSize >>> 1;
                console.log(dataSize);

                Output:

                    5

            Use cases

                -Permission flags
                -Binary data processing
                -Low-level algorithms
                -Networking
                -Cryptography-related implementations
                -Image/pixel manipulation
                -Performance-sensitive integer operations


        ### Ternary Operator

            The ternary operator is a short way to write a simple if...else condition.

            Syntax:

                condition ? valueIfTrue : valueIfFalse

            Normal if - e;se code:

                let age = 20; 
                let message; 
                if (age >= 18) { 
                    message = "Adult"; 
                } 
                else { 
                    message = "Minor"; 
                } 
                console.log(message);  //Adult

            Using the ternary Operator code:

                let age = 20; 
                let message = age >= 18 ? "Adult" : "Minor";
                console.log(message);   //Adult

            Use case

                login status
                    let isLoggedIn = true; 
                    let message = isLoggedIn ? "Welcome back!" : "Please login";
                Form validation
                    Valid input → "Valid"
                    Invalid input → "Invalid"
                Cart
                    Items exist → "View Cart"
                    Empty cart → "Cart is Empty"

# Control Flow

    Control flow is the order in which JavaScript executes statements in a program.

        Normally, JavaScript executes code from top to bottom, one statement after another.

        Example:

            console.log("Step 1");
            console.log("Step 2");
            console.log("Step 3");

        Output:

            Step 1
            Step 2
            Step 3

        The execution flow is:

            Start
            |
            Step 1
            |
            Step 2
            |
            Step 3
            |
            End

        But real applications often need to make decisions.

        Example:    

            Is the user logged in?
                    |
                Yes or No
                    |
            Show different content

        This is where control flow is used.

    ## Need for control Flow

        Without control flow, JavaScript would simply execute every statement sequentially.

        Real applications need to make decisions based on conditions.

        For example:

                User enters age
                    ↓
                Is age >= 18?
                /        \
              Yes         No
               |           |
             Allow      Reject
             access      access


        Control flow allows JavaScript to:

            -Make decisions
            -Execute different code based on conditions
            -Choose between multiple possibilities
            -Execute one block instead of another
            -Handle different cases

    ## Types of Control Flow

        The main decision-making control-flow statements are:

            -if
            -else if
            -else
            -switch
            -conditional (Ternary)

        ### if statement

            The if statement is used when we want to execute code only when a condition is true.

            Syntax

                if (condition) {
                    // code 
                }

                The basic flow is:

                    Condition
                        ↓
                    Is it true?
                    /       \
                  Yes         No
                   |           |
                Execute       Skip
                the code      the code

            Example

                let orderAmount = 1500;
                if (orderAmount >= 500) {
                    console.log("Free delivery");
                }

            Output:
     
                Free delivery

            is true, the code inside the if block executes.

            When the condition is false

                let orderAmount = 400;
                if (orderAmount >= 500) {
                    console.log("Free delivery");
                }

            Output

                There is no output.

            #### if block

                The code between { and } is called a block.

                Example:

                let orderAmount = 400;
                if (orderAmount >= 500) {
                    console.log("Free delivery");
                }

                console.log("Free delivery");
                the statement belong to the if block.

                If the condition is true, the entire block executes.

        ### else Statement

            The else statement is used when we want to execute another block of code when the if condition is false.

            Syntax

                if (condition) {
                    // if condition is true
                } else {
                    // if condition is false
                }

            Example

                let stock = 5;
                if (stock > 0) {
                    console.log("Product is available");
                } else {
                    console.log("Product is out of stock");
                }

            Output:

                Product is available

            use case

                Login system    
                
                    let isLoggedIn = true; 
                    if (isLoggedIn) {
                        console.log("Welcome to your dashboard"); 
                    } else { 
                        console.log("Please login"); 
                    }

                Output

                    Welcome to your dashboard

        ### else if statement

            Sometimes there are more than two possible conditions.

            Example

                90+     ---> Grade A
                75-89   ---> Grade B
                50-74   ---> Grade C
                Below 50 ---> Fail

            We cannot handle this with only if and else.

            We can use else if.

            Syntax

                if (condition1) {
                    // code
                } else if (condition2) {
                    // code
                } else if (condition3) {
                    // code
                } else {
                    // code
                }

            Example

                let marks = 82;
                if (marks >= 90) {
                    console.log("Grade A");
                } else if (marks >= 75) {
                    console.log("Grade B");
                } else if (marks >= 50) {
                    console.log("Grade C");
                } else {
                    console.log("Fail");
                }

            Output:

                Grade B
            
            After finding a true condition, JavaScript skips the remaining else if and else blocks.

            in some cases

                95 >= 75
                95 >= 50

                both are also true, JavaScript stops after the first matching condition.

        ### Switch Statement

            The switch statement is used when we want to compare one value against multiple possible cases.

            It is especially useful when there are many fixed choices.

            Syntax

                switch (expression) {

                    case value1:
                        // code
                        break;

                    case value2:
                        // code
                        break;

                    default:
                        // code
                }

            Example

                let orderStatus = "shipped";

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

            Output:

                Your order is on the way

            Use case

                an order status
                    pending
                    processing
                    shipped
                    delivered
                    cancelled


        ### Ternary Operator    

            The ternary operator is another way to make a simple decision.

            It is called "ternary" because it has three parts:

                condition ? valueIfTrue : valueIfFalse

            Example

                Displaying product stock:

                let stock = 10;
                let status = stock > 0 ? "In Stock" : "Out of Stock";
                console.log(status);

            Output:

                In Stock

# Loops

    A loop is a programming structure used to execute the same block of code repeatedly.

    Instead of writing the same code multiple times, we can use a loop.

    Without a Loop

        to print numbers from 1 to 5:

            console.log("T-Shirt");
            console.log("Jeans");
            console.log("Shoes");
            console.log("watch");

        Writing 1000 statements would be inefficient.

    A loop helps us to do:

        let products = ["T-Shirt", "Jeans", "Shoes", "Watch"];
        for (let i = 0; i < products.length; i++) {
            console.log(products[i]);
        }

    Output:

        T-Shirt
        Jeans
        Shoes
        Watch

    Use case:   

        -Displaying products in an e-commerce application
        -Processing students in a class
        -Reading items from an array
        -Processing orders
        -Generating numbers
        -Repeating a task until a condition becomes false
        -Searching through data
        -Processing API results

    ## Loop works

                        Start
                            |
                    Check condition
                            |
                    Is condition true?
                        /       \
                    Yes        No
                    |          |
            Execute code     End
                    |
            Update value
                    |
            again check condition

    ## Types of loops

        for  ---> Repeat code a known number of times
        while ---> Repeat while a condition is true
        do while ---> Execute at least once, then repeat
        for in ---> Iterate over property keys
        for of ---> Iterate over values of an iterable

    ## Jump Statements
        break ---> Stop a loop completely
        continue ---> Skip the current iteration

    ## for loop

        The for loop is commonly used when we know how many times we want to repeat something.

        Syntax
            for (initialization; condition; update) {
                // code 
            }

            It has three main parts:

            initialization ---> start value 
            condition ---> check whether continue or not 
            update ---> Change Value

        Example

            let prices = [500, 300, 200];
            let total = 0;

            for (let i = 0; i < prices.length; i++) {
                total = total + prices[i];
            }
            console.log(total);

        Output:

            1000

        Here,

            Initialization
            let i = 1;

            Condition
            i <= prices.length;

            Update
            i++;
        
        Use case
            Displaying the product list

            let products = [
                "T-Shirt",
                "Jeans",
                "Shoes",
                "Cap",
                "Watch"
            ];

            for (let i = 0; i < products.length; i++) {
                console.log(products[i]);
            }

        Output:

            T-Shirt
            Jeans
            Shoes
            Cap
            Watch

    ## while loop

        The while loop executes a block of code as long as a condition is true.

        Syntax

            while (condition) {
                // code
            }

            Tcondition is checked before each iteration.

        Example

            let password = prompt("Enter your password:");
            while (password !== "1234") {
                console.log("Incorrect password");
                password = prompt("Enter your password again:");
            }
            console.log("Login successful");
        
        Output:

            Login successful

        Use case:   

            To get valid input from user 
                like mobile password

    ## do while 

        The do...while loop is similar to the while loop.

        A do...while loop executes its code at least once before checking the condition.

        Syntax

            do {
                // code
            } while (condition);

        Example

            let password;
            do {
                password = prompt("Enter your password:");
            } while (password !== "1234");
            console.log("Login successful");

        Output:

            Enter your password:

        Use case

            menu that should be displayed at least once
                Display menu in restaurants,hotels and cafe.

    ## break Statement

        The break statement is used to immediately stop a loop.

        When JavaScript reaches break, it exits the loop completely.

        Example

            let products = ["T-Shirt", "Jeans", "Shoes", "Watch"];

            for (let i = 0; i < products.length; i++) {
                if (products[i] === "Shoes") {
                    console.log("Product found");
                    break;
                }
                console.log("Searching...");
            }

        Output:

            Searching...
            Searching...
            Product found

        When:

            i === 2
            becomes true, JavaScript executes break and exits the loop.

    ## Continue Statement

        The continue statement is used to skip the current iteration and move to the next iteration.

        It does not stop the entire loop.

        Example

            let products = [
            { name: "T-Shirt", stock: 5 },
            { name: "Jeans", stock: 0 },
            { name: "Shoes", stock: 3 }
        ];

        for (let i = 0; i < products.length; i++) {

            if (products[i].stock === 0) {
                continue;
            }

            console.log(products[i].name);
        }

        Output:

            T-shirt
            Shoes


    ## for in loop

        The for...in loop is used to iterate over the property keys of an object.

        Syntax

            for (let key in object) {
                // code
            }

        Example:

            let user = {
                name: "Dinesh",
                age: 21,
                city: "Coimbatore"
            };
            for (let key in user) {
                console.log(key);
            }

        Output:

            name
            age
            city

        We can get the Object values

            let user = { 
                name: "Dinesh", 
                age: 21, 
                city: "Coimbatore" 
            }; 
            for (let key in user) { 
                console.log(user[key]); 
                <!-- console.log(key, user[key]); --> to get the key value pair
            }

        output

            Dinesh 
            21 
            Coimbatore

    ## for of loop

        The for...of loop is used to iterate over the values of an iterable.

        Common iterables include:

            Arrays
            Strings
            Sets
            Maps
            Other iterable objects

        Example - array

            let products = [
                "T-Shirt",
                "Jeans",
                "Shoes"
            ];

            for (let product of products) {
                console.log(product);
            }

        Output:

            T-Shirt
            Jeans
            Shoes

        Here product directly receives each value.

        Example - String

            let word = "HELLO";
            for (let character of word) {
                console.log(character);
            }

        Output:

            H
            E
            L
            L
            O

        Each iteration gives one character.

    ## forEach()

        forEach() is an array method used to execute a function once for each element in an array.

        It is commonly used when we want to perform an action on every array element.

        Syntax
        
            array.forEach(function(element) {
                // code 
            });
            
        Example

            const products = ["T-Shirt", "Jeans", "Shoes"];
            products.forEach(function(product) {
                console.log(product);
            });

        Output:

            T-Shirt
            Jeans
            Shoes

        Here, forEach() takes each element from the products array and passes it to the function.

        ### foreach using arrow function    

            The callback function can receive the element, index, and array:

            code

                const products = ["T-Shirt", "Jeans", "Shoes"];
                products.forEach((product, index) => {
                    console.log(index, product);
                });

            output

                0 T-Shirt 
                1 Jeans 
                2 Shoes

            Use case    

                Displaying products from an array.

# Function
    
    A function is a reusable block of code designed to perform a specific task.

    Instead of writing the same code multiple times, we can place it inside a function and call the function whenever we need it.

    Need for function:

        console.log("Welcome, Dinesh");
        console.log("Welcome, Arun");
        console.log("Welcome, Priya");

    A function allows us to reuse the logic:

    function welcome(name) {
        console.log(`Welcome, ${name}`);
    }

    welcome("Dinesh");
    welcome("Arun");
    welcome("Priya");

    Real-Time Use Cases        

        -Calculate the total price of a shopping cart
        -Validate a login form
        -Calculate student marks
        -Fetch data from an API
        -Create a user account
        -Display a product
        -Process an order
        -Calculate discounts

    ## function Declaration

        A function declaration defines a function using the function keyword.

        Syntax

            function functionName() {
                // code
            }

        Example
            
            //function is defined here.
            function showWelcomeMessage() {
                console.log("Welcome to Litorox");
            }
            showWelcomeMessage();
             //function call

    ## function Parameters

        A parameter is a variable defined inside the function's parentheses that receives a value when the function is called.

        Example

            //name is the parameters
            function greet(name) {
                console.log(`Hello ${name}`);
            }
            greet("Dinesh");

        Multiple Parameters

            function calculateTotal(price, quantity) {
                console.log(price * quantity);
            }
            calculateTotal(500, 2);            
             
            here,

                price    → parameter
                quantity → parameter

                500      → argument
                2        → argument

    ## Return 

        The return statement sends a value back from the function to the place where the function was called.

        Example

            function calculateTotal(price, quantity) {
                return price * quantity;
            }
            let total = calculateTotal(500, 2);
            console.log(total);

        Output:

            1000

        console.log() ---> displays a value.
        return ---> sends a value back.

    ## Function Expression

        A function expression creates a function and assigns it to a variable.

            const calculateDiscount = function (price, discount) {
                return price - discount;
            };
            let finalPrice = calculateDiscount(500, 50);
            console.log(finalPrice);

        Here:

             function() {}
                |
              function

        Unlike a function declaration, the function is created as part of an expression and assigned .

    ## Arrow function

        An arrow function is a shorter syntax for writing functions.

        Normal Function

        function welcome(name) {
        console.log(`Welcome, ${name}`);
        }

        Arrow Function

            const calculateTotal = (price, quantity) => {
                return price * quantity;
            };
            let total = calculateTotal(500, 2);
            console.log(total);

# Hoisting 

    Hoisting is JavaScript's behavior where declarations are processed during the creation of an execution context before the code is executed.


    Example - Function Declaration

        greet();

        function greet() {
            console.log("Hello");
        }

    Output:

        Hello

    Even though greet() appears before the function declaration.

    Example - Function Expression

        But a function expression assigned to const cannot be used before its initialization:

            greet();

            const greet = function() {
                console.log("Hello");
            };

        This results in an error because greet cannot be accessed before its initialization.

        The same applies to an arrow function stored in const:

            greet();

            const greet = () => { console.log("Hello"); };

        ### Function Execution

            Defining a function does not automatically execute it.

            function greet() {
                console.log("Hello");
            }

            Nothing is printed yet.

            The function executes when we call it:

            greet();        


# Scope and Closures

    Scope determines where a variable can be accessed in a JavaScript program.

    The main concepts covered here are:

        Global Scope
        Local Scope
        Lexical Scope
        Variable Shadowing
        Closures

    1,Global scope

        A variable declared outside all functions and blocks is generally in the global scope.

            A global variable can be accessed from different parts of the program.

            let username = "Dinesh";

            function greet() {
                console.log(username);
            }

            greet();
            console.log(username);

        Output:

            Dinesh
            Dinesh

        Here, username is declared outside the function, so the function can access it.
        
        Use case

            -common values or names 
 
    2 local Scope

        A variable declared inside a function is available only within that function.

            function greet() {
                let message = "Hello";
                console.log(message);
            }

            greet();

            This works because message is inside the function.

        But:

            function greet() {
                let message = "Hello";
            }
            console.log(message);

            This produces an error because message is not accessible outside the function.

    3. Block Scope

        let and const are also block-scoped.

        A block is code enclosed by { }.

        if (true) {
            let age = 21;
            const name = "Dinesh";
            console.log(age);
            console.log(name);
        }

        The variables can be accessed inside the block.

        They cannot be accessed outside:

        if (true) {
            let age = 21;
        }
        console.log(age); // Error

        Example

            for (let i = 0; i < 3; i++) {
                console.log(i);
            }
            console.log(i) // Error

        The i variable belongs to the for block.

    4.Lexical Scope

        A function can access variables based on where the function is written in the code, not where the function is called.

            let storeName = "Litorox";
            function showStore() {
                console.log(storeName);
            }
            showStore();

        Why can showStore() access storeName?

            Because storeName is written in the outer scope where the function was created.

            let company = "Litorox"; 
            function outer() { 
                let department = "Development"; 
                function inner() { 
                    let role = "Developer"; 
                    console.log(company); 
                    console.log(department); 
                    console.log(role); 
                } 
                inner(); 
            }

            inner() can access:

            role        ---> its own scope
            department  ---> outer scope
            company     ---> global scope

            This is called the scope chain

    ## Variable Shadowing

        Variable shadowing happens when a variable in an inner scope has the same name as a variable in an outer scope.

        let name = "Dinesh";
        function greet() {
            let name = "Arun";
            console.log(name);
        }
        greet();

        Output:

            Arun

        There are two variables named name:

        The inner name shadows the outer name.

        Therefore, inside greet(), JavaScript uses the local variable.

        Example of Shadowing

            let price = 1000;
            function product() {
                let price = 500;
                console.log(price);
            }
            product();  
            console.log(price);

        Output:

            500
            1000

        Inside the function:

            price = 500

        Outside the function:

            price = 1000

        The variables are separate bindings even though they have the same name.

    ## Closures

        A closure is created when a function remembers and can access variables from its outer scope, even after the outer function has finished executing.
        
        Example

            Closures are commonly used to create private or persistent state.

            function createCounter() {
                let count = 0;
                return function() {
                    count++;
                    console.log(count);
                };
            }

            const counter = createCounter();
            counter();
            counter();
            counter();

        Output:

            1
            2
            3

        The count variable is not directly accessible from outside:

        console.log(count); // Error

        But the returned function can still access it.

        The closure allows the function to remember the value of count between calls.

    ## Why Closures Are Useful

        Closures are useful when we want a function to remember some state.

        Use case

            Counters
            Data encapsulation
            Maintaining state
            Event handlers
            Callbacks
            Function factories
            Private variables
            Timers
            Maintaining configuration inside functions

        example 
            
            a counter component in an application may need to remember its current count even after the function that created it has finished.

# Array

    Main purpose of an Array (List)

        Arrays are created to store and manage multiple values of the same or related type as an ordered collection in one unit.

    An array is a data structure used to store multiple values in a single variable.

    example

        let product1 = "T-Shirt";
        let product2 = "Jeans";
        let product3 = "Shoes";

        We can store them together:

        let products = ["T-Shirt", "Jeans", "Shoes"];

        Now products contains multiple values.

    ## Creating an Array

        An array can be created using square brackets [].

        Syntax

            let arrayName = [value1, value2, value3];
            
        Example

            let products = ["T-Shirt", "Jeans", "Shoes"];
            console.log(products);

        Output

            ["T-Shirt", "Jeans", "Shoes"]
            
        use case

            An e-commerce application can use an array to store the products currently available.

            let products = ["T-Shirt", "Jeans", "Shoes"];

            Instead of creating separate variables for every product, one array can hold all products.

    ## Array Indexing

        Each value inside an array has a position called an index.

        Array indexing starts from 0.

        Example:

            let products = ["T-Shirt", "Jeans", "Shoes"];

            The positions are:

                Index:     0          1        2
                Value:  T-Shirt     Jeans    Shoes

                To access a value, use its index.

                console.log(products[0]);
            console.log(products[2]);

            Output:

                T-Shirt
                Shoes
            
    ## Changing an Array Value

        Because array elements have indexes, we can change a specific value using its index.

            let products = ["T-Shirt", "Jeans", "Shoes"];
            products[1] = "Jacket";
            console.log(products);

        Output:

            ["T-Shirt", "Jacket", "Shoes"]

        Here:

            products[1] ---> refers to "Jeans".

            We replace it with: ---> "Jacket"

        Use case    

            Suppose an online store changes a product name.

            let products = ["T-Shirt", "Jeans", "Shoes"];
            products[1] = "Denim Jacket";

            The product list is now:

                T-Shirt
                Denim Jacket
                Shoes

    ## push()

        push() adds one or more elements to the end of an array.

        Syntax
        
            array.push(value);

        Example

            let cart = ["T-Shirt", "Jeans"];
            cart.push("Shoes");
            console.log(cart);

        Output:

            ["T-Shirt", "Jeans", "Shoes"]

        After push():

            T-Shirt
            Jeans
            Shoes <---> added

        Use case

            When a customer clicks "Add to Cart", the product can be added to the cart.

            let cart = ["T-Shirt", "Jeans"];
            cart.push("Shoes");

            Now the cart contains:

                T-Shirt
                Jeans
                Shoes

    ## pop()

        pop() removes the last element from an array.

        Example

            let cart = ["T-Shirt", "Jeans", "Shoes"];
            cart.pop();
            console.log(cart);

        Output:

            ["T-Shirt", "Jeans"]

            "Shoes" was the last element, so it was removed.

        Use case

            If a shopping cart has a Remove Last Item operation:

            cart.pop();

            The last product is removed.

            pop() always works with the end of the array.

    ## shift()

        shift() removes the first element from an array.

        Example

            let orders = ["Order101", "Order102", "Order103"];
            orders.shift();
            console.log(orders);

        Output:

            ["Order102", "Order103"]

            The first order was removed.

        Use case:

            a shop has a queue of orders.

            The first order is completed:

                orders.shift();

            Now the next order becomes the first order.

    ## Unshift()
    
        unshift() adds one or more elements to the beginning of an array.

        Example
            
            let notifications = ["Message", "Email"];
            notifications.unshift("New Order");
            console.log(notifications);

        Output:

            ["New Order", "Message", "Email"]

            The new value is added at index 0.

        Use Case

            A notification system may place the newest notification at the beginning.

            let notifications = ["Message", "Email"];
            notifications.unshift("New Order");
    
    ## Splice()

        splice() is used when we want to add, remove, or replace elements at a specific position.

        Unlike push() and pop(), splice() can work in the middle of an array.

        Syntax

            array.splice(start, deleteCount,item1,item2);

        Example
            let products = ["T-Shirt", "Jeans", "Shoes"];
            products.splice(1, 1);
            console.log(products);

        Output:

            ["T-Shirt", "Shoes"]

        Here,

            products.splice(1, 1);

            The first 1 means ---> Start at index 1

            The second 1 means ---> Remove 1 element

        ### Adding Elements Using splice()

            We can add an element at a specific position.

                let products = ["T-Shirt", "Shoes"];
                products.splice(1, 0, "Jeans");
                console.log(products);

            Output:

                ["T-Shirt", "Jeans", "Shoes"]

            Here:

                splice(1, 0, "Jeans")

                Start at index 1
                Remove 0 elements
                Add "Jeans"

        ### Replacing Elements Using splice()

            We can also remove an existing value and insert another value.

                let products = ["T-Shirt", "Jeans", "Shoes"];
                products.splice(1, 1, "Jacket");
                console.log(products);

            Output:

                ["T-Shirt", "Jacket", "Shoes"]

            Here:

                splice(1, 1, "Jackect)

                Start at index 1
                Remove 1 element
                Add "Jacket"

                Jeans → removed
                Jacket → added

            use case

            An admin dashboard might allow an administrator to replace a product in a specific position in a product list.

        ### Slice()
        
            slice() is used to copy a portion of an array.

            Syntax

                array.slice(start, end);

                The end index is not included.

            Example

                let products = ["T-Shirt", "Jeans", "Shoes", "Jacket"];
                let selectedProducts = products.slice(1, 3);
                console.log(selectedProducts);

                Output:

                ["Jeans", "Shoes"]

                slice(1, 3) takes:

                    index 1 ---> Jeans
                    index 2 ---> Shoes

                It stops before index 3.

            Use case

                Suppose an e-commerce website has many products, but we want to display only products 2–3 on a particular section.

                    let visibleProducts = products.slice(1, 3);

                The original array is not changed.

        ### map()

            map() is used when we want to perform an operation on every element and create a new array from the results.

            Example

                Suppose a shopping application stores prices.
                We want to add ₹50 delivery charge to every price.

                let prices = [100, 200, 300];
                let finalPrices = prices.map(function(price) {
                    return price + 50;
                });
                console.log(finalPrices);

            Output:

                [150, 250, 350]

                How map() works

                    100 ---> 100 + 50 ---> 150
                    200 ---> 200 + 50 ---> 250
                    300 ---> 300 + 50 ---> 350

                So map() processes every element.

            Use case:

                map() is commonly useful when displaying or transforming data received from an API.

                example, an API may return product prices:

                    let prices = [100, 200, 300];
                    let discountedPrices = prices.map(function(price) {
                        return price - 20;
                    });

                    Result:

                        [80, 180, 280]

                    The original array remains:

                        [100, 200, 300]

        ## reduce()

            reduce() is used when we want to combine all array elements into a single result.

            example 
            
                suppose a shopping cart contains three prices.      We want to calculate the total.


                let prices = [200, 300, 500];
                let total = prices.reduce(function(sum, price) {
                    return sum + price;
                }, 0);
                console.log(total);

            Output:

                1000
                
            How reduce() works

                The 0 is the starting value.

                Starting value = 0

                0 + 200 = 200
                200 + 300 = 500
                500 + 500 = 1000

            Use case:

                A shopping cart can use reduce() to calculate the total price.

                let cart = [200, 300, 500];
                let total = cart.reduce(function(total, price) {
                    return total + price;
                }, 0);
                console.log(total);

                // 1000     

# Object

    An object is a data structure used to store related information as key-value pairs.

    Main purpose of an object

        Objects are created to represent a real-world entity or a related piece of data as one unit.

    Purpose of Object
    
        // represent an order
        let order = {
            orderId: 101,
            status: "Delivered"
        };

    example 
        
        a product has different pieces of information:

        let product = {
            name: "T-Shirt",
            price: 499,
            stock: 20
        };

    Here:

        name  ---> "T-Shirt"
        price ---> 499
        stock ---> 20

        Each pair is called a property.     

    ## why do we need Objects 

        Suppose we want to store information about a product.

        Without an object:

            let productName = "T-Shirt";
            let productPrice = 499;
            let productStock = 20;

            These are separate variables.

        With an object:

            let product = {
                name: "T-Shirt",
                price: 499,
                stock: 20
            };

            Now all information related to the product is grouped together.

    use case

        Objects are commonly used to represent:

            Products
            Users
            Orders
            Students
            Employees
            Payments
            API responses
            Application settings

    ## Object Creation  

        Objects are created using curly braces {}.

        Syntax

            let objectName = {
                property1: value1,
                property2: value2
            };
            
        Example

            let product = {
                name: "T-Shirt",
                price: 499,
                stock: 20
            };

            The object contains three properties:

            name
            price
            stock

            Each property has a value.

    ## Object Properties

        A property describes some information about an object.

        Example:

            let product = {
                name: "T-Shirt",
                price: 499,
                stock: 20
            };

        Here:

            name  → property
            price → property
            stock → property

            The values are:

                "T-Shirt"
                499
                20      

    ## Accessing Object Property

        There are two common ways to access a property:

            1.Dot notation
            2.Bracket notation

        1.Dot Notation

            object.property

            Example:

                let product = {
                    name: "T-Shirt",
                    price: 499
                };
                console.log(product.name);

            Output:

                T-Shirt

            To access the price:

                console.log(product.price);

            Output:

                499      

    ## Bracket Notation

        We can also access a property using square brackets.

            let product = {
                name: "T-Shirt",
                price: 499
            };
            console.log(product["name"]);
            console.log(product["price"]);

        Output:

            T-Shirt
            499             

        
        Also these are also works

            console.log(Object.keys(product));
            console.log(Object.values(product));
            console.log(Object.entries(product));

    ## Adding new Property

        We can add a new property to an existing object.

            let product = {
                name: "T-Shirt",
                price: 499
            };

            product.stock = 20;

        Now the object becomes:

            {
                name: "T-Shirt",
                price: 499,
                stock: 20
            }  

        Use case    

            Suppose an admin adds stock information to an existing product:

            product.stock = 20;

            The product object now contains the new information.            

    ## Updating a property

        We can change the value of an existing property.

            let product = {
                name: "T-Shirt",
                price: 499
            };
            product.price = 599;
        
        output

            price → 599

        Use case:

            If an e-commerce application changes the product price:

            product.price = 599;

            The product now has the updated price.

    ## Deleting a Property

        The delete operator removes a property.

            let product = {
                name: "T-Shirt",
                price: 499,
                stock: 20
            };
            delete product.stock;

        Output

            {
                name: "T-Shirt",
                price: 499
            }

        Use case

            If an application no longer needs a temporary property, it can be removed.

    ## Object Method

        An object can contain not only data but also functions.

        A function stored inside an object is called a method.

        Example:

            let user = {
                name: "Dinesh",

                greet: function() {
                    console.log("Welcome!");
                }
            };


            name  → property
            greet → method

            The method can be called using ---> user.greet();

        Output:

            Welcome!

    ## Why Do Objects have Methods

        Properties represent data.

        Methods represent actions/behavior.

        example:

            let cart = {
                items: 3,

                showItems: function() {
                    console.log("You have 3 items");
                }
            };

        Here:

            items ---> Data

            showItems() ---> Action

        This is useful because the object can keep related data and behavior together

    ## Method using object Properties

        A method can access properties belonging to the same object using this.

            let product = {
                name: "Laptop",
                price: 99499,

                showPrice: function() {
                    console.log(this.price);
                }
            };
            product.showPrice();

        Output:

            99499

        Here:

            this.price ---> Access the price property of the current object.

        Use case

            An object representing a shopping cart can contain both cart data and cart-related actions.

    ## Nested Objects

        An object can contain another object.

        This is called a nested object.

        Example:

            let user = {
                name: "Dinesh",

                address: {
                    city: "Coimbatore",
                    pincode: 641001
                }
            };

        Here:

            The address itself is an object.

    ## Accessing the Nested Object Properties

        We can use multiple dots.

            console.log(user.address.city);
            console.log(user.address.pincode);

        Output:

            Coimbatore
            641001

        Use case:   
            User information received from an API commonly has nested objects.

            let user = {
                name: "Dinesh",

                address: {
                    city: "Coimbatore",
                    country: "India"
                }
            }

    ## Objects inside Object and Array

        Real applications often combine objects and arrays.

        example

            an order can contain multiple products:

            let order = {
                orderId: 101,

                products: [
                    {
                        name: "T-Shirt",
                        price: 499
                    },
                    {
                        name: "Jeans",
                        price: 999
                    }
                ]
            };

        Accessing the 1st product

            console.log(order.products[0].name);

        Output

            T-shirt

        Accessing the 2nd product 

            console.log(order.product[1].price);

        Output

            999

    ## Object Destructuring

        Destructuring allows us to extract properties from an object and store them in variables.

        Without destructuring:

            let product = {
                name: "TV",
                price: 41199
            };
            let name = product.name;
            let price = product.price;

        With destructuring:

            let product = {
                name: "T-Shirt",
                price: 499
            };
            let { name, price } = product;

        here,

            name  ---> "TV"
            price ---> 41199

            We can use them directly:

            console.log(name);
            console.log(price);

        Output:

            TV
            41199

    ## Destructuring Purpose

        Imagine an API returns:

        let user = {
            name: "Dinesh",
            email: "dinesh@example.com",
            department: "AI & DS"
        };

        Instead of repeatedly writing:

            user.name
            user.email
            user.department

        we can extract them:

            let { name, email, department } = user;

        Now:

        console.log(name);
        console.log(email);
        console.log(department);

        This makes code easier to read, especially when working with API responses.

    ## Renaming during the Destructuring

        We can give the extracted property a different variable name.

            let product = {
                name: "T-Shirt",
                price: 499
            };
            let { name: productName, price: productPrice } = product;

        Now:

            productName  → "T-Shirt"
            productPrice → 499

        Example:

            console.log(productName);

        Output:

            T-Shirt

            The original property names are still:

                name
                price

            Only the local variable names changed.

    ## Object.keys()

        Object.keys() returns an array containing the property names of an object.

        Example:

            let product = {
                name: "T-Shirt",
                price: 499,
                stock: 20
            };
            console.log(Object.keys(product));

        Output:

            ["name", "price", "stock"]

        Use Case:

            Suppose an application wants to know what fields are available in a product object.

                let fields = Object.keys(product);
                console.log(fields);

            This can be useful when dynamically displaying object information.

    ## Object.values()

        Object.values() returns an array containing the values of an object.

        Example:

            let product = {
                name: "T-Shirt",
                price: 499,
                stock: 20
            };
            console.log(Object.values(product));

        Output:

            ["T-Shirt", 499, 20]

    ## Object.entries()

        Object.entries() returns an array containing key-value pairs.

        Example:

            let product = {
                name: "T-Shirt",
                price: 499
            };

            console.log(Object.entries(product));

        Output:

            [
                ["name", "T-Shirt"],
                ["price", 499]
            ]

        Use case

            This is useful when an application needs to process an object's information dynamically

    ## Strings  

        A string is a data type used to store text.

        example:

            let productName = "T-Shirt";
            let customerName = "Dinesh";
            let message = "Order placed successfully";

            All of these values are strings because they contain text.

        ## Creating a String

            A string can be created using:

            Double quotes " "
            Single quotes ' '
            Backticks ` `

            Double quotes
                let product = "AC";
            
            Single quotes
                let product = 'Laptop';
            
            Backticks
                let product = `Headset`;

            All three create strings.

        ## Why Do We Use Strings?

            Strings are used whenever an application needs to work with text.

        Real-time examples
        
            let userName = "Dinesh";

        Used for a user's name.

            let productName = "T-Shirt";

        Used for a product name.

            let email = "dinesh@example.com";

        Used for an email address.

            let orderStatus = "Delivered";

        Used for an order status.

            let message = "Payment successful";

        Used for displaying a message to the user.

    ## String Length    

        The length property tells us how many characters are present in a string.

        Example

            let product = "Mouse";
            console.log(product.length);

        Output:

            7

        It count:

            M - 1
            0 - 2
            u - 3
            s - 4
            4 - 5
    

            The length property counts every character, including spaces.

            Example with spaces
            let name = "Dinesh KS";

            console.log(name.length);

        Output:

            5

            The space is also counted.

            D i n e s h _ K S
            1 2 3 4 5 6 7 8 9
            Real-time use

        Use cases:  

            length can be used to check whether a username has an acceptable number of characters.

            let username = "Dinesh";
            if (username.length >= 5) {
                console.log("Valid username");
            }

        Output:

            Valid username

        ## String Concatenation 

            Concatenation means joining two or more strings together.

            The + operator can be used to concatenate strings.

            Example

                let firstName = "Dinesh";
                let lastName = "KS";
                let fullName = firstName + " " + lastName;
                console.log(fullName);

            Output:

                Dinesh KS

            Use case

                Suppose an application wants to display a welcome message.

                let name = "Dinesh";
                let message = "Welcome " + name;
                console.log(message);

            Output:

                Welcome Dinesh

            Drawback

                Concatenation works, but when a message contains many variables, the code can become difficult to read.

                example:

                    let name = "Dinesh";
                    let product = "T-Shirt";
                    let price = 499;
                    let message = "Hello " + name + ", your " + product + " costs ₹" + price;
                    console.log(message);

                    This works, but the statement becomes difficult to read.

                    For this reason, JavaScript provides template literals.
        
        ## Template Literals    

            Template literals allow us to create strings using backticks.

            let message = `Hello Dinesh`;

            Template literals become especially useful when we need to insert variables into a string.

        ## Variable Intepolation    

            Inside a template literal, we can insert JavaScript values using:

                ${value} ---> this is called string interpolation.

            Example

                let name = "Dinesh";
                let message = `Welcome ${name}`;
                console.log(message);

            Output:

                Welcome Dinesh

            Use case:

                Suppose an e-commerce application needs to display an order message.

                    let name = "Dinesh";
                    let product = "Watch";
                    let price = 1499;
                    let message = `Hello ${name}, your ${product} costs ₹${price}`;

                    console.log(message);

                Output:

                    Hello Dinesh, your Watch costs ₹1499

        ## Expression Inside Template Literals

            We can also put JavaScript expressions inside ${}.

            Example:

                let price = 500;
                let discount = 50;
                let message = `Final price: ₹${price - discount}`;
                console.log(message);

            Output:

                Final price: ₹450

    ## String Escaping

        Sometimes we need to put a special character inside a string.

            example, suppose we want to display:

                He said "Hello"

            We can use different types of quotes:

                let message = 'He said "Hello"';
                console.log(message);

            Output:

                He said "Hello"

            But if we want to use the same type of quote inside the string, we need an escape character.

            The escape character in JavaScript is \

    ## Escaping Double Quotes

        Suppose we use double quotes for the string:

            let message = "He said "Hello"";

            This causes a syntax error because JavaScript thinks the string ends before "Hello".

        We can escape the inner quotes:

            let message = "He said \"Hello\"";
            console.log(message);

        Output:

    ## Escaping Single Quotes

        The same concept applies to single quotes.

        This causes a problem:

            let message = 'It's available';

            JavaScript thinks the string ends at:

            It's

        We can escape the apostrophe:

            let message = 'It\'s available';
            console.log(message);

        Output:

            It's available

    ## String Methods

        JavaScript provides built-in string methods for working with text.

            String methods are functions that allow us to perform operations on strings.

        example:

            let product = "T-Shirt";
            console.log(product.toUpperCase());

        Output:

            T-SHIRT

        The method:

            toUpperCase() ---> converts the string to uppercase.

        ### toUpperCase()

            toUpperCase() converts all letters to uppercase.

            let name = "dinesh";
            console.log(name.toUpperCase());

        Output:

            DINESH
        
        use case

            A search system may convert text to the same case before comparing values.

            let category = "women";
            console.log(category.toUpperCase());

        Output:

            WOMEN

        ### toLowerCase()

            toLowerCase() converts all letters to lowercase.

            let category = "WOMEN";
            console.log(category.toLowerCase());

        Output:

            women
            
        use case

            This is useful when handling user input.

            For example, a user might type:

            WOMEN
            Women
            women

            We can convert all of them to lowercase before comparison.

            let input = "WOMEN";
            let result = input.toLowerCase();
            console.log(result);

        Output:

            women
        
        ### trim()

            trim() removes unnecessary whitespace from the beginning and end of a string.

            Example:

                let username = "   Dinesh   ";
                console.log(username.trim());

            Output:

                Dinesh

            Use case

                When a user enters their name into a form, they may accidentally add spaces.

                let name = "   Dinesh   ";
                name = name.trim();

                Now the unnecessary spaces are removed.

                trim() does not remove spaces between words.

                let name = "Dinesh KS";
                console.log(name.trim());

            Result:

                Dinesh KS
            
            ### includes()

                includes() checks whether a string contains a particular value.

                It returns: true or false

                Example:

                    let product = "Oversized T-Shirt";
                    console.log(product.includes("T-Shirt"));

                Output:

                    true

                If the value is not present:

                    console.log(product.includes("Jeans"));

                Output:

                    false
                
                Use Case

                    A search feature can check whether a product name contains the user's search text.

                        let product = "Oversized T-Shirt";
                        let search = "T-Shirt";
                        console.log(product.includes(search));

                    Output:

                        true

            ### startsWith()

                startsWith() checks whether a string starts with a particular value.

                    let orderId = "ORD101";
                    console.log(orderId.startsWith("ORD"));

                Output:

                    true
                
                use case

                An application can check whether an order ID follows a particular format.

                    ORD101
                    ORD102
                    ORD103

            ### endsWith()

                endsWith() checks whether a string ends with a particular value.

                    let email = "dinesh@gmail.com";
                    console.log(email.endsWith(".com"));

                Output:

                    true

                Use cases

                    It can be used to check a file extension.

                    let file = "invoice.pdf";
                    console.log(file.endsWith(".pdf"));

                Output:

                    true

            ### charAt()

                charAt() returns the character at a particular index.
                Remember that string indexing starts from 0.

                    let product = "T-Shirt";
                    console.log(product.charAt(0));

                Output:

                    T

            ### indexOf()

                indexOf() returns the position of the first occurrence of a value.

                    let product = "T-Shirt";
                    console.log(product.indexOf("S"));

                Output:

                    2

                If the value is not found, indexOf() returns:

                    -1

                Example:

                    console.log(product.indexOf("J"));

                Output:

                    -1

            ### replace()

                replace() replaces part of a string with another value.

                    let message = "Order is pending";
                    let updatedMessage = message.replace("pending", "confirmed");
                    console.log(updatedMessage);

                Output:

                    Order is confirmed
                    Real-time use

                An application can update a displayed status message.
            
            ### split()

                split() converts a string into an array.

                Example:

                    let categories = "T-Shirts,Jeans,Shoes";
                    let result = categories.split(",");
                    console.log(result);

                Output:

                    ["T-Shirts", "Jeans", "Shoes"]

                Use case

                    This can be useful when data comes from an input as a comma-separated string and we need to process each item separately.

            ### substring()

                substring() extracts part of a string.

                    let product = "T-Shirt";
                    let result = product.substring(0, 3);
                    console.log(result);

                Output:

                    T-S

    ## Numbers and Math

        JavaScript Number Methods

        JavaScript provides several built-in methods to convert, check, format, and perform calculations with numbers.

        The important methods covered here are:

            parseInt()
            parseFloat()
            toFixed()
            isNaN()
            Math methods

        ### parseInt()

            parseInt() is used to convert a value into an integer (whole number).

            It reads the number from the beginning of a string and removes the decimal part.

            Syntax

                parseInt(value)
            
            Example

                let price = "499";
                let result = parseInt(price);
                console.log(result);
            
            Output
                
                499

            The value was originally a string, but parseInt() converts it into an integer.
        
            use case

                Suppose a price comes from an input field:

                let quantity = "3";
                let totalQuantity = parseInt(quantity);
                console.log(totalQuantity + 2);

            Output
            
                5

                Without conversion "3" + 2 would produce: 32

                So parseInt() is useful when we need a whole number from a string.

        ### parseFloat()

            parseFloat() is used to convert a value into a decimal number.

            Unlike parseInt(), it keeps the decimal part.

            Syntax

                parseFloat(value)
            
            Example

                let price = "499.99";
                let result = parseFloat(price);
                console.log(result);
            
            Output

                499.99

        ### toFixed()

            toFixed() is used to format a number to a specific number of decimal places.

            Syntax
            
                number.toFixed(decimalPlaces)
            
            Example

                let price = 499.5;
                console.log(price.toFixed(2));
            
            Output
                
                499.50

            toFixed(2) --->  Keep exactly 2 digits after the decimal point.

            toFixed() returns a string, not a number.

                let price = 499.5;
                let result = price.toFixed(2);
                console.log(typeof result);
                
            Output
            
                string

            use case

                toFixed() is commonly used when displaying prices.

                    let price = 499.5;
                    console.log("₹" + price.toFixed(2));
                    
                Output
                
                    ₹499.50

                This is useful for:

                    Product prices
                    Shopping carts
                    Invoices
                    Tax calculations
                    Payment amounts

        ### isNAN()

            isNaN() is used to check whether a value is Not a Number.

            NaN means:

                Not a Number
                Syntax
                isNaN(value)

            It returns either:

                true or false

            Example

                console.log(isNaN(100));
            
            Output
                
                false

            100 is a valid number

                console.log(isNaN("hello"));

            Output

                true

            use cases

                Suppose a user enters a quantity:

                let quantity = "abc";
                if (isNaN(quantity)) {
                    console.log("Please enter a valid number");
                }

            Output
            
                Please enter a valid number

            This is useful for:

                Form validation
                Quantity input
                Age input
                Price input
                Marks input

    ## Math Object

        JavaScript provides a built-in Math object for performing mathematical calculations.

        Math
        │
        ├── round()
        ├── floor()
        ├── ceil()
        ├── random()
        ├── max()
        ├── min()
        ├── abs()
        └── pow()

        ### Math.round()

            Math.round() rounds a number to the nearest integer.

            Example

                console.log(Math.round(4.4));
                console.log(Math.round(4.6));

            Output
                4
                5

            Used when we need to display a rounded rating or score.

                let rating = 4.6;
                console.log(Math.round(rating));

            Output:

                5

        ## Math.floor()

                Math.floor() always rounds a number down to the nearest integer.

            Example

                console.log(Math.floor(4.9));
                
            Output
            
                4

            ## Math.ceil()

                Math.ceil() always rounds a number up to the nearest integer.

            Example

                console.log(Math.ceil(4.1));
                
            Output
            
                5

        ## Math.random()

            Math.random() generates a random decimal number between 0 and 1.

            Example

                console.log(Math.random());

                Possible output:

                0.347829

            Use Case

                Random OTP-like demo values
                Random quiz questions
                Random products
                Games
                Random colors
                Random selections

        ## Math.max()

            Math.max() returns the largest number.

            Example
            
                let result = Math.max(100, 500, 250);
                console.log(result);
            
            Output
                
                500
            
            Use Case

                Finding the highest value:

                let marks = [70, 85, 92, 78];
                console.log(Math.max(...marks));
                
            Output
            
                92

        ## Math.min() returns the smallest number.

            Example

                let result = Math.min(100, 500, 250);
                console.log(result);

            Output
            
                100

            Use Case

            Finding the lowest value:

                let marks = [70, 85, 92, 78];
                console.log(Math.min(...marks));

            Output
                
                70
        
        ## Math.abs()

            Math.abs() returns the positive value of a number.

            Example

                console.log(Math.abs(-50));
            
            Output
            
                50

            It removes the negative sign.

            Use Case

            Suppose we want to find the difference between two values:

                let difference = Math.abs(100 - 130);
                console.log(difference);
            
            Output
            
                30

            This is useful when we only care about the distance/difference, not whether it is positive or negative.


        ## Math.pow()

            Math.pow() is used to calculate a number raised to a power.

            Syntax

                Math.pow(base, exponent)
            
            Example
            
                console.log(Math.pow(2, 3));
            
            Output
                
                8

            Because:

            2 × 2 × 2 = 8

            Modern JavaScript also provides the exponentiation operator:

                console.log(2 ** 3);

            Output:

                8

    ## Date Object

        The JavaScript Date object is used to work with dates and times.

        It can be used to:

            Get the current date and time
            Get a specific date
            Get individual date/time values
            Format dates
            Compare dates
            Calculate time differences
            Work with timestamps

        ### What is the Date Object?

            JavaScript provides a built-in Date object for handling date and time information.

            let today = new Date();
            console.log(today);

            Possible output:

            Fri Sep 1 2023 01:22:00 GMT+0530

        ### Creating a Date

            We use the new Date() constructor to create a Date object.

            Current Date and Time

                let date = new Date();
                console.log(date);


            Specific Date

                We can also create a specific date:

                let date = new Date("2026-09-18");
                console.log(date);

            This creates a Date object representing September 18, 2026.
        
        ### Why Do We Need the Date Object?

            The main purpose of the Date object is:

            To store, calculate, compare, and display dates and times in JavaScript applications.

            Examples

                Online order dates
                Delivery dates
                Login time
                Registration date
                Appointment booking
                Event schedules
                Notifications
                Transaction history

            example:

                Order placed:
                18 September 2026, 10:30 AM

        ### Getting Individual Date Values

            JavaScript provides methods to get individual parts of a date.

            Consider:

            let date = new Date("2026-09-18T10:30:45");

            We can get different values from it.

        ### getFullYear()

            getFullYear() returns the year.

                let date = new Date();
                console.log(date.getFullYear());

            Output:

                2026
            
            Use Case

            Displaying the current year:
            console.log(date.getFullYear());
            
            This can be used in: © 2026 My Website

        ### getMonth()

            getMonth() returns the month number.

            let date = new Date();
            console.log(date.getMonth());

            Important:

            JavaScript months start from 0.

                January   → 0
                February  → 1
                March     → 2
                ...
                December  → 11

            example:

                let date = new Date("2026-09-18");
                console.log(date.getMonth());

            Output:

                8

        ### getDate()

            getDate() returns the day of the month.

                let date = new Date("2026-09-18");
                console.log(date.getDate());

            Output:

                18


            getDate() → day of the month
            getDay()  → day of the week
            
        ### getDay()

            getDay() returns the day of the week.

            It also starts from 0.

            Sunday    → 0
            Monday    → 1
            Tuesday   → 2
            Wednesday → 3
            Thursday  → 4
            Friday    → 5
            Saturday  → 6

            Example:

                let date = new Date("2026-09-18");
                console.log(date.getDay());       

            output

                5

            So September 18, 2026 is a Friday.

        ### getHours()

            getHours() returns the hour.

            let date = new Date();
            console.log(date.getHours());

            Possible output:

                10

            The value uses the local time of the environment.

        ### getMinutes()

            getMinutes() returns the minutes.

            let date = new Date();
            console.log(date.getMinutes());

            Possible output:

                30
        
        ### getSeconds()

            getSeconds() returns the seconds.
            
            let date = new Date();
            console.log(date.getSeconds());

            Possible output:     

                45

        ### Formatting a Date

            A Date object contains date information, but we often need to display it in a format that users can easily understand.

            example:

                2026-09-18

                might need to be displayed as:

                18/09/2026 or 18 September 2026

                JavaScript provides several methods for formatting dates.

        ### toDateString()

            toDateString() returns only the date portion in a readable format.

                let date = new Date();
                console.log(date.toDateString());

            output:

                Fri Sep 18 2026 ---> It does not display the time.

        ### toTimeString()

            toTimeString() returns the time portion.

                let date = new Date();
                console.log(date.toTimeString());

            output:

                10:30:45 GMT+0530 (India Standard Time)

        ### toISOString()

            toISOString() converts a Date object into an ISO 8601 formatted string.

                            YYYY-MM-DDTHH:mm:ss.sssZ

                let date = new Date("2026-09-18T10:30:45Z");
                console.log(date.toISOString());

            Output:

                2026-09-18T10:30:45.000Z

            Use Case

                ISO format is commonly used when sending dates between:

                    Frontend
                    ↓
                    API
                    ↓
                    Backend
                    ↓
                    Database

                example:

                    2026-09-18T10:30:45.000Z ---> is easier for systems to process consistently.

        ### toLocaleDateString()

            toLocaleDateString() formats a date according to a locale.

                let date = new Date();
                console.log(date.toLocaleDateString());

            output:

                18/09/2026

            The exact format depends on the user's locale and environment.

                let date = new Date();
                console.log(date.toLocaleDateString("en-IN"));

            output:

                18/09/2026

            For an Indian application, en-IN can be useful for displaying dates in an Indian-friendly format.

        ### toLocaleTimeString()

            toLocaleTimeString() formats the time according to a locale.

                let date = new Date();
                console.log(date.toLocaleTimeString("en-IN"));

            output:

                10:30:45 am

            The exact output can vary depending on the environment and options.

        ### Custom Date Formatting

            We can combine Date methods to create our own format.

                let date = new Date("2026-09-18");
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                console.log(`${day}/${month}/${year}`);

            Output:

                18/9/2026

            We can add a leading zero if needed:

                let day = String(date.getDate()).padStart(2, "0");
                let month = String(date.getMonth() + 1).padStart(2, "0");
                let year = date.getFullYear();
                console.log(`${day}/${month}/${year}`);

            Output:

                18/09/2026

        ### Timestamp

            A timestamp represents a point in time as the number of milliseconds since January 1, 1970 UTC.

                This starting point is called the:

                Unix Epoch

                example:

                    January 1, 1970
                        ↓
                    Unix Epoch
                        ↓
                    Milliseconds counted from this point

        ### Getting the Current Timestamp

            We can use:

                Date.now();

            Example:

                let timestamp = Date.now();
                console.log(timestamp);

            output:

                1789704000000

            The exact value changes continuously because it represents the current time.

        ### getTime()

            getTime() returns the timestamp of a Date object.

                let date = new Date();
                console.log(date.getTime());

            output:

                1789704000000

            So:

                Date.now() 
                new Date().getTime()

                both provide the current timestamp in milliseconds.
                                
        ### Timestamps Useful

            Timestamps make it easy to compare and calculate time.

            example:

                Order placed
                    ↓
                10:00 AM

                Order delivered
                    ↓
                12:00 PM

            Instead of comparing formatted strings, we can compare timestamps.

                Delivery timestamp  - Order timestamp = Time difference

            Use Cases

                Timestamps are commonly used for:

                    -Order creation time
                    -Login time
                    -Last updated time
                    -API responses
                    -Database records
                    -Expiration times
                    -Session timeout
                    -Comparing two dates

        ### Comparing Dates

            Date objects can be compared using their timestamps.

                let date1 = new Date("2026-09-18");
                let date2 = new Date("2026-09-20");
                if (date1 < date2) {
                    console.log("date1 is earlier");
                }

            Output:

                date1 is earlier

        ### Calculating Difference Between Dates

                let start = new Date("2026-09-18");
                let end = new Date("2026-09-20");
                let difference = end - start;
                console.log(difference);

            The result is in milliseconds.

            To convert milliseconds into days:

                let days = difference / (1000 * 60 * 60 * 24);
                console.log(days);

            Output:

                2

        ### Setting Date Values

            JavaScript also provides methods to change parts of a Date object.

                setFullYear()
                let date = new Date();
                date.setFullYear(2030);
                console.log(date.getFullYear());

            Output:

                2030
                
            #### setMonth()

                let date = new Date();
                date.setMonth(0);
                console.log(date.getMonth());

                Output:
                    
                    0   ---> represents January.

            #### setDate()

                let date = new Date();
                date.setDate(25);
                console.log(date.getDate());

            Output:

                25

    ## Use cases

        an e-commerce application storing when an order was placed.

            let orderDate = new Date();
            console.log(orderDate.toLocaleDateString("en-IN"));
            console.log(orderDate.toLocaleTimeString("en-IN"));

        output:

            18/09/2026
            10:30:45 am

        We can also store a timestamp:

            let orderTimestamp = orderDate.getTime();
            console.log(orderTimestamp);

        The formatted date/time is useful for displaying to the user, while the timestamp is useful for calculations and comparisons.

## Error Handling

    Error handling is used to detect, handle, and respond to errors without suddenly stopping the entire program.

    The main concepts are:

        -try
        -catch
        -finally
        -throw
        -Custom errors

    
    Error

        An error occurs when JavaScript cannot execute an operation as expected.

        example:

            let result = 10 / 0;

            This does not produce a JavaScript error because JavaScript allows division by zero and produces: Infinity

                But this does produce an error:

                    let user = null;
                    console.log(user.name);

            Output:

                TypeError

            The program cannot access name from null
            
    Need for Error Handling

        The main purpose of error handling is:

            To prevent unexpected errors from breaking the normal flow of an application and to handle those errors appropriately.

        Without error handling

                Application 
                    ↓ 
                Error occurs 
                    ↓ 
                Program stops 
                    ↓ 
            User gets unexpected behavior

        With error Handling

            Application 
                ↓ 
            Error occurs 
                ↓ 
            Error is caught 
                ↓ 
            Application handles it 
                ↓ 
            User receives proper response

        Use case

            Error handling is commonly used in:

                -Login systems
                -Payment processing
                -API requests
                -Database operations
                -File processing
                -Form validation
                -User input
                -Network requests

            example 
                
                if a payment request fails, instead of the application crashing, we can show:

                    Payment failed. Please try again.

        ## try

            try contains the code that might produce an error.

            Syntax

                try {
                    // code that may cause an error
                }

            Example:

                try {
                    console.log(user.name);
                }

                If user does not exist, an error occurs.
                We normally use it together with catch.

        ## catch    

            catch is used to handle an error that occurs inside the try block.

            Syntax

                try {
                    // risky code
                } catch (error) {
                    // handle error
                }

            Example
                
                try {
                    let user = null;

                    console.log(user.name);
                } catch (error) {
                    console.log("Something went wrong");
                }

            Output

                Something went wrong

                The error occurred inside try, so JavaScript moved to catch.

        ## the error object

            The catch block receives an error object.

                try {
                    let user = null;
                    console.log(user.name);
                }
                catch (error) {
                    console.log(error);
                }

            The output contains information about the error.

            We can access specific properties

            ### error.name

                try {
                    let user = null;
                    console.log(user.name);
                } 
                catch (error) {
                    console.log(error.name);
                }

                Output:

                    TypeError

            ### error.message

                try {
                    let user = null;
                    console.log(user.name);
                } 
                catch (error) {
                    console.log(error.message);
                }

                output:

                    Cannot read properties of null

            ### error.stack

                error.stack provides detailed information about where the error occurred.

                    try {
                        let user = null;
                        console.log(user.name);
                    } 
                    catch (error) {
                        console.log(error.stack);
                    }

                It is mainly useful for debugging

        ## finally

            finally contains code that always executes, whether an error occurs or not.

            Syntax

                try {
                    // code
                } 
                catch (error) {
                    // handle error
                } 
                finally {
                    // always executes
                }


            Example

                try {
                    console.log("Processing");
                } 
                catch (error) {
                    console.log("Error occurred");
                } 
                finally {
                    console.log("Process finished");
                }

                Output:

                    Processing
                    Process finished

            When an Error Occurs

                try {
                    let user = null;
                    console.log(user.name);
                } 
                catch (error) {
                    console.log("Error occurred");
                } 
                finally {
                    console.log("Process finished");
                }

            Output:

                Error occurred
                Process finished

                finally still runs.

        ## Need of finally

            finally is useful when some operation must be completed regardless of success or failure.

            It can be used for:

                -Closing a resource
                -Hiding a loading indicator
                -Ending a transaction process
                -Cleaning temporary data
                -Resetting application state

            example:

                Start payment
                    ↓
                Payment processing
                    ↓
                Success OR Error
                    ↓
                Stop loading indicator

            The loading indicator should stop in both cases, so finally is useful.

        ## throw

            JavaScript allows us to manually create an error using throw.

            Syntax

                throw new Error("Error message");
                
            Example
            
                let age = 15;
                if (age < 18) {
                    throw new Error("User must be 18 or older");
                }

            Output:

                Error: User must be 18 or older

                Here, we intentionally created an error because the application rule was violated.

        ## throw with try and catch

            Usually, we use throw together with try and catch.

                try {
                    let age = 15;
                    if (age < 18) {
                        throw new Error("User must be 18 or older");
                    }
                    console.log("Registration allowed");
                } 
                catch (error) {
                    console.log(error.message);
                }

            Output:

                User must be 18 or older

                    age = 15
                    ↓
                    age < 18
                    ↓
                    throw Error
                    ↓
                    catch
                    ↓
                    Display error message

        
        ## why we need throw

            throw is useful when the program needs to say:

            "This situation is not acceptable, so I want to stop this operation and report an error."

            example:

                let quantity = 0;
                if (quantity <= 0) {
                    throw new Error("Quantity must be greater than 0");
                }

                This allows us to enforce application rules.

            Use case

                      Login
                        ↓
                    Invalid credentials
                        ↓
                    throw error
                --------------------------
                      Order
                        ↓
                    Quantity is 0
                        ↓
                    throw error
                 --------------------------
                    Payment
                        ↓
                    Amount is invalid
                        ↓
                    throw error

        ## Custom Errors

            A custom error is an error that we create ourselves to represent a specific problem in our application.

            JavaScript provides the Error constructor:

                new Error("message")

            Example:

                throw new Error("Invalid product price");

            This is a custom error message created by the developer.

        ## Creating a Custom Error Class

            For larger applications, we can create our own error class.

            Example

                class OrderError extends Error {
                    constructor(message) {
                        super(message);
                        this.name = "OrderError";
                    }
                }

                try {
                    throw new OrderError("Order quantity is invalid");
                } 
                catch (error) {
                    console.log(error.name);
                    console.log(error.message);
                }

            Output:

                OrderError
                Order quantity is invalid

        ## Purpose of Custom Errors?    

            Custom errors help us identify different types of problems clearly.
                
                an e-commerce application might have:

                    -OrderError
                    -PaymentError
                    -AuthenticationError
                    -ValidationError

                Instead of receiving a generic: Error

                we can identify what type of problem occurred.

                Example:

                    class PaymentError extends Error {
                        constructor(message) {
                            super(message);
                            this.name = "PaymentError";
                        }
                    }

                    Then:

                        throw new PaymentError("Payment failed");

                        The application can identify:

                            PaymentError ---> Payment failed

        ## Handling Different Errors

            We can check the type of error inside catch.

                try {
                    let user = null;
                    console.log(user.name);
                } 
                catch (error) {
                    if (error instanceof TypeError) {
                        console.log("Invalid object access");
                    }
                }

            Output:

                Invalid object access

                This allows the application to respond differently to different errors.

        ## Example -
        
            1.Product purchase

            try {
                let quantity = 0;
                if (quantity <= 0) {
                    throw new Error("Quantity must be greater than 0");
                }
                console.log("Order placed");
            } 
            catch (error) {
                console.log(error.message);
            } finally {
                console.log("Order process completed");
            }

        Output:

            Quantity must be greater than 0
            Order process completed

            2.requests product information from a server

                try {
                    let response = await fetch("/api/products");

                    if (!response.ok) {
                        throw new Error("Failed to load products");
                    }

                    let products = await response.json();

                } 
                catch (error) {
                    console.log("Unable to load products");
                }


                Example:    

                    the user might see:

                    Unable to load products.
                    Please try again.

# JavaScript Events

    An event is an action that happens in a web page.

    Examples:

        -User clicks a button
        -User types in an input
        -User submits a form
        -Mouse moves over an element
        -Keyboard key is pressed
        -A page finishes loading

        JavaScript can listen for these events and execute code when they happen.

    ## Event

        An event represents something that happened in the browser.

            User clicks button
                ↓
              Event
                ↓
            JavaScript responds
                ↓
            Display message

        Example:

            <button>Buy Now</button>

            When the user clicks the button:

                JavaScript can detect this click and perform an action.

    ## Why we need Event

        To make web pages interactive by allowing JavaScript to respond to user actions and browser activities.

        Events are used in:

            -Add to cart buttons
            -Login forms
            -Search boxes
            -Dropdown menus
            -Navigation menus
            -Like buttons
            -Image sliders
            -Form validation
            -Popup windows

        Common Js Events

            Some commonly used events are:

            Event	    --->    When it happens
            click	    --->    User clicks an element
            dblclick    --->    User double-clicks
            mouseover    --->    Mouse moves over an element
            mouseout    --->    Mouse leaves an element
            keydown	    --->    Keyboard key is pressed
            keyup	    --->    Keyboard key is released
            input	    --->    Input value changes
            change	    --->    Input/select value is changed
            submit	    --->    Form is submitted
            focus	    --->    Element receives focus
            blur	    --->    Element loses focus
            load	    --->    Resource/page finishes loading

    ## Event Listener

        An event listener tells JavaScript:

            "Watch this element for a particular event, and run this function when that event happens."

        We use:

            addEventListener()

        Example

            HTML:

                <button id="buyButton">Buy Now</button>

            JavaScript:

                let button = document.getElementById("buyButton");
                button.addEventListener("click", function() {
                    console.log("Product added");
                });

            When the user clicks:

                Buy Now
                    ↓
                click event
                    ↓
                function runs
                    ↓
                "Product added"

            Output:

                Product added

    ## Use of addEventListener()

        addEventListener() allows us to attach JavaScript behavior to an element.

        For example:

            button.addEventListener("click", function() {
                console.log("Clicked");
            });

        The browser waits for:

            click

        When the click occurs:

            function() is executed.

    ## USing the separate function  

        Instead of writing the function directly, we can create a separate function.

            function buyProduct() {
                console.log("Product added to cart");
            }

            let button = document.getElementById("buyButton");
            button.addEventListener("click", buyProduct);

        We pass the function so that the browser can call it when the event happens.
                                                            
    ## Multiple Event Listeners

        We can add different events to the same element.

        let button = document.getElementById("buyButton");
        button.addEventListener("click", function() {
            console.log("Button clicked");
        });
        button.addEventListener("mouseover", function() {
            console.log("Mouse over button");
        });

        Now the button responds to two different events.

            Mouse over   --->      mouseover handler

            Click    --->        click handler  

    ## Event Object

        When an event occurs, the browser creates an event object containing information about that event.

            We can receive it as a parameter.

        Example

            button.addEventListener("click", function(event) {
                console.log(event);
            });

        The event object contains information about:

            -What event occurred
            -Which element triggered it
            -Mouse position
            -Keyboard key
            -Target element
            -Other event details   

        ### event.target

            event.target tells us which element actually triggered the event.

            Example:

                <button id="buyButton">Buy Now</button>
                let button = document.getElementById("buyButton");

                button.addEventListener("click", function(event) {
                    console.log(event.target);
                });

            The target is:

                <button id="buyButton">Buy Now</button>

                event.target  ---> Element that triggered the event               

        ### event.type
        
            event.type tells us what type of event occurred.

                button.addEventListener("click", function(event) {
                    console.log(event.type);
                });

            Output:

                click

            For a keyboard event:

                input.addEventListener("keydown", function(event) {
                    console.log(event.type);
                });

            Output:

                keydown

        ### Keyboard Event Example

            HTML:

                <input id="username">

            JavaScript:

                let input = document.getElementById("username");
                input.addEventListener("keydown", function(event) {
                    console.log(event.key);
                });

            If the user presses: A

                Output: ---> a

            If the user presses: Enter

                Output: ---> Enter

            event.key ---> Which keyboard key was pressed

        ### Preventing Default Behaviour

            The event object provides:

                event.preventDefault()

                It prevents the browser's default action for an event.

            Example

                Suppose we have a form:

                    <form id="loginForm">
                        <button type="submit">Login</button>
                    </form>

                Normally, submitting the form may cause the browser to navigate/reload.

                We can prevent that:

                    let form = document.getElementById("loginForm");

                    form.addEventListener("submit", function(event) {
                        event.preventDefault();

                        console.log("Form submitted without page reload");
                    });

                Use case

                    This is commonly used when submitting forms through JavaScript

        ### Event Bubbling

            Event bubbling means an event starts at the element where it happened and then moves upward through its parent elements.

                <div id="parent">
                    <button id="child">Click</button>
                </div>

            When the button is clicked:

                button
                ↑
                div
                ↑
                body
                ↑
                html
                ↑
                document

            The event bubbles upward.

            Example

                let parent = document.getElementById("parent");
                let child = document.getElementById("child");

                child.addEventListener("click", function() {
                    console.log("Button clicked");
                });

                parent.addEventListener("click", function() {
                    console.log("Parent clicked");
                });

                Output

                    When the button is clicked

                    Button clicked
                    Parent clicked


                        Click button
                            ↓
                        Button handler runs
                            ↓
                        Event bubbles upward
                            ↓
                        Parent handler runs

        ### Importance of Event Bubbling Matter

            Event bubbling is important because events can be handled by parent elements.

            This becomes especially useful when we have many child elements.

            example:

                <div id="products">
                    <button>Product 1</button>
                    <button>Product 2</button>
                    <button>Product 3</button>
                </div>

            Instead of adding a listener to every button, we can use the parent.

            This idea is called: Event Delegation

        ### Event Delegation

            Event delegation is a technique where we:

            Attach one event listener to a parent element and use event bubbling to handle events from its child elements.

            Instead of:

                Button 1 ---> listener
                Button 2 ---> listener
                Button 3 ---> listener
                Button 4 ---> listener

            we use:

                     Parent
                        ↓
                One event listener
                    ↙    ↓    ↘
             Button1 Button2 Button3

            Example

                HTML:

                    <div id="products">
                        <button>Product 1</button>
                        <button>Product 2</button>
                        <button>Product 3</button>
                    </div>

                JavaScript:

                    let products = document.getElementById("products");

                    products.addEventListener("click", function(event) {
                        console.log(event.target.textContent);
                    });

                    If the user clicks: Product 2

                Output

                    Product 2

                We attached only one listener to the parent

        ### Working of Event Delegation Works

            When the user clicks Product 2:

                User clicks Product 2
                        ↓
                Click event occurs
                        ↓
                Event bubbles to #products
                        ↓
                Parent listener runs
                        ↓
                event.target identifies Product 2
                        ↓
                Product 2 is processed


                event.target ---> Find which child was clicked 

            Why Use Event Delevation

                Event delegation is useful when there are many similar elements.

                For example, an e-commerce page may have:

                    Product 1 → Add to Cart
                    Product 2 → Add to Cart
                    Product 3 → Add to Cart
                    Product 4 → Add to Cart
                    Product 5 → Add to Cart

                Instead of creating five separate listeners:

                    Button 1 → listener
                    Button 2 → listener
                    Button 3 → listener
                    Button 4 → listener
                    Button 5 → listener

                we can use:

                    Product container
                        ↓
                    One listener
                        ↓
                    event.target
                        ↓
                    Identify clicked button

                    This can reduce the number of event listeners we need to manage.

        ### stopPropagation()

            Sometimes we don't want an event to continue bubbling.

            We can use:

                event.stopPropagation();

            Example:

                child.addEventListener("click", function(event) {
                    event.stopPropagation();

                    console.log("Button clicked");
                });

                Now the event will not continue to the parent through normal bubbling.

            Flow

                Without stopPropagation():

                  Button
                    ↓
                  Parent
                    ↓
                   Body
                    ↓
                Document

            With stopPropagation():

                Button ---> STOP

        ### Example

            online shopping cart.

                <div id="cart">
                    <button class="remove">Remove</button>
                    <button class="remove">Remove</button>
                    <button class="remove">Remove</button>
                </div>

                Instead of adding a listener to every remove button:

                let cart = document.getElementById("cart");
                cart.addEventListener("click", function(event) {
                    if (event.target.classList.contains("remove")) {
                        console.log("Remove product");
                    }

                });

            Flow

                User clicks Remove
                        ↓
                Click event
                        ↓
                Event bubbles to cart
                        ↓
                Cart listener executes
                        ↓
                event.target
                        ↓
                Find clicked Remove button
                        ↓
                Remove product

                This pattern is very common in dynamic interfaces

# DOM Manipulation  

    DOM manipulation is used to change HTML elements, content, styles, attributes, and structure dynamically using JavaScript.

    DOM (Document Object Model) is a representation of an HTML page that JavaScript can access and modify.
    
    When a browser loads HTML, it creates a DOM tree from the HTML elements.

    Example:

        <h1>Hello</h1>
        <button>Buy Now</button>

        The browser represents them as objects that JavaScript can access.

        Document
        │
        ├── h1
        │    └── "Hello"
        │
        └── button
                └── "Buy Now"

    ## Selecting Elements

        Before JavaScript can change an HTML element, it usually needs to select or find the element.

        The commonly used methods are:

            getElementById()
            querySelector()

        ### getElementById()

            getElementById() selects an HTML element using its id.

            HTML

                <h1 id="title">Old Product Name</h1>

            JavaScript

                const title = document.getElementById("title");
                console.log(title);


            We can change it:

                title.textContent = "New Product Name";
                Result

            output

                New Product Name

            use case

                Used when a page has a specific element that needs to be updated.

                        Changing a user's name
                        Updating cart count
                        Showing an error message
                        Updating product price
                        Easy Memory

                    getElementById() → Find an element by its ID

        ### querySelector()

            querySelector() selects the first element that matches a CSS selector.

            HTML

                <p class="price">₹499</p>

            JavaScript

                const price = document.querySelector(".price");
                console.log(price);

            Here:

                ".price" ---> is a CSS class selector.

            We can change it:

                price.textContent = "₹399";
                It can select different selectors

                ID
                document.querySelector("#title");

                Class
                document.querySelector(".price");

                Tag
                document.querySelector("button");

                Attribute
                document.querySelector("[type='email']");

        ### createElement

            createElement() creates a new HTML element using JavaScript.

                Example:

                    const product = document.createElement("div");

                This creates:

                    <div></div>

                But it is not yet displayed on the page.
                We can add content:

                    product.textContent = "T-Shirt";

                Now the element contains:

                    <div>T-Shirt</div>

                To display it, we add it to an existing element.

                document.body.appendChild(product);

                Complete code

                HTML
                    <div id="products"></div>

                JS
                    const product = document.createElement("div");
                    product.textContent = "T-Shirt";
                    document.getElementById("products").appendChild(product);
                
                Output      

                    T-shirt

                Use case

                    createElement() is commonly used when applications need to create UI elements dynamically.

                        -Adding a new product card
                        -Creating a new cart item
                        -Adding a notification
                        -Creating a new table row
                        -Displaying search results
                        -Easy Memory

        ### innerHTNL

            innerHTML is used to get or change the HTML content inside an element.

            HTML

                <div id="message"></div>

            JavaScript

                const message = document.getElementById("message");
                message.innerHTML = "<b>Order Placed</b>";

            Creates

                <div id="message">
                    <b>Order Placed</b>
                </div>

        ### classList

            classList is used to add, remove, toggle, or check CSS classes on an element.

            Example:

                <button id="menu">Menu</button>

            Suppose CSS contains:

                .active {
                    background: black;
                    color: white;
                }

            JavaScript can add the class:

                const menu = document.getElementById("menu");
                menu.classList.add("active");

            Now the button has:

                <button id="menu" class="active">
                    Menu
                </button>

            Common Classlist methods

                add()

                    Adds a class.

                    menu.classList.add("active");
                    
                remove()

                    Removes a class.

                    menu.classList.remove("active");
                    
                toggle()

                    Adds the class if it does not exist and removes it if it already exists.

                    menu.classList.toggle("active");

                    This is very useful for things like:

                        -Opening/closing menus
                        -Dark mode
                        -Showing/hiding elements
                        -Active navigation links
                        -Wishlist buttons

                contains()

                    Checks whether an element has a class.

                    menu.classList.contains("active");

                    Returns:     true or false

        ## Attributes

            HTML elements can have attributes that provide additional information.

            Example:

                <img id="productImage" src="shirt.jpg" alt="T-Shirt">

            Here:

                src  → attribute
                alt  → attribute
                id   → attribute

                JavaScript can read and modify these attributes.

            getAttribute()

                Used to get an attribute value.

                    const image = document.getElementById("productImage");
                    console.log(image.getAttribute("src"));

                Output:

                    shirt.jpg
        
            setAttribute()

                Used to create or change an attribute.

                image.setAttribute("src", "new-shirt.jpg");

                Now:

                <img src="new-shirt.jpg">

            removeAttribute()

                Used to remove an attribute.

                image.removeAttribute("alt");
                
            hasAttribute()

                Checks whether an attribute exists.

                image.hasAttribute("alt");

                Returns ---> true or false

        use case

            e-commerce website displays a product image.

            HTML

                <img id="productImage" src="shirt.jpg" alt="T-Shirt">

                <button id="changeImage">View Back</button>
            
            JavaScript
                const image = document.getElementById("productImage");
                const button = document.getElementById("changeImage");

                button.addEventListener("click", function () {
                    image.setAttribute("src", "shirt-back.jpg");
                });

            When the user clicks:

                View Back
                    ↓
                JavaScript
                    ↓
                Change src attribute
                    ↓
                New product image displayed

                This is DOM manipulation because JavaScript changes the existing HTML element dynamically.
                                                    

# BOM (Browser Object Model)

    BOM (Browser Object Model) allows JavaScript to interact with the browser itself, rather than directly with the HTML elements of the page.

    The main object in BOM is the window object.

    BOM is used to interact with the browser window, URL, browser information, screen, and browser dialogs.

        Browser
        │
        └── window
                ├── alert()
                ├── confirm()
                ├── prompt()
                ├── location
                ├── navigator
                └── screen

        ### window

            window represents the browser window or browser tab where the webpage is running.

            Many browser features are available through window.

            code:

                window.alert("Welcome!");

                alert("Welcome!");

            Because alert() is a method of the window object, the browser allows you to omit window..

            Examples

                window.alert("Hello");
                window.confirm("Are you sure?");
                window.prompt("Enter your name");

        ### alert()

            alert() displays a simple message box to the user.

            alert("Order placed successfully!");

            The browser displays:

            
             Order placed successfully!   
                                          
                       [ OK ]            

            The user must click OK to close it.

            Real-Time Use

            Used for simple notifications such as:

            Showing an important message
            Warning the user
            Informing the user about an action

            Example:

            alert("Payment successful!");

        ### confirm()

            confirm() asks the user to confirm an action.

            const result = confirm("Do you want to delete this item?");

             Do you want to delete this     
             item?                          
                                            
                   [ OK ]    [ Cancel ]     

            The result is a Boolean value.

            If the user clicks OK:

                true

            If the user clicks Cancel:

                false

            Example:

                const result = confirm("Delete this product?");

                if (result) {
                    console.log("Product deleted");
                }

            Real-Time Use

                Used when an action needs user confirmation.

                    -Delete an item
                    -Logout
                    -Cancel an order
                    -Clear a cart

        ### prompt()

            prompt() asks the user to enter some information.

            const name = prompt("Enter your name");

            The browser displays an input box.

                Enter your name              
                                          
                    [ Dinesh]  
                                          
                   [ OK ]    [ Cancel ]   

            If the user enters:

                Dinesh

            Then:

                name   --->     "Dinesh"

            Real-Time Use

                prompt() can be used for simple input demonstrations, but modern websites usually use HTML forms or custom input fields for better user experience


        ### location

            location contains information about the current webpage URL.

            It can also be used to navigate to another URL.

            Example:

                console.log(location.href);

            This gives the current page URL.

            example:

                https://example.com/products

            Changing the URL

                location.href = "https://example.com/login";

                The browser navigates to the new page.

            You can also use:

                location.reload();

            This reloads the current page.

            Use Case

                location is commonly used for:

                -Redirecting users
                -Reading the current URL
                -Reloading a page
                -Working with URL parameters

            Example

                if (!userLoggedIn) {
                    location.href = "/login";
                }

                User is not logged in ---> Redirect to login page

        ### navigator

            navigator provides information about the browser and the user's environment.

            Example:

                console.log(navigator.userAgent);

            This can provide information about the browser environment.

            Another commonly used property:

                .log(navigator.onLine);

            returns true ---> if the browser currently reports that it is online.

            Or:

            false ---> if it reports that it is offline.

            Use cases:

                navigator can be used for browser/device-related features such as:

                    -Checking online/offline status
                    -Accessing supported browser APIs
                    -Detecting some browser environment information
                    -Working with device-related browser capabilities

            Example:

                if (navigator.onLine) {
                    console.log("Internet connection available");
                } else {
                    console.log("You are offline");
                }

        ### screen

            screen provides information about the user's physical display screen.

            Example:

                console.log(screen.width);
                console.log(screen.height);

            This gives the screen dimensions in pixels.

            For example:

                Screen width  → 1920
                Screen height → 1080

            Use case

                screen can be useful when applications need information about the display.

            Examples:

                -Full-screen applications
                -Display-related calculations
                -Presentations
                -Kiosk applications

# Timers

    JavaScript timers allow us to run code after a certain amount of time or repeatedly at a fixed time interval.

        JavaScript provides four commonly used timer methods:

            setTimeout()
            setInterval()
            clearTimeout()
            clearInterval()
        
        Main Purpose

            Timers are used to delay code execution or run code repeatedly after a specific time interval.

        ### setTimeout()

            setTimeout() runs a function once after a specified amount of time.

            Syntax

                setTimeout(function, delay);

                The delay is measured in milliseconds.
                1000 milliseconds = 1 second
        
            Example

                setTimeout(function () {
                    console.log("Payment successful");
                }, 3000);

                The code waits for:

                3 seconds
                ↓
                "Payment successful"

                The function runs only once.

            Use case

                setTimeout() is commonly used for:

                Showing a message temporarily
                Delaying a notification
                Redirecting after a message
                Hiding a success message
                Creating a delay before an action

            Example

                console.log("Order placed");

                setTimeout(function () {
                    console.log("Redirecting to orders...");
                }, 2000);

            Output:

                Order placed
                    ↓
                Wait 2 seconds
                    ↓
                Redirecting to orders...
                Easy Memory

                setTimeout() → Run once after a delay

        ### setInterval()

            setInterval() runs a function repeatedly after a fixed amount of time.

            Syntax
            
                setInterval(function, interval);

            Example:

                setInterval(function () {
                    console.log("Checking order status...");
                }, 5000);

            The function runs:

                5 seconds → Run
                5 seconds → Run
                5 seconds → Run
                5 seconds → Run
            ...

                It continues until we stop it.

            Use cases:

                Digital clocks
                Countdown timers
                Checking status periodically
                Updating dashboards
                Refreshing information
                Slideshow/carousel timing

            Example:

                setInterval(function () {
                    console.log("Checking payment status...");
                }, 3000);

                This checks every 3 seconds.

        ### clearTimeout()

            clearTimeout() is used to cancel a setTimeout() before it runs.

            To cancel a timeout, we first store its timer ID.

                const timer = setTimeout(function () {
                    console.log("Order cancelled");
                }, 5000);

            Now we can cancel it:

                clearTimeout(timer);

            The function will not execute if the timeout has not already fired.

            Use case

                Suppose a website shows:"Session expired in 5 minutes"

                But the user becomes active again.

                The application can cancel a previously scheduled action.

                const timer = setTimeout(function () {
                    console.log("Session expired");
                }, 300000);

                // User becomes active
                clearTimeout(timer);

        ### clearInterval()

            clearInterval() is used to stop a repeating setInterval().

            First, store the interval ID:

                const timer = setInterval(function () {
                    console.log("Checking status...");
                }, 2000);

            Then stop it:

                clearInterval(timer);

            After clearInterval() runs, the function stops repeating.

            Use case

                Suppose we have an order status checker:

                const checker = setInterval(function () {
                    console.log("Checking order status...");
                }, 3000);

                Once the order is delivered: clearInterval(checker);

                Now the application stops checking.

# ES6+ Features

    ES6 stands for ECMAScript 2015. It introduced many important features that made JavaScript easier to write and maintain.

        ES6+ means ES6 and the newer JavaScript features introduced after it.

        Some commonly used features are:

            let and const
            Arrow functions
            Template literals
            Spread operator
            Rest parameter
            Destructuring
            Modules

        ES6+ features provide modern and cleaner ways to write, organize, and reuse JavaScript code.

    let and const

        let and const are used to create variables.
        They replaced many common uses of the older var keyword.

        let

            Use let when the value of a variable needs to change.

            let quantity = 1;
            quantity = 2;

            Here, the value changes from: 1 → 2
        
        Real-Time Example

            A shopping cart quantity can change:

            let quantity = 1;
            quantity = quantity + 1;

            Now: quantity = 2