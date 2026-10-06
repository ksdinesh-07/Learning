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

        const total1 = 499 * 2;
        const total2 = 799 * 3;
        const total3 = 299 * 4;
        
    A function allows us to reuse the logic:

        function calculateTotal(price, quantity) {
            return price * quantity;
        }
        const total = calculateTotal(499, 2);
        console.log("Total:", total);

    we can resue them 

        calculateTotal(499, 2);
        calculateTotal(799, 3);
        calculateTotal(299, 4);

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

                price    ---> parameter
                quantity ---> parameter

                500      ---> argument
                2        ---> argument

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

            const caluculate= function() {}
                

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

        In a web application, an API base URL is often shared by multiple functions.

        For example:

            API_BASE_URL = "https://api.example.com"

            Different parts of the application may use this same API URL:

            Login API
            Product API
            Order API
            User profile API
            Payment API

            So the API base URL can be kept at the global/module level because multiple functions need it.

            Other real-time examples of global/module-level data

                API base URL
                Application configuration
                Authentication configuration
                Common constants
                Currency setting
                Environment configuration
    
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

        example

            Where it is used in real projects

            Banking → transaction amount can be local to a money-transfer function.

            Shopping → discount calculation variables can be local to a checkout function.

            Education → a student's temporary exam score can be local to an exam function.

            Login systems → a temporary validation result can be local to the login function.

            Payment systems → payment calculation variables can be 
            local to the payment-processing function.

            Purpose: Keep data limited to the part of the application that actually needs it.

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

     ## Real-Time Uses

        Lexical scope is used when a function needs to access variables from the place where the function was created.

        Common real-time places:

        Banking applications → a transaction function accesses account number and balance from its surrounding function.
        
        Online shopping → a cart function accesses cart data from its 
        surrounding scope.
        
        Online exams → answer/score functions access the student's name and current score.
       
        Login systems → functions access user/session information from their surrounding scope.
        
        Timers → timer callbacks access variables such as remaining time.
        
        Event handlers → click handlers access variables defined outside the handler.
        
        API requests → callback/async functions access request-related variables from their surrounding scope.

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
            Maintaining state
            Event handlers
            Callbacks
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

        filter()

            filter() is used to select the items from an array that satisfy a condition and return them as a new array.

            example

                let product_prices = [300, 500, 700, 900];

                let expensive_products = product_prices.filter((price) => {
                    return price > 500;
                });

                console.log(expensive_products);

            output

                [700,900]

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


        Real-Time Uses of map()

            map() is used when an application needs to take every item from a list and create a new value from each item.

            1. Shopping Application

            An online shopping application has a list of products. The application may need to get only the product names from the product data.

            Purpose: Transform product data into another format.

            2. Search Results

            After searching for a product, the application may need to display only the product names, prices, or product IDs from the search results.

            Purpose: Extract required information from every search result.

            3. Online Education Platform

            An education platform may have a list of courses. map() can be used to create a list containing the course names or course prices.

            Purpose: Transform course information for displaying it on the page.

            4. Banking Application

            A banking application may receive a list of transactions. map() can be used to extract:

            Transaction amounts
            Transaction IDs
            Transaction dates
            Transaction descriptions

            Purpose: Convert transaction objects into the specific information required by the interface.

            5. Student Management System

            A college application may have student records containing name, department, roll number, and marks.

            map() can be used to create a separate list containing only the student names or marks.

            Purpose: Transform a complete student record into the required data.

                map() is used when we want to transform every item in an array and create a new array.

            Real-Time Uses of reduce()

                reduce() is used when an application needs to combine multiple values into one final result.

                1. Shopping Cart

                An online shopping cart may contain multiple products.

                reduce() can calculate the total cart amount.

                For example:

                ₹1,000 + ₹2,000 + ₹500 = ₹3,500

                Purpose: Calculate the final cart total.

                2. Banking Application

                A banking application may have many transactions.

                reduce() can be used to calculate:

                Total money deposited
                Total money withdrawn
                Total transaction amount
                Current balance from transaction records

                Purpose: Combine multiple transactions into a single financial result.

                3. Online Education Platform

                An education platform may store marks for multiple subjects.

                reduce() can calculate:

                Total marks
                Total completed lessons
                Total course duration
                Overall score

                Purpose: Combine multiple values into one result.

                4. E-Commerce Sales Dashboard

                An admin dashboard may contain hundreds of orders.

                reduce() can calculate:

                Total sales
                Total revenue
                Total discount
                Total shipping charges

                Purpose: Convert many order values into one business metric.

                5. Employee Management System

                A company may have salary information for many employees.

                reduce() can calculate the total salary expense for all employees.

                Purpose: Combine employee salary values into one total.

                reduce() is used when we want to combine multiple array values and produce one final result.

            Real-Time Uses of filter()

                filter() is used when an application needs to select only the items that match a particular condition.

                1. Search Box — Amazon / Flipkart

                When a user types a product name in the search box, the application checks the available products and keeps only the products that match the search text.

                Example scenario:

                User searches for "laptop".

                The application filters the product list and displays products such as:

                Laptop
                Gaming Laptop
                Laptop Bag

                Products that don't match the search are not displayed.

                Purpose: To show only the search results relevant to the user's input.

                2. Product Category Filter

                An online shopping application may allow users to select:

                Electronics
                Clothing
                Shoes
                Mobiles

                When the user selects Electronics, filter() can be used to select only electronic products from the complete product list.

                Purpose: To display products belonging to the selected category.

            Price Filter

                Shopping applications often provide options such as:

                Under ₹500
                ₹500 – ₹1,000
                ₹1,000 – ₹5,000
                Above ₹5,000

                filter() can select products whose prices satisfy the selected range.

                Purpose: To display products according to the customer's price requirement.

# Strings  

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

            5

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

            9

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

# Numbers and Math

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
            

            100 is a valid number

                console.log(isNaN("hello"));


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

        use cases   

            1. parseInt()

            Used when you need a whole number (integer) from a value.

            E-commerce → convert product quantity such as "3" into 3.

            Pagination → convert a page number from a URL such as "5" into 5.

            Online exams → convert entered marks such as "85" into 85.

            Shopping cart → convert item quantity before calculating the total.

            Use when: You need an integer and do not need the decimal part.

            2. parseFloat()

            Used when you need a decimal number.

            E-commerce → product price such as "499.99".

            Banking → interest rates such as "7.5".

            Food delivery → delivery distance such as "4.8" km.

            Measurement applications → weight, height, distance, temperature, etc.

            Use when: The value can contain a decimal part.

            3. toFixed()

            Used when you need to display a number with a fixed number of decimal places.

            Banking

            Display an account amount as ₹12500.00

            E-commerce

            Display product price as ₹499.99

            Payment

            Display a calculated payment amount with exactly two decimal places.

            Reports

            Display an average such as 87.50.

            Use when: You are formatting a number for display.

            Important: toFixed() returns a string, not a number.

            4. isNaN()

            Used to check whether a value cannot be treated as a valid number.


            Banking

            A user enters an amount:

            "abc"

            The application can check whether the entered value is valid before processing the transaction.

            E-commerce

            A user enters:

            "two"

            instead of a quantity.

            The application can detect the invalid numeric input.

            Online exam

            A marks field should contain a number, not text such as "hello".

            Use when: You need to validate numeric input.

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

# Date Object

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

            output:

                2026-09-20T16:44:00.800Z
        
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

        ### toISOString() //

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

        ### toLocaleDateString() // indian languages time stamp

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


            let date = new Date();

            console.log(
                date.toLocaleDateString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })
            );

            console.log(
                date.toLocaleDateString("ta-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })
            );

            console.log(
                date.toLocaleDateString("hi-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })
            );

            console.log(
                date.toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                })
            );

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

            example

                Product List
                ├── Product Card
                │    ├── Product Image
                │    ├── Product Name
                │    └── Add to Cart button
                │
                ├── Product Card
                │    ├── Product Image
                │    ├── Product Name
                │    └── Add to Cart button

            The user clicks Add to Cart.

            The event starts at the button and can bubble upward through the product card and product list.

            Purpose: Allow a parent element to respond to events that happen on its child elements.


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

        const

            Use const when the variable should not be reassigned.

                const price = 499;
                price = 599;

            This is not allowed,because price was declared using const.

            Example

                A product ID usually does not change:

                const productId = 101;

# Arrow Functions

    An arrow function is a shorter way to write a function.

    Normal Function

        function calculateTotal(price, quantity) {
            return price * quantity;
        }

    Arrow Function

        const calculateTotal = (price, quantity) => {
            return price * quantity;
        };

    Both perform the same calculation.

    use case

        Calculate an order total:

            const total = (499, 2) => 499 * 2;

        A more useful form:

            const calculateTotal = (price, quantity) => price * quantity;
            console.log(calculateTotal(499, 2));

        Output:

            998

        They are commonly used with:

            map()
            filter()
            reduce()
            Event handlers
            Callbacks

        Example:

            const prices = [499, 799, 999];
            const discounted = prices.map(price => price - 50);

    ## Template Literals

        Template literals provide an easier way to create strings containing variables and expressions.

        They use backticks: `

        instead of normal quotes.

        Normal String

            const name = "Dinesh";
            console.log("Welcome " + name);

        Template Literal

            const name = "Dinesh";
            console.log(`Welcome ${name}`);

        Output:

            Welcome Dinesh

        use case

            Displaying an order message:

                const product = "T-Shirt";
                const price = 499;
                const message = `You purchased ${product} for ₹${price}`;
                console.log(message);

            Output:

                You purchased T-Shirt for ₹499

            calculation inside ${}

                const price = 499;
                const quantity = 2;
                console.log(`Total: ₹${price * quantity}`);

            Output:

                Total: ₹998

    ## spread Operator

        The spread operator uses three dots: ...
        It is used to expand the values of an array or object.

        Spread with Arrays

            Suppose we have:

                const first = ["T-Shirt", "Jeans"];

                We can create another array containing those values:

                const products = [...first, "Shoes"];

            Result:

                ["T-Shirt", "Jeans", "Shoes"]

        Spread with Objects

            const user = {
                name: "Dinesh",
                city: "Coimbatore"
            };

            const updatedUser = {
                ...user,
                age: 21
            };

            Result:

                {
                    name: "Dinesh",
                    city: "Coimbatore",
                    age: 21
                }

    ## Rest Parameter (...)

        The rest parameter also uses three dots: ...
        But its purpose is different from spread.

        Rest is used to collect multiple values into an array.

        Example

            function calculateTotal(...prices) {
                console.log(prices);
            }

        Call:

            calculateTotal(499, 799, 999);

        The prices variable becomes:

            [499, 799, 999]

        Now we can calculate:

            function calculateTotal(...prices) {
                return prices.reduce((total, price) => total + price, 0);
            }

            console.log(calculateTotal(499, 799, 999));

        Output:

            2297

        use case

            Rest is useful when the number of values is unknown.

                function addProducts(...products) {
                    console.log(products);
                }

                addProducts("T-Shirt", "Jeans", "Shoes");

                The function receives all products as one array.

    ## Destructuring

        Destructuring allows us to extract values from arrays or objects and store them in variables easily.

        Object Destructuring

            const user = { name: "Dinesh", age: 21 };

        Without destructuring:

            const name = user.name;
            const age = user.age;

            With destructuring:

                const { name, age } = user;

            Now:

                name → "Dinesh"
                age  → 21

            Real-Time Use

                When receiving user information:

                const user = {
                    name: "Dinesh",
                    email: "dinesh@example.com"
                };

                const { name, email } = user;
                console.log(name);
                console.log(email);

        Array Destructuring

            Destructuring can also be used with arrays.

            const products = ["T-Shirt", "Jeans", "Shoes"];
            const [first, second, third] = products;

            Now:

                first  ---> "T-Shirt"
                second ---> "Jeans"
                third  ---> "Shoes"

            Array destructuring works based on position.

    ## Modules

        Modules allow us to split JavaScript code into separate files and reuse code between those files.

        Instead of putting the entire application into one large JavaScript file:

        app.js

        we can organize it:

            src/
            │
            ├── products.js
            ├── cart.js
            ├── payment.js
            └── app.js

        Each file can contain related functionality.

        export

            Suppose products.js contains:

                export const productName = "T-Shirt";

            We are making productName available to another file.

        import

            In app.js:

                import { productName } from "./products.js";
                console.log(productName);

            Output:

                T-Shirt

            The flow is:

                products.js
                    │
                    │ export
                    ↓
                productName
                    │
                    │ import
                    ↓
                app.js

        Main Benefits
        
            Organizes code
            Makes code easier to maintain
            Allows code reuse
            Prevents unnecessary global variables
            Makes large applications easier to manage

# Modules

    A module is a separate JavaScript file that contains related code.

        Instead of putting all JavaScript code into one large file, we can divide it into multiple files.

    Example

        project/
        │
        ├── products.js
        ├── cart.js
        └── main.js

    Each file can contain a specific part of the application.

        products.js → product-related code
        cart.js     → cart-related code
        main.js     → application entry point
       
    Main purpose

        Modules help divide JavaScript code into smaller, reusable files.

        One file can become very large and difficult to maintain.

            With modules:

            products.js → products
            cart.js     → cart
            users.js    → users
            payment.js  → payment
            orders.js   → orders

        Now each file has a specific responsibility.

    ## Export

        export is used to make code available outside a module.

        products.js

            export const productName = "T-Shirt";

        The variable can now be used by another JavaScript file.

    ## Named Export

        A named export exports something using its name.

            products.js

            export const productName = "T-Shirt";
            export const price = 499;

        Here we exported two values:

            productName
            price

    ## import

        import is used to bring exported code into another module.

        main.js

            import { productName, price } from "./products.js";

            console.log(productName);
            console.log(price);

        Output:

            T-Shirt
            499

    ## import with Alias

        Sometimes we want to use a different name inside the current file.

            import { productName as name } from "./products.js";

            console.log(name);

        Here:

            productName ---> exported name
            name        ---> local name

    ## Default Export   

        A module can also have a default export.

        A default export is normally used when a file has one main thing that it provides.

        product.js

            const product = {
            name: "T-Shirt",
            price: 499
            };

            export default product;

        Now we can import it:

        main.js

            import product from "./product.js";

            console.log(product.name);
            console.log(product.price);

        Output:

            T-Shirt
            499

    ## Named export
        export const price = 499;

        Import:

        import { price } from "./products.js";
        
    ## Default export
        export default product;

        Import:

        import product from "./product.js";

    ## Module bundler

        A module bundler takes many modules and processes them into files that can be efficiently used by the application.

        Need for bundlers

            In a small application: 5 JavaScript files may be easy to manage.

            In a large application:

                100+ modules
                CSS
                images
                fonts
                JavaScript
                third-party packages

            Managing everything manually becomes difficult.

            A bundler can help with things such as:

                Modules
                ↓
                Dependency analysis
                ↓
                Build
                ↓
                Optimized application files


    ## Webpack

        Webpack is a JavaScript module bundler.

            It analyzes the application's dependency graph and builds output files.

            For example:

                main.js
                ↓
                products.js
                cart.js
                user.js
                payment.js
                ↓
                Webpack
                ↓
                Build output

            Webpack has been widely used for large JavaScript applications and has a highly configurable build system.

    ## vite

        Vite is a modern frontend development tool that provides a fast development server and a production build system.

        For development, Vite can serve source modules efficiently so that changes appear quickly during development.

        For production, Vite creates a build of the application.

        Typical flow: 
        
        Development

            code
            ↓
            Vite Dev Server
            ↓
            Browser

        Production:

            code
            ↓
            Vite Build
            ↓
            Production files

# JSON

    JSON stands for JavaScript Object Notation.

    JSON is a text format used to store and exchange data between applications.

    It looks similar to a JavaScript object, but JSON is actually text (a string).

    Example

        {
        "name": "T-Shirt",
        "price": 499,
        "quantity": 2
        }

    This could represent product information sent between a frontend and backend.

    Main purpose

        JSON provides a common text format for exchanging structured data between systems.

    JSON VS JavaScript Object

        A JavaScript object:

            const product = {
            name: "T-Shirt",
            price: 499
            };

        A JSON string:

            const productJSON = `{
                "name": "T-Shirt",
                "price": 499
            }`;

            The important difference is:

            JavaScript Object → actual JavaScript data
            JSON             → text/string

            console.log(typeof product);
            console.log(typeof productJSON);

            Output:

                object
                string

        ## Need for JSON

            Suppose the frontend wants product information from a backend.

            The backend may send:

                {
                "name": "T-Shirt",
                "price": 499
                }

            The frontend receives this data and converts it into JavaScript data that it can work with.

                Backend
                ↓
                JSON data
                ↓
                Frontend
                ↓
                JavaScript object

            JSON is commonly used for communication between web applications and APIs. 


        ## JSON.parse()

            JSON.parse() converts a JSON string into a JavaScript value.

            Example

                const productJSON = '{"name":"T-Shirt","price":499}';
                const product = JSON.parse(productJSON);
                console.log(product);
                console.log(product.name);

            Output:

                { name: "T-Shirt", price: 499 }
                T-Shirt

            Direction

                JSON string
                    ↓
                JSON.parse()
                    ↓
                JavaScript object

        ## JSON.parse() Need

            API sends:

                const response = '{"name":"T-Shirt","price":499}';

            This is a string.

                You cannot treat it as a normal object:

                    console.log(response.name);

            The result is:

                undefined

            So we parse it:

                const product = JSON.parse(response);
                console.log(product.name);

            Output:

                T-Shirt

        ## JSON.stringify()

            JSON.stringify() converts a JavaScript value into a JSON string.

            Example

                const product = {
                name: "T-Shirt",
                price: 499
                };

                const productJSON = JSON.stringify(product);
                console.log(productJSON);

            Output:

                {"name":"T-Shirt","price":499}

            Direction

                JavaScript object
                    ↓
                JSON.stringify()
                    ↓
                JSON string

        ## API

            API stands for Application Programming Interface.

            An API provides a way for one software system to communicate with another.

            example:

                Frontend
                │
                │ Request
                ↓
                Backend API
                │
                │ Response
                ↓
                Frontend

            use case

                An e-commerce frontend might request:

                GET /products

                The backend could return:

                [
                {
                    "name": "T-Shirt",
                    "price": 499
                },
                {
                    "name": "Jeans",
                    "price": 999
                }
                ]

                The frontend can then display these products.

        ## using fetch() with an API

            JavaScript provides fetch() for making HTTP requests.

                fetch("/api/products")
                .then(response => response.json())
                .then(products => {
                    console.log(products);
                });

            Here:

                response.json()

            reads the response body as JSON and converts it into a JavaScript value.

            You can then use: products as JavaScript data.

        ## API with async/await

            The same idea can be written using async/await.

                async function loadProducts() {
                const response = await fetch("/api/products");

                const products = await response.json();

                console.log(products);
                }

                loadProducts();

            Flow:

                fetch()
                ↓
                HTTP response
                ↓
                response.json()
                ↓
                JavaScript data
                ↓
                Use the data

        ## Copying

            Copying means creating another value from an existing value.

            For primitive values:

                const price = 499;
                const newPrice = price;

                The values are independent.

                But objects and arrays are different because they are reference values.

            Example

                const product = {
                name: "T-Shirt"
                };
                const copy = product;
                copy.name = "Jeans";
                console.log(product.name);

            Output:

                Jeans

            const copy = product;
            does not create a new object.

            Both variables refer to the same object.

        ## Shallow Copy

            A shallow copy creates a new outer object or array, but nested objects/arrays are still shared references.

            Example

                const product = {
                name: "T-Shirt",
                details: {
                    size: "M"
                }
                };
                const copy = { ...product };
                copy.name = "Jeans";
                copy.details.size = "L";
                console.log(product.name);
                console.log(product.details.size);

            Output:

                T-Shirt
                L

                product ──→ original object 
                copy ──→ new object

        ## Shallow Copy

            Array

                const products = ["T-Shirt", "Jeans"];
                const copy = [...products];

            Object

                const product = {
                name: "T-Shirt",
                price: 499
                };
                const copy = { ...product };

            Another option:

                const copy = Object.assign({}, product);

                These create a new top-level object/array.
            
            use case

                const order = {
                    order_id: 1001,
                    customer: {
                        name: "Dinesh",
                        address: {
                            city: "Coimbatore"
                        }
                    },
                    items: [
                        {
                            product_name: "Laptop",
                            quantity: 1
                        }
                    ]
                };

                Suppose you want to create a temporary version of the order for editing.

                const edited_order = { ...order };

        ## Deep Copy

            A deep copy creates a completely independent copy, including nested objects and arrays.

            Example:

                const product = {
                name: "T-Shirt",
                details: {
                    size: "M"
                }
                };

                const copy = structuredClone(product);
                copy.details.size = "L";
                console.log(product.details.size);
                console.log(copy.details.size);

            Output:

                M
                L

            Now the nested object is independent.

            application receives customer data from an API:
            
            const customer = {
                customer_id: 101,
                name: "Dinesh",
                contact: {
                    email: "dinesh@gmail.com",
                    phone: "9876543210"
                },
                address: {
                    city: "Coimbatore",
                    pincode: "641001"
                }
            };

            const edited_customer = structuredClone(customer);
            edited_customer.address.city = "Chennai";

        ## StructuredClone()

            Modern JavaScript provides:

            structuredClone()

                for making a deep copy of many JavaScript values.

            Example:

                const order = {
                product: {
                    name: "T-Shirt",
                    price: 499
                }
                };

                const copy = structuredClone(order);
                copy.product.price = 599;
                console.log(order.product.price);

            Output:

                499

                The original is not changed.

        ## JSON Method for Deep Copy

            const copy = JSON.parse(JSON.stringify(product));

            The process is:

                Object
                ↓
                JSON.stringify()
                ↓
                JSON string
                ↓
                JSON.parse()
                ↓
                New object

            For simple JSON-compatible data, this can create an independent copy.

            However, it has limitations. It does not preserve every JavaScript value or object type correctly, such as functions, undefined, Date, Map, and Set.

            For general deep cloning of supported values, structuredClone() is usually the clearer modern choice.

# JavaScript Browser Storage

    JavaScript provides different ways to store data in the user's browser.

    The common methods are: 

        -localStorage 
        -sessionStorage 
        -cookies

    They are useful for storing information such as:

        -User preferences 
        -Shopping cart data 
        -Login/session information 
        -Language selection 
        -Theme selection 
        -Small pieces of application data


    ## 1.LocalStorage

        localStorage is used to store data in the browser that remains available even after the browser is closed and reopened.

        Main purpose

            localStorage stores data that should remain available for a long time.

        Example

            localStorage.setItem("theme", "dark");

        The browser stores:

            theme = dark

            Even if the user closes the browser, the data normally remains until it is removed.

        ### Storing data

            localStorage.setItem(key, value);

            Example:

                localStorage.setItem("username", "Dinesh");

                key   ---> username
                value ---> Dinesh

        ### Reading data

            const username = localStorage.getItem("username");
            console.log(username);

            Output:

                Dinesh

        ### Removing data

            localStorage.removeItem("username");

            Now:

                localStorage.getItem("username");

            returns:

                null

        ### clearing loalstorage

            To remove all data stored by your web origin:

                localStorage.clear();

            This removes all localStorage entries for that origin.

        ### Example

            localStorage.setItem("language", "English"); 
            const language = localStorage.getItem("language"); 
            console.log(language); 
            localStorage.removeItem("language");

        ### localstorage stores string

            localStorage stores values as strings.

            example:

                localStorage.setItem("quantity", 5);

            When we read

                const quantity = localStorage.getItem("quantity");
                console.log(typeof quantity);

            Output:

                string

        ### Storing Objects

            we cannot directly store the object 

            Example

                const user = { name: "Dinesh", age: 22 };

                using the JSON.stringify()

                localStorage.setItem("user", JSON.stringify(user)); ---> to convert the object to the json text

                const storedUser = JSON.parse( localStorage.getItem("user") ); 
                console.log(storedUser.name);

            output

                Dinesh

        ### use case

            an e-commerce website allows the user to select a theme.

                function changeTheme(theme) {
                localStorage.setItem("theme", theme);
                }
                changeTheme("dark");

            When the user visits the website again:

            const theme = localStorage.getItem("theme");
            console.log(theme);

            Output:

                dark

            The website can then apply the saved theme.

    ## 2. SessionStorage

        sessionStorage stores data for the current browser tab/session.

        The data normally remains available while that tab is open.

        When the tab or window is closed, the stored session data is cleared.

        Main purpose:

            sessionStorage stores temporary data that is needed only during the current tab session.

        
        ### Storing data

            store data:

                sessionStorage.setItem("step", "2");

            Read it:

                const step = sessionStorage.getItem("step");
                console.log(step);

            Output:

                2

            Remove it:

                sessionStorage.removeItem("step");

                Clear all session storage for the current origin:
                sessionStorage.clear();

        ### Example

            Imagine a multi-step checkout:

                Step 1 → Address
                Step 2 → Delivery
                Step 3 → Payment

            We can temporarily store the current step:

                sessionStorage.setItem("checkoutStep", "2");

            When the page is refreshed:

                const step = sessionStorage.getItem("checkoutStep");
                console.log(step);

            Output:

                2

            The user can continue from the same step while the session remains.

            When the tab is closed, the session data is normally removed.

    ## Cookies

        JavaScript can create a cookie using:

            document.cookie

        Example:

            document.cookie = "username=Dinesh";

        The browser stores:

            username = Dinesh

        read cookies using:

            console.log(document.cookie);

    ### Coookie Expiration   

        Cookies can have an expiration time.

        Example:

            document.cookie =
            "username=Dinesh; max-age=3600";

        Here:

            3600 seconds = 1 hour

        The cookie will expire after the specified lifetime.

    ### Session Cookies

        A cookie can also be created without a persistent expiration time.

        example:

            document.cookie = "theme=dark";

        Depending on browser behavior and cookie attributes, this is generally treated as a session cookie and does not have a persistent lifetime.

    
    ### Cookie Security Attributes

        Cookies have important attributes that control how they are sent and accessed.

        Secure

            Tells the browser to send the cookie over HTTPS connections.

            HttpOnly

                Prevents JavaScript from reading the cookie through document.cookie.

                This is especially useful for cookies used for authentication.

            SameSite

                Controls when cookies are sent in cross-site situations.

                Common values include:

                    Strict
                    Lax
                    None

            example:

                SameSite=Strict

                provides stronger restrictions on cross-site cookie sending.

            use cases
                Used for:
                    ---> Server-managed login sessions
                    ---> Authentication/session identifiers
                    ---> Preferences that need to accompany requests

# Fetch API

    In a real web application, JavaScript often needs to communicate with a server.

    an e-commerce website may need to:

        -Get products from the server
        -Send login details
        -Create an order
        -Get user information
        -Update a product
        -Delete an item

    This communication between the browser and server is commonly done using HTTP requests.

    ## HTTP Request

        An HTTP request is a message sent from the client to the server asking it to perform an operation or provide data.
        
    example:

        Browser ---> "request"

        The server processes the request and sends a response:

        Server ---> "response"

        GET /api/products means: Get the products from the server.

    ## Async Request

        Async means JavaScript can start a request without stopping the rest of the program while waiting for the server.

        example:

            console.log("Start");
            fetch("/api/products");
            console.log("Continue");

        The browser does not need to wait for the server response before executing:

            console.log("Continue");
    
        In a e-com application page opens and the javascript request the products and the user can still interact with the page.

    ## Promise

        A Promise represents the future result of an asynchronous operation.

        It can have three states:

            Pending
            ↓
            ┌───────────┐
            ↓           ↓
            Fulfilled   Rejected
            Pending

        Pending

            The operation is still running.

            "Waiting for server response..."
            
        Fulfilled

            The operation completed successfully.

            "Products received."
            
        Rejected

            The operation failed.

            "Could not connect to server."  

        Example

            const order = new Promise((resolve, reject) => {
                const payment_success = true;
                if (payment_success) {
                    resolve("Payment successful");
                } else {
                    reject("Payment failed");
                }
            });

        Here:

        resolve() ---> Success
        reject()  ---> Failure

        We can handle the result using:

        order
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });

    ## Need for Promise

        Without a convenient asynchronous mechanism, handling many asynchronous operations can become difficult.

        Promises make it easier to handle:

            Success ---> .then()
            Failure ---> .catch()
            Cleanup ---> .finally()

        Example:

            fetch("/api/products")
                .then(response => response.json())
                .then(products => {
                    console.log(products);
                })
                .catch(error => {
                    console.log(error);
                });

    ## fetch()

        fetch() is a modern JavaScript API used to make HTTP requests.

        It can be used to:

            GET
            POST
            PUT
            PATCH
            DELETE

        Example:

            fetch("/api/products");

        This sends a request to:

            /api/products

        By default, fetch() makes a GET request.

    ## Fetch Flow

            fetch("/api/products")
        .then(response => response.json())
        .then(products => {
            console.log(products);
        });

        Step 1 — Send request

            fetch("/api/products")

            The browser sends a request to the server.

        Step 2 — Receive response

            .then(response => ...)

            The server sends a response.

            The response object contains information about the HTTP response.

            example:

                status
                headers
                body
            
        Step 3 — Convert response to JSON

            response.json()

            The response body may contain JSON data.

            response.json() reads that data and converts it into a JavaScript value.

        Step 4 — Use the data

            .then(products => {
                console.log(products);
            });

            Now JavaScript can work with the products.

    ## JSON

        JSON stands for JavaScript Object Notation.

        JSON is a text format commonly used for exchanging structured data between applications.

        Example JSON:

            {
                "id": 101,
                "name": "T-Shirt",
                "price": 499
            }

            A server may send:

            {
                "id": 101,
                "name": "T-Shirt",
                "price": 499
            }

            JavaScript can then use the data.

    ## JSON and JavaScript Object

        A JavaScript object:

        const product = {
            id: 101,
            name: "T-Shirt",
            price: 499
        };


        JSON:

            {
                "id": 101,
                "name": "T-Shirt",
                "price": 499
            }

        They will look similar but not the same thing

    ## JSON.parse()

        JSON.parse() converts JSON text into a JavaScript value.

            const json_data = '{"name":"T-Shirt","price":499}';
            const product = JSON.parse(json_data);
            console.log(product.name);

    ## JSON.stringify()

        JSON.stringify() converts a JavaScript value into a JSON string.

        const product = {
            name: "T-Shirt",
            price: 499
        };

        const json_data = JSON.stringify(product);


    ## Sending Data Using fetch()

        const order = {
            product_id: 101,
            quantity: 2
        };

        fetch("/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        });

        method
            
            method: "POST"

            Tells the server that we are sending data.
    
        headers

            headers: {
                "Content-Type": "application/json"
            }

            Tells the server sending a  JSON data
            
        body

            body: JSON.stringify(order)

            Converts the JavaScript object into JSON text before sending it.

    ## HTTP Headers

        Headers contain additional information about an HTTP request or response.

        Think of headers as information attached to the request.

        Example:

            headers: {
                "Content-Type": "application/json"
            }

        The header tells the server what type of data is being sent.

        Common headers

            Content-Type

                Tells the server the format of the request body.

                "Content-Type": "application/json"

                The request body contains JSON.

            Authorization

                Used when the server needs to identify or authorize the user.

                Example:

                headers: {
                    "Authorization": "Bearer token_here"
                }

                Commonly used with authenticated APIs.

            Accept

                Tells the server what response format the client prefers.

                Example:

                    headers: {
                        "Accept": "application/json"
                    }

                I prefer JSON as the response.

        Example

            fetch("/api/products")
                .then(response => response.json())
                .then(products => {
                    console.log(products);
                })
                .catch(error => {
                    console.log("Request failed:", error);
                });

    ## Fetch with async and await

        Promises can also be handled using async and await.

        Example:

            async function get_products() {
                const response = await fetch("/api/products");
                const products = await response.json();
                console.log(products);
            }

        Call the function:

            get_products();

    ## async

        the function always returns a Promise.

        Example:

            async function get_products() {
                return "Products";
            }

        The function result is handled as a Promise.

    ## await

        await waits for a Promise to settle inside an async function before continuing that function.

        Example:

            const response = await fetch("/api/products");

    ## async / await with error handling

        A real application should handle errors.

            async function get_products() {
                try {
                    const response = await fetch("/api/products");
                    const products = await response.json();
                    console.log(products);
                } catch (error) {
                    console.log("Could not load products");
                }
            }

    ## XMLHtttpRequest

        XMLHttpRequest, commonly called XHR, is an older browser API used to make asynchronous HTTP requests.

        Before fetch() became the common modern approach, developers frequently used:

            XMLHttpRequest

        Example:

            const request = new XMLHttpRequest();
            request.open("GET", "/api/products");
            request.send();

    ## XMLHttpRequest Response

        XHR uses event handlers to process the response.

        Example:

            const request = new XMLHttpRequest();
            request.open("GET", "/api/products");
            request.onload = function () {
                if (request.status === 200) {
                    console.log(request.responseText);
                }
            };

            request.send();

# Promise

    A Promise represents the future result of an asychronous operation.

    A promise can be 
        -Pending
        -Fulfilled
        -Rejected

    JavaScript provides several methods to handle these results:

        .then()      ---> Handle success
        .catch()     ---> Handle failure
        .finally()   ---> Run cleanup code
        Chaining     ---> Run multiple async operations in sequence
        Promise.all()  ---> Wait for multiple Promises
        Promise.race() ---> Get the first settled Promise

    .then()

        .then() is used to execute code when a Promise is successfully fulfilled.

        .then() handles the successful result of a Promise.

        Example:

            const payment = Promise.resolve("Payment successful");

            payment.then(result => {
                console.log(result);
            });

        Output:

            Payment successful

    Example

        const order = new Promise((resolve) => {
            resolve("Order placed");
        });
        order.then(message => {
            console.log(message);
        });

    Output:

        Order placed

    ## .catch

        .catch() is used to handle a rejected Promise.

        .catch() handles the failure of a Promise.

        Example:

            const payment = Promise.reject("Payment failed");

            payment.catch(error => {
                console.log(error);
            });

        Output:

            Payment failed

    ## Example

        const payment = new Promise((resolve, reject) => {
            const payment_success = false;
            if (payment_success) {
                resolve("Payment successful");
            } else {
                reject("Payment failed");
            }
        });

        payment
            .then(message => {
                console.log(message);
            })
            .catch(error => {
                console.log(error);
            });

        Output:

            Payment failed

    ## .finally

        .finally() runs after the Promise is completed, whether it succeeds or fails.

        .finally() runs common cleanup code after a Promise finishes.

        Example:

            const payment = Promise.resolve("Payment successful");
            payment
                .then(result => {
                    console.log(result);
                })
                .finally(() => {
                    console.log("Payment process completed");
                });

        Output:

            Payment successful
            Payment process completed

        use case

            While payment is processing, we may disable the button:

            After the request finishes, we need to enable the button again.

            It does not matter whether payment succeeds or fails.

            That is where .finally() is useful.

            pay_button.disabled = true;

            payment()
                .then(() => {
                    console.log("Payment successful");
                })
                .catch(() => {
                    console.log("Payment failed");
                })
                .finally(() => {
                    pay_button.disabled = false;
                });

    ## Promise Chaining

        Promise chaining means connecting multiple .then() methods so that the result of one asynchronous operation is passed to the next operation.

        Promise chaining runs multiple asynchronous operations one after another.

        Example:

            Promise.resolve(10)
                .then(value => {
                    return value * 2;
                })
                .then(value => {
                    return value + 5;
                })
                .then(value => {
                    console.log(value);
                });

        Output:

            25

        use case

            checkStock(itemId)
                .then(inStock => {
                    if (!inStock) throw new Error("Out of stock!");
                    // Step 2: Create a pending invoice
                    return createInvoice(itemId);
                })
                .then(invoice => {
                    // Step 3: Process the payment
                    return processPayment(invoice.amount);
                })
                .then(paymentStatus => {
                    // Step 4: Update inventory count
                    return reduceInventoryCount(itemId);
                })
                .catch(txError => {
                    console.log("Transaction failed. Rolling back changes.");
                });

    ## promise.all()

        Promise.all() is used when we have multiple independent asynchronous operations and need all of them to finish successfully.

        Promise.all() waits for multiple Promises and returns all successful results together.

        Example:

            const products = Promise.resolve("Products loaded");
            const categories = Promise.resolve("Categories loaded");
            Promise.all([products, categories])
                .then(results => {
                    console.log(results);
                });

        Output:

            [
                "Products loaded",
                "Categories loaded"
            ]

        Example

            Suppose an e-commerce homepage needs:

                Products
                Categories
                Offers

            These requests are independent.

            Instead of waiting for one before starting another:

                const products = fetch("/api/products");
                const categories = fetch("/api/categories");
                const offers = fetch("/api/offers");

                Promise.all([
                    products,
                    categories,
                    offers
                ])
                .then(results => {
                    console.log("All requests completed");
                });

    ## promise.race()

        Promise.race() starts multiple Promises and settles as soon as the first Promise settles.

        Promise.race() gives the result of the first Promise that settles.

        Settles means either:

            Fulfilled
            OR
            Rejected

        It does not mean "first successful Promise."

        Example

            const first = new Promise(resolve => {
                setTimeout(() => {
                    resolve("First request");
                }, 1000);
            });

            const second = new Promise(resolve => {
                setTimeout(() => {
                    resolve("Second request");
                }, 2000);
            });

            Promise.race([first, second])
                .then(result => {
                    console.log(result);
                });

            Output:

                First request

        Use case

            Promise.race([
                fetch("/api/server-a"),
                fetch("/api/server-b")
            ])
            .then(response => {
                console.log("First response received");
            });

# Async Functions

    ## Asynchronous JavaScript

        In JavaScript, some operations take time to complete.

        For example:

            -Loading products from a server
            -Sending a payment request
            -Loading a user profile
            -Reading data from an API

        JavaScript should not stop the entire program while waiting for these operations.

        Instead, JavaScript can start the operation and continue executing other code.

        Example

            console.log("Start");
            setTimeout(() => {
                console.log("Product loaded");
            }, 2000);
            console.log("End");

        Output
            
            Start
            End
            Product loaded

        The product takes 2 seconds, but JavaScript does not wait there.

    ## Asyync Function  

        An async function is a function that always returns a Promise.

        We create an async function using the async keyword.

        Syntax

            async function functionName() {
                // asynchronous code
            }

        Simple Example

            async function getProduct() {
                return "Product loaded";
            }

            getProduct().then(result => {
                console.log(result);
            });

        Output

            Product loaded

        Even though we return a normal string, an async function automatically returns a Promise.

    ## Why do we use Async function

        Async functions make asynchronous code easier to read.

        Without async/await:

            fetch("/api/product")
                .then(response => response.json())
                .then(product => {
                    console.log(product);
                });

        With async/await:

            async function getProduct() {
                const response = await fetch("/api/product");
                const product = await response.json();
                console.log(product);
            }

        The second version looks more like normal step-by-step code.

    ## await

        await is used inside an async function to wait for a Promise to settle.

        Example
        
            async function loadProduct() {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts/1"
                );
                const product = await response.json();
                console.log(product.title);
            }

        await can be used only inside async

    use case

        Load product

            <button id="loadBtn">Load Product</button>
            <p id="display"></p>

            const loadBtn = document.getElementById("loadBtn");
            const display = document.getElementById("display");

            async function loadProduct() {
                display.innerText = "Loading...";
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts/1"
                );
                const product = await response.json();
                display.innerText = product.title;
            }

            loadBtn.addEventListener("click", loadProduct);

    ## Error handling with try ... catch

        Network requests can fail.

        For example:

            Server is unavailable
            Internet connection fails
            API URL is incorrect
            Request fails

        We can handle these errors using try...catch.

    ## Try catch with async/await

        A common real-time pattern is:

            async function loadProduct() {

                try {
                    const response = await fetch(
                        "https://jsonplaceholder.typicode.com/posts/1"
                    );
                    const product = await response.json();
                    console.log(product.title);
                }
                catch (error) {
                    console.log("Failed to load product");
                }
            }
        
        ### response.ok

            A fetch() Promise does not automatically reject for HTTP errors such as:

            404 Not Found
            500 Server Error

            response.ok

        Example
            async function loadProduct() {
                try {
                    const response = await fetch(
                        "https://jsonplaceholder.typicode.com/posts/1"
                    );
                    if (!response.ok) {
                        throw new Error("Product request failed");
                    }
                    const product = await response.json();
                    console.log(product.title);
                }
                catch (error) {
                    console.log(error.message);
                }
            }

    ## Concurrency

        Concurrency means starting multiple asynchronous operations without waiting for each one to finish before starting the next.

        an e-commerce homepage needs:

            Products
            Categories
            Offers

        These requests are independent.

        We can start them together.

    ## sequential execution

        async function loadData() {
            const products = await getProducts();
            const categories = await getCategories();
            const offers = await getOffers();
        }

        If each request takes about 2 seconds:

        2 sec + 2 sec + 2 sec
        = 6 seconds

        This is sequential execution.

    ## concurrent Execution

        If these operations do not depend on each other, we can start them together.

        async function loadData() {
            const productsPromise = getProducts();
            const categoriesPromise = getCategories();
            const offersPromise = getOffers();
            const products = await productsPromise;
            const categories = await categoriesPromise;
            const offers = await offersPromise;
        }

        They are started without waiting for the previous request.

    ## Concurrency with Promise.all()

        A cleaner way is:

            async function loadData() {
                const [products, categories, offers] = await Promise.all([
                    getProducts(),
                    getCategories(),
                    getOffers()
                ]);
                console.log(products);
                console.log(categories);
                console.log(offers);
            }

        This is a very common real-world pattern.

    ## use case

        Imagine a shopping page needs:

            1. Product information
            2. User profile
            3. Discount information

        They are independent requests.

            async function loadShopPage() {
                try {
                    const [
                        productsResponse,
                        profileResponse,
                        offersResponse
                    ] = await Promise.all([
                        fetch("/api/products"),
                        fetch("/api/profile"),
                        fetch("/api/offers")
                    ]);
                    const products = await productsResponse.json();
                    const profile = await profileResponse.json();
                    const offers = await offersResponse.json();
                    console.log(products);
                    console.log(profile);
                    console.log(offers);
                }
                catch (error) {
                    console.log("Failed to load shop page");
                }
            }

    chaining liitation
        1. Can make independent operations sequential
        2. A failure can stop later operations
        3. Long chains become difficult to read
        4. Easy to forget return
        5. Nested chains can become complicated
        6. Error handling can become harder to trace
        7. Not ideal for many independent API requests

# Classes

    A class in JavaScript is a blueprint used to create objects that share the same properties and methods.

    an e-commerce application may have many products.

        Instead of creating every product object manually, we can create a Product class and use it to create multiple product objects.

        ## Why Do We Need Classes?

        Without a class:

            const product_1 = {
                product_name: "TV",
                product_price: 44499
            };

            const product_2 = {
                product_name: "AC",
                product_price: 59999
            };

        Both objects contain similar properties.

        If we have many products, repeating the same structure becomes difficult.

        A class allows us to define the structure once.

            class Product {

            }

        Then we can create multiple products from it.

    ## Class Syntax

        Basic syntax

        class Product {

        }

        A class is a blueprint for creating objects.

            Product class
                ↓
            Blueprint
                ↓
            ┌────┴────┐
            ↓         ↓
            Product 1  Product 2

    ## Creating an Object from a Class

        We use the new keyword to create an object from a class.

            class Product {

            }

            const product_1 = new Product();
            const product_2 = new Product();

            console.log(product_1);
            console.log(product_2);

        Here:

        new Product() ---> creates a new object using the Product class.

    ## Constructor

        A constructor is a special method that runs automatically when an object is created.

        Syntax

            class Product {

                constructor() {

                }

            }

        The constructor is called automatically when we use: new Product();
    
    ## Constructor with Properties

        We can use the constructor to initialize object properties.

            class Product {
                constructor(product_name, product_price) {
                    this.product_name = product_name;
                    this.product_price = product_price;
                }
            }

            const product_1 = new Product("T-Shirt", 499);
            console.log(product_1.product_name);
            console.log(product_1.product_price);

        Output

            T-Shirt
            499

    ## this?

        this refers to the current object.

        example:

            this.product_name = product_name;

            means:

                Store the received product name inside the current object's product_name property.

    ## Methods

        A method is a function defined inside a class.

        For example, a product can have a method to display its details.

            class Product {
                constructor(product_name, product_price) {
                    this.product_name = product_name;
                    this.product_price = product_price;
                }
                show_product() {
                    console.log(this.product_name);
                    console.log(this.product_price);
                }
            }
            const product_1 = new Product("T-Shirt", 499);
            product_1.show_product();

        Output

            T-Shirt
            499

    ## Why Do We Use Methods?

        Properties store data.

        Methods perform actions.

        For a product:

            Properties
            ↓
            product_name
            product_price

            Methods
            ↓
            show_product()
            update_price()
            calculate_discount()

        So:

            Properties describe the object, while methods define what the object can do.

    ## Multiple Objects from One Class

        One class can create many objects.

            class Product {
                constructor(product_name, product_price) {
                    this.product_name = product_name;
                    this.product_price = product_price;
                }
                show_product() {
                    console.log(this.product_name);
                    console.log(this.product_price);
                }
            }

            const product_1 = new Product("T-Shirt", 499);
            const product_2 = new Product("Jeans", 999);
            product_1.show_product();
            product_2.show_product();

        Here:

            Product class
                ↓
            ┌────┴────┐
            ↓         ↓
            product_1 product_2

        Both objects have the same structure but different values.

    ## Inheritance

        Inheritance allows one class to use properties and methods from another class.

        For example, an e-commerce application may have:

            Product
            ↓
            Clothing

        Clothing is a type of Product.

        We can use extends to create inheritance.

        Syntax

            class Clothing extends Product {

            }

    ## Inheritance Example

        class Product {

            constructor(product_name, product_price) {
                this.product_name = product_name;
                this.product_price = product_price;
            }

            show_product() {
                console.log(this.product_name);
                console.log(this.product_price);
            }
        }

        class Clothing extends Product {
        }

        Now Clothing inherits from Product.

        const clothing_1 = new Clothing("T-Shirt", 499);
        clothing_1.show_product();

        Output:

            T-Shirt
            499

        The Clothing class did not define show_product().

        It received the method from Product.

    ## super

        When a child class has its own constructor, we use super() to call the parent class constructor.

        Example:

            class Product {
                constructor(product_name, product_price) {
                    this.product_name = product_name;
                    this.product_price = product_price;
                }
            }

        class Clothing extends Product {
            constructor(product_name, product_price, size) {
                super(product_name, product_price);
                this.size = size;
            }
        }

        Create the object:

            const clothing_1 = new Clothing(
                "T-Shirt",
                499,
                "L"
            );

            console.log(clothing_1.product_name);
            console.log(clothing_1.product_price);
            console.log(clothing_1.size);

        Output:

            T-Shirt
            499
            L

    ## What Does super() Do?

        The parent class requires:

            product_name
            product_price

        The child class receives them:

            constructor(product_name, product_price, size)

        Then:

            super(product_name, product_price);

        passes those values to the parent constructor.

        Flow:

            Clothing
            ↓
            super()
            ↓
            Product constructor
            ↓
            product_name
            product_price

        Then the child class handles its own property:

            this.size = size;

    ## Child Class Methods

        A child class can also have its own methods.

        class Product {
            constructor(product_name, product_price) {
                this.product_name = product_name;
                this.product_price = product_price;
            }
            show_product() {
                console.log(this.product_name);
                console.log(this.product_price);
            }
        }

        class Clothing extends Product {
          constructor(product_name, product_price, size) {
                super(product_name, product_price);
                this.size = size;
            }

            show_size() {
                console.log(this.size);
            }
        }

        const clothing_1 = new Clothing(
            "T-Shirt",
            499,
            "L"
        );

        clothing_1.show_product();
        clothing_1.show_size();

        Output:

            T-Shirt
            499
            L

        The child object can use:

            Parent methods
                +
            Child methods

    ## static

        A static method belongs to the class itself, not to individual objects.

        Example

            class Product {
                static show_store_name() {
                    console.log("Litorox Store");
                }
            }

        We call it using the class name:

            Product.show_store_name();

        Output:
            
            Litorox Store

# Prototypes 

    JavaScript objects can get properties and methods from another object.

        This is done using prototypes.

        The main concepts are:

            Prototype
            Prototype chain
            __proto__
            Object.create()
            Constructor functions

    ## Prototype

        A prototype is an object that another object can use to get properties and methods.

    example:

        const product = {
            product_name: "Laptop"
        };

        The product object can have access to properties and methods from its prototype.

            product object
                ↓
            prototype
                ↓
            properties / methods

        So a prototype is basically an object from which another object can inherit properties and methods.

    ## Need for Prototypes

        Suppose we have many products.
        Every product needs a method:

        show_product()

        Instead of creating the same method separately inside every object, JavaScript can keep the method in a prototype and let multiple objects use it.

                    Product prototype
                           │
                    show_product()
                           │
                 ┌─────────┴─────────┐
                ↓                   ↓
            product_1           product_2

        Both objects can use the same method.

        This helps avoid unnecessary duplication.

    ## __proto__

        __proto__ is used to access the prototype of an object.

Example:

        const product = {
            product_name: "T-Shirt"
        };
        console.log(product.__proto__);

        The object has a prototype.

    We can also check:

        console.log(product.__proto__ === Object.prototype);

    Output:

        true

        This means the normal object created using {} gets Object.prototype as its prototype.

    __proto__ is mainly useful for understanding prototypes. In modern JavaScript, Object.getPrototypeOf() and Object.setPrototypeOf() are preferred for programmatic prototype access.

        const product_details = {
            product_name: "TV"
        };
        const product = Object.create(product_details);
        console.log(product.product_name);

        Output:

            T-Shirt

    ## Prototype Chain

        When JavaScript tries to access a property, it first checks the current object.

        If it cannot find the property, JavaScript checks the object's prototype.

        If it is not there, JavaScript continues to the prototype's prototype.

        This continues until it reaches null.

        Example:

            object
            ↓
            prototype
            ↓
            prototype's prototype
            ↓
            Object.prototype
            ↓
            null

        This is called the prototype chain.

    Example

        const product_details = {
            product_name: "T-Shirt"
        };
        const product = Object.create(product_details);
        console.log(product.product_name);

        JavaScript searches like this:

            prototype
            ↓
            product_name 

        So the output is:

            T-Shirt

    ## if the Property exists in both

        const product_details = {
            product_name: "T-Shirt"
        };
        const product = Object.create(product_details);
        product.product_name = "Jeans";
        console.log(product.product_name);

    Output:

        Jeans

    ## Object.create()  

        Object.create() creates a new object and allows us to specify its prototype.

        Syntax

            Object.create(prototype_object);

            Example:

                const product_details = {
                    show_product() {
                        console.log("Product details");
                    }
                };
                const product = Object.create(product_details);
                product.show_product();

            Output:

                Product details

    ## Real-Time Use    

        Suppose an application has common product information.

            const product_features = {

                show_details() {
                    console.log("This product is available");
                }

            };

            const product_1 = Object.create(product_features);

            const product_2 = Object.create(product_features);

            product_1.show_details();
            product_2.show_details();

        Both objects can use the same method from the prototype.

                    product_features
                    show_details()
                        │
                ┌─────┴─────┐
                ↓           ↓
            product_1    product_2

    ## Constructor Functions

        Before JavaScript classes became common, constructor functions were widely used to create multiple similar objects.

        A constructor function is a normal function used with the new keyword to create objects.

        Example:

            function Product(product_name, product_price) {

                this.product_name = product_name;
                this.product_price = product_price;

            }

        Now we can create objects:

            const product_1 = new Product("T-Shirt", 499);
            const product_2 = new Product("Jeans", 999);

            console.log(product_1.product_name);
            console.log(product_2.product_name);

        Output:

            T-Shirt
            Jeans

    ## Adding a method to the Constructor Prototype

        Instead of putting the method inside every object, we can add it to the constructor's prototype.

            function Product(product_name, product_price) {
                this.product_name = product_name;
                this.product_price = product_price;
            }

            Product.prototype.show_product = function() {
                console.log(this.product_name);
                console.log(this.product_price);
            };

            Now create products:

            const product_1 = new Product("T-Shirt", 499);
            const product_2 = new Product("Jeans", 999);

            product_1.show_product();
            product_2.show_product();

        Both objects can use:

            show_product()

        from:

            Product.prototype


    ## Constructor Property

        The prototype also has a constructor property.

        Example:

        function Employee(name, department) {
            this.name = name;
            this.department = department;
        }

        const employee_1 = new Employee("Dinesh", "Data Engineering");
        const employee_2 = new Employee("Arul", "Cloud");
        const employee_3 = new Employee("Gowtham", "Backend");

        console.log(employee_1)
        console.log(employee_2)
        console.log(employee_3)

# this Keyword

    In JavaScript, the value of this depends on how a function is called.

        Global context
        Object context
        Function context
        Class context
        call()
        apply()
        bind()

    ## Context

        Context means the environment in which JavaScript code is currently running.

        For example, when a function is called as an object method, JavaScript knows which object is calling the function.

        const student = {
            student_name: "Dinesh",
            show_name() {
                console.log(this.student_name);
            }
        };

        student.show_name();

        Output:

            Dinesh

        Here: this refers to ---> student

        So the context is related to who is calling the function.

    ## Global Context

        The global context is the outermost environment of a JavaScript program.

        Example:

            console.log(this);

        In a browser, when this code runs in the global script context, this refers to the global window object.

            Global context
                ↓
            window

        The browser's global object provides things such as:

        console.log(window.location);
        console.log(window.innerWidth);

        Example

            var college_name = "ABC College";
            console.log(window.college_name);

            Output in a browser:

                ABC College

            This happens because a var declaration at the top level of a classic browser script becomes a property of the global window object.

            However, let and const behave differently:

            let student_count = 100;
            console.log(window.student_count);

            Output:

                undefined

            So we should not assume every global variable becomes a property of window.

    ## Object Content

        When a function is called as a method of an object, this usually refers to that object.

        Example:

            const bank_account = {
                account_holder: "Dinesh",
                balance: 25000,
                show_balance() {
                    console.log(this.balance);
                }
            };

            bank_account.show_balance();

        Output:

            25000

        this refers to the bank_account
        this.balance = bank_account.balance

    ## Why Object Context is Useful

        Consider a banking application.

        An account contains:

            account_holder
            balance
            account_number

        A method can use this to access the data belonging to the current account.

            const bank_account = {
                account_holder: "Dinesh",
                balance: 25000,
                withdraw_money(amount) {
                    this.balance = this.balance - amount;
                    console.log("Remaining balance:", this.balance);
                }
            };

        bank_account.withdraw_money(5000);

        Output:

        Remaining balance: 20000

        Here this.balance means the balance belonging to that particular account.


    ## Function Context

        A function can also be called independently.

            function show_message() {
                console.log(this);
            }

            show_message();

        The value of this depends on how the function is executed.

            In a browser's non-strict classic script, a standalone function call can have this referring to the global object.

        In strict mode:

            "use strict";

            function show_message() {
                console.log(this);
            }

            show_message();

        Output:

            undefined

        So the value of this in a normal function depends on the calling pattern and strict mode.

    ## Function Context with this

        a student management application:

            function show_student() {
                console.log(this.student_name);
            }

            const student = {
                student_name: "Dinesh",
                show_student: show_student
            };

            student.show_student();

        Output:

            Dinesh

            Because the function was called as: student.show_student();

            Therefore:

            this
            ↓
            student

    ## class Context

        Classes also use this.

            Inside a class, this normally refers to the object created from that class when an instance method is called.

        Example:

            class Student {
                constructor(student_name, department) {
                    this.student_name = student_name;
                    this.department = department;
                }

                show_student() {
                    console.log(this.student_name);
                    console.log(this.department);
                }
            }

            const student_1 = new Student(
                "Dinesh",
                "AI & Data Science"
            );

            student_1.show_student();

            Output:

                Dinesh

    ## Class context with Multiple Objects

        The same class can create different objects.

        class Student {
            constructor(student_name) {
                this.student_name = student_name;
            }

            show_student() {
                console.log(this.student_name);
            }
        }

        const student_1 = new Student("Dinesh");
        const student_2 = new Student("Arun");
        student_1.show_student();
        student_2.show_student();

        Output:

            Dinesh
            Arun

        The method is the same, but this changes depending on which object calls it.


    ## call

        call() allows us to manually decide what this should refer to when calling a function.

        function_name.call(object);

        Example:

            function show_student() {
                console.log(this.student_name);
            }

            const student_1 = {
                student_name: "Dinesh"
            };

            show_student.call(student_1);

        Output:

            Dinesh

        Normally the function does not have a specific object.

        Using:

            show_student.call(student_1);

        Call this function with student_1 as this.


        ### call() with Arguments

            We can also pass arguments using call().

                function show_result(subject, mark) {
                    console.log(this.student_name);
                    console.log(subject);
                    console.log(mark);
                }

                const student_1 = {
                    student_name: "Dinesh"
                };

                show_result.call(
                    student_1,
                    "JavaScript",
                    85
                );

            Output:

                Dinesh
                JavaScript
                85

                The first argument is the object used as this.
                The remaining arguments are passed normally.

        function display_account() {
            console.log("Account holder:", this.account_holder);
            console.log("Balance:", this.balance);
        }

        const savings_account = {
            account_holder: "Dinesh",
            balance: 50000
        };

        const current_account = {
            account_holder: "Arul",
            balance: 75000
        };

        display_account.call(savings_account);
        display_account.call(current_account);

    ## apply()

        apply() works almost the same way as call().

        The main difference is how arguments are supplied.

        call()

            Arguments are passed separately:

            function_name.call(object, value_1, value_2);
        
        apply()

            Arguments are passed inside an array:

            function_name.apply(object, [value_1, value_2]);

        Example

            function show_result(subject, mark) {
                console.log(this.student_name);
                console.log(subject);
                console.log(mark);
            }

            const student_1 = {
                student_name: "Dinesh"
            };

            show_result.apply(
                student_1,
                ["JavaScript", 85]
            );

            Output:

                Dinesh
                JavaScript
                85

        use case

            Suppose a school application receives marks as an array.

                function calculate_total(mark_1, mark_2, mark_3) {
                    return mark_1 + mark_2 + mark_3;
                }
                const marks = [80, 75, 90];
                const total_mark = calculate_total.apply(
                    null,
                    marks
                );
                console.log(total_mark);

            Output:

                245

            Here apply() is useful because the values are already available in an array.

    ## bind()
    
        bind() also allows us to decide what this should refer to.

            But there is an important difference:

            call() and apply() execute the function immediately, while bind() creates a new function that can be called later.

        Example:

            function show_student() {
                console.log(this.student_name);
            }

            const student_1 = {
                student_name: "Dinesh"
            };

            const show_student_name = show_student.bind(student_1);
            show_student_name();

        Output:

            Dinesh

        Purpose of bind()

            A common situation is when we pass an object's method somewhere else.

            Example:

                const student = {
                    student_name: "Dinesh",
                    show_name() {
                        console.log(this.student_name);
                    }
                };

                const show = student.show_name;
                show();

            The method was taken out of the object.

                It is no longer being called as:
                student.show_name();

            So this does not automatically remain connected to student.

                We can use bind():

                const show = student.show_name.bind(student);
                show();

             Now:

                show()
                ↓
                this = student

            use case

                Consider a school application where a button displays a student's information.

                const student = {
                    student_name: "Dinesh",
                    show_name() {
                        console.log(this.student_name);
                    }
                };

                const button = document.getElementById("show_button");
                button.addEventListener(
                    "click",
                    student.show_name.bind(student)
                );

                When the button is clicked, the method still uses the correct student object.

                class Bank_account {
                    constructor(account_holder) {
                        this.account_holder = account_holder;
                    }

                    show_account() {
                        console.log(this.account_holder);
                    }
                }

                const account = new Bank_account("Dinesh");

                document
                    .getElementById("account_button")
                    .addEventListener("click", account.show_account.bind(account));

                This is a common reason bind() is useful when passing methods as callbacks.

# Higher-Order Functions

    JavaScript Callbacks, map(), filter(), reduce(), forEach() and Functions Returning Functions

    These concepts are commonly used when working with lists of data and when we need to perform an operation on each item.

    They are especially useful in real applications such as:

        -Student management systems
        -Banking applications
        -Hospital systems
        -Employee management systems
        -Food delivery systems
        -Ticket booking systems
        -Payment systems

    ## Callback Function

        A callback function is a function that is passed to another function as an argument.

        The receiving function can then call the function when it needs it.

        Simple structure

            function process_data(callback_function) {
                callback_function();
            }

            function show_message() {
                console.log("Data processed");
            }
            process_data(show_message);

        Output:

            Data processed

        need for callback

            For example, a student management system may have a list of students.

            We may want to:

                Get students
                    ↓
                Process each student
                    ↓
                Display student

            The function that processes the students can receive another function as a callback.

        use case

            Imagine a hospital system that needs to display each patient's name.

            //named callback
            const patients = [
                "Arun",
                "Priya",
                "Rahul"
            ];

            function show_patient(patient_name) {
                console.log("Patient:", patient_name);
            }

            patients.forEach(show_patient);

            Output:

                Patient: Arun
                Patient: Priya
                Patient: Rahul

            and

            //ananymous callback
            students.forEach(function(student_name) {
                console.log(student_name);
            });

            Output:

                Arun
                Priya
                Rahul

            The callback runs once for every array item.

    ## map()

        map() is used when we want to create a new array by changing each item.

        Syntax

            const new_array = old_array.map(function);

            For example, a bank application may store transaction amounts in rupees and need to convert them to another format.

            const amounts = [
                1000,
                2000,
                3000
            ];
            const updated_amounts = amounts.map(function(amount) {
                return amount + 100;
            });
            console.log(updated_amounts);

        Output:

            [1100, 2100, 3100]

            The original array is not changed.


        use case

            Suppose a college application receives student marks.

                const marks = [
                    70,
                    80,
                    90
                ];
                const updated_marks = marks.map(function(mark) {
                    return mark + 5;
                });
                console.log(updated_marks);

            Output:

                [75, 85, 95]

                The application created a new array containing the updated marks.

        map() with Objects

            In real applications, arrays usually contain objects.

            example:

                const students = [
                    {
                        student_name: "Arun",
                        mark: 80
                    },
                    {
                        student_name: "Priya",
                        mark: 90
                    }
                ];

                Suppose we only need the student names.

                const student_names = students.map(function(student) {
                    return student.student_name;
                });
                console.log(student_names);

            Output:

                ["Arun", "Priya"]

                This is very common when data comes from an API.

    ## filter()

        filter() is used when we want to select only the items that satisfy a condition.

        Syntax

            const new_array = array.filter(callback_function);

            The callback must return:

            true  ---> keep the item
            false ---> remove the item

        use case

            Suppose a college system needs to find students who scored 80 or more.

                const marks = [
                    65,
                    82,
                    90,
                    70,
                    85
                ];
                const selected_marks = marks.filter(function(mark) {
                    return mark >= 80;
                });
                console.log(selected_marks);

            Output:

                [82, 90, 85]

        filter() with Objects

            Suppose a bank has customer accounts.

                const accounts = [
                    {
                        account_holder: "Arun",
                        balance: 5000
                    },
                    {
                        account_holder: "Priya",
                        balance: 25000
                    },
                    {
                        account_holder: "Rahul",
                        balance: 15000
                    }
                ];

                Suppose we want accounts with a balance greater than ₹10,000.

                    const selected_accounts = accounts.filter(function(account) {
                        return account.balance > 10000;
                    });
                    console.log(selected_accounts);

                Output:

                [
                    {
                        account_holder: "Priya",
                        balance: 25000
                    },
                    {
                        account_holder: "Rahul",
                        balance: 15000
                    }
                ]

                This is a realistic use of filter() because applications frequently need to display only records that satisfy a condition.

    ## reduce()

        reduce() is used when we want to combine multiple array values into one final value.

            workflow

                100
                200
                300
                ----               
                600
                
            Syntax

                const result = array.reduce(callback_function, initial_value);

                The callback receives an accumulator and the current item.

            example

                Suppose a bank application needs to calculate the total value of several transactions.

                const transactions = [
                    5000,
                    3000,
                    2000
                ];
                const total_amount = transactions.reduce(function(total, amount) {
                    return total + amount;
                }, 0);
                console.log(total_amount);

            Output:

                10000

            The calculation happens like this:

                Start = 0

                0 + 5000 = 5000
                5000 + 3000 = 8000
                8000 + 2000 = 10000

            Final result:

                10000

            use case

                Suppose a hospital wants to calculate the total number of beds occupied across different departments.

                const occupied_beds = [
                    20,
                    15,
                    25,
                    10
                ];
                const total_beds = occupied_beds.reduce(function(total, beds) {
                    return total + beds;
                }, 0);
                console.log(total_beds);

                Output:

                70

                Here:

                20 + 15 + 25 + 10
                        ↓
                    70

                So reduce() is useful when multiple values need to become one final result.

    ## function returning a function    

        a function returns another function.

        Example:

            function create_message() {
                return function() {
                    console.log("Welcome");
                };
            }

            const show_message = create_message();
            show_message();

        Output:

            Welcome

        use case

            Consider an employee management application.

            Different employees may receive different salary increases.

            Instead of creating separate functions manually, we can create a function that creates salary calculators.

                function create_salary_calculator(increase_percentage) {
                    return function(salary) {
                        return salary + (salary * increase_percentage / 100);
                    };
                }
                const calculate_5_percent =create_salary_calculator(5);
                const calculate_10_percent =create_salary_calculator(10);
                console.log(calculate_5_percent(30000));
                console.log(calculate_10_percent(30000));

            Output:

                31500
                33000

# Pure Function,Immutability,Composition and Currying

    These concepts is to writing JavaScript code that is:

        -easier to understand
        -easier to test
        -safer to modify
        -reusable
        -easier to maintain

        The four concepts are:

            -Pure Functions
            -Immutability
            -Composition
            -Currying

        ## 1.Pure Function  

            A pure function is a function that:

                1.gives the same output when given the same input
                2.does not change anything outside the function

            Simple example
            
                function calculate_total(price, quantity) {
                    return price * quantity;
                }
                console.log(calculate_total(500, 2));

            Output:

                1000

            If we call it again:

                console.log(calculate_total(500, 2));

            The result will always be:

                1000

            The function does not depend on anything outside itself.

            use case    

                1.Suppose a banking application calculates a transaction fee.

                    function calculate_transaction_fee(amount) {
                        return amount * 0.02;
                    }
                    console.log(calculate_transaction_fee(5000));

                Output:

                    100

                For the same amount:

                    5000 ---> ₹100 fee
                    5000 ---> ₹100 fee
                    5000 ---> ₹100 fee

                The function always produces the same result.

                    So it is a pure function.

                2. A college application may calculate a student's total marks.

                    function calculate_total_mark(mark_1, mark_2, mark_3) {
                        return mark_1 + mark_2 + mark_3;
                    }
                    console.log(calculate_total_mark(80, 75, 90));

                Output:

                    245

                The function only uses the values given to it.

                    Therefore, it is pure.

            impure function example 

                let balance = 10000;
                function withdraw_money(amount) {
                    balance = balance - amount;
                    return balance;
                }

            The function changes the external variable:balance

                So the function has a side effect.

                It is not a pure function.

    ## Immutability

        Immutability means not changing the original data after it has been created.

        Instead of modifying the original value, we create a new value.

        example:

            const student = {
                student_name: "Arun",
                mark: 80
            };

        Suppose we want to update the mark.

            Instead of changing: student.mark = 90;

            we can create a new object:

                const updated_student = {
                    ...student,
                    mark: 90
                };

        Now:

            console.log(student);
            console.log(updated_student);

        The original student remains:

            Arun, 80

        The new object contains:

            Arun, 90

        Uses of Immutability

            1.a student management application.

                Suppose the application is displaying:

                    Student: Arun
                    Mark: 80

                Now the mark needs to be updated.

                If we directly change the original object, other parts of the application using that object may also see the changed value.

                With immutability:

                    Original data
                        ↓
                    Create new data
                        ↓
                    Use updated data

                This makes it easier to understand what changed.

                Immutability is especially important in applications that manage a lot of state.

            2.Suppose a hospital application has a list of patients.

                const patients = [
                    "Arun",
                    "Priya",
                    "Rahul"
                ];

                Suppose we want to add another patient.
                Instead of: patients.push("Kumar");

                we can create a new array:

                    const updated_patients = [
                        ...patients,
                        "Kumar"
                    ];

                Now:

                    patients = Arun, Priya, Rahul
                    updated_patients = Arun, Priya, Rahul, Kumar

                The original array is unchanged.

    ## Composition

        Function composition means combining small functions to create a bigger operation.

        Instead of creating one large function:

            we create small functions:

                Function A
                Function B
                Function C

            and connect them.

        Example

            Suppose we have two functions.

                function add_tax(amount) {
                    return amount + (amount * 0.05);
                }

                function round_amount(amount) {
                    return Math.round(amount);
                }

            We can use them one after another:

                const amount_with_tax = add_tax(1000);
                const final_amount = round_amount(amount_with_tax);
                console.log(final_amount);

            output

                1050

            The output of one function becomes the input of another function.

        use case

            Suppose a banking application needs to process a transaction amount.

            The application may need to:

                Calculate fee
                    ↓
                Add fee
                    ↓
                Round amount

            We can create separate functions.

                function calculate_fee(amount) {
                    return amount * 0.02;
                }

                function add_fee(amount) {
                    return amount + calculate_fee(amount);
                }

                function round_amount(amount) {
                    return Math.round(amount);
                }

            Then:

                const transaction_amount = 5000;
                const amount_with_fee = add_fee(transaction_amount);
                const final_amount = round_amount(amount_with_fee);
                console.log(final_amount);

                Each function has one responsibility.
                That makes the code easier to understand and reuse.

        use of Composition

            Without composition, we may write one large function:

                function process_transaction(amount) {
                    // calculate fee
                    // add fee
                    // round amount
                    // validate amount
                    // etc.
                }

                As the application grows, the function can become difficult to maintain.

                With composition:

                    calculate_fee()
                        ↓
                    add_fee()
                        ↓
                    round_amount()

                Each function has a small job.

    ## Currying

        Currying means converting a function that takes multiple arguments into a sequence of functions that each take one argument.

        example:

            Normal function:

                function calculate_total(price, quantity) {
                    return price * quantity;
                }

            We call:

                calculate_total(500, 3);

            With currying:

                function calculate_total(price) {
                    return function(quantity) {
                        return price * quantity;
                    };

                }

            we call:

                const calculate_product_total = calculate_total(500);
                console.log(calculate_product_total(3));

            Output:

                1500

        work flow    

            const calculate_product_total = calculate_total(500);
            The first function receives:

                price = 500

            It returns another function:

                function(quantity)

            That returned function remembers:

                price = 500

            Then:

                calculate_product_total(3);

            provides:

                quantity = 3

            So:

                500 × 3=1500

        Currying is Useful When One Value is Reused

            Suppose an application repeatedly needs a 10% tax calculation.

            Instead of repeatedly doing:

                calculate_tax(30000, 10);
                calculate_tax(40000, 10);
                calculate_tax(50000, 10);

            we can create the specialized function once:

                const calculate_10_percent =
                    create_tax_calculator(10);

            Then:

                calculate_10_percent(30000);
                calculate_10_percent(40000);
                calculate_10_percent(50000);

            The 10% rule is already stored in the function.

# Regular Expressions (RegEx)

    A Regular Expression (RegExp) is a pattern used to search, check, or replace text.

        It is useful when we need to find a specific pattern inside a string.

        Real-time uses

            Regular expressions are commonly used for:

            -Checking an email format
            -Validating a phone number
            -Finding a word in a message
            -Replacing unwanted characters
            -Checking a password format
            -Extracting numbers from text
            -Searching logs or documents

        ## RegExp Syntax

            A regular expression is written between two / symbols.

                const pattern = /hello/;

                Here:

                    /hello/
                    ↑    ↑
                    start end

                The word hello is the pattern we want to search for.

                Example

                    const pattern = /javascript/;

                This pattern searches for:

                    javascript inside a string.

            with string

                const message = "I am learning javascript";
                const pattern = /javascript/;
                console.log(pattern.test(message));

            Output:

                true

        ## Flags

            Flags change how the regular expression searches.

                The most commonly used flags are:

                Flag	Meaning
                g	 -  Global search
                i	 -  Case-insensitive search
                m	 -  Multiline search


        ## g — Global Flag

            Without g, many RegExp operations work with the first match.

                const message = "apple apple apple";
                console.log(message.match(/apple/));

            It finds the first occurrence.

            With g:

                const message = "apple apple apple";
                console.log(message.match(/apple/g));

            Output:

                ["apple", "apple", "apple"]
            
            Real-time use

                Suppose a document contains many occurrences of a particular word.

                Using g allows us to find all occurrences instead of only the first one.

        ## i-Case-Insensitive Flag

            Normally, RegExp is case-sensitive.

                const pattern = /hello/;
                console.log(pattern.test("Hello"));

            Output:

                false
                
            hello & Hello are different in case.

            Using i:

                const pattern = /hello/i;
                console.log(pattern.test("Hello"));

            Output:

                true

            The i flag means:Ignore uppercase and lowercase differences.

            use case

                A search box may allow a user to search:

                bank
                Bank
                BANK
                BaNk

                and treat them as the same search term.

        ## m-Multiline Flag

            The m flag changes how ^ and $ work when the string contains multiple lines.

                const message = `Hello Welcome Goodbye`;
                console.log(/^Welcome/m.test(message));

            Output:

                true

            Here ^ means the beginning of a line when the m flag is used.

            use case

                This can be useful when processing:

                    -Logs
                    -Multi-line documents
                    -Configuration files
                    -Text files

        ## test()

            The test() method checks whether a pattern exists in a string.

            Syntax

                pattern.test(string);

            It returns: true or false

            Example
            
                const email_pattern = /@/;
                console.log(email_pattern.test("student@gmail.com"));

            Output:

                true

            The @ symbol exists in the email.

            Example

                const phone_pattern = /^\d{10}$/;
                console.log(phone_pattern.test("9876543210"));

                Output:

                    true

                Here:

                    ^       ---> start
                    \d      ---> digit
                    {10}    ---> exactly 10 times
                    $       ---> end

                So the pattern checks whether the entire value contains exactly 10 digits.

                test() is commonly useful for validation.

        ## match()

            The match() method is used to find matching text inside a string.

            Syntax

                string.match(pattern);

            Example

                const message = "The order number is 4582";
                const result = message.match(/\d+/);
                console.log(result);

             \d+ ---> one or more digits

            The result contains: 
                
                4582

        ## match() with g

            const message = "Order 101, Order 202, Order 303";
            const result = message.match(/\d+/g);
            console.log(result);

            Output:

                ["101", "202", "303"]

            use case

                Suppose a system log contains:

                    Order 101 completed
                    Order 202 completed
                    Order 303 completed

                We can extract all order numbers using:

                    message.match(/\d+/g);

        ## replace()

            The replace() method is used to replace matching text with another value.

            Syntax

                string.replace(pattern, replacement);

            Example

                const message = "Hello user";
                const result = message.replace(/user/, "student");
                console.log(result);

            Output:

                Hello student


        ## replace() with g

            Without g:

                const message = "JavaScript is easy. JavaScript is powerful.";
                const result = message.replace(/JavaScript/, "JS");
                console.log(result);

            Output:

                JS is easy. JavaScript is powerful.

            Only the first occurrence is replaced.

            With g:

                const message = "JavaScript is easy. JavaScript is powerful.";
                const result = message.replace(/JavaScript/g, "JS");
                console.log(result);

            Output:

                JS is easy. JS is powerful.

            use case

                A text-processing application may need to remove or replace unwanted words throughout a document.

            Example

                Before:
                    Error Error Error

                After:
                    Warning Warning Warning

                    const message = "Error Error Error";
                    const result = message.replace(/Error/g, "Warning");
                    console.log(result);

                output

                    Warning Warning Warning

        ## exec()

            The exec() method is used to execute a regular expression against a string and return detailed information about the match.

            Syntax

                pattern.exec(string);

            Example

                const pattern = /\d+/;
                const message = "Student ID: 105";
                const result = pattern.exec(message);
                console.log(result[0]);

            Output:

                105

            result[0] contains the matched text.

            use case

                const pattern = /\d+/;
                const message = "Student ID: 105";
                const result = pattern.exec(message);
                console.log(result);

                The result contains information such as:

                    -matched text
                    -index
                    -input

                example:

                    ["105", index: 12, input: "Student ID: 105"]

                The exact representation can vary, but the important information is:

                    result[0]    ---> matched text
                    result.index ---> position of the match
                    result.input ---> original string

                exec() can be useful when processing structured text and we need not only the matching value but also information about where the match occurred.

# Error Handling

    JavaScript provides built-in errors such as:

        -TypeError
        -ReferenceError
        -SyntaxError
        -RangeError

    But in real applications, we often need to create errors for our own application rules.

    example:

        -Bank balance is insufficient
        -Student has not paid the exam fee
        -Booking is unavailable
        -User is not authorized
        -Account is already blocked
        -File upload is too large

    we can use:

        Custom Errors
            ↓
        Error Propagation
            ↓
        Stack Trace

    ## Custom Error

        A custom error is an error that we create to represent a specific problem in our application.

        JavaScript provides the Error class for creating errors.

        Basic syntax

            throw new Error("Something went wrong");

        Example:

            function withdraw_money(balance, amount) {
                if (amount > balance) {
                    throw new Error("Insufficient balance");
                }
                return balance - amount;
            }
            console.log(withdraw_money(5000, 7000));

        Output:

            Error: Insufficient balance

        Here, the error is created by us because the application has detected a specific problem.

        ### use of custom error

            Consider a banking application.

            There can be different problems:

                -Insufficient balance
                -Invalid account
                -Account blocked
                -Invalid amount

            Instead of giving a generic error: Something went wrong

            we can create meaningful errors.

                This makes the application easier to understand and debug.


        ### Creating a custom error Class

            We can create our own error class using class.

                class Insufficient_balance_error extends Error {
                    constructor(message) {
                        super(message);
                        this.name = "Insufficient_balance_error";
                    }
                }

            Now we can use it:

                function withdraw_money(balance, amount) {
                    if (amount > balance) {
                        throw new Insufficient_balance_error("Insufficient balance");
                    }
                    return balance - amount;
                }

            Handling the error:

                try {
                    console.log(withdraw_money(5000, 7000));
                } catch (error) {
                    console.log(error.name);
                    console.log(error.message);
                }

            Output:

                Insufficient_balance_error
                Insufficient balance

        ### Extending build in error class

            When we extend the built-in Error class:

                class Insufficient_balance_error extends Error 

            the super() call runs the constructor of the parent Error class.

            super(message);

            This gives our custom error the normal Error features.

            For example:

                error.message
                error.name
                error.stack

        ### use case

            an education application where a student tries to download an exam hall ticket.

            The system checks whether the student has paid the required fee.

                class Fee_not_paid_error extends Error {
                    constructor(message) {
                        super(message);
                        this.name = "Fee_not_paid_error";
                    }
                }

                function download_hall_ticket(fee_paid) {
                    if (!fee_paid) {
                        throw new Fee_not_paid_error("Exam fee has not been paid");
                    }
                    return "Hall ticket downloaded";
                }

                try {
                    console.log(download_hall_ticket(false));
                } catch (error) {
                    console.log(error.name);
                    console.log(error.message);
                }

            Output:

                Fee_not_paid_error
                Exam fee has not been paid

    ## Error Propagation

        Error propagation means an error moves from the place where it occurs toward the calling functions until something handles it.

            function check_balance() {
                throw new Error("Insufficient balance");
            }

            function withdraw_money() {
                check_balance();
            }

            function process_payment() {
                withdraw_money();
            }

            process_payment();

        The error starts ---> check_balance()

            Then moves back through:

            withdraw_money()
                    ↑
            process_payment()
                    ↑
            main code

            This movement is called error propagation.

        The catch block handles the error even though the error was created inside check_balance().

        several functions calling each other:

            process_payment()
                ↓
            withdraw_money()
                ↓
            check_balance()

        If check_balance() cannot complete its job, it throws an error.

        JavaScript looks for a catch block in the current function.

        If there isn't one, the error moves to the function that called it.

        This continues until JavaScript finds a matching catch.

    ## Rethrowing an Error  

        Sometimes a function catches an error but cannot fully handle it.

        It can rethrow the error.

        function check_balance() {
            try {
                throw new Error("Insufficient balance");
            } catch (error) {
                console.log("Logging error");
                throw error;
            }
        }

        try {
            check_balance();
        } catch (error) {
            console.log("Error handled by outer function");
        }

        Flow:

            check_balance()
                ↓
            throw
                ↓
            catch
                ↓
            log error
                ↓
            throw again
                ↓
            outer catch

        This is called rethrowing an error.

    ## Stack Trace

        A stack trace shows the path of function calls that led to an error.

        Example:

            function check_balance() {
                throw new Error("Insufficient balance");
            }

            function withdraw_money() {
                check_balance();
            }

            function process_payment() {
                withdraw_money();
            }

            process_payment();

        JavaScript may display something similar to:

            Error: Insufficient balance
                at check_balance (...)
                at withdraw_money (...)
                at process_payment (...)

            This information is called the stack trace.

        ### Stack Trace uses

            Suppose an application has hundreds of functions.

            An error message says: Insufficient balance

            This tells us what happened.

            But the stack trace tells us where it happened and how the program reached that point.

            example:

                Error: Insufficient balance

                check_balance()
                    ↓
                withdraw_money()
                    ↓
                process_payment()

                This makes debugging much easier.

        ### Accessing the Stack Trace

            Every JavaScript Error object has a stack property.

            try {
                throw new Error("Something went wrong");
            } catch (error) {
                console.log(error.stack);
            }

            The output contains the error message and the function call information.

        ### Error Object Properties

            A JavaScript error commonly provides:

                error.name
                error.message
                error.stack

            Example:

                try {
                    throw new Error("Invalid account");
                } catch (error) {
                    console.log(error.name);
                    console.log(error.message);
                    console.log(error.stack);
                }

            name

                Tells us the type/name of the error.
            
            message

                Tells us what happened. ---> Invalid account
            
            stack

                Shows where the error occurred and the function call path.

# Event Loop & Concurrency

    JavaScript runs code using a few important parts of the browser environment.

        When JavaScript performs something that takes time, such as:

            setTimeout()
            fetch()
            button clicks
            API requests
            DOM events

        JavaScript does not simply stop and wait.

        Instead, the browser handles the waiting work, and JavaScript continues running other code.

    ## 1.Call Stack

        The Call Stack is where JavaScript keeps track of the functions that are currently running.

        JavaScript is single-threaded, so it executes one piece of JavaScript code at a time.

        Simple example

            function show_message() {
                console.log("Hello");
            }
            show_message();

        Execution:

            show_message()
                ↓
            Call Stack
                ↓
            console.log()
                ↓
            "Hello"

        The function is added to the stack when it starts running.

        After it finishes, it is removed.

        example

        ### Working of the call stack

            function first() {
                second();
            }

            function second() {
                console.log("Hello");
            }

            first();

            The Call Stack changes like this:

        Step 1


            first()

        Step 2


            second()
            first()

        Step 3

            console.log()
            second()
            first()

        After console.log() finishes:

            second()
            first()

        Then:

            first()

        Finally:

            Empty

        Call Stack is the place where JavaScript keeps track of currently executing functions.

    ## Web APIs

        The browser provides features called Web APIs.

        These APIs handle operations that are not simply normal JavaScript function execution.

        Common examples include:

            setTimeout()
            fetch()
            DOM events
            Geolocation
            Browser storage

        example:

            setTimeout(() => {
                console.log("Timer finished");
            }, 2000);

        JavaScript does not stay inside the Call Stack for two seconds.

        The browser handles the timer.

            JavaScript
                ↓
            setTimeout()
                ↓
            Browser Web API
                ↓
            Wait for 2 seconds
                ↓
            Callback becomes ready

        The callback is then placed into a queue.

        Web APIs is browser-provided features that handle browser and asynchronous operations.

    ## Task Queue

        The Task Queue stores callbacks that are ready to execute after certain browser tasks finish.

        It is also commonly called the Macrotask Queue.

        Examples include callbacks from:

            setTimeout()
            setInterval()
            DOM events such as click
            Some browser events

        Example:

            setTimeout(() => {
                console.log("Timer finished");
            }, 1000);

        After the timer becomes ready:

            Web API
            ↓
            Timer finishes
            ↓
            Task Queue
            ↓
            Event Loop
            ↓
            Call Stack

        The callback waits in the queue until JavaScript can execute it.

    ## Microtask Queue

        The Microtask Queue stores callbacks that need to be processed before the browser moves to another normal task.

        Common examples are:

            Promise.then()
            Promise.catch()
            Promise.finally()
            queueMicrotask()

        Example:

            Promise.resolve().then(() => {
                console.log("Promise completed");
            });

        The callback goes into the Microtask Queue.

            Promise
            ↓
            Microtask Queue
            ↓
            Event Loop
            ↓
            Call Stack

        Microtask Queue is a queue that stores Promise callbacks and other microtasks waiting to run.

    ## Rendering

        The browser also needs to update what the user sees.

        example:

            document.querySelector("#message").textContent = "Payment successful";

        JavaScript changes the DOM.

        The browser can then update the screen.

        A simplified rendering process is:

            DOM changes
                ↓
            Style calculation
                ↓
            Layout
                ↓
            Painting
                ↓
            Updated screen

        The exact browser rendering pipeline is more complex, but this simplified flow is useful for learning.

    ## Rendering uses

        an application showing:

            Loading...

        Then an API request finishes,JavaScript changes it to:

            Data loaded

            The browser needs to render that change so the user can see it.

                JavaScript
                    ↓
                DOM change
                    ↓
                Browser rendering
                    ↓
                Updated screen

    ## Event Loop

        The Event Loop coordinates JavaScript execution with queued work.

                        JavaScript
                            ↓
                        Call Stack
                            ↑
                            |
                        Event Loop
                        ↙       ↘
                Microtask Queue   Task Queue

        The Event Loop continuously checks whether JavaScript can process queued work.

        Flow

            Call Stack finishes current work
                        ↓
                Process Microtasks
                        ↓
                Browser may render
                        ↓
                Take another Task
                        ↓
                Process Microtasks
                        ↓
                Browser may render

# Memory Management

    JavaScript automatically manages memory for us.

        When we create:

            const student_name = "Arun";
            const student = {
                name: "Arun",
                mark: 85
            };

        JavaScript needs memory to store these values.

        When some data is no longer needed, JavaScript can automatically remove it from memory.

        This process is called Garbage Collection.

        references.

            References
                ↓
            Reachability
                ↓
            Garbage Collection
                ↓
            Memory Leaks

    ## Memory Heap  

        JavaScript uses an area called the Memory Heap to store dynamically allocated data such as objects and functions.

        Example:

            const student = {
                name: "Arun",
                mark: 85
            };


            Memory Heap

            ┌──────────────────────┐
            │ Object               │
            │ name: "Arun"         │
            │ mark: 85             │
            └──────────────────────┘
                    ↑
                    │
                student

            The variable student refers to the object stored in memory.

    ## Reference

        A reference is a connection from one variable or object to another object in memory.

            const student = {
                name: "Arun",
                mark: 85
            };

            student
            │
            ↓
            Object in Memory

            The variable doesn't need to contain the complete object itself.

            It provides access to the object.

    ## Multiple reference

        More than one variable can refer to the same object.

            const student = {
                name: "Arun",
                mark: 85
            };
            const student_copy = student;

        Now:

            student  ───────┐
                            ↓
                        ┌──────────────┐
                        │ Student      │
                        │ name: Arun   │
                        │ mark: 85     │
                        └──────────────┘
                            ↑
                            │
             student_copy ──┘ 

            Both variables refer to the same object.

    ## Why Reference matter?

        const student = {
            name: "Arun",
            mark: 85
        };

        const student_copy = student;
        student_copy.mark = 95;
        console.log(student.mark);

        Output:

            95

        Why?

            Because both variables point to the same object.

        Changing the object through one reference changes what the other reference sees.

    ## removing the reference   

        let student = {
            name: "Arun",
            mark: 85
        };

        student = null;

        Initially:

            student
            ↓
            Object

        After:

            student = null;

        student → null

        If nothing else refers to that object, it becomes unreachable.
        That means the object can eventually be removed by the garbage collector.

    ## Garbage Collection

        Garbage Collection (GC) is the automatic process of finding memory that is no longer reachable and reclaiming it.

        JavaScript engines such as V8 use garbage collection techniques based on reachability, commonly including a mark-and-sweep approach.

        You normally do not manually free memory like you would in languages where explicit memory management is required.

    ## Reachability

        Garbage collection is mainly based on whether an object is still reachable.

        An object is reachable if the program can still access it through an active reference path.

        example:

            const student = {
                name: "Arun"
            };

        The object is reachable:

            Global reference
                ↓
                student
                ↓
                Object

        As long as the object can be reached, the garbage collector should not remove it.

    ## Unreachable Objects

        let student = {
            name: "Arun"
        };

        student = null;

        Now:

            student
            ↓
            null

        No active reference points to the object.
        The object becomes unreachable.
        The garbage collector can reclaim its memory.


    ## Meamory Leak

        A memory leak happens when an application keeps references to data that it no longer needs.

        Because the data is still reachable, the garbage collector cannot reclaim it.

        Flow

            Application no longer needs object
                        ↓
            But a reference still exists
                        ↓
            Object remains reachable
                        ↓
            Garbage collector cannot remove it
                        ↓
            Memory remains occupied

        Example 
            1.Server Logs

            const logs = [];
            function store_log(message) {
                logs.push(message);
            }

            Every time the function runs:

                logs
                ↓
                message 1
                message 2
                message 3
                message 4
                ...

            If the application keeps adding data forever and never removes old entries, memory usage can continuously increase.

            For example, a monitoring application might accidentally keep every log message in memory even though only the latest 100 logs are needed.

            2.Event Listener

                Event listeners can also cause memory-related problems when they are created repeatedly and never removed when no longer needed.

                Example:

                    function add_button_listener(button) {
                        button.addEventListener("click", () => {
                            console.log("Clicked");
                        });
                    }

                    function handle_button_click() {
                        console.log("Clicked");
                    }

                    button.addEventListener("click", handle_button_click);
                    button.removeEventListener("click", handle_button_click);

                If an application repeatedly creates components and attaches listeners without cleaning them up when those components are removed, unnecessary references and callbacks can remain.

        ## How to Avoid Memory Leaks

            1. Remove unnecessary event listeners

                button.removeEventListener("click", handle_click);

            2. Clear timers

                clearTimeout(timer_id);
                clearInterval(interval_id);

            3. Remove unnecessary data

                logs.length = 0;
                or remove only the data that is no longer required.

            4. Avoid unlimited global collections

                Instead of:
                const all_data = [];

                and continuously adding data forever, keep only what the application actually needs.

            5. Clean up when components are removed

                When a screen or component is no longer used, clean up:

                    Listeners
                    Timers
                    Subscriptions
                    Connections
                    References

# Web API

    JavaScript does not only work with variables, functions, arrays, and objects. When JavaScript runs inside a web browser, it can also communicate with browser features through Browser APIs.

    Browser APIs allow JavaScript to interact with:

        HTML elements
        Graphics
        User location
        Browser storage
        Notifications
        Other browser features

        Some commonly used Browser APIs are:

            DOM API
            Canvas API
            Geolocation API
            Web Storage API
            Notifications API

    ## DOM API

        DOM stands for Document Object Model.

        When a browser loads an HTML page, it converts the HTML document into a structure of objects called the DOM.

        JavaScript can use the DOM to access and modify the webpage.

        The DOM API allows JavaScript to access, modify, add, and remove HTML elements dynamically.


        ## Uses of DOM

            The DOM is used when a webpage needs to change based on user actions or application data.

            For example:

                Change text
                Change styles
                Show or hide elements
                Add new elements
                Remove elements
                Handle button clicks
                Update forms
                Display API data

        ## use cases

            In a Shopping Website

                The page initially shows:

                    Cart (2)

                The user clicks:

                    Add to Cart

                JavaScript updates the DOM:

                    Cart (3)

                The page does not need to be completely reloaded.
                This type of dynamic webpage behavior is commonly handled using the DOM.

            Common DOM methods

                getElementById() ---> Finds an element using its ID
                querySelector()	---> Finds the first matching element
                querySelectorAll() --->	Finds multiple matching elements
                createElement()	---> Creates a new HTML element
                appendChild() --->	Adds an element to another element
                remove() ---> Removes an element
                addEventListener() --->	Responds to user actions


            Real-Time Applications of DOM

                Amazon/Flipkart: Update cart count after adding a product.

                Gmail: Show or hide emails and update the inbox.

                Online banking: Display updated account information.

                Education: Display quiz results without reloading the page.

                Food delivery: Update order status dynamically.

    ## Canvas API

        The Canvas API provides a drawing area inside an HTML page.
        JavaScript can use Canvas to draw graphics dynamically.

        It can be used to create:

            Lines
            Shapes
            Charts
            Images
            Animations
            Games
            Graphs

        The Canvas API allows JavaScript to draw and manipulate graphics inside a webpage.


        ### uses of canvas  

            Canvas is useful when graphics need to be generated or changed dynamically.

            For example, a website can use Canvas to create a chart based on data received from a server.

            Banking dashboard

                The application wants to show the customer's monthly expenses.

                    The data might be:

                    January    $10,000
                    February   $8,000
                    March      $12,000
                    April      $9,000

                    The application can use Canvas to draw a graph.

            Online Games

                Canvas can be used to draw:

                    Player characters
                    Enemies
                    Game objects
                    Backgrounds
                    Education

                Canvas can be used to display:

                    Mathematical graphs
                    Diagrams
                    Interactive drawing activities
                    Image Editing

                Canvas can be used for:

                    Cropping images
                    Drawing on images
                    Adding text
                    Applying visual modifications.

    ## Geolocation API

        The Geolocation API allows a website to request the user's geographical location.

        The browser can provide information such as:

            Latitude
            Longitude

        The browser normally asks the user for permission before providing the location.

        The Geolocation API allows a website to obtain the user's location with permission.

        ### uses of geolocaion

            Geolocation is useful when an application needs to provide location-based services.

                Find nearby restaurants
                Find nearby stores
                Show the user's position on a map
                Calculate distance
                Find nearby drivers
                Display local weather

            Food Delivery

                The customer opens the application.
                The application needs to find restaurants near the customer.

                    User opens food delivery website
                            ↓
                    Website requests location permission
                            ↓
                    User allows location access
                            ↓
                    Latitude and longitude are received
                            ↓
                    Nearby restaurants are identified
                            ↓
                    Restaurants are displayed


                Your Location
                    |
                Nearby Restaurants
                    |
                Restaurant A
                Restaurant B
                Restaurant C


            Google Maps: Show the user's current position.
            Ride booking: Identify the pickup location.
            Food delivery: Find restaurants near the customer.
            Weather applications: Show weather for the user's area.
            Travel applications: Find nearby attractions.


    ## Web Storage API

        The Web Storage API allows websites to store small amounts of data in the browser.

        There are two main storage mechanisms:

            localStorage
            sessionStorage
            Simple Definition

        Web Storage allows a website to store data on the user's browser.

        ### Local Storage

            localStorage stores data in the browser and generally keeps it available even after the browser is closed.

            The data remains until the website removes it or the user clears the stored data.

            uses

                The user selects Dark Mode = the website stores the preference.

                    User selects Dark Mode
                            ↓
                    Preference stored in localStorage
                            ↓
                    User closes browser
                            ↓
                    User opens website again
                            ↓
                    Dark Mode preference is restored

                This provides a better user experience.

            -Website theme preference
            -Language preference
            -UI preferences
            -Recently selected settings
            -Non-sensitive user preferences

        ### SessionStorage

            sessionStorage stores data for the current browser tab/session.

            The stored data is generally removed when the tab or window is closed.

            Online Examination

                A student is answering questions:

                Question 1 ---> A
                Question 2 ---> C
                Question 3 ---> B

                The application can temporarily store session-specific information while the exam is open.

                Student starts exam
                        ↓
                Answers questions
                        ↓
                Temporary session data is stored
                        ↓
                Student continues the exam
                        ↓
                Exam session ends

                This is useful for temporary browser-session data.

        ### Notification API

            The Notifications API allows a website to display notifications through the browser and operating system.

            The website normally needs permission from the user.

            uses

                Notifications allow websites to inform users about important events even when the user is not actively looking at a particular page.

                Food Deleviry

                    The customer places an order.

                    The order status changes:

                        Order Placed
                            ↓
                        Restaurant Accepted
                            ↓
                        Food Preparing
                            ↓
                        Picked Up
                            ↓
                        Out for Delivery
                            ↓
                        Delivered

                    The application can notify the customer ---> Order Update

                    Your order has been picked up.

            Banking

                Payment Successful
                ₹2,000 payment completed.

            Education
                
                New Assignment
                A new JavaScript assignment has been posted.
                
            E-commerce
            
                Order Update
                Your package has been shipped.
            
            Email

                New Email
                You received a new message.

            Permission

                Notifications generally require the user's permission.

                The browser may ask:

                    Allow this website to send notifications?
                    The user can allow or deny the request.

# Debugging

    Debugging is the process of finding, understanding, and fixing errors or unexpected behavior in a JavaScript program.

    When a JavaScript application does not work as expected, debugging helps us understand:

        Where the problem occurred
        Which code caused the problem
        What values variables contain
        Which functions were executed
        Why the program produced an unexpected result

    JavaScript provides several tools for debugging, especially through browser Developer Tools.

    The important debugging tools are:

        Console methods
        Breakpoints
        Developer Tools
        Watch expressions
        Call Stack
        Variable inspection
        Step-by-step execution

    ## Types of Errors

        ### Syntax Error

            A syntax error occurs when JavaScript code does not follow the correct syntax.

            Example

                const product_name = "Laptop";
                console.log(product_name;

            The closing ) is missing.

            The JavaScript engine cannot correctly parse the code.

        ### runtime Error

            A runtime error occurs while the program is executing.

            const product = null;
            console.log(product.product_name);

            The code is syntactically valid, but product is null.

            Trying to access product_name from null causes a runtime error.

        ### Logical Error

            A logical error occurs when the program runs successfully but produces an incorrect result.

        Example
            function calculate_discount(product_price, discount_percentage) {
                return product_price +
                    (product_price * discount_percentage / 100);
            }
            const final_price = calculate_discount(1000, 10);
            console.log(final_price);

            The intended result should be:900

            But the function returns:1100

            The program does not produce a syntax or runtime error. The problem is in the logic.

            Debugging helps us identify this type of problem.

        ### Developer Tools

            Modern browsers provide Developer Tools, commonly called DevTools.

            Developer Tools allow developers to inspect and debug web applications.

            Developer Tools can usually be opened using:

            F12 or Ctrl + Shift + I

            Common Developer Tools sections include:
                For JavaScript debugging, the most important sections are:

                    Console
                    Debugger
                    Breakpoints
                    Watch
                    Call Stack
                    Scope

        ### Console

            The Console is one of the simplest and most commonly used JavaScript debugging tools.

            The console object provides several methods for displaying information.

            Common methods include:

                console.log()
                console.error()
                console.warn()
                console.info()
                console.table()
                console.time()
                console.timeEnd()

        ### console.log()

            console.log() is used to display values or messages in the browser console.

            Example

                const product_name = "Laptop";
                const product_price = 55000;
                console.log(product_name);
                console.log(product_price);

            Output:

                Laptop
                55000

                It is commonly used to check whether a variable contains the expected value.

        ### console.error()

            console.error() is used to display an error message in the console.

            Example

                const payment_status = "failed";
                console.error("Payment failed:", payment_status);

                It is useful when an unexpected or failed operation needs to be highlighted during debugging.

        ### console.warn() is used to display a warning message.

            Example

                const stock_quantity = 3;
                if (stock_quantity < 5) {
                    console.warn("Stock quantity is low");
                }
                Warnings are useful when something requires attention but is not necessarily a program-breaking error.

        ### console.info()

            console.info() is used to display informational messages.

            Example

                console.info("Loading product information...");
                It can be used to identify important stages of application execution.

        ### console.table()

            console.table() is useful for displaying arrays and objects in a table format.

            Example

                const product_data = [
                    {
                        product_id: 101,
                        product_name: "Laptop",
                        product_price: 55000
                    },
                    {
                        product_id: 102,
                        product_name: "Keyboard",
                        product_price: 2500
                    },
                    {
                        product_id: 103,
                        product_name: "Mouse",
                        product_price: 1200
                    }
                ];
                console.table(product_data);

                Instead of displaying the entire array as a large object, the browser displays the information in rows and columns.

                This makes structured data easier to inspect.

        ### console.time() and console.timeEnd()

            These methods are used to measure how long a particular section of code takes to execute.

            Example

                console.time("product_processing");
                const product_data = [];
                for (let index = 0; index < 100000; index++) {
                    product_data.push(index);
                }
                console.timeEnd("product_processing");

            Example output:

                product_processing: 5.23 ms

            This is useful when investigating performance-related problems.

        ### Breakpoints

            A breakpoint is a point in the code where JavaScript execution is temporarily paused.

            Normally, JavaScript executes continuously:

                Line 1
                ↓
                Line 2
                ↓
                Line 3
                ↓
                Line 4
                ↓
                Line 5

            With a breakpoint:

                Line 1
                ↓
                Line 2
                ↓
                Line 3
                ↓
                BREAKPOINT
                ↓
                Program pauses

            When execution is paused, we can inspect variables and program state.

        ### Seting a breaking point
            
            Step 1

                Open the web page in the browser.

            Step 2

                Open Developer Tools.F12
                
            Step 3

                Open the:Debugger or Sources section.

            Step 4

                Open the JavaScript file.
                example:

                    app.js
                    Step 5

                Click the line number where you want execution to pause.

                const tax_amount = subtotal * 0.18;
                The browser creates a breakpoint on that line.
            
            Step 5

                Click the line number where you want execution to pause.
                example:

                const tax_amount = subtotal * 0.18;

                The browser creates a breakpoint on that line.

        ## Watch Expression

            A watch expression allows us to continuously monitor a variable or expression while debugging.

            function calculate_order(product_price, quantity) {
                const subtotal = product_price * quantity;
                const tax_amount = subtotal * 0.18;
                const total_amount = subtotal + tax_amount;
                return total_amount;
            }
            calculate_order(1000, 3);

            While execution is paused, we can add:
            subtotal

            to the Watch section.
                The debugger displays its current value.

            We can also watch expressions such as:
            subtotal + tax_amount

            const subtotal = 5000;
            const discount_amount = 500;
            const tax_amount = 810;
            const shipping_fee = 100;

            const final_amount =
                subtotal -
                discount_amount +
                tax_amount +
                shipping_fee;

            We can watch:

                subtotal
                discount_amount
                tax_amount
                shipping_fee
                final_amount

            If the final amount is incorrect, we can identify which value caused the problem.

        ## Inspecting variables

            When JavaScript execution is paused, Developer Tools allow us to inspect variables.

            Example:

                function calculate_total(product_price, quantity) {
                    const subtotal = product_price * quantity;
                    const tax_amount = subtotal * 0.18;
                    return subtotal + tax_amount;
                }

                When execution is paused inside the function, we may see:

                    product_price    1000
                    quantity         2
                    subtotal         2000
                    tax_amount       360

                This allows us to understand the actual runtime values.

        ## Scope

            The debugger also allows us to inspect the scope of variables.

            Common scopes include:

                Local
                Global
                Closure

            For example:

            function calculate_total(product_price, quantity) {
                const subtotal = product_price * quantity;
                return subtotal;
            }

            The variables:

                product_price
                quantity
                subtotal

                are available within the function's local scope.

            Inspecting scope is useful when a variable does not contain the value we expected.

        ## call stack

            The Call Stack shows the sequence of functions that are currently being executed.

                function submit_order() {
                    calculate_total();
                }

                function calculate_total() {
                    calculate_tax();
                }

                function calculate_tax() {
                    console.log("Calculating tax");
                }

                submit_order();

                The function execution path is:

                    submit_order()
                        ↓
                    calculate_total()
                        ↓
                    calculate_tax()

                The debugger can display this sequence in the Call Stack.

                This is particularly useful when a problem occurs inside multiple nested function calls.

# Performance Optimization

    Performance optimization is the process of improving an application's speed, responsiveness, and resource usage.

    A well-optimized application should:

        Load quickly
        Respond quickly to user actions
        Avoid unnecessary calculations
        Avoid unnecessary network requests
        Use memory efficiently
        Keep the user interface responsive
        Handle large amounts of data efficiently

    In JavaScript applications, common performance optimization techniques include:

        Debouncing
        Throttling
        Lazy Loading
        Asynchronous Loading
        Web Workers

    ## importance of perfoemance optimization   

        If a search request is sent every time the user types a character:

            L
            ↓
            API request

            La
            ↓
            API request

            Lap
            ↓
            API request

            Lapt
            ↓
            API request

            Lapto
            ↓
            API request

            Laptop
            ↓
            API request

        Six API requests may be generated for a single search.
        This can cause:

            Unnecessary API requests
            Increased server load
            Increased network usage
            Slower application behavior
            Poor user experience

        Performance optimization techniques help control this behavior.

    ## Debouncing

        Debouncing delays the execution of a function until the user stops performing an action for a specific amount of time.

        The function is executed only after the event has stopped for the specified delay.

            Simple idea
            User types
            ↓
            Wait
            ↓
            User types again
            ↓
            Reset timer
            ↓
            User types again
            ↓
            Reset timer
            ↓
            User stops typing
            ↓
            Wait for delay
            ↓
            Function executes

        ### Real-Time Use Case of Debouncing

            A common example is a search box.

            Laptop

            Without debouncing:

            L       → API request
            La      → API request
            Lap     → API request
            Lapt    → API request
            Lapto   → API request
            Laptop  → API request

            With debouncing:

            L
            La
            Lap
            Lapt
            Lapto
            Laptop
                ↓
            User stops typing
                ↓
            API request

            Only one request is made after the user stops typing.

            function debounce(callback_function, delay) {
                let timer_id;
                return function () {
                    clearTimeout(timer_id);
                    timer_id = setTimeout(() => {
                        callback_function();
                    }, delay);
                };
            }

        Usage:

            function search_products() {
                console.log("Searching products...");
            }
            const debounced_search =
                debounce(search_products, 500);
            debounced_search();

            The search_products() function executes only after the specified delay.

        Debouncing is useful for events that occur repeatedly in a short period.

            Common examples:

            Search boxes
            Autocomplete
            API search
            Form validation
            Window resizing
            Text editing
            Filtering large datasets

    ## Throttling

        Throttling limits how frequently a function can execute.

        Instead of waiting until the user stops performing an action, throttling allows the function to execute at a controlled interval.

        For example:

        Function can execute once every 500 ms

        Even if the event happens hundreds of times, the function will not execute more frequently than the specified interval.

        ### Real-Time Use Case of Throttling

            A common example is monitoring page scrolling.
            The scroll event can fire many times while the user scrolls.

            window.addEventListener("scroll", () => {
                console.log("User is scrolling");
            });

            This can execute very frequently.
            Instead, throttling can limit execution.

            For example:

                User scrolls continuously
                        ↓
                Function
                        ↓
                Wait 200 ms
                        ↓
                Function
                        ↓
                Wait 200 ms
                        ↓
                Function

        ### implementation

            function throttle(callback_function, delay) {
                let last_execution_time = 0;
                return function (...arguments_list) {
                    const current_time = Date.now();
                    if (
                        current_time - last_execution_time >= delay
                    ) {
                        last_execution_time = current_time;
                        callback_function(...arguments_list);
                    }
                };
            }

            Usage:

            function track_scroll() {
                console.log("Tracking scroll");
            }
            const throttled_scroll =
                throttle(track_scroll, 500);
            window.addEventListener(
                "scroll",
                throttled_scroll
            );

            The function executes at most once every 500 milliseconds.

    ## Lazy Loading

        Lazy loading means loading a resource only when it is actually needed.

        Instead of loading everything when the page starts, we load certain resources later.

        For example, an e-commerce page may contain:

            Product 1
            Product 2
            Product 3
            ...
            Product 100

        Loading all 100 product images immediately can consume unnecessary bandwidth.

        With lazy loading:

            Page opens
            ↓
            Load visible images
            ↓
            User scrolls
            ↓
            Load images that become visible

        This can improve the initial page loading experience.

        JavaScript can also be used with the Intersection Observer API.

        HTML

            <img
                class="product_image"
                data_src="laptop.jpg"
                alt="Laptop"
            >
            
        JavaScript

            const product_image =document.querySelector(".product_image");
            const image_observer =new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const image = entry.target;
                            image.src = image.dataset.src;
                            image_observer.unobserve(image);
                        }
                    });
                });

            image_observer.observe(product_image);

            The image is loaded when it enters the visible area.

        Use cases

            Lazy loading is commonly used for:

                Images
                Videos
                Product lists
                Large datasets
                Components
                JavaScript modules
                Heavy resources

            For example, a shopping application may initially load only the products visible on the screen.

            More products can be loaded as the user scrolls.


        Benifits

            Benefits of Lazy Loading
            Lazy loading can:

                Reduce initial page load time
                Reduce network usage
                Reduce memory usage
                Avoid loading unnecessary resources
                Improve initial page responsiveness

            However, lazy loading should be used carefully.

            Resources that are immediately visible or required for the initial page should generally not be unnecessarily delayed.

    ## Asynchronous Loading

        Asynchronous loading allows a task to happen without blocking the rest of the application.

            JavaScript can start an operation and continue executing other code while waiting for the operation to finish.

            Common asynchronous operations include:

                API requests
                File loading
                Database requests
                Timers
                Dynamic module loading

        Synchronous vs Asynchronous

        Synchronous

            Task A
            ↓
            Wait
            ↓
            Task B
            ↓
            Wait
            ↓
            Task C

            Each task must finish before the next task begins.

         Asynchronous

            Task A ──────────────→ Complete

            Task B ─────→ Complete

            Task C ─────────→ Complete

            The application can continue performing other work while waiting for asynchronous operations.

        Asynchronous API Example

            async function load_products() {
                const response =await fetch("/api/products");
                const product_data =await response.json();
                console.log(product_data);
            }
            load_products();

            The fetch() operation is asynchronous.

            JavaScript does not need to block the entire page while waiting for the server response.

        Asynchronous Loading with Dynamic Import

            JavaScript modules can also be loaded only when they are needed.

            payment.js

            Instead of loading the module immediately, we can dynamically import it.

            async function open_payment() {
                const payment_module =
                    await import("./payment.js");
                payment_module.start_payment();
            }

            The payment.js module is loaded when open_payment() is called.
            This technique is called dynamic importing.

        Code Splitting

            Dynamic imports can help with code splitting.
            Instead of sending one large JavaScript file:

                application.js
                    ↓
                10 MB

            the application can split code into smaller parts:

                main.js
                    ↓
                dashboard.js
                    ↓
                payment.js
                    ↓
                reports.js

            Only the required code needs to be loaded.

        Example of Code Splitting
        
            async function open_reports() {
                const reports_module =await import("./reports.js");
                reports_module.load_reports();
            }

            The reports module is loaded only when the reports feature is opened.

            This is useful for large applications containing many features.

# Web Workers   

    A Web Worker allows JavaScript code to run in a separate background thread.

    Normally, JavaScript running in a browser uses the main thread.

    The main thread is responsible for tasks such as:

        JavaScript execution
        DOM updates
        User interactions
        Rendering

    If a heavy calculation runs for a long time on the main thread, the user interface may become unresponsive.

    Web Workers can move heavy calculations away from the main thread.

    ## Main thread Problem

        function process_large_data() {
            let total_amount = 0;
            for (let index = 0; index < 1000000000; index++) {
                total_amount += index;
            }
            return total_amount;
        }
        process_large_data();

        A very large calculation like this can occupy the main thread.
        During the calculation, the page may become slow or unresponsive.

    ## Web Worker Architecture

        A Web Worker creates a separate execution environment.

        Main Thread
            |
            | postMessage()
            ↓
        Web Worker
            |
            | Heavy calculation
            ↓
        Web Worker
            |
            | postMessage()
            ↓
        Main Thread

        The main thread and worker communicate using messages.

    ## Creating a Web Worker

        Create a file:

            worker.js
            worker.js

        self.onmessage = function (event) {
            const number = event.data;
            let total = 0;
            for (let index = 0; index <= number; index++) {
                total += index;
            }
            self.postMessage(total);
        };

        The worker receives data using:event.data
        and sends the result back using:self.postMessage()
    
    Using the Web Worker
        main.js
    
        const calculation_worker =new Worker("./worker.js");
        calculation_worker.postMessage(100000000);

        calculation_worker.onmessage =function (event) {
            console.log("Calculation result:",event.data);
            };

        The main JavaScript file sends data to the worker:
        calculation_worker.postMessage(100000000);

        The worker performs the calculation.
        The worker sends the result back:
        self.postMessage(total);

        The main thread receives the result:

        calculation_worker.onmessage =
            function (event) {
                console.log(event.data);
            };
        
    Web Worker Communication

        The two sides communicate using messages.

            Main Thread → Worker
            calculation_worker.postMessage(data);
            Worker → Main Thread
            self.postMessage(result);

        This is the basic communication pattern:

                Main Thread
                    |
                    | postMessage()
                    ↓
                Worker
                    |
                    | postMessage()
                    ↓
                Main Thread

    Terminating a Web Worker

        When the worker is no longer required, it can be terminated.
        calculation_worker.terminate();

        This stops the worker.

        It is useful when a worker is no longer needed and should not continue consuming resources.

    When to Use Web Workers

        Web Workers are useful for CPU-intensive operations such as:

            Large calculations
            Processing large datasets
            Image processing
            Data transformation
            Complex mathematical operations
            Parsing large files
            Encryption-related computation

        They are generally not necessary for small calculations.

    Important Web Worker Limitation

        A normal Web Worker does not directly manipulate the page DOM.
        For example, the worker should not directly do:

        document.querySelector(".result");

        Instead, the worker performs the calculation and sends the result to the main thread.

        The main thread then updates the DOM.

            Worker
            ↓
            Calculate
            ↓
            Send result
            ↓
            Main Thread
            ↓
            Update DOM

# Unit testing

**Unit testing** is the process of testing small, individual parts of a program to verify that they work correctly.

A small part of a program is called a **unit**.

A unit can be:

* A function
* A calculation
* A validation function
* A utility function
* A data-processing function

For example:

```javascript
function calculate_total(product_price, quantity) {
    return product_price * quantity;
}
```

This function can be tested independently.

We can verify:

```text
calculate_total(1000, 2)
```

should return:

```text
2000
```

---

#  Why Unit Testing Is Important

Without testing, we may manually check the application every time we change the code.

For example:

```text
Change code
   ↓
Run application
   ↓
Enter data manually
   ↓
Check result
```

With automated unit tests:

```text
Change code
   ↓
Run tests
   ↓
Tests execute automatically
   ↓
Pass / Fail
```

Unit testing helps us:

* Find bugs early
* Verify individual functions
* Prevent existing functionality from breaking
* Make code changes more safely
* Automate repetitive testing
* Understand expected behavior

---

# Unit Testing Concept

Suppose we have:

```javascript
function calculate_total(product_price, quantity) {
    return product_price * quantity;
}
```

We can create a test:

```text
Input:
product_price = 1000
quantity = 2

Expected output:
2000
```

The test checks:

```text
Actual result === Expected result
```

If they are equal:

```text
PASS
```

Otherwise:

```text
FAIL
```

---

#  Testing Frameworks and Libraries

Several JavaScript tools are commonly used for testing.

Important ones include:

* Jest
* Mocha
* Chai

They have different roles.

 Tool           Purpose          
                      
 Jest           Testing framework                      
 Mocha          Testing framework                      
 Chai           Assertion library                      

---

# 5. Jest

**Jest** is a JavaScript testing framework.

It provides features for:

* Writing tests
* Running tests
* Mocking
* Test organization

A basic Jest test looks like:

```javascript
test("should calculate total price", () => {

    const result = calculate_total(1000, 2);

    expect(result).toBe(2000);
});
```

---

# Installing Jest

Create a Node.js project:

```powershell
npm init -y
```

Install Jest:

```powershell
npm install --save-dev jest
```

Then configure the test script in `package.json`.

```json
{
    "scripts": {
        "test": "jest"
    }
}
```

Tests can then be executed using:

```powershell
npm test
```

---

#  Basic Jest Test

Suppose we have:

### `calculator.js`

```javascript
function calculate_total(product_price, quantity) {
    return product_price * quantity;
}

module.exports = {
    calculate_total
};
```

Test file:

### `calculator.test.js`

```javascript
const {
    calculate_total
} = require("./calculator");

test("should calculate total price", () => {

    const result =
        calculate_total(1000, 2);

    expect(result).toBe(2000);
});
```

Running:

```powershell
npm test
```

produces a test result.

---

# Test Structure

A basic test follows this structure:

```text
Arrange
   ↓
Act
   ↓
Assert
```

This is called the **AAA pattern**.

---

# Arrange

Arrange means preparing the data required for the test.

```javascript
const product_price = 1000;
const quantity = 2;
```

---

# Act

Act means executing the function being tested.

```javascript
const result =
    calculate_total(product_price, quantity);
```

---

# Assert

Assert means checking whether the actual result matches the expected result.

```javascript
expect(result).toBe(2000);
```

Complete example:

```javascript
test("should calculate total price", () => {

    const product_price = 1000;
    const quantity = 2;

    const result =
        calculate_total(
            product_price,
            quantity
        );

    expect(result).toBe(2000);
});
```

---

# Assertions

An **assertion** checks whether the actual result matches what we expect.

For example:

```javascript
expect(result).toBe(2000);
```

If:

```text
result = 2000
```

the test passes.

If:

```text
result = 2500
```

the test fails.

---

#  Common Jest Matchers

Jest provides several matchers.

### `toBe()`

Used for exact equality.

```javascript
expect(total_amount).toBe(2000);
```

---

### `toEqual()`

Used to compare objects and arrays.

```javascript
expect(product).toEqual({
    product_name: "Laptop",
    product_price: 50000
});
```

---

### `toBeTruthy()`

Checks whether a value is truthy.

```javascript
expect(is_logged_in).toBeTruthy();
```

---

### `toBeFalsy()`

Checks whether a value is falsy.

```javascript
expect(is_logged_in).toBeFalsy();
```

---

### `toBeNull()`

Checks whether the value is `null`.

```javascript
expect(product).toBeNull();
```

---

### `toBeUndefined()`

Checks whether the value is `undefined`.

```javascript
expect(product).toBeUndefined();
```

---

### `toContain()`

Checks whether an array or string contains a value.

```javascript
expect(product_names).toContain("Laptop");
```

---

# Testing Multiple Cases

A good unit test should test different possible inputs.

Consider:

```javascript
function calculate_total(product_price, quantity) {

    return product_price * quantity;
}
```

We can test multiple cases:

```javascript
test("should calculate total for two products", () => {

    expect(
        calculate_total(1000, 2)
    ).toBe(2000);
});

test("should calculate total for one product", () => {

    expect(
        calculate_total(1000, 1)
    ).toBe(1000);
});

test("should return zero when quantity is zero", () => {

    expect(
        calculate_total(1000, 0)
    ).toBe(0);
});
```

---

# Testing Edge Cases

An **edge case** is an unusual or boundary input.

For example:

```text
Quantity = 0
Quantity = 1
Negative quantity
Very large quantity
Product price = 0
```

Tests should consider these situations when they are valid for the application.

Example:

```javascript
test("should return zero when quantity is zero", () => {

    expect(
        calculate_total(1000, 0)
    ).toBe(0);
});
```

---

##  What Is Mocha?

**Mocha** is a JavaScript testing framework.

Mocha provides functionality for:

* Defining tests
* Organizing test suites
* Running tests
* Handling asynchronous tests

Mocha commonly works with an assertion library such as **Chai**.

---

# Installing Mocha

Install Mocha:

```powershell
npm install --save-dev mocha
```

A package script can be configured:

```json
{
    "scripts": {
        "test": "mocha"
    }
}
```

Run the tests:

```powershell
npm test
```

---

# Basic Mocha Test

```javascript
const assert = require("assert");

describe("calculate_total", () => {

    it("should calculate total price", () => {

        const result =
            calculate_total(1000, 2);

        assert.strictEqual(
            result,
            2000
        );
    });

});
```

---

#  describe()

`describe()` is used to group related tests.

Example:

```javascript
describe("Shopping Cart", () => {

    // related tests
});
```

It helps organize test cases.

---

# it()

`it()` defines an individual test case.

Example:

```javascript
it("should calculate total price", () => {

    const result =
        calculate_total(1000, 2);

    assert.strictEqual(result, 2000);
});
```

The test description should explain what the test expects.

---


## chai

**Chai** is an assertion library commonly used with Mocha.

It provides readable assertion styles.

For example:

```javascript
expect(result).to.equal(2000);
```

Chai can make test assertions easier to read.

#  Mocha + Chai Example

```javascript
const {
    expect
} = require("chai");

describe("calculate_total", () => {

    it("should calculate total price", () => {

        const result =
            calculate_total(1000, 2);

        expect(result).to.equal(2000);
    });

});
```

The structure is:

```text
Mocha
  ↓
describe()
  ↓
it()
  ↓
Chai assertion
  ↓
expect()
```

## Test Case

A **test case** is a specific test that verifies one expected behavior.

Example:

```javascript
test("should calculate total price", () => {

    expect(
        calculate_total(500, 3)
    ).toBe(1500);
});
```

This test checks one behavior:

```text
500 × 3 = 1500
```

---

#  Good Test Case Structure

A good test should clearly communicate:

```text
What is being tested?
What input is provided?
What output is expected?
```

Example:

```javascript
test("should calculate total price for three products", () => {

    const product_price = 500;
    const quantity = 3;

    const result =
        calculate_total(
            product_price,
            quantity
        );

    expect(result).toBe(1500);
});
```

---

## Testing Error Handling

Unit tests should also verify that functions correctly handle invalid input or errors.

Example:

```javascript
function withdraw_money(account_balance, withdraw_amount) {

    if (withdraw_amount > account_balance) {
        throw new Error("Insufficient balance");
    }

    return account_balance - withdraw_amount;
}
```

Test:

```javascript
test("should throw error when balance is insufficient", () => {

    expect(() => {

        withdraw_money(1000, 1500);

    }).toThrow("Insufficient balance");
});
```

This verifies the error behavior instead of only testing successful cases.

---


## Mocking?

**Mocking** means replacing a real dependency with a controlled fake version during a test.

Suppose a function calls an external API:

```javascript
async function get_product_price(product_id) {
    const response =await fetch(`/api/products/${product_id}`);
    const product_data =await response.json();
    return product_data.product_price;
}
```

A unit test should not necessarily depend on the real API.

Instead, we can provide a mock response.

---

# Why Mocking Is Useful

Without mocking:

```text
Test
 ↓
Real API
 ↓
Network
 ↓
Server
 ↓
Database
 ↓
Response
```

The test may become:

* Slow
* Dependent on network availability
* Dependent on server state
* Difficult to reproduce

With mocking:

```text
Test
 ↓
Mock API response
 ↓
Function
 ↓
Result
```

The test becomes more isolated.

---

# Simple Mock Example

Suppose we have:

```javascript
function get_product_name(product) {

    return product.product_name;
}
```

Instead of using a real product object from a database, we can provide controlled test data:

```javascript
test("should return product name", () => {

    const mock_product = {
        product_id: 101,
        product_name: "Laptop",
        product_price: 50000
    };

    const result =
        get_product_name(mock_product);

    expect(result).toBe("Laptop");
});
```

Here, `mock_product` is controlled test data.

---

# Mocking External APIs

Suppose the application normally receives:

```json
{
    "product_id": 101,
    "product_name": "Laptop",
    "product_price": 50000
}
```

During testing, we can provide the same structure without contacting the actual server.

This allows the test to focus on the function's behavior.

---

For example:

```javascript
beforeEach(() => {
    console.log("Before each test");
});
```
This code runs before every test.

---

# Unit Testing Workflow

A typical unit testing process is:

```text
Write function
     ↓
Identify expected behavior
     ↓
Create test case
     ↓
Arrange test data
     ↓
Execute function
     ↓
Assert result
     ↓
Run test
     ↓
PASS / FAIL
```

---

# Testing Pyramid

A software application can contain different levels of testing.

```text
             End-to-End Tests
                  /\
                 /  \
                /    \
          Integration Tests
              /        \
             /          \
              Unit Tests
```

Unit tests generally form a large part of the test suite because they are fast and focused.

# JavaScript Security

## Introduction

Security is the process of protecting a web application from:

* Unauthorized access
* Malicious input
* Data theft
* Session attacks
* Malicious scripts
* Unauthorized requests
* Browser-based attacks

The important JavaScript/web security concepts are:

* XSS — Cross-Site Scripting
* CSRF — Cross-Site Request Forgery
* Input Sanitization
* Content Security Policy — CSP

---

# XSS — Cross-Site Scripting

## What is XSS?

**XSS (Cross-Site Scripting)** happens when an attacker manages to make malicious JavaScript execute inside another user's browser.

Example:

```html
<h2 id="user_name"></h2>
```

```javascript
const user_name = "<script>alert('Hacked')</script>";

document.getElementById("user_name").innerHTML = user_name;
```

The browser interprets the value as HTML.

This can allow an attacker to inject HTML or JavaScript into the page.

---

## Why XSS Happens

One common cause is inserting untrusted data directly into HTML.

```javascript
element.innerHTML = user_input;
```

If `user_input` contains HTML, the browser may interpret it as markup.

```text
Untrusted data
      ↓
HTML parser
      ↓
Browser interprets it as markup/code
```

---

## Preventing XSS with textContent

If you only want to display text, use:

```javascript
textContent
```

instead of:

```javascript
innerHTML
```

Example:

```javascript
const comment_text = "<script>alert('XSS')</script>";

document.getElementById("comments").textContent = comment_text;
```

## Real-Time XSS Example

Imagine an education platform where students can post questions.

A student enters:

```text
How do I submit my assignment?
```

The application receives:

```javascript
const question_text = user_input;
```

Display it safely:

```javascript
question_element.textContent = question_text;
```

Avoid:

```javascript
question_element.innerHTML = question_text;
```

when the content is untrusted.

---

## Types of XSS

### Stored XSS

Malicious content is stored on the server or database.

```text
User submits malicious content
        ↓
Backend stores content
        ↓
Another user opens page
        ↓
Stored content is rendered
        ↓
Malicious content executes
```

Common locations include:

* Comments
* Forum posts
* Product reviews
* Profile descriptions
* Messages

---

### Reflected XSS

The malicious input comes from a request and is immediately reflected into the response.

For example:

```text
/search?query=user_input
```

If the application inserts the query into HTML without proper handling, it can create an XSS vulnerability.

Common locations include:

* Search pages
* Error messages
* URL parameters
* Query strings

---

### DOM-Based XSS

The vulnerability occurs primarily through client-side JavaScript.

Example:

```javascript
const search_params = new URLSearchParams(window.location.search);

const search_query = search_params.get("query");

document.getElementById("result").innerHTML = search_query;
```

The attacker-controlled value comes from the URL and is inserted into HTML.

Safer:

```javascript
document.getElementById("result").textContent = search_query;
```

---

## XSS Prevention

### Use `textContent`

```javascript
element.textContent = user_input;
```

### Avoid unnecessary `innerHTML`

```javascript
element.innerHTML = user_input;
```

should not be used with untrusted input.

### Validate input

```javascript
if (user_name.length > 50) {
    throw new Error("Invalid user name");
}
```

### Sanitize HTML when HTML is actually required

If an application intentionally allows formatted HTML, use a well-maintained HTML sanitizer rather than attempting to create your own sanitizer using regular expressions.

### Use CSP

Content Security Policy provides another layer of protection.

---

# CSRF — Cross-Site Request Forgery

## What is CSRF?

**CSRF is a web security attack where an attacker tricks a logged-in user's browser into sending an unwanted request to another website.

For example:

```text
User is logged into banking application
        ↓
Browser has authentication cookie
        ↓
User visits malicious website
        ↓
Malicious website causes a request
        ↓
Browser sends authentication credentials
        ↓
Server may process the unwanted request
```

The important point is that the victim is already authenticated.

---

## CSRF Example

Imagine a backend endpoint:

```text
POST /api/change-email
```

The user is already logged in.

A malicious website attempts to cause the browser to submit a request to this endpoint.

If the application relies only on automatically sent cookies and does not properly protect state-changing requests, the request may be accepted.

---

## CSRF Token

One common defense is a **CSRF token**.

The server generates a random token:

```text
csrf_token = random_secure_value
```

The legitimate application includes the token with a state-changing request.

Example:

```javascript
const response = await fetch("/api/change-email", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf_token
    },
    body: JSON.stringify({
        email: new_email
    })
});
```

The server verifies the token.

```text
Request
   ↓
CSRF token present?
   ↓
Token valid?
   ↓
Process request
```

If the token is missing or invalid, the server rejects the request.

---

## SameSite Cookies

Another important CSRF defense is the cookie's `SameSite` attribute.

Example:

```http
Set-Cookie: session_id=abc123; Secure; HttpOnly; SameSite=Lax
```

Common values are:

| SameSite | Meaning                                                                      |
| -------- | ---------------------------------------------------------------------------- |
| `Strict` | Strongly restricts cross-site cookie sending                                 |
| `Lax`    | Allows some cross-site navigation while restricting many cross-site requests |
| `None`   | Allows cross-site cookie usage and requires `Secure`                         |

The appropriate setting depends on the application's authentication and cross-site requirements.

---


# Input Sanitization

## What is Input Sanitization?

Input sanitization means processing untrusted data so that dangerous content is removed or safely represented before it is used.

General flow:

```text
User input
    ↓
Validation
    ↓
Sanitization
    ↓
Application processing
```

---


### Validation

Validation asks:

> Is this input acceptable?

Example:

```javascript
const age = Number(user_input);

if (!Number.isInteger(age) || age < 18) {
    throw new Error("Invalid age");
}
```

The application checks whether the value satisfies its requirements.

### Sanitization

Sanitization asks:

> How can this input be safely represented or transformed?

For example, if an application intentionally supports formatted HTML, an HTML sanitizer can remove unsafe HTML while preserving approved formatting.

---

## Example: Email Validation

```javascript
function validate_email(email_address) {
    if (!email_address.includes("@")) {
        throw new Error("Invalid email address");
    }

    return email_address;
}
```

This is validation.

However, validation alone does not automatically make arbitrary HTML safe.

For example:

```javascript
element.innerHTML = email_address;
```

is still an inappropriate way to display untrusted content.

---

But an attacker can bypass JavaScript completely and send a request directly to the backend.

Therefore:

```text
Frontend validation
        ↓
Good user experience

Backend validation
        ↓
Security enforcement
```

The backend must enforce security requirements.

---

# Content Security Policy — CSP

## What is CSP?

**Content Security Policy (CSP)** is a browser security mechanism that allows a website to specify which sources of content the browser is allowed to load or execute.

CSP is usually delivered using an HTTP response header.

Example:

```http
Content-Security-Policy: default-src 'self'
```

This tells the browser that, by default, resources should come from the application's own origin.

---

## Why CSP is Useful

Suppose an application has an XSS vulnerability.

A strong CSP can provide an additional security layer by restricting where scripts can come from.

```text
Application
     ↓
Unexpected script appears
     ↓
Browser checks CSP
     ↓
Is this script source allowed?
     ↓
No → Browser blocks it
```

CSP is **defense in depth**.

It should not replace proper input handling and secure coding.

---

## CSP Example

A simple policy:

```http
Content-Security-Policy: default-src 'self'
```

A more explicit policy:

```http
Content-Security-Policy:
    default-src 'self';
    script-src 'self';
    style-src 'self';
    img-src 'self' https:;
    connect-src 'self';
```

This can restrict:

* JavaScript sources
* CSS sources
* Image sources
* API/network connections

The exact policy should be designed around the application's actual resources.

---

## CSP and Inline JavaScript

Consider:

```html
<script>
    console.log("Hello");
</script>
```

A strict CSP may block inline scripts unless the policy explicitly permits them.

External JavaScript is easier to control:

```html
<script src="/js/app.js"></script>
```

with:

```http
Content-Security-Policy: script-src 'self'
```

This allows scripts from the application's own origin.

---

# Security Headers

CSP is one of several HTTP security mechanisms.

Examples include:

```http
Content-Security-Policy
```

```http
Strict-Transport-Security
```

```http
X-Content-Type-Options: nosniff
```

```http
Referrer-Policy
```

These headers provide browser-side security controls.

---

# Practical Example — Product Review

Imagine an online shopping application.

A user submits:

```javascript
const review_text = review_input.value;
```

Validate:

```javascript
if (review_text.trim().length < 5) {
    throw new Error("Review is too short");
}
```

Send to backend:

```javascript
await fetch("/api/reviews", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        review: review_text
    })
});
```

The backend validates the request again before storing it.

Display safely:

```javascript
review_element.textContent = review.review;
```

Avoid:

```javascript
review_element.innerHTML = review.review;
```

when the review is untrusted text.

The server can also send an appropriate CSP header.

---


### Sanitization

Removes or modifies unsafe content while potentially preserving allowed content.

```text
Allowed formatting → preserved
Unsafe HTML        → removed
```

If you only need to display text, using:

```javascript
element.textContent = user_input;
```

is often preferable to treating the input as HTML.

---

# JavaScript Tooling

## Introduction

JavaScript tooling refers to the tools used to develop, manage, test, format, analyze, and build JavaScript applications.

Modern JavaScript projects commonly use tools such as:

* npm
* Yarn
* ESLint
* Prettier
* Bundlers

These tools help developers manage dependencies, maintain code quality, format code consistently, and prepare applications for production.

---

# npm

## What is npm?

**npm (Node Package Manager)** is the default package manager that comes with Node.js.

It is used to:

* Install packages
* Remove packages
* Update packages
* Manage project dependencies
* Run project scripts
* Publish packages

For example:

```bash
npm install express
```

This installs the Express package into the project.

---

## package.json

A JavaScript project usually contains a:

```text
package.json
```

file.

Example:

```json
{
    "name": "student-management-app",
    "version": "1.0.0",
    "description": "Student management application",
    "type": "module",
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    },
    "dependencies": {
        "express": "^5.1.0"
    }
}
```

The `package.json` file contains information about the project and its dependencies.

---

## Creating a package.json

Create a new project:

```bash
npm init
```

npm asks questions about the project.

You can also use:

```bash
npm init -y
```

This creates `package.json` using default values.

---

## Installing a Package

Example:

```bash
npm install express
```

Short form:

```bash
npm i express
```

After installation, the dependency is added to:

```json
"dependencies": {
    "express": "^5.1.0"
}
```

A `node_modules` directory is also created.

---

## Installing Development Dependencies

Some packages are required only during development.

For example:

```bash
npm install eslint --save-dev
```

or:

```bash
npm install eslint -D
```

The package is added to:

```json
"devDependencies": {
    "eslint": "^9.0.0"
}
```

Examples of development dependencies:

* ESLint
* Prettier
* Jest
* Nodemon
* Testing tools
* Build tools

---

## dependencies vs devDependencies

| dependencies                   | devDependencies                    |
| ------------------------------ | ---------------------------------- |
| Required by the application    | Mainly required during development |
| Used by production application | Used for development/build/testing |
| Express                        | ESLint                             |
| Database drivers               | Prettier                           |
| Authentication libraries       | Jest                               |
| API libraries                  | Nodemon                            |

---

## package-lock.json

When npm installs packages, it creates:

```text
package-lock.json
```

This file records the exact dependency versions and dependency tree used by the project.

For example:

```text
package.json
      ↓
Requested dependency versions

package-lock.json
      ↓
Exact resolved dependency versions
```

The lock file helps developers install consistent dependency versions across different environments.

---

## Installing Existing Project Dependencies

If you clone a project from GitHub, you usually do not need to install every package manually.

Run:

```bash
npm install
```

npm reads:

```text
package.json
package-lock.json
```

and installs the required dependencies into:

```text
node_modules
```

---

## npm Scripts

Scripts allow developers to create reusable commands.

Example:

```json
{
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js",
        "test": "jest"
    }
}
```

Run:

```bash
npm start
```

Run:

```bash
npm run dev
```

Run:

```bash
npm test
```

For scripts other than some built-in shortcuts, use:

```bash
npm run script_name
```

---

# Yarn

## What is Yarn?

**Yarn** is another JavaScript package manager.

It performs many of the same tasks as npm:

* Installing packages
* Managing dependencies
* Running scripts
* Updating packages
* Removing packages

Example:

```bash
yarn add express
```

npm equivalent:

```bash
npm install express
```

---

## Yarn Project

A project using Yarn may contain:

```text
package.json
yarn.lock
```

The `yarn.lock` file records resolved package versions.

With npm, the equivalent lock file is commonly:

```text
package-lock.json
```

---

## npm vs Yarn

| Feature            | npm                   | Yarn               |
| ------------------ | --------------------- | ------------------ |
| Package manager    | Yes                   | Yes                |
| Uses package.json  | Yes                   | Yes                |
| Lock file          | package-lock.json     | yarn.lock          |
| Install package    | `npm install package` | `yarn add package` |
| Run scripts        | `npm run script`      | `yarn script`      |
| Comes with Node.js | Yes                   | No                 |

Both can manage JavaScript dependencies.

A project generally chooses one package manager and consistently uses its lock file and commands.

---

# Linters

## What is a Linter?

A **linter** analyzes source code and identifies potential problems, incorrect patterns, and style issues.

A linter does not execute the application like a normal program.

Instead, it analyzes the code.

Example:

```javascript
const student_name = "Dinesh"

console.log(student_name)
```

A linter may identify missing semicolons depending on the configured rules.

Another example:

```javascript
const unused_variable = 100;
```

A linter may report that the variable is never used.

---

# ESLint

## What is ESLint?

**ESLint** is a popular JavaScript and TypeScript linter.

It can detect:

* Undefined variables
* Unused variables
* Potential bugs
* Incorrect patterns
* Code quality issues
* Configurable style violations

---

## Installing ESLint

Install ESLint as a development dependency:

```bash
npm install eslint --save-dev
```

or:

```bash
npm install eslint -D
```

---

## ESLint Configuration

Modern ESLint projects commonly use:

```text
eslint.config.js
```

Example:

```javascript
export default [
    {
        rules: {
            "no-unused-vars": "error",
            "no-console": "warn"
        }
    }
];
```

The rules determine how ESLint analyzes the code.

---

## ESLint Rules

Example:

```javascript
const student_name = "Dinesh";
```

If the variable is never used, ESLint can report:

```text
student_name is assigned a value but never used
```

Another rule can detect undefined variables:

```javascript
console.log(student_name);
```

if `student_name` has not been declared.

---

## ESLint Severity

ESLint rules can commonly have different severity levels.

### Off

```javascript
"no-console": "off"
```

The rule is disabled.

### Warning

```javascript
"no-console": "warn"
```

ESLint reports a warning.

### Error

```javascript
"no-unused-vars": "error"
```

ESLint reports an error.

---

## Running ESLint

A script can be added to `package.json`:

```json
{
    "scripts": {
        "lint": "eslint ."
    }
}
```

Run:

```bash
npm run lint
```

ESLint analyzes the project files.

---

# Formatters

## What is a Formatter?

A formatter automatically changes the formatting of source code according to predefined rules.

For example, inconsistent code:

```javascript
const student_name="Dinesh";
const student_age=21;
```

A formatter can convert it into:

```javascript
const student_name = "Dinesh";
const student_age = 21;
```

Formatting focuses mainly on how code is written rather than whether the code contains logical bugs.

---

# Prettier

## What is Prettier?

**Prettier** is an opinionated code formatter.

It supports many languages and formats, including:

* JavaScript
* TypeScript
* HTML
* CSS
* JSON
* Markdown

---

## Installing Prettier

Install it as a development dependency:

```bash
npm install prettier --save-dev
```

or:

```bash
npm install prettier -D
```

---

## Example

Before formatting:

```javascript
function calculate_total(price, quantity){return price*quantity;}
```

After Prettier:

```javascript
function calculate_total(price, quantity) {
    return price * quantity;
}
```

Prettier automatically applies its formatting rules.

---

## Running Prettier

Add a script:

```json
{
    "scripts": {
        "format": "prettier --write ."
    }
}
```

Run:

```bash
npm run format
```

Prettier formats the project files.

---

## Checking Formatting

Instead of changing files, Prettier can check whether files are already formatted:

```bash
npx prettier --check .
```

This is useful in CI/CD pipelines.

---

# ESLint vs Prettier

ESLint and Prettier have different primary purposes.

| ESLint                      | Prettier                                 |
| --------------------------- | ---------------------------------------- |
| Code analysis               | Code formatting                          |
| Finds potential problems    | Formats source code                      |
| Detects unused variables    | Fixes indentation                        |
| Detects undefined variables | Controls spacing                         |
| Enforces coding rules       | Controls formatting style                |
| Can identify bugs/patterns  | Generally does not analyze program logic |

Example:

```javascript
const student_name = "Dinesh";
```

ESLint may check:

```text
Is student_name unused?
```

Prettier may check:

```text
Is the formatting consistent?
```

---

# Bundlers

## What is a Bundler?

A **bundler** takes multiple project files and dependencies and processes them into files that can be efficiently delivered to the browser or other runtime environments.

For example:

```text
src/
├── main.js
├── user.js
├── product.js
└── api.js
```

A bundler can analyze the dependencies:

```text
main.js
   ↓
user.js
   ↓
api.js

product.js
   ↓
api.js
```

and produce optimized build output.

---

# Why Bundlers Are Used

Modern applications can contain:

* Hundreds of JavaScript modules
* CSS files
* Images
* Fonts
* Third-party dependencies
* JSON files

A bundler can process these resources as part of the application build.

Common bundlers and build tools include:

* Webpack
* Vite
* Rollup
* Parcel
* esbuild

---

# Webpack

## What is Webpack?

**Webpack** is a module bundler that analyzes dependencies and creates bundles for an application.

Example project:

```text
src/
├── main.js
├── user.js
└── api.js
```

`main.js`:

```javascript
import { get_user } from "./user.js";

console.log(get_user());
```

`user.js`:

```javascript
import { fetch_user } from "./api.js";

export function get_user() {
    return fetch_user();
}
```

Webpack analyzes these imports and creates the required build output.

---

# Vite

## What is Vite?

**Vite** is a modern frontend development tool that provides a fast development server and production build process.

A Vite project commonly contains:

```text
project/
├── src/
├── public/
├── index.html
├── package.json
└── vite.config.js
```

During development:

```bash
npm run dev
```

Vite starts a development server.

For production:

```bash
npm run build
```

Vite creates production-ready output.

---

# Bundling Process

A simplified bundling process looks like:

```text
Source Code
    ↓
Module Analysis
    ↓
Dependency Graph
    ↓
Transformation
    ↓
Optimization
    ↓
Production Build
```

---

# Module Bundling

Suppose an application has:

```text
main.js
user.js
product.js
order.js
```

`main.js`:

```javascript
import { get_user } from "./user.js";
import { get_product } from "./product.js";
import { get_order } from "./order.js";
```

The bundler understands these relationships.

```text
                 main.js
              /     |      \
             ↓      ↓       ↓
         user.js product.js order.js
```

The bundler creates the appropriate output files based on the build configuration.

---

# Code Splitting

Bundlers can also support **code splitting**.

Instead of loading the entire application immediately:

```text
Entire application
        ↓
Browser downloads everything
```

the application can load code when required:

```text
Initial application
        ↓
Load required code
        ↓
User opens another feature
        ↓
Load additional chunk
```

This can reduce the amount of JavaScript downloaded initially.

---

# Tree Shaking

**Tree shaking** removes unused code from production builds when the tooling and module structure allow it.

Suppose:

```javascript
export function calculate_total() {
    return 100;
}

export function calculate_tax() {
    return 20;
}
```

If the application only imports:

```javascript
import { calculate_total } from "./billing.js";
```

the build tool may be able to remove unused exports such as `calculate_tax`.

This can reduce production bundle size.

---

# Minification

Bundlers or build tools can also perform **minification**.

Before:

```javascript
function calculate_total(price, quantity) {
    return price * quantity;
}
```

After minification:

```javascript
function calculate_total(e,t){return e*t}
```

The code becomes smaller while preserving its behavior.

Minification helps reduce the amount of data transferred to users.

---

# Source Maps

Production JavaScript may be transformed and minified.

For example:

```text
Original source
      ↓
Bundling
      ↓
Minification
      ↓
Production JavaScript
```

Debugging the transformed code directly can be difficult.

**Source maps** connect the generated code back to the original source code.

This allows browser developer tools to show the original source files while debugging.

---

# npm + ESLint + Prettier + Bundler

These tools can work together in one project.

```text
                 JavaScript Project
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
         npm           ESLint        Prettier
          │              │              │
   Dependencies      Code analysis    Formatting
          │
          ↓
       Bundler
          │
          ↓
   Production build
```

Example `package.json`:

```json
{
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint .",
        "format": "prettier --write ."
    },
    "devDependencies": {
        "eslint": "^9.0.0",
        "prettier": "^3.0.0",
        "vite": "^7.0.0"
    }
}
```

Commands:

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run lint
```

```bash
npm run format
```

```bash
npm run build
```

Each tool has a different responsibility:

```text
npm
→ Manage dependencies and scripts

ESLint
→ Analyze code

Prettier
→ Format code

Bundler
→ Build and optimize application
```

# JavaScript in the Browser

## Introduction

JavaScript can run inside a web browser and interact with the webpage, browser APIs, user actions, storage, navigation, and media devices.

The browser provides several APIs that allow JavaScript to control and communicate with the webpage.

The major concepts are:

* DOM
* Events
* Rendering
* Storage
* History API
* Media API

---

# DOM

## What is the DOM?

**DOM (Document Object Model)** is a programming interface that represents an HTML document as a tree of objects.

Consider this HTML:

```html
<!DOCTYPE html>
<html>
    <body>
        <h1>Student Dashboard</h1>
        <p>Welcome to the dashboard</p>
        <button>View Profile</button>
    </body>
</html>
```

The browser creates a DOM structure:

```text
Document
   │
   └── html
       │
       └── body
           ├── h1
           ├── p
           └── button
```

JavaScript can access and modify these DOM elements.

---

## Selecting DOM Elements

### `getElementById()`

```html
<h1 id="page_title">Student Dashboard</h1>
```

```javascript
const page_title = document.getElementById("page_title");
```

---

### `querySelector()`

```javascript
const page_title = document.querySelector("#page_title");
```

It returns the first element matching the CSS selector.

Example:

```javascript
const submit_button = document.querySelector(".submit_button");
```

---

### `querySelectorAll()`

```javascript
const menu_items = document.querySelectorAll(".menu_item");
```

This returns a collection of matching elements.

You can iterate over them:

```javascript
menu_items.forEach((menu_item) => {
    console.log(menu_item.textContent);
});
```

---

# Changing DOM Content

You can change the text of an element using `textContent`.

```javascript
const page_title = document.querySelector("#page_title");

page_title.textContent = "Student Profile";
```

HTML:

```html
<h1 id="page_title">Student Profile</h1>
```

---

## Changing HTML

You can modify HTML using `innerHTML`.

```javascript
const profile_container = document.querySelector("#profile");

profile_container.innerHTML = `
    <h2>Dinesh</h2>
    <p>AI and Data Science</p>
`;
```

`innerHTML` should be used carefully when the inserted content comes from an untrusted source because it can introduce XSS vulnerabilities.

---

# Changing Attributes

HTML:

```html
<img id="profile_image" src="old-image.jpg">
```

JavaScript:

```javascript
const profile_image = document.querySelector("#profile_image");

profile_image.setAttribute("src", "new-image.jpg");
```

You can also retrieve an attribute:

```javascript
const image_source = profile_image.getAttribute("src");
```

---

# Changing Styles

JavaScript can modify an element's inline styles.

```javascript
const profile_card = document.querySelector(".profile_card");

profile_card.style.backgroundColor = "white";
profile_card.style.padding = "20px";
```

For larger applications, modifying CSS classes is generally easier to maintain.

---

# Working with Classes

Add a class:

```javascript
element.classList.add("active");
```

Remove a class:

```javascript
element.classList.remove("active");
```

Toggle a class:

```javascript
element.classList.toggle("active");
```

Check whether a class exists:

```javascript
const is_active = element.classList.contains("active");
```

---

# Creating DOM Elements

JavaScript can create new elements dynamically.

```javascript
const notification = document.createElement("div");

notification.textContent = "Payment successful";

document.body.appendChild(notification);
```

The flow is:

```text
Create element
      ↓
Set content
      ↓
Set attributes/classes
      ↓
Add to DOM
```

---

# Removing DOM Elements

```javascript
const notification = document.querySelector(".notification");

notification.remove();
```

This removes the element from the DOM.

---

# Events

## What is an Event?

An **event** is an action or occurrence that the browser can detect.

Examples:

* Mouse click
* Keyboard input
* Form submission
* Mouse movement
* Page loading
* Scrolling
* File selection
* Window resizing

JavaScript can respond to these events.

---

# Event Listener

The most common way to handle events is:

```javascript
element.addEventListener("event_name", callback_function);
```

Example:

```javascript
const login_button = document.querySelector("#login_button");

login_button.addEventListener("click", () => {
    console.log("Login button clicked");
});
```

---

# Common Browser Events

| Event       | Description                    |
| ----------- | ------------------------------ |
| `click`     | User clicks an element         |
| `dblclick`  | User double-clicks             |
| `input`     | Input value changes            |
| `change`    | Form value changes             |
| `submit`    | Form is submitted              |
| `keydown`   | Keyboard key is pressed        |
| `keyup`     | Keyboard key is released       |
| `mouseover` | Pointer moves over an element  |
| `mouseout`  | Pointer leaves an element      |
| `scroll`    | Page or element is scrolled    |
| `resize`    | Browser window is resized      |
| `load`      | Resource/page finishes loading |

---

# Event Object

The browser provides an event object to the event handler.

```javascript
login_button.addEventListener("click", (event) => {
    console.log(event);
});
```

The event object contains information about the event.

For example:

```javascript
login_button.addEventListener("click", (event) => {
    console.log(event.target);
});
```

`event.target` identifies the element that triggered the event.

---

# Preventing Default Behavior

Some browser actions have default behavior.

For example, submitting a form normally reloads or navigates the page.

```javascript
login_form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form handled using JavaScript");
});
```

`preventDefault()` stops the browser's default action.

---

# Event Bubbling

Events can move from the target element toward its ancestors.

Example:

```html
<div id="container">
    <button id="login_button">Login</button>
</div>
```

JavaScript:

```javascript
const container = document.querySelector("#container");
const login_button = document.querySelector("#login_button");

container.addEventListener("click", () => {
    console.log("Container clicked");
});

login_button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

When the button is clicked:

```text
Button
   ↓
Container
   ↓
Body
   ↓
Document
```

This is event bubbling.

---

# Event Delegation

Event delegation uses event bubbling to handle events from multiple child elements using one parent listener.

```javascript
const user_list = document.querySelector("#user_list");

user_list.addEventListener("click", (event) => {
    if (event.target.matches(".user_item")) {
        console.log(event.target.textContent);
    }
});
```

This is useful for dynamically generated elements.

---

# Rendering

## What is Rendering?

Rendering is the process through which the browser converts HTML, CSS, and other resources into the visual webpage displayed to the user.

A simplified process is:

```text
HTML
 ↓
DOM

CSS
 ↓
CSSOM

DOM + CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
 ↓
Composite
 ↓
Screen
```

---

# DOM Construction

The browser receives HTML:

```html
<h1>Student Dashboard</h1>
```

It creates a DOM representation:

```text
Document
   ↓
html
   ↓
body
   ↓
h1
```

JavaScript can then modify this structure.

---

# CSSOM

The browser also processes CSS.

Example:

```css
.page_title {
    font-size: 32px;
}
```

The browser creates an internal representation of the CSS rules called the **CSSOM**.

The browser combines information from the DOM and CSSOM when determining what needs to be rendered.

---

# Layout

During layout, the browser calculates the size and position of elements.

For example:

```text
Header
  ↓
Navigation
  ↓
Main content
  ↓
Footer
```

The browser determines:

* Width
* Height
* Position
* Margins
* Padding
* Layout relationships

---

# Paint

After layout, the browser paints visual elements.

This includes:

* Text
* Colors
* Borders
* Shadows
* Images
* Backgrounds

---

# Composite

The browser can divide visual content into layers and combine those layers to produce the final screen.

Some CSS effects and animations can involve compositing.

This is one reason browser rendering performance matters when building interactive applications.

---

# Storage

Browsers provide several mechanisms for storing data on the client side.

Common options include:

* Cookies
* localStorage
* sessionStorage
* IndexedDB

---

# localStorage

`localStorage` stores data in the browser and keeps it available across browser sessions.

Store data:

```javascript
localStorage.setItem("theme", "dark");
```

Read data:

```javascript
const theme = localStorage.getItem("theme");
```

Remove one item:

```javascript
localStorage.removeItem("theme");
```

Remove all local storage:

```javascript
localStorage.clear();
```

---

# localStorage Stores Strings

`localStorage` stores values as strings.

Example:

```javascript
localStorage.setItem("user_age", 21);
```

When retrieved:

```javascript
const user_age = localStorage.getItem("user_age");

console.log(typeof user_age);
```

The result is:

```text
string
```

For objects, use JSON.

```javascript
const user = {
    user_name: "Dinesh",
    department: "AI and Data Science"
};

localStorage.setItem("user", JSON.stringify(user));
```

Read it:

```javascript
const stored_user = JSON.parse(
    localStorage.getItem("user")
);

console.log(stored_user.user_name);
```

---

# sessionStorage

`sessionStorage` works similarly to `localStorage`, but its lifetime is associated with the browser tab/session.

```javascript
sessionStorage.setItem("current_page", "dashboard");
```

Read:

```javascript
const current_page = sessionStorage.getItem("current_page");
```

Remove:

```javascript
sessionStorage.removeItem("current_page");
```

Clear:

```javascript
sessionStorage.clear();
```

---

# localStorage vs sessionStorage

| localStorage                      | sessionStorage                               |
| --------------------------------- | -------------------------------------------- |
| Persists across browser sessions  | Associated with the current page session/tab |
| Data remains until removed        | Data is removed when the tab/session ends    |
| Useful for persistent preferences | Useful for temporary page-session data       |
| Stores strings                    | Stores strings                               |

Neither should be treated as a secure place for highly sensitive data.

---

# Cookies

Cookies are small pieces of data associated with a website.

A server can send:

```http
Set-Cookie: session_id=abc123; HttpOnly; Secure; SameSite=Lax
```

Cookies can be automatically included with relevant HTTP requests depending on their attributes.

Important cookie attributes include:

* `HttpOnly`
* `Secure`
* `SameSite`
* `Expires`
* `Max-Age`
* `Domain`
* `Path`

---

# IndexedDB

**IndexedDB** is a browser database API designed for storing larger amounts of structured data.

It can store:

* Objects
* Records
* Files
* Blobs
* Application data

It is more powerful than `localStorage`.

A simplified use case:

```text
Offline application
        ↓
Store application data
        ↓
IndexedDB
        ↓
Read data when needed
```

IndexedDB is commonly useful for offline-capable web applications and applications that need more structured client-side storage.

---

# History API

The **History API** allows JavaScript to interact with the browser's session history.

Important methods include:

```javascript
history.back();
```

```javascript
history.forward();
```

```javascript
history.go(-1);
```

---

# history.pushState()

`pushState()` adds a new history entry without performing a full page reload.

```javascript
history.pushState(
    {
        page: "profile"
    },
    "",
    "/profile"
);
```

The browser URL can change while JavaScript controls the displayed content.

This is commonly used by single-page applications.

---

# history.replaceState()

`replaceState()` changes the current history entry instead of creating a new one.

```javascript
history.replaceState(
    {
        page: "profile"
    },
    "",
    "/profile"
);
```

Difference:

```text
pushState()
→ Creates a new history entry

replaceState()
→ Replaces the current history entry
```

---

# popstate Event

The `popstate` event occurs when the active history entry changes through browser history navigation.

```javascript
window.addEventListener("popstate", (event) => {
    console.log(event.state);
});
```

This is useful when implementing browser navigation in single-page applications.

---

# Single-Page Application Navigation

A traditional website may work like:

```text
Home
 ↓
Server request
 ↓
New HTML page

Profile
 ↓
Server request
 ↓
New HTML page
```

A single-page application can use the History API:

```text
Home
 ↓
JavaScript changes content
 ↓
pushState()

Profile
 ↓
JavaScript changes content
 ↓
pushState()
```

The browser URL changes without requiring a complete page reload.

---

# Media API

The browser provides APIs for working with media such as:

* Audio
* Video
* Camera
* Microphone
* Screen capture

---

# HTML Audio and Video

HTML provides built-in media elements.

```html
<audio id="audio_player" controls>
    <source src="music.mp3" type="audio/mpeg">
</audio>
```

JavaScript can control the audio:

```javascript
const audio_player = document.querySelector("#audio_player");

audio_player.play();
```

Pause:

```javascript
audio_player.pause();
```

---

# Video

```html
<video id="video_player" controls width="600">
    <source src="video.mp4" type="video/mp4">
</video>
```

JavaScript:

```javascript
const video_player = document.querySelector("#video_player");

video_player.play();
```

Pause:

```javascript
video_player.pause();
```

---

# Media Events

Media elements provide events such as:

* `play`
* `pause`
* `ended`
* `timeupdate`
* `loadedmetadata`
* `volumechange`

Example:

```javascript
video_player.addEventListener("play", () => {
    console.log("Video started");
});
```

```javascript
video_player.addEventListener("pause", () => {
    console.log("Video paused");
});
```

---

# Camera and Microphone

The browser can request access to the user's camera and microphone through:

```javascript
navigator.mediaDevices.getUserMedia();
```

Example:

```javascript
const media_stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
});
```

The browser asks the user for permission.

If permission is granted, the application receives a `MediaStream`.

---

# Displaying Camera Video

HTML:

```html
<video id="camera_video" autoplay></video>
```

JavaScript:

```javascript
const camera_video = document.querySelector("#camera_video");

const media_stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
});

camera_video.srcObject = media_stream;
```

The camera stream is displayed in the video element.

---

# Stopping a Media Stream

A media stream can contain tracks.

```javascript
media_stream.getTracks().forEach((track) => {
    track.stop();
});
```

This can stop camera and microphone tracks.

---

# Browser Permissions

Browser APIs that access sensitive device capabilities generally require user permission.

Examples include:

* Camera
* Microphone
* Location
* Notifications
* Screen sharing

The browser controls these permissions to protect the user.

For example:

```text
JavaScript requests camera
        ↓
Browser permission prompt
        ↓
User allows/denies
        ↓
Application receives result
```

---

# DOM, Events, Rendering, Storage, History and Media

These browser capabilities work together in modern applications.

A typical application might:

```text
DOM
↓
Create interface

Events
↓
React to user actions

Storage
↓
Save application preferences/data

History API
↓
Control application navigation

Media API
↓
Access audio/video/device capabilities

Rendering
↓
Display changes on the screen
```

# JavaScript in Node.js

## Introduction

JavaScript was originally created to run inside web browsers.

With **Node.js**, JavaScript can also run outside the browser.

Node.js allows JavaScript to work with:

* Files and folders
* HTTP servers
* APIs
* Databases
* Operating-system features
* Environment variables
* npm packages
* Backend applications
* Command-line applications

For example, a browser JavaScript program can access the DOM:

```javascript
document.querySelector("#username");
```

But Node.js does not have a browser DOM.

Instead, Node.js provides APIs such as:

```javascript
fs
http
path
process
```

These allow JavaScript to interact with the operating system and network.

---

# Node.js Runtime

Node.js is a **JavaScript runtime environment**.

It uses the **V8 JavaScript engine**, the same JavaScript engine used by Chromium-based browsers.

The important difference is the environment around the JavaScript engine.

### Browser

```text
JavaScript
     ↓
Browser
     ↓
DOM
BOM
localStorage
fetch
Web APIs
```

### Node.js

```text
JavaScript
     ↓
Node.js
     ↓
Filesystem
HTTP
Process
Operating System
npm packages
Network
```

Node.js is commonly used for backend development.

For example:

```text
Browser
   ↓
HTTP Request
   ↓
Node.js Server
   ↓
Business Logic
   ↓
Database
   ↓
Response
   ↓
Browser
```

---

# Node.js Modules

A module is a reusable piece of JavaScript code.

Instead of putting an entire application into one file, we can divide it into multiple files.

For example:

```text
project/
│
├── server.js
├── user_service.js
├── product_service.js
└── database.js
```

Each file can contain separate functionality.

Modules help with:

* Code organization
* Reusability
* Maintainability
* Separation of responsibilities
* Dependency management

---

# ES Modules

Modern Node.js applications commonly use **ES Modules**.

ES Modules use:

```javascript
export
import
```

Example:

```javascript
export function calculate_total(price, quantity) {
    return price * quantity;
}
```

Another file can import it:

```javascript
import { calculate_total } from "./calculator.js";

const total = calculate_total(500, 3);

console.log(total);
```

Output:

```text
1500
```

---

# Named Export

You can export multiple values from a module.

```javascript
export const tax_rate = 0.18;

export function calculate_tax(amount) {
    return amount * tax_rate;
}
```

Import:

```javascript
import { tax_rate, calculate_tax } from "./tax.js";

console.log(tax_rate);

console.log(calculate_tax(1000));
```

---

# Default Export

A module can also have one default export.

```javascript
export default function calculate_discount(price) {
    return price * 0.10;
}
```

Import:

```javascript
import calculate_discount from "./discount.js";

console.log(calculate_discount(2000));
```

A default export does not need the same name during import.

---

# CommonJS Modules

Node.js also supports the older **CommonJS** module system.

CommonJS uses:

```javascript
require()
module.exports
```

Example:

```javascript
function calculate_total(price, quantity) {
    return price * quantity;
}

module.exports = {
    calculate_total
};
```

Import:

```javascript
const { calculate_total } = require("./calculator");
```

### ES Modules vs CommonJS

| ES Modules                    | CommonJS                               |
| ----------------------------- | -------------------------------------- |
| `import`                      | `require()`                            |
| `export`                      | `module.exports`                       |
| Modern JavaScript             | Older Node.js module system            |
| `.js` with `"type": "module"` | Default CommonJS in many Node projects |

A Node.js project using ES Modules commonly has:

```json
{
    "type": "module"
}
```

in `package.json`.

---

# Built-in Node.js Modules

Node.js provides many modules without requiring installation.

Examples:

```text
fs
path
http
url
crypto
os
events
stream
process
```

You can use these modules directly.

For example:

```javascript
import fs from "node:fs";
```

The `node:` prefix clearly indicates that the module is provided by Node.js itself.

---

# Filesystem Module

The filesystem module allows Node.js to work with files and directories.

It is imported using:

```javascript
import fs from "node:fs";
```

The module provides operations such as:

```text
Create file
Read file
Write file
Update file
Delete file
Create directory
Read directory
Delete directory
```

---

# Reading a File

Suppose we have:

```text
data.txt
```

containing:

```text
Hello from Node.js
```

We can read it using:

```javascript
import fs from "node:fs";

const file_data = fs.readFileSync("data.txt", "utf-8");

console.log(file_data);
```

Output:

```text
Hello from Node.js
```

`readFileSync()` reads the file synchronously.

---

# Asynchronous File Reading

For backend applications, asynchronous operations are generally preferred.

```javascript
import fs from "node:fs";

fs.readFile("data.txt", "utf-8", (error, file_data) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(file_data);
});
```

The callback executes after the file has been read.

---

# Writing a File

```javascript
import fs from "node:fs";

fs.writeFileSync(
    "users.txt",
    "Dinesh\nGowtham\nArul"
);
```

If the file does not exist, Node.js creates it.

If it already exists, the existing content is replaced.

---

# Appending to a File

If you want to add content without removing existing content:

```javascript
import fs from "node:fs";

fs.appendFileSync(
    "users.txt",
    "\nRahul"
);
```

The existing data remains.

---

# Checking Whether a File Exists

```javascript
import fs from "node:fs";

if (fs.existsSync("users.txt")) {
    console.log("File exists");
} else {
    console.log("File does not exist");
}
```

---

# Creating a Directory

```javascript
import fs from "node:fs";

fs.mkdirSync("data");
```

Create nested directories:

```javascript
fs.mkdirSync("data/users", {
    recursive: true
});
```

---

# Reading a Directory

```javascript
import fs from "node:fs";

const files = fs.readdirSync("data");

console.log(files);
```

Output might be:

```text
[
    "users.json",
    "products.json",
    "orders.json"
]
```

---

# Deleting a File

```javascript
import fs from "node:fs";

fs.unlinkSync("users.txt");
```

---

# Filesystem with JSON

A very common backend use case is reading JSON data.

Suppose:

```text
users.json
```

contains:

```json
[
    {
        "user_id": 1,
        "user_name": "Dinesh"
    },
    {
        "user_id": 2,
        "user_name": "Gowtham"
    }
]
```

Read it:

```javascript
import fs from "node:fs";

const file_data = fs.readFileSync(
    "users.json",
    "utf-8"
);

const users = JSON.parse(file_data);

console.log(users);
```

Now `users` is a JavaScript array.

---

# Writing JSON

```javascript
import fs from "node:fs";

const users = [
    {
        user_id: 1,
        user_name: "Dinesh"
    },
    {
        user_id: 2,
        user_name: "Gowtham"
    }
];

fs.writeFileSync(
    "users.json",
    JSON.stringify(users, null, 2)
);
```

`JSON.stringify()` converts JavaScript data into JSON text.

---

# Path Module

The `path` module helps create safe file and directory paths.

```javascript
import path from "node:path";

const file_path = path.join(
    "data",
    "users",
    "users.json"
);

console.log(file_path);
```

On Windows it can produce:

```text
data\users\users.json
```

On Linux:

```text
data/users/users.json
```

This makes `path` useful for cross-platform applications.

---

# HTTP Module

Node.js provides a built-in `http` module.

It can be used to create an HTTP server.

```javascript
import http from "node:http";

const server = http.createServer((request, response) => {
    response.end("Hello from Node.js");
});

server.listen(5000);
```

The server runs on:

```text
http://localhost:5000
```

When the browser sends a request, Node.js receives it.

---

# HTTP Request and Response

The basic flow is:

```text
Browser
   ↓
HTTP Request
   ↓
Node.js Server
   ↓
Request Handler
   ↓
HTTP Response
   ↓
Browser
```

The callback receives two important objects:

```javascript
(request, response)
```

`request` contains information about the incoming request.

`response` is used to send data back.

---

# Request URL

```javascript
import http from "node:http";

const server = http.createServer((request, response) => {
    console.log(request.url);

    response.end("Request received");
});

server.listen(5000);
```

If the browser requests:

```text
http://localhost:5000/users
```

the output is:

```text
/users
```

---

# Request Method

You can check the HTTP method:

```javascript
const server = http.createServer((request, response) => {
    console.log(request.method);

    response.end("Request received");
});
```

Possible methods include:

```text
GET
POST
PUT
PATCH
DELETE
```

---

# Creating Simple Routes

Node.js can handle different URLs manually.

```javascript
import http from "node:http";

const server = http.createServer((request, response) => {

    if (request.url === "/") {
        response.end("Home");
        return;
    }

    if (request.url === "/users") {
        response.end("Users");
        return;
    }

    if (request.url === "/products") {
        response.end("Products");
        return;
    }

    response.statusCode = 404;
    response.end("Page not found");
});

server.listen(5000);
```

This is the basic idea behind backend routing.

Frameworks such as Express make routing easier.

---

# Sending JSON from HTTP Server

You can return JSON data.

```javascript
import http from "node:http";

const server = http.createServer((request, response) => {

    response.setHeader(
        "Content-Type",
        "application/json"
    );

    response.end(
        JSON.stringify({
            success: true,
            message: "Server is running"
        })
    );
});

server.listen(5000);
```

The browser receives:

```json
{
    "success": true,
    "message": "Server is running"
}
```

This is the basic structure of an API response.

---

# npm Packages

**npm** stands for Node Package Manager.

It is used to:

* Install packages
* Manage dependencies
* Run scripts
* Share packages
* Manage project versions

For example:

```powershell
npm install express
```

This installs Express into the project.

---

# package.json

A Node.js project commonly contains:

```text
project/
│
├── package.json
├── package-lock.json
├── node_modules/
└── server.js
```

Example:

```json
{
    "name": "node-learning",
    "version": "1.0.0",
    "type": "module",
    "dependencies": {
        "express": "^5.2.1"
    }
}
```

`package.json` describes the project and its dependencies.

---

# Installing a Package

```powershell
npm install express
```

After installation:

```text
node_modules/
package.json
package-lock.json
```

are created or updated.

---

# Importing an npm Package

After installing Express:

```javascript
import express from "express";

const app = express();

app.listen(5000);
```

Here:

```javascript
express
```

is not a built-in Node.js module.

It is an external npm package.

---

# Built-in vs npm Packages

### Built-in Node.js module

```javascript
import fs from "node:fs";
```

No installation required.

### npm package

```javascript
import express from "express";
```

Installation required:

```powershell
npm install express
```

---

# node_modules

When you install packages:

```powershell
npm install express
```

npm downloads the package into:

```text
node_modules/
```

For example:

```text
node_modules/
└── express/
```

You normally do not commit `node_modules` to Git.

Instead, Git stores:

```text
package.json
package-lock.json
```

Another developer can install everything using:

```powershell
npm install
```

---

# package-lock.json

`package-lock.json` records the exact dependency versions installed for the project.

This helps different developers and environments install consistent dependencies.

For example:

```text
package.json
      ↓
Required packages
      ↓
package-lock.json
      ↓
Exact dependency versions
```

---

# npm Scripts

You can define commands in `package.json`.

```json
{
    "scripts": {
        "start": "node server.js",
        "dev": "node --watch server.js"
    }
}
```

Run:

```powershell
npm start
```

or:

```powershell
npm run dev
```

Scripts are commonly used for:

```text
Starting servers
Running tests
Running linters
Building applications
Starting development tools
```

---

# Process Object

Node.js provides a global `process` object.

It gives information and control over the currently running Node.js process.

Example:

```javascript
console.log(process);
```

The object contains information about:

* Environment variables
* Command-line arguments
* Current working directory
* Node.js version
* Operating-system information
* Process ID
* Exit status

---

# process.version

Check the Node.js version:

```javascript
console.log(process.version);
```

Example:

```text
v22.23.2
```

---

# process.platform

Check the operating system:

```javascript
console.log(process.platform);
```

On Windows:

```text
win32
```

On Linux:

```text
linux
```

---

# process.cwd()

`cwd()` means **current working directory**.

```javascript
console.log(process.cwd());
```

Example:

```text
D:\Web development Learning\JS learning\chap app\backend
```

This tells you where the Node.js process was started.

---

# process.argv

`process.argv` contains command-line arguments.

Suppose:

```powershell
node app.js Dinesh 22
```

Then:

```javascript
console.log(process.argv);
```

contains values representing:

```text
node
app.js
Dinesh
22
```

You can access the custom arguments:

```javascript
const user_name = process.argv[2];
const user_age = process.argv[3];

console.log(user_name);
console.log(user_age);
```

Output:

```text
Dinesh
22
```

This is useful for command-line applications.

---

# Environment Variables

One of the most important uses of `process` is accessing environment variables.

Suppose the environment contains:

```text
PORT=5000
```

Node.js can access it:

```javascript
console.log(process.env.PORT);
```

Output:

```text
5000
```

Environment variables are commonly used for:

```text
PORT
DATABASE_URL
JWT_SECRET
API_KEY
CLIENT_URL
```

Sensitive values should not normally be hard-coded directly into source code.

---

# Using dotenv

The `dotenv` npm package is commonly used to load variables from a `.env` file.

Install:

```powershell
npm install dotenv
```

Create:

```text
.env
```

with:

```text
PORT=5000
DATABASE_URL=example_database_url
```

Load it:

```javascript
import "dotenv/config";

console.log(process.env.PORT);
console.log(process.env.DATABASE_URL);
```

---

# process.exit()

A Node.js process can be terminated using:

```javascript
process.exit();
```

You can provide an exit code:

```javascript
process.exit(0);
```

Usually:

```text
0 → successful execution
non-zero → error or abnormal termination
```

For example:

```javascript
const database_connected = false;

if (!database_connected) {
    console.log("Database connection failed");
    process.exit(1);
}
```

---

# Handling Process Events

Node.js can listen for process events.

For example:

```javascript
process.on("SIGINT", () => {
    console.log("Server is shutting down");
    process.exit(0);
});
```

`SIGINT` commonly occurs when you press:

```text
Ctrl + C
```

in the terminal.

This can be useful for graceful server shutdown.

---

# Node.js Backend Structure

A larger Node.js application can be organized like this:

```text
backend/
│
├── src/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── utils/
│   └── middleware/
│
├── data/
├── .env
├── package.json
└── package-lock.json
```

The responsibilities can be separated.

```text
server.js
    ↓
Routes
    ↓
Controllers
    ↓
Services
    ↓
Database / Filesystem
```

---

# Practical Example — Node.js API

A simple Node.js API can combine modules, HTTP, filesystem, and JSON.

`server.js`:

```javascript
import http from "node:http";
import fs from "node:fs";

const server = http.createServer((request, response) => {

    if (request.url === "/users" && request.method === "GET") {

        const file_data = fs.readFileSync(
            "./users.json",
            "utf-8"
        );

        response.setHeader(
            "Content-Type",
            "application/json"
        );

        response.end(file_data);

        return;
    }

    response.statusCode = 404;
    response.end("Route not found");
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});
```

Suppose `users.json` contains:

```json
[
    {
        "user_id": 1,
        "user_name": "Dinesh"
    },
    {
        "user_id": 2,
        "user_name": "Gowtham"
    }
]
```

Request:

```text
GET http://localhost:5000/users
```

Flow:

```text
Browser
   ↓
GET /users
   ↓
Node.js HTTP Server
   ↓
Filesystem
   ↓
users.json
   ↓
JSON Response
   ↓
Browser
```

This demonstrates how Node.js can act as a backend without Express.

Express is then commonly added to simplify routing, middleware, request parsing, and API development.

# Node.js and the Browser

Node.js and browser JavaScript share the JavaScript language, but they provide different APIs.

| Browser        | Node.js               |
| -------------- | --------------------- |
| DOM            | Filesystem            |
| `window`       | `process`             |
| `document`     | `fs`                  |
| `localStorage` | `process.env`         |
| Browser events | Server/network events |
| Web APIs       | Node.js APIs          |
| `fetch()`      | HTTP/network APIs     |

For example, this works in a browser:

```javascript
document.querySelector("#username");
```

But this does not work directly in Node.js:

```javascript
document.querySelector("#username");
```

Node.js does not have a browser DOM.

Node.js instead provides server-side capabilities such as:

```javascript
import fs from "node:fs";
```

# Node.js Application Flow

A typical backend application can follow this structure:

```text
Client
  ↓
HTTP Request
  ↓
Node.js
  ↓
Router
  ↓
Controller
  ↓
Service
  ↓
Database / Filesystem
  ↓
Service
  ↓
Controller
  ↓
HTTP Response
  ↓
Client
```

Node.js provides the runtime, while frameworks such as Express, Fastify, or NestJS can provide additional backend application structure.

# WebSockets

## Introduction

WebSockets are a communication technology that allows a client and a server to exchange data in real time over a persistent connection.

In a traditional HTTP application, the client sends a request and the server returns a response. If the client wants new information later, it usually needs to send another request or use a technique such as polling.

With WebSockets, the client and server can send messages to each other through the same connection without starting a new HTTP request for every message.

WebSockets are useful for:

* Real-time chat applications
* Live notifications
* Multiplayer games
* Live dashboards
* Collaborative document editing
* Real-time tracking
* Live support systems
* Online presence indicators

## HTTP vs WebSockets

<box gap={3}>
  <box border radius="lg" padding={3} gap={2}>
    <title size="md">HTTP communication</title>
    <box background="surface-secondary" radius="md" padding={3} align="center">
      **Client**
    </box>
    <box align="center" gap={1}>
      <icon name="arrow-down" size="xl" />
      <text color="secondary" size="sm">Request</text>
    </box>
    <box background="surface" border radius="md" padding={3} align="center">
      **Server**
    </box>
    <box align="center" gap={1}>
      <icon name="arrow-up" size="xl" />
      <text color="secondary" size="sm">Response</text>
    </box>
    <box background="surface-secondary" radius="md" padding={3} align="center">
      **Client**
    </box>
    <text color="secondary" size="sm">The client generally initiates each exchange. A new request is needed to ask for later updates.</text>
  </box>
  <box border radius="lg" padding={3} gap={2}>
    <title size="md">WebSocket communication</title>
    <grid columns={2} gap={2}>
      <grid-item>
        <box background="surface-secondary" radius="md" padding={3} align="center">
          **Client**
        </box>
      </grid-item>
      <grid-item>
        <box background="surface-secondary" radius="md" padding={3} align="center">
          **Server**
        </box>
      </grid-item>
    </grid>
    <box align="center" gap={1}>
      <icon name="arrow-left-right" size="2xl" />
      <text weight="medium">Persistent, two-way connection</text>
      <text color="secondary" size="sm">Either side can send data when needed.</text>
    </box>
  </box>
</box>

| Feature                     | HTTP                                                  | WebSockets                            |
| --------------------------- | ----------------------------------------------------- | ------------------------------------- |
| Communication               | Request and response                                  | Two-way communication                 |
| Connection                  | Requests are handled through HTTP connections         | A persistent connection is maintained |
| Server can initiate updates | Not directly in an ordinary request-response exchange | Yes                                   |
| Real-time updates           | Often uses polling or another mechanism               | Supported directly                    |
| Common uses                 | CRUD APIs, page data, login                           | Chat, live updates, presence          |

HTTP is still useful for ordinary API operations. WebSockets complement HTTP rather than replace it.

## How WebSockets Work

A WebSocket connection usually begins with an HTTP handshake.

<box border radius="lg" padding={3} gap={2}>
  <box background="surface-secondary" radius="md" padding={3} align="center">
    **Browser or frontend**
    <text color="secondary" size="sm">Creates a WebSocket connection</text>
  </box>
  <box align="center" gap={1}>
    <icon name="arrow-down-up" size="xl" />
    <text color="secondary" size="sm">HTTP upgrade handshake</text>
  </box>
  <box background="surface" border radius="md" padding={3} align="center">
    **WebSocket server**
    <text color="secondary" size="sm">Accepts the connection</text>
  </box>
  <divider color="subtle" />
  <box background="rgba(22,163,74,0.10)" radius="md" padding={3} align="center">
    <icon name="check-circle" color="success" size="lg" />
    **Connection established**
    <text color="secondary" size="sm">Messages can travel in both directions.</text>
  </box>
</box>

The main stages are:

1. The client requests a WebSocket connection.
2. The server accepts the upgrade request.
3. The connection remains open.
4. The client and server exchange messages.
5. Either side can close the connection.

For a secure connection, the protocol is `wss://`. An unencrypted WebSocket connection uses `ws://`.

## Native WebSocket API

Browsers provide a built-in `WebSocket` API. A separate package is not required for the browser client.

### Creating a WebSocket connection

```javascript
const socket = new WebSocket("ws://localhost:5000");
```

This attempts to connect to a WebSocket server running on port `5000`.

Creating a browser WebSocket client does not automatically create a server. You need a compatible WebSocket server running at that address.

### Connection events

```javascript
const socket = new WebSocket("ws://localhost:5000");

socket.addEventListener("open", () => {
    console.log("Connected to server");
});

socket.addEventListener("message", (event) => {
    console.log("Message received:", event.data);
});

socket.addEventListener("error", (event) => {
    console.log("WebSocket error:", event);
});

socket.addEventListener("close", () => {
    console.log("Connection closed");
});
```

| Event     | Purpose                     |
| --------- | --------------------------- |
| `open`    | Connection established      |
| `message` | A message received          |
| `error`   | A connection error occurred |
| `close`   | Connection closed           |

### Sending a message

```javascript
const socket = new WebSocket("ws://localhost:5000");

socket.addEventListener("open", () => {
    socket.send("Hello server");
});
```

Only send after the connection is open.

### Receiving a message

```javascript
socket.addEventListener("message", (event) => {
    console.log(event.data);
});
```

The `event.data` property contains the received message. Depending on the message type, it can be a string, a `Blob`, or another supported data representation.

### Checking connection state

```javascript
console.log(socket.readyState);
```

Common values:

| Constant               | Value | Meaning         |
| ---------------------- | ----: | --------------- |
| `WebSocket.CONNECTING` |   `0` | Connecting      |
| `WebSocket.OPEN`       |   `1` | Connection open |
| `WebSocket.CLOSING`    |   `2` | Closing         |
| `WebSocket.CLOSED`     |   `3` | Closed          |

Check before sending:

```javascript
if (socket.readyState === WebSocket.OPEN) {
    socket.send("New message");
}
```

## What Is Real-Time Communication?

Real-time communication means delivering information with minimal delay after an event occurs.

For example, consider a chat application.

1. Dinesh sends a message to Gowtham.
2. The server receives the message.
3. The server delivers it to Gowtham's connected client.
4. Gowtham sees the message without manually refreshing the page.

Real-time does not mean zero latency. Network conditions, server load, and client processing can still introduce delays.

### Polling

Polling is a technique in which a client repeatedly requests updates.

```javascript
setInterval(async () => {
    const response = await fetch("/api/notifications");
    const notifications = await response.json();

    console.log(notifications);
}, 3000);
```

This example requests updates every three seconds.

Polling is simple, but it can create unnecessary requests and may delay the discovery of new data until the next poll.

### WebSockets

With WebSockets, the server can push a notification through an already established connection as soon as the notification is available.

This is often more suitable for frequent two-way communication.

## What Is Socket.IO?

<Entity value="Socket.IO" category="software" disambig="JavaScript real-time bidirectional communication library" /> is a JavaScript library for real-time, event-based communication between clients and servers.

It commonly uses WebSockets when available and can fall back to HTTP long-polling when necessary.

Socket.IO provides features such as:

* Event-based messaging
* Automatic reconnection attempts
* Broadcasting messages
* Rooms and namespaces
* Acknowledgements
* Transport fallback
* Connection lifecycle events

**Important:** Socket.IO is not the same protocol as native WebSockets. A native WebSocket client cannot directly communicate with a Socket.IO server, or vice versa, unless an appropriate compatible layer is used.

## Installing Socket.IO

For a Node.js backend, install Socket.IO in the backend project directory.

```powershell
npm install socket.io
```

For a browser frontend, you can use the Socket.IO client library. If your frontend is served separately, install it in that frontend's project if it uses a bundler:

```powershell
npm install socket.io-client
```

For a simple HTML page without a bundler, the client library can also be loaded from the Socket.IO server's client script endpoint.

## Creating a Socket.IO Server

Create `server.js`:

```javascript
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();

const http_server = createServer(app);

const io = new Server(http_server, {
    cors: {
        origin: "http://127.0.0.1:5500"
    }
});

app.get("/", (request, response) => {
    response.send("Socket.IO server is running");
});

io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

const port = 5000;

http_server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
```

This server combines Express HTTP routes with Socket.IO communication.

### Understanding the code

**`createServer(app)`**

Creates a Node.js HTTP server using the Express application.

**`new Server(http_server)`**

Attaches Socket.IO to the HTTP server.

**`io.on("connection", callback)`**

Runs when a client establishes a Socket.IO connection.

**`socket.id`**

Identifies a particular socket connection. It is not a permanent user ID; a user's socket ID can change after reconnecting.

**`socket.on("disconnect", callback)`**

Runs when that socket disconnects.

Start the server with:

```powershell
node server.js
```

If your project uses a development script, you can use that instead.

## Creating a Socket.IO Client

For an HTML page served by Live Server, create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Socket.IO Demo</title>
</head>
<body>
    <h1>Real-Time Communication</h1>

    <p id="connection_status">Connecting...</p>

    <script src="http://localhost:5000/socket.io/socket.io.js"></script>
    <script src="./client.js"></script>
</body>
</html>
```

Create `client.js`:

```javascript
const socket = io("http://localhost:5000");

const connection_status = document.querySelector("#connection_status");

socket.on("connect", () => {
    connection_status.textContent = "Connected to server";
    console.log("Socket ID:", socket.id);
});

socket.on("disconnect", () => {
    connection_status.textContent = "Disconnected from server";
});
```

Open the page through Live Server. When the connection succeeds, the status changes to `Connected to server`.

The frontend origin must match the server's allowed CORS origin. If you use a different port or hostname, adjust the configuration.

## Sending and Receiving Events

Socket.IO uses named events to exchange data.

The sender emits an event, and the receiver listens for that event.

### Server

```javascript
io.on("connection", (socket) => {
    socket.on("send_message", (message_data) => {
        console.log(message_data);

        socket.emit("message_received", {
            success: true,
            message: "Message received by server"
        });
    });
});
```

### Client

```javascript
socket.emit("send_message", {
    message: "Hello server",
    sender_name: "Dinesh"
});

socket.on("message_received", (response) => {
    console.log(response);
});
```

The event name must match on both sides.

Here:

* `send_message` is sent by the client and handled by the server.
* `message_received` is sent by the server and handled by the client.

The data object is passed as the event payload.

## `emit()` vs `on()`

| Method                    | Purpose                                                    |
| ------------------------- | ---------------------------------------------------------- |
| `socket.emit()`           | Sends an event                                             |
| `socket.on()`             | Listens for an event                                       |
| `io.emit()`               | Sends an event to all connected sockets                    |
| `socket.broadcast.emit()` | Sends to all other connected sockets, excluding the sender |
| `socket.join()`           | Adds a socket to a room                                    |
| `io.to(room).emit()`      | Sends an event to sockets in a room                        |

These methods let you decide which clients should receive a message.

## Broadcasting Messages

Suppose multiple users are connected to a chat application.

The server can broadcast a message to all connected clients:

```javascript
io.on("connection", (socket) => {
    socket.on("send_message", (message_data) => {
        io.emit("new_message", message_data);
    });
});
```

Client:

```javascript
socket.on("new_message", (message_data) => {
    console.log("New message:", message_data);
});
```

Every connected client receives the event, including the sender.

If the sender should not receive the broadcast, use:

```javascript
socket.broadcast.emit("new_message", message_data);
```

Broadcasting to everyone is not appropriate for every chat system. Private conversations should target the intended recipient or a conversation room.

## Socket.IO Rooms

A room is a group of socket connections that can receive the same events.

Rooms are useful for:

* Private conversations
* Group chats
* Multiplayer game sessions
* Team notifications
* Project collaboration

Example server code:

```javascript
io.on("connection", (socket) => {
    socket.on("join_room", (room_id) => {
        socket.join(room_id);
    });

    socket.on("send_room_message", (message_data) => {
        io.to(message_data.room_id).emit(
            "new_room_message",
            message_data
        );
    });
});
```

Client:

```javascript
socket.emit("join_room", "conversation_101");

socket.emit("send_room_message", {
    room_id: "conversation_101",
    message: "Hello everyone"
});

socket.on("new_room_message", (message_data) => {
    console.log(message_data.message);
});
```

For a real application, the server must verify that the user is authorized to join the room and send messages there. Do not trust a client-provided room ID by itself.

## Sending a Message to a Specific User

For private messaging, the server needs a way to associate authenticated users with their active socket connections.

A simplified illustration:

```javascript
const user_sockets = new Map();

io.on("connection", (socket) => {
    socket.on("register_user", (user_id) => {
        user_sockets.set(user_id, socket.id);
    });

    socket.on("private_message", (message_data) => {
        const receiver_socket_id = user_sockets.get(
            message_data.receiver_id
        );

        if (receiver_socket_id) {
            io.to(receiver_socket_id).emit(
                "new_private_message",
                message_data
            );
        }
    });

    socket.on("disconnect", () => {
        for (const [user_id, socket_id] of user_sockets) {
            if (socket_id === socket.id) {
                user_sockets.delete(user_id);
            }
        }
    });
});
```

This demonstrates the basic idea, but it is not production-ready authentication or presence management.

In a real application:

* Derive the user's identity from a verified login session or token.
* Never let a client claim another user's identity without verification.
* Handle users with multiple devices or connections.
* Remove stale connections and support reconnecting.
* Persist messages in a database.
* Check authorization before delivering private messages.

A room named for an authenticated user's ID is often useful when that user has multiple active connections.

## Acknowledgements

Socket.IO acknowledgements allow the receiver to respond to a particular event.

Client:

```javascript
socket.emit("save_message", {
    message: "Hello"
}, (response) => {
    console.log(response);
});
```

Server:

```javascript
io.on("connection", (socket) => {
    socket.on("save_message", (message_data, callback) => {
        callback({
            success: true,
            message: "Message processed"
        });
    });
});
```

An acknowledgement is useful when the sender needs to know whether the server processed an operation.

For durable messaging, acknowledge success only after the required validation and persistence have completed. Acknowledgements do not automatically guarantee that data has been stored permanently.

## Automatic Reconnection

Socket.IO can attempt to reconnect when a connection is lost.

```javascript
socket.on("connect", () => {
    console.log("Connected:", socket.id);
});

socket.on("disconnect", (reason) => {
    console.log("Disconnected:", reason);
});

socket.on("connect_error", (error) => {
    console.log("Connection error:", error.message);
});
```

The client can retry after temporary network failures, depending on its reconnection configuration.

Reconnection does not automatically replay every missed application message. Applications should reload missed messages from a persistent store or use an appropriate recovery strategy.

## Socket.IO vs Native WebSockets

| Feature                    | Native WebSocket                                 | Socket.IO                          |
| -------------------------- | ------------------------------------------------ | ---------------------------------- |
| Browser API built in       | Yes                                              | No; client library needed          |
| Named events               | You implement event handling or a message format | Built-in event API                 |
| Automatic reconnection     | Must be implemented by the application           | Supported by the client            |
| Rooms                      | Must be implemented by the application           | Built-in support                   |
| HTTP long-polling fallback | No automatic fallback in the native API          | Supported                          |
| Protocol compatibility     | Standard WebSocket protocol                      | Socket.IO protocol                 |
| Best fit                   | Direct WebSocket communication                   | Event-based real-time applications |

Socket.IO is convenient for many application-level real-time features. Native WebSockets can be a good choice when you want to work directly with the WebSocket protocol and manage reconnection and messaging behavior yourself.

## Security Considerations

Real-time connections need the same care as HTTP APIs.

* Use HTTPS and `wss://` in production.
* Validate the origin where appropriate.
* Authenticate clients.
* Authorize every private message and room operation.
* Validate incoming payloads.
* Apply rate limits to prevent message abuse.
* Avoid logging passwords, access tokens, or other secrets.
* Handle disconnects and stale connections.
* Store important messages in a database rather than relying only on socket delivery.

CORS settings alone do not authenticate users or authorize access to private data.

## Practical Application Flow — Chat System

A real-time chat application commonly combines HTTP APIs and Socket.IO.

<box border radius="lg" padding={3} gap={2}>
  <box background="surface-secondary" radius="md" padding={3} align="center">
    **User logs in**
    <text color="secondary" size="sm">HTTP API validates credentials</text>
  </box>
  <box align="center">
    <icon name="arrow-down" size="lg" />
  </box>
  <box background="surface" border radius="md" padding={3} align="center">
    **Socket.IO connects**
    <text color="secondary" size="sm">Server authenticates the socket</text>
  </box>
  <box align="center">
    <icon name="arrow-down" size="lg" />
  </box>
  <box background="surface" border radius="md" padding={3} align="center">
    **User sends a message**
    <text color="secondary" size="sm">Server validates recipient and content</text>
  </box>
  <box align="center">
    <icon name="arrow-down" size="lg" />
  </box>
  <box background="surface" border radius="md" padding={3} align="center">
    **Message is saved**
    <text color="secondary" size="sm">Database confirms persistence</text>
  </box>
  <box align="center">
    <icon name="arrow-down" size="lg" />
  </box>
  <box background="rgba(22,163,74,0.10)" radius="md" padding={3} align="center">
    **Recipient receives the message**
    <text color="secondary" size="sm">Socket.IO sends a real-time event</text>
  </box>
</box>

The frontend can use HTTP to load conversation history and Socket.IO to receive new messages in real time. This avoids treating the live connection as the only source of stored message history.


# Service Workers & PWA

## Introduction

A **Service Worker** is a JavaScript file that runs separately from the webpage and can intercept network requests, cache resources, handle notifications, and perform certain background tasks.

A **Progressive Web App (PWA)** is a web application that uses modern browser capabilities to provide an app-like experience.

A PWA can provide:

* Offline access
* Cached resources
* Installability
* Background synchronization
* Push notifications
* Fast loading
* App-like behavior

A typical architecture looks like:

```text
Browser
   ↓
Web Page
   ↓
Service Worker
   ↓
Cache / Network
   ↓
Server
```

The service worker sits between the web application and the network for requests that fall within its scope.

---

# Service Worker

A service worker is a special JavaScript file registered by a web page.

Example:

```javascript
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}
```

The browser downloads the service worker and manages its lifecycle.

Unlike normal JavaScript:

```javascript
console.log("Hello");
```

a service worker does not directly manipulate the page DOM.

It operates independently from the page.

---

# Service Worker Lifecycle

A service worker has an important lifecycle:

```text
Register
   ↓
Install
   ↓
Activate
   ↓
Fetch / Other Events
```

The main lifecycle events are:

```javascript
install
activate
fetch
```

There can also be other events, such as push and notification-related events.

---

# Registering a Service Worker

Create:

```text
index.html
service-worker.js
app.js
```

In `app.js`:

```javascript
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
        .then((registration) => {
            console.log("Service worker registered");
            console.log(registration);
        })
        .catch((error) => {
            console.log("Service worker registration failed");
            console.log(error);
        });
}
```

The browser will register:

```text
/service-worker.js
```

The service worker's scope depends on where the worker file is located and the registration options.

---

# Secure Context Requirement

Service workers require a **secure context**.

They normally work on:

```text
https://example.com
```

For local development, browsers generally allow service workers on:

```text
http://localhost
```

and related loopback development addresses.

This means you can develop a PWA locally without having HTTPS configured for your local machine.

---

# Service Worker Install Event

The `install` event occurs when the browser installs the service worker.

```javascript
self.addEventListener("install", (event) => {
    console.log("Service worker installed");
});
```

The `self` object represents the service worker's global context.

---

# Caching During Installation

A common use of the `install` event is caching application resources.

```javascript
const cache_name = "app-cache-v1";

const files_to_cache = [
    "/",
    "/index.html",
    "/app.js",
    "/style.css"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cache_name)
            .then((cache) => {
                return cache.addAll(files_to_cache);
            })
    );
});
```

The browser stores these resources in the Cache Storage API.

The resources can potentially be used when the network is unavailable.

---

# Cache Storage API

Service workers commonly use the Cache Storage API.

Open a cache:

```javascript
const cache = await caches.open("app-cache-v1");
```

Add a resource:

```javascript
await cache.add("/index.html");
```

Add multiple resources:

```javascript
await cache.addAll([
    "/index.html",
    "/app.js",
    "/style.css"
]);
```

Retrieve a cached resource:

```javascript
const response = await cache.match("/index.html");
```

Delete a cache:

```javascript
await caches.delete("old-cache");
```

---

# Activate Event

The `activate` event occurs after installation when the service worker becomes active.

```javascript
self.addEventListener("activate", (event) => {
    console.log("Service worker activated");
});
```

The activation phase is commonly used to remove outdated caches.

For example:

```javascript
const current_cache = "app-cache-v2";

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((cache_names) => {
                return Promise.all(
                    cache_names
                        .filter((cache_name) => {
                            return cache_name !== current_cache;
                        })
                        .map((cache_name) => {
                            return caches.delete(cache_name);
                        })
                );
            })
    );
});
```

This prevents an old cache from remaining indefinitely.

---

# Fetch Event

The `fetch` event allows a service worker to observe requests made within its scope.

```javascript
self.addEventListener("fetch", (event) => {
    console.log("Request:", event.request.url);
});
```

The service worker can decide whether to:

```text
Use the network
Use the cache
Use the network and update the cache
Return a fallback response
```

This is the foundation of offline functionality.

---

# Cache First Strategy

A **cache-first** strategy checks the cache before accessing the network.

```javascript
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cached_response) => {
                if (cached_response) {
                    return cached_response;
                }

                return fetch(event.request);
            })
    );
});
```

Flow:

```text
Request
   ↓
Cache?
 ┌─┴─┐
Yes  No
 ↓    ↓
Cache Network
response
```

This can provide very fast responses for resources that are already cached.

---

# Network First Strategy

A **network-first** strategy tries the network first.

```javascript
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.match(event.request);
            })
    );
});
```

Flow:

```text
Request
   ↓
Network
 ┌─┴─┐
Yes  No
 ↓    ↓
Data  Cache
```

This is useful when fresh server data is more important than immediate cached data.

---

# Network First with Cache Update

A more complete approach can update the cache when the network succeeds.

```javascript
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request)
            .then((network_response) => {

                const response_clone =
                    network_response.clone();

                caches.open("app-cache-v1")
                    .then((cache) => {
                        cache.put(
                            event.request,
                            response_clone
                        );
                    });

                return network_response;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});
```

The response is cloned because a response body generally cannot be consumed twice in the same way.

One copy is returned to the browser and the other is stored in the cache.

---

# Offline Fallback

A service worker can return a fallback page when the requested resource is unavailable.

```javascript
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.match("/offline.html");
            })
    );
});
```

Create:

```text
offline.html
```

and cache it during installation.

```javascript
const files_to_cache = [
    "/",
    "/index.html",
    "/offline.html",
    "/app.js",
    "/style.css"
];
```

When the user loses network connectivity:

```text
Browser
   ↓
Request
   ↓
Service Worker
   ↓
Network fails
   ↓
offline.html
   ↓
Browser
```

---

# Offline Web Application

Suppose an education application contains:

```text
courses.html
course.js
style.css
offline.html
```

The service worker can cache the application shell.

```javascript
const cache_name = "education-app-v1";

const app_files = [
    "/",
    "/courses.html",
    "/course.js",
    "/style.css",
    "/offline.html"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cache_name)
            .then((cache) => {
                return cache.addAll(app_files);
            })
    );
});
```

The user can then reopen the application even when the network is unavailable, provided the required resources have already been cached.

Offline availability depends on what your application has cached and whether its data is available locally.

---

# Cache Storage vs localStorage

These are different browser storage technologies.

| Cache Storage                         | localStorage                       |
| ------------------------------------- | ---------------------------------- |
| Designed for request/response caching | Designed for key-value data        |
| Commonly used by service workers      | Commonly used by page JavaScript   |
| Stores `Request`/`Response` objects   | Stores strings                     |
| Useful for offline web resources      | Useful for small application state |
| Asynchronous API                      | Synchronous API                    |

For example:

```javascript
localStorage.setItem(
    "user_name",
    "Dinesh"
);
```

Cache Storage works more like:

```javascript
const cache = await caches.open("app-cache");

await cache.put(
    "/index.html",
    response
);
```

---

# Service Worker Cannot Directly Access the DOM

A service worker cannot do:

```javascript
document.querySelector("#message");
```

because it does not run inside the webpage.

Instead, the page and service worker can communicate using messaging APIs.

Page:

```javascript
navigator.serviceWorker.controller?.postMessage({
    type: "SYNC_DATA"
});
```

Service worker:

```javascript
self.addEventListener("message", (event) => {
    console.log(event.data);
});
```

This allows the page and service worker to exchange information.

---

# Background Sync

Background Sync allows a web application to defer certain work until network connectivity is available.

For example:

```text
User creates an assignment submission
        ↓
Network unavailable
        ↓
Store submission locally
        ↓
Wait for network
        ↓
Synchronize with server
```

The concept is useful for applications where users may temporarily lose connectivity.

A service worker can register a sync event in browsers that support the Background Sync API.

Example:

```javascript
self.addEventListener("sync", (event) => {
    if (event.tag === "send_submission") {
        event.waitUntil(
            send_pending_submissions()
        );
    }
});
```

A page can request synchronization:

```javascript
const registration =
    await navigator.serviceWorker.ready;

await registration.sync.register(
    "send_submission"
);
```

The actual availability of Background Sync varies by browser, so production applications should provide a fallback strategy.

---

# Storing Pending Data

Background Sync generally needs persistent storage for work that has not yet reached the server.

For example:

```text
IndexedDB
    ↓
Pending submissions
    ↓
Service Worker
    ↓
Network becomes available
    ↓
Server
```

IndexedDB is generally more appropriate than `localStorage` for structured offline application data.

---

# Push Notifications

Service workers can also participate in web push notifications.

The general flow is:

```text
User grants notification permission
        ↓
Browser creates push subscription
        ↓
Application sends subscription to server
        ↓
Server sends push message
        ↓
Browser receives push event
        ↓
Service Worker
        ↓
Notification displayed
```

A service worker can listen for a push event:

```javascript
self.addEventListener("push", (event) => {
    const data = event.data?.json();

    event.waitUntil(
        self.registration.showNotification(
            data.title,
            {
                body: data.message
            }
        )
    );
});
```

Push notifications require additional browser permission and a push service/server setup.

---

# Progressive Web App

A **Progressive Web App** is a web application designed to provide enhanced capabilities such as:

* Installability
* Offline behavior
* Responsive design
* Secure delivery
* App-like user experience
* Optional push notifications
* Background capabilities where supported

A service worker is important for many PWA features, but a service worker alone does not automatically make an application a complete PWA.

---

# Web App Manifest

A PWA commonly uses a **web app manifest**.

Create:

```text
manifest.json
```

Example:

```json
{
    "name": "Education Portal",
    "short_name": "Education",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#ffffff",
    "icons": [
        {
            "src": "/icons/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

Connect it to HTML:

```html
<link rel="manifest" href="/manifest.json">
```

The manifest describes how the web application should behave when installed.

---

# Important Manifest Properties

### `name`

Full application name.

```json
{
    "name": "Education Portal"
}
```

### `short_name`

Short name used where space is limited.

```json
{
    "short_name": "Education"
}
```

### `start_url`

The page opened when the installed application starts.

```json
{
    "start_url": "/"
}
```

### `display`

Controls the preferred display mode.

```json
{
    "display": "standalone"
}
```

Common values include:

```text
browser
standalone
minimal-ui
fullscreen
```

### `icons`

Defines application icons.

```json
{
    "icons": [
        {
            "src": "/icons/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        }
    ]
}
```

---

# Installable Web App

When a browser determines that a web application meets its current installability requirements, the user may be offered an installation option.

The installed application can appear similarly to an application on the user's device.

For example:

```text
Browser
   ↓
Install Web App
   ↓
Application icon
   ↓
Standalone application window
```

Installation behavior and requirements vary by browser and platform.

---

# `beforeinstallprompt`

Some Chromium-based browsers expose the `beforeinstallprompt` event, allowing an application to provide a custom install experience.

Example:

```javascript
let deferred_install_prompt;

window.addEventListener(
    "beforeinstallprompt",
    (event) => {
        event.preventDefault();

        deferred_install_prompt = event;

        console.log("Application can be installed");
    }
);
```

Later, after a user action:

```javascript
async function install_application() {
    if (!deferred_install_prompt) {
        return;
    }

    deferred_install_prompt.prompt();

    const result =
        await deferred_install_prompt.userChoice;

    console.log(result.outcome);

    deferred_install_prompt = null;
}
```

This API is not universally available, so applications should not depend on it as the only installation mechanism.

---

# Service Worker Update Process

Suppose the first version uses:

```javascript
const cache_name = "app-cache-v1";
```

Later, you release a new version:

```javascript
const cache_name = "app-cache-v2";
```

During activation, remove the old cache:

```javascript
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((cache_names) => {
                return Promise.all(
                    cache_names
                        .filter((cache_name_item) => {
                            return cache_name_item !== cache_name;
                        })
                        .map((cache_name_item) => {
                            return caches.delete(
                                cache_name_item
                            );
                        })
                );
            })
    );
});
```

This is a common cache-versioning technique.

---

# Complete Service Worker Example

`service-worker.js`:

```javascript
const cache_name = "education-app-v1";

const files_to_cache = [
    "/",
    "/index.html",
    "/app.js",
    "/style.css",
    "/offline.html"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cache_name)
            .then((cache) => {
                return cache.addAll(files_to_cache);
            })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((cache_names) => {
                return Promise.all(
                    cache_names
                        .filter((name) => {
                            return name !== cache_name;
                        })
                        .map((name) => {
                            return caches.delete(name);
                        })
                );
            })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request)
            .then((network_response) => {

                const response_clone =
                    network_response.clone();

                caches.open(cache_name)
                    .then((cache) => {
                        cache.put(
                            event.request,
                            response_clone
                        );
                    });

                return network_response;
            })
            .catch(() => {
                return caches.match(event.request)
                    .then((cached_response) => {
                        return cached_response ||
                            caches.match("/offline.html");
                    });
            })
    );
});
```

Register it from the page:

```javascript
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(
        "/service-worker.js"
    );
}
```

The resulting flow is:

```text
                Web Application
                      │
                      ↓
              Service Worker
                 ↙        ↘
              Cache      Network
                │           │
                ↓           ↓
             Cached      Server
             Response    Response
```

When the network is unavailable:

```text
Browser
   ↓
Service Worker
   ↓
Network fails
   ↓
Cache
   ↓
Cached resource / offline page
```

# PWA Application Structure

A simple PWA can look like:

```text
education-pwa/
│
├── index.html
├── app.js
├── style.css
├── service-worker.js
├── manifest.json
├── offline.html
│
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

The major responsibilities are:

```text
index.html
    ↓
Application UI

app.js
    ↓
Application logic

service-worker.js
    ↓
Caching + background capabilities

manifest.json
    ↓
Installation + application metadata

offline.html
    ↓
Offline fallback
```

# PWA Data Flow

An application that supports offline work might use:

```text
                    Web Application
                           │
             ┌─────────────┴─────────────┐
             ↓                           ↓
       Service Worker                IndexedDB
             │                           │
       Cache Storage              Offline application data
             │                           │
             └─────────────┬─────────────┘
                           ↓
                       Network
                           ↓
                         Server
```

For example, an education application could allow a user to:

```text
Open course
    ↓
Course files cached
    ↓
Network disconnected
    ↓
User continues reading
    ↓
User completes an activity
    ↓
Activity stored locally
    ↓
Network returns
    ↓
Data synchronized with server
```

This is one of the important patterns behind offline-capable web applications.


# TypeScript Basics

## Introduction

TypeScript is a programming language built on top of JavaScript.

It adds a **static type system** to JavaScript.

JavaScript:

```javascript
let user_name = "Dinesh";

user_name = 25;
```

JavaScript allows this because variables are dynamically typed.

TypeScript can detect the problem:

```typescript
let user_name: string = "Dinesh";

user_name = 25;
```

The TypeScript compiler reports an error because `user_name` was declared as a string.

TypeScript code is normally compiled into JavaScript before it runs in the browser or Node.js.

```text
TypeScript
    ↓
TypeScript Compiler
    ↓
JavaScript
    ↓
Browser / Node.js
```

---

# Why TypeScript Is Used

TypeScript helps developers catch many errors before the application runs.

For example:

```javascript
function calculate_total(price, quantity) {
    return price * quantity;
}

calculate_total("500", "2");
```

JavaScript may allow this and produce an unexpected result.

TypeScript lets you define the expected types:

```typescript
function calculate_total(
    price: number,
    quantity: number
): number {
    return price * quantity;
}
```

Now:

```typescript
calculate_total("500", "2");
```

produces a type error during development.

TypeScript is especially useful in:

* Large JavaScript applications
* Backend applications
* Frontend frameworks
* Team projects
* APIs
* Complex data models
* Libraries and SDKs

---

# Installing TypeScript

TypeScript can be installed globally:

```powershell
npm install -g typescript
```

Check the version:

```powershell
tsc --version
```

You can also install it as a project development dependency:

```powershell
npm install --save-dev typescript
```

For most projects, keeping TypeScript in the project dependencies is preferable because the project controls the compiler version.

---

# TypeScript File

JavaScript files normally use:

```text
.js
```

TypeScript files use:

```text
.ts
```

Example:

```text
app.ts
```

A simple TypeScript program:

```typescript
const user_name: string = "Dinesh";

console.log(user_name);
```

Compile it:

```powershell
tsc app.ts
```

TypeScript produces:

```text
app.js
```

The JavaScript file can then run in Node.js or the browser.

---

# Basic Types

TypeScript provides several commonly used types.

```typescript
let user_name: string = "Dinesh";

let user_age: number = 22;

let is_logged_in: boolean = true;

let user_id: bigint = 100n;
```

Common types include:

```text
string
number
boolean
bigint
symbol
object
null
undefined
unknown
any
never
void
```

---

# String

```typescript
let user_name: string = "Dinesh";
```

Only string values should be assigned:

```typescript
user_name = "Gowtham";
```

This is invalid:

```typescript
user_name = 100;
```

---

# Number

JavaScript has one main numeric type, `number`.

```typescript
let product_price: number = 1500;

let quantity: number = 3;

let total_price: number = product_price * quantity;
```

Both integers and floating-point values use `number`.

```typescript
let count: number = 10;

let rating: number = 4.5;
```

---

# Boolean

```typescript
let is_active: boolean = true;

let is_verified: boolean = false;
```

A boolean can contain only:

```text
true
false
```

---

# Arrays

You can define an array using:

```typescript
let user_names: string[] = [
    "Dinesh",
    "Gowtham",
    "Arul"
];
```

Another syntax is:

```typescript
let user_names: Array<string> = [
    "Dinesh",
    "Gowtham",
    "Arul"
];
```

Both represent an array of strings.

For numbers:

```typescript
let scores: number[] = [
    85,
    90,
    76
];
```

This is invalid:

```typescript
scores.push("90");
```

because the array expects numbers.

---

# Objects

You can define the expected structure of an object.

```typescript
let user: {
    user_id: number;
    user_name: string;
    email: string;
} = {
    user_id: 1,
    user_name: "Dinesh",
    email: "dinesh@example.com"
};
```

The object must follow the declared structure.

---

# Optional Properties

A property can be optional using `?`.

```typescript
let user: {
    user_id: number;
    user_name: string;
    phone?: string;
} = {
    user_id: 1,
    user_name: "Dinesh"
};
```

`phone` is allowed to be missing.

It can also be present:

```typescript
let user: {
    user_id: number;
    user_name: string;
    phone?: string;
} = {
    user_id: 1,
    user_name: "Dinesh",
    phone: "9876543210"
};
```

---

# Function Types

TypeScript allows you to specify parameter types and return types.

```typescript
function calculate_total(
    price: number,
    quantity: number
): number {
    return price * quantity;
}
```

The parameters are:

```text
price → number
quantity → number
```

The return value is:

```text
number
```

Calling:

```typescript
const total_price = calculate_total(500, 3);
```

is valid.

Calling:

```typescript
calculate_total("500", 3);
```

produces a type error.

---

# Void

A function that does not return a value can use `void`.

```typescript
function print_message(message: string): void {
    console.log(message);
}
```

The function performs an operation but does not return a value.

---

# Type Inference

TypeScript does not always require you to explicitly write the type.

For example:

```typescript
let user_name = "Dinesh";
```

TypeScript infers:

```text
user_name → string
```

Similarly:

```typescript
let user_age = 22;
```

TypeScript infers:

```text
user_age → number
```

This is called **type inference**.

You can therefore write:

```typescript
const product_price = 1500;
```

instead of:

```typescript
const product_price: number = 1500;
```

when the type is obvious.

---

# Inference from Function Return Values

TypeScript can also infer function return types.

```typescript
function calculate_total(
    price: number,
    quantity: number
) {
    return price * quantity;
}
```

TypeScript understands that the function returns a `number`.

You can explicitly write it:

```typescript
function calculate_total(
    price: number,
    quantity: number
): number {
    return price * quantity;
}
```

Both are valid.

Explicit return types can make larger codebases easier to understand and can catch unintended changes.

---

# Union Types

A variable can allow more than one type using `|`.

```typescript
let user_id: number | string;
```

Now both are valid:

```typescript
user_id = 1001;

user_id = "USR1001";
```

But this is invalid:

```typescript
user_id = true;
```

Union types are useful when an API can return different valid representations.

---

# Literal Types

You can restrict a value to specific strings.

```typescript
let order_status:
    "pending" |
    "confirmed" |
    "cancelled";
```

Valid:

```typescript
order_status = "pending";

order_status = "confirmed";
```

Invalid:

```typescript
order_status = "completed";
```

This is useful for fixed application states.

---

# Type Aliases

A type alias allows you to give a name to a type definition.

```typescript
type User = {
    user_id: number;
    user_name: string;
    email: string;
};
```

Now:

```typescript
const user: User = {
    user_id: 1,
    user_name: "Dinesh",
    email: "dinesh@example.com"
};
```

You can reuse the type:

```typescript
const admin: User = {
    user_id: 2,
    user_name: "Gowtham",
    email: "gowtham@example.com"
};
```

This avoids repeatedly writing the same object structure.

---

# Interfaces

An interface describes the structure that an object should follow.

```typescript
interface User {
    user_id: number;
    user_name: string;
    email: string;
}
```

Use it:

```typescript
const user: User = {
    user_id: 1,
    user_name: "Dinesh",
    email: "dinesh@example.com"
};
```

Interfaces are commonly used for:

* Object structures
* API responses
* Class contracts
* Function parameters
* Application data models

---

# Interface with Optional Properties

```typescript
interface User {
    user_id: number;
    user_name: string;
    email: string;
    phone?: string;
}
```

Now:

```typescript
const user: User = {
    user_id: 1,
    user_name: "Dinesh",
    email: "dinesh@example.com"
};
```

is valid.

---

# Interface with Readonly

A property can be marked `readonly`.

```typescript
interface User {
    readonly user_id: number;
    user_name: string;
}
```

You can read it:

```typescript
console.log(user.user_id);
```

But you cannot normally assign a new value to it:

```typescript
user.user_id = 10;
```

TypeScript reports an error.

`readonly` protects the property at the type-checking level. It does not make the underlying JavaScript object deeply immutable at runtime.

---

# Extending Interfaces

An interface can extend another interface.

```typescript
interface User {
    user_id: number;
    user_name: string;
}

interface Admin extends User {
    permissions: string[];
}
```

Now `Admin` contains:

```text
user_id
user_name
permissions
```

Example:

```typescript
const admin: Admin = {
    user_id: 1,
    user_name: "Dinesh",
    permissions: [
        "read_users",
        "delete_users"
    ]
};
```

---

# Type Alias vs Interface

Both can describe object structures.

### Type alias

```typescript
type User = {
    user_id: number;
    user_name: string;
};
```

### Interface

```typescript
interface User {
    user_id: number;
    user_name: string;
}
```

Both can be useful.

Interfaces are particularly common for object-oriented contracts and extensible object structures.

Type aliases are especially flexible for unions, intersections, tuples, and other type expressions.

---

# `any`

The `any` type disables most type checking for that value.

```typescript
let user_data: any = "Dinesh";

user_data = 100;

user_data = true;
```

TypeScript allows all of these.

`any` can be useful when migrating an existing JavaScript project, but excessive use removes many of the benefits of TypeScript.

---

# `unknown`

`unknown` is safer than `any`.

```typescript
let user_data: unknown;

user_data = "Dinesh";
user_data = 100;
user_data = true;
```

Before using an `unknown` value as a specific type, you must check it.

```typescript
if (typeof user_data === "string") {
    console.log(user_data.toUpperCase());
}
```

This is particularly useful when handling data from external sources such as APIs.

---

# Type Assertions

Sometimes you know more about a value than TypeScript can determine.

You can use a type assertion.

```typescript
const user_data: unknown = "Dinesh";

const user_name = user_data as string;

console.log(user_name.toUpperCase());
```

A type assertion tells TypeScript:

> Treat this value as this type.

It does not convert the actual value.

For example:

```typescript
const value = "100" as unknown as number;
```

does not turn the string `"100"` into the number `100`.

Runtime conversion would require:

```typescript
const value = Number("100");
```

---

# Generics

Generics allow code to work with different types while preserving type information.

Without generics:

```typescript
function get_first_item(items: any[]) {
    return items[0];
}
```

The return type loses useful information.

With a generic:

```typescript
function get_first_item<T>(items: T[]): T {
    return items[0];
}
```

Now:

```typescript
const first_name = get_first_item([
    "Dinesh",
    "Gowtham",
    "Arul"
]);
```

TypeScript knows:

```text
first_name → string
```

For numbers:

```typescript
const first_score = get_first_item([
    90,
    85,
    76
]);
```

TypeScript knows:

```text
first_score → number
```

The `T` represents a type that is determined when the function is used.

---

# Generic API Response

Generics are especially useful for API response structures.

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message: string;
}
```

Define a user:

```typescript
interface User {
    user_id: number;
    user_name: string;
}
```

Then:

```typescript
const response: ApiResponse<User> = {
    success: true,
    data: {
        user_id: 1,
        user_name: "Dinesh"
    },
    message: "User fetched successfully"
};
```

For multiple users:

```typescript
const response: ApiResponse<User[]> = {
    success: true,
    data: [
        {
            user_id: 1,
            user_name: "Dinesh"
        },
        {
            user_id: 2,
            user_name: "Gowtham"
        }
    ],
    message: "Users fetched successfully"
};
```

The same `ApiResponse` type can work with many different data types.

---

# Generic Constraints

Sometimes you want a generic type to have certain properties.

```typescript
function get_user_name<T extends { user_name: string }>(
    user: T
): string {
    return user.user_name;
}
```

Any type passed to this function must contain:

```text
user_name: string
```

For example:

```typescript
const user = {
    user_id: 1,
    user_name: "Dinesh"
};

console.log(get_user_name(user));
```

---

# Generic Interfaces

Generics can also be used with interfaces.

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
```

Example:

```typescript
interface Product {
    product_id: number;
    product_name: string;
}

const product_response: ApiResponse<Product> = {
    success: true,
    data: {
        product_id: 101,
        product_name: "Laptop"
    }
};
```

---

# Tuples

A tuple represents an array with a specific number and order of elements.

```typescript
let user_data: [number, string] = [
    1,
    "Dinesh"
];
```

The first value must be a number.

The second value must be a string.

This is invalid:

```typescript
let user_data: [number, string] = [
    "Dinesh",
    1
];
```

Tuples are useful when the position of each value has a defined meaning.

---

# Enums

TypeScript supports enums for named sets of values.

```typescript
enum UserRole {
    ADMIN,
    USER,
    MODERATOR
}
```

Use:

```typescript
const role = UserRole.ADMIN;
```

String enums can make the values clearer:

```typescript
enum OrderStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    CANCELLED = "cancelled"
}
```

Use:

```typescript
const order_status = OrderStatus.CONFIRMED;
```

For many modern TypeScript codebases, string literal unions are also commonly used:

```typescript
type OrderStatus =
    | "pending"
    | "confirmed"
    | "cancelled";
```

---

# Classes with TypeScript

TypeScript adds type information to JavaScript classes.

```typescript
class User {
    user_id: number;
    user_name: string;

    constructor(
        user_id: number,
        user_name: string
    ) {
        this.user_id = user_id;
        this.user_name = user_name;
    }

    get_user_name(): string {
        return this.user_name;
    }
}
```

Create an object:

```typescript
const user = new User(
    1,
    "Dinesh"
);

console.log(user.get_user_name());
```

---

# Access Modifiers

TypeScript provides access modifiers such as:

```text
public
private
protected
```

Example:

```typescript
class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    get_balance(): number {
        return this.balance;
    }
}
```

You can call:

```typescript
const account = new BankAccount(5000);

console.log(account.get_balance());
```

But direct access is restricted:

```typescript
account.balance;
```

TypeScript reports an error.

These modifiers primarily provide compile-time access checking.

---

# Decorators

Decorators are a feature for attaching behavior or metadata to classes and class members.

A decorator can be represented conceptually as:

```typescript
function log_class(target: Function) {
    console.log("Class created:", target.name);
}
```

Then:

```typescript
@log_class
class User {
}
```

The decorator is associated with the class.

Decorators are commonly seen in frameworks and libraries that use metadata-driven class patterns.

Examples include frameworks such as NestJS and Angular.

Decorator support and syntax depend on the TypeScript configuration and the decorator model being used, so it is important to follow the configuration required by the framework or project.

Decorators are an advanced TypeScript topic. Understanding the basic idea is more important initially than memorizing decorator implementation details.

---

# TypeScript Configuration

A TypeScript project commonly has:

```text
tsconfig.json
```

This file controls how TypeScript compiles the project.

Example:

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "strict": true,
        "outDir": "./dist"
    },
    "include": [
        "src/**/*.ts"
    ]
}
```

Important options include:

| Option             | Purpose                        |
| ------------------ | ------------------------------ |
| `target`           | JavaScript version to generate |
| `module`           | Module system used in output   |
| `strict`           | Enables stronger type checking |
| `outDir`           | Output directory               |
| `rootDir`          | Source directory               |
| `moduleResolution` | How modules are resolved       |

---

# Strict Mode

TypeScript can perform stronger checking using:

```json
{
    "compilerOptions": {
        "strict": true
    }
}
```

Strict mode catches more potential errors.

For example, it can identify situations where a value may be `undefined` when your code expects a definite value.

This is one of the most useful settings for serious TypeScript projects.

---

# TypeScript with Node.js

A Node.js TypeScript project can look like:

```text
backend/
│
├── src/
│   ├── server.ts
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── types/
│
├── dist/
├── package.json
├── tsconfig.json
└── node_modules/
```

Development flow:

```text
TypeScript source
       ↓
Type checking
       ↓
Compilation
       ↓
JavaScript
       ↓
Node.js
```

Modern Node.js tooling can also execute TypeScript directly in development in some setups, but compilation and type checking remain important concepts.

---

# JavaScript vs TypeScript

| JavaScript                           | TypeScript                                                       |
| ------------------------------------ | ---------------------------------------------------------------- |
| Dynamically typed                    | Statically type-checked                                          |
| `.js`                                | `.ts`                                                            |
| Types checked mainly at runtime      | Types checked during development/compilation                     |
| No interfaces                        | Interfaces available                                             |
| No generics                          | Generics available                                               |
| No TypeScript decorators/type system | Decorators and richer type features                              |
| Runs directly in Node.js/browser     | Usually transformed or executed through TypeScript-aware tooling |
| Flexible                             | More structured                                                  |

TypeScript does not replace JavaScript at runtime.

The final runtime environment still executes JavaScript.

---

# Practical Example — API Data

Imagine an API returns user information.

Define the structure:

```typescript
interface User {
    user_id: number;
    user_name: string;
    email: string;
    is_active: boolean;
}
```

Define the response:

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
```

Use it:

```typescript
async function get_user(): Promise<ApiResponse<User>> {
    const response = await fetch(
        "https://example.com/api/user"
    );

    return response.json();
}
```

Now TypeScript knows that:

```text
get_user()
    ↓
Promise
    ↓
ApiResponse<User>
    ↓
data
    ↓
User
```

So:

```typescript
const response = await get_user();

console.log(response.data.user_name);
console.log(response.data.email);
```

TypeScript can provide autocomplete and detect invalid property access.

---

# TypeScript Compilation

Suppose:

```typescript
const user_name: string = "Dinesh";

console.log(user_name);
```

Run:

```powershell
tsc app.ts
```

The compiler produces JavaScript similar to:

```javascript
const user_name = "Dinesh";

console.log(user_name);
```

The type annotation:

```typescript
: string
```

does not exist in the generated JavaScript because TypeScript types are primarily development-time information.

# TypeScript Basics

## Introduction

TypeScript is a programming language built on top of JavaScript.

It adds a **static type system** to JavaScript.

JavaScript:

```javascript
let user_name = "Dinesh";

user_name = 25;
```

JavaScript allows this because variables are dynamically typed.

TypeScript can detect the problem:

```typescript
let user_name: string = "Dinesh";

user_name = 25;
```

The TypeScript compiler reports an error because `user_name` was declared as a string.

TypeScript code is normally compiled into JavaScript before it runs in the browser or Node.js.

```text
TypeScript
    ↓
TypeScript Compiler
    ↓
JavaScript
    ↓
Browser / Node.js
```

---

# Why TypeScript Is Used

TypeScript helps developers catch many errors before the application runs.

For example:

```javascript
function calculate_total(price, quantity) {
    return price * quantity;
}

calculate_total("500", "2");
```

JavaScript may allow this and produce an unexpected result.

TypeScript lets you define the expected types:

```typescript
function calculate_total(
    price: number,
    quantity: number
): number {
    return price * quantity;
}
```

Now:

```typescript
calculate_total("500", "2");
```

produces a type error during development.

TypeScript is especially useful in:

* Large JavaScript applications
* Backend applications
* Frontend frameworks
* Team projects
* APIs
* Complex data models
* Libraries and SDKs

---

# Installing TypeScript

TypeScript can be installed globally:

```powershell
npm install -g typescript
```

Check the version:

```powershell
tsc --version
```

You can also install it as a project development dependency:

```powershell
npm install --save-dev typescript
```

For most projects, keeping TypeScript in the project dependencies is preferable because the project controls the compiler version.

---

# TypeScript File

JavaScript files normally use:

```text
.js
```

TypeScript files use:

```text
.ts
```

Example:

```text
app.ts
```

A simple TypeScript program:

```typescript
const user_name: string = "Dinesh";

console.log(user_name);
```

Compile it:

```powershell
tsc app.ts
```

TypeScript produces:

```text
app.js
```

The JavaScript file can then run in Node.js or the browser.

---

# Basic Types

TypeScript provides several commonly used types.

```typescript
let user_name: string = "Dinesh";

let user_age: number = 22;

let is_logged_in: boolean = true;

let user_id: bigint = 100n;
```

Common types include:

```text
string
number
boolean
bigint
symbol
object
null
undefined
unknown
any
never
void
```

---

# String

```typescript
let user_name: string = "Dinesh";
```

Only string values should be assigned:

```typescript
user_name = "Gowtham";
```

This is invalid:

```typescript
user_name = 100;
```

---

# Number

JavaScript has one main numeric type, `number`.

```typescript
let product_price: number = 1500;

let quantity: number = 3;

let total_price: number = product_price * quantity;
```

Both integers and floating-point values use `number`.

```typescript
let count: number = 10;

let rating: number = 4.5;
```

---

# Boolean

```typescript
let is_active: boolean = true;

let is_verified: boolean = false;
```

A boolean can contain only:

```text
true
false
```

---

# Arrays

You can define an array using:

```typescript
let user_names: string[] = [
    "Dinesh",
    "Gowtham",
    "Arul"
];
```

Another syntax is:

```typescript
let user_names: Array<string> = [
    "Dinesh",
    "Gowtham",
    "Arul"
];
```

Both represent an array of strings.

For numbers:

```typescript
let scores: number[] = [
    85,
    90,
    76
];
```

This is invalid:

```typescript
scores.push("90");
```

because the array expects numbers.

---

# Objects

You can define the expected structure of an object.

```typescript
let user: {
    user_id: number;
    user_name: string;
    email: string;
} = {
    user_id: 1,
    user_name: "Dinesh",
    email: "dinesh@example.com"
};
```

The object must follow the declared structure.

---

# Optional Properties

A property can be optional using `?`.

```typescript
let user: {
    user_id: number;
    user_name: string;
    phone?: string;
} = {
    user_id: 1,
    user_name: "Dinesh"
};
```

`phone` is allowed to be missing.

It can also be present:

```typescript
let user: {
    user_id: number;
    user_name: string;
    phone?: string;
} = {
    user_id: 1,
    user_name: "Dinesh",
    phone: "9876543210"
};
```

---

# Function Types

TypeScript allows you to specify parameter types and return types.

```typescript
function calculate_total(
    price: number,
    quantity: number
): number {
    return price * quantity;
}
```

The parameters are:

```text
price → number
quantity → number
```

The return value is:

```text
number
```

Calling:

```typescript
const total_price = calculate_total(500, 3);
```

is valid.

Calling:

```typescript
calculate_total("500", 3);
```

produces a type error.

---

# Void

A function that does not return a value can use `void`.

```typescript
function print_message(message: string): void {
    console.log(message);
}
```

The function performs an operation but does not return a value.

---

# Type Inference

TypeScript does not always require you to explicitly write the type.

For example:

```typescript
let user_name = "Dinesh";
```

TypeScript infers:

```text
user_name → string
```

Similarly:

```typescript
let user_age = 22;
```

TypeScript infers:

```text
user_age → number
```

This is called **type inference**.

You can therefore write:

```typescript
const product_price = 1500;
```

instead of:

```typescript
const product_price: number = 1500;
```

when the type is obvious.

---

# Inference from Function Return Values

TypeScript can also infer function return types.

```typescript
function calculate_total(
    price: number,
    quantity: number
) {
    return price * quantity;
}
```

TypeScript understands that the function returns a `number`.

You can explicitly write it:

```typescript
function calculate_total(
    price: number,
    quantity: number
): number {
    return price * quantity;
}
```

Both are valid.

Explicit return types can make larger codebases easier to understand and can catch unintended changes.

---

# Union Types

A variable can allow more than one type using `|`.

```typescript
let user_id: number | string;
```

Now both are valid:

```typescript
user_id = 1001;

user_id = "USR1001";
```

But this is invalid:

```typescript
user_id = true;
```

Union types are useful when an API can return different valid representations.

---

# Literal Types

You can restrict a value to specific strings.

```typescript
let order_status:
    "pending" |
    "confirmed" |
    "cancelled";
```

Valid:

```typescript
order_status = "pending";

order_status = "confirmed";
```

Invalid:

```typescript
order_status = "completed";
```

This is useful for fixed application states.

---

# Type Aliases

A type alias allows you to give a name to a type definition.

```typescript
type User = {
    user_id: number;
    user_name: string;
    email: string;
};
```

Now:

```typescript
const user: User = {
    user_id: 1,
    user_name: "Dinesh",
    email: "dinesh@example.com"
};
```

You can reuse the type:

```typescript
const admin: User = {
    user_id: 2,
    user_name: "Gowtham",
    email: "gowtham@example.com"
};
```

This avoids repeatedly writing the same object structure.

---

# Interfaces

An interface describes the structure that an object should follow.

```typescript
interface User {
    user_id: number;
    user_name: string;
    email: string;
}
```

Use it:

```typescript
const user: User = {
    user_id: 1,
    user_name: "Dinesh",
    email: "dinesh@example.com"
};
```

Interfaces are commonly used for:

* Object structures
* API responses
* Class contracts
* Function parameters
* Application data models

---

# Interface with Optional Properties

```typescript
interface User {
    user_id: number;
    user_name: string;
    email: string;
    phone?: string;
}
```

Now:

```typescript
const user: User = {
    user_id: 1,
    user_name: "Dinesh",
    email: "dinesh@example.com"
};
```

is valid.

---

# Interface with Readonly

A property can be marked `readonly`.

```typescript
interface User {
    readonly user_id: number;
    user_name: string;
}
```

You can read it:

```typescript
console.log(user.user_id);
```

But you cannot normally assign a new value to it:

```typescript
user.user_id = 10;
```

TypeScript reports an error.

`readonly` protects the property at the type-checking level. It does not make the underlying JavaScript object deeply immutable at runtime.

---

# Extending Interfaces

An interface can extend another interface.

```typescript
interface User {
    user_id: number;
    user_name: string;
}

interface Admin extends User {
    permissions: string[];
}
```

Now `Admin` contains:

```text
user_id
user_name
permissions
```

Example:

```typescript
const admin: Admin = {
    user_id: 1,
    user_name: "Dinesh",
    permissions: [
        "read_users",
        "delete_users"
    ]
};
```

---

# Type Alias vs Interface

Both can describe object structures.

### Type alias

```typescript
type User = {
    user_id: number;
    user_name: string;
};
```

### Interface

```typescript
interface User {
    user_id: number;
    user_name: string;
}
```

Both can be useful.

Interfaces are particularly common for object-oriented contracts and extensible object structures.

Type aliases are especially flexible for unions, intersections, tuples, and other type expressions.

---

# `any`

The `any` type disables most type checking for that value.

```typescript
let user_data: any = "Dinesh";

user_data = 100;

user_data = true;
```

TypeScript allows all of these.

`any` can be useful when migrating an existing JavaScript project, but excessive use removes many of the benefits of TypeScript.

---

# `unknown`

`unknown` is safer than `any`.

```typescript
let user_data: unknown;

user_data = "Dinesh";
user_data = 100;
user_data = true;
```

Before using an `unknown` value as a specific type, you must check it.

```typescript
if (typeof user_data === "string") {
    console.log(user_data.toUpperCase());
}
```

This is particularly useful when handling data from external sources such as APIs.

---

# Type Assertions

Sometimes you know more about a value than TypeScript can determine.

You can use a type assertion.

```typescript
const user_data: unknown = "Dinesh";

const user_name = user_data as string;

console.log(user_name.toUpperCase());
```

A type assertion tells TypeScript:

> Treat this value as this type.

It does not convert the actual value.

For example:

```typescript
const value = "100" as unknown as number;
```

does not turn the string `"100"` into the number `100`.

Runtime conversion would require:

```typescript
const value = Number("100");
```

---

# Generics

Generics allow code to work with different types while preserving type information.

Without generics:

```typescript
function get_first_item(items: any[]) {
    return items[0];
}
```

The return type loses useful information.

With a generic:

```typescript
function get_first_item<T>(items: T[]): T {
    return items[0];
}
```

Now:

```typescript
const first_name = get_first_item([
    "Dinesh",
    "Gowtham",
    "Arul"
]);
```

TypeScript knows:

```text
first_name → string
```

For numbers:

```typescript
const first_score = get_first_item([
    90,
    85,
    76
]);
```

TypeScript knows:

```text
first_score → number
```

The `T` represents a type that is determined when the function is used.

---

# Generic API Response

Generics are especially useful for API response structures.

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message: string;
}
```

Define a user:

```typescript
interface User {
    user_id: number;
    user_name: string;
}
```

Then:

```typescript
const response: ApiResponse<User> = {
    success: true,
    data: {
        user_id: 1,
        user_name: "Dinesh"
    },
    message: "User fetched successfully"
};
```

For multiple users:

```typescript
const response: ApiResponse<User[]> = {
    success: true,
    data: [
        {
            user_id: 1,
            user_name: "Dinesh"
        },
        {
            user_id: 2,
            user_name: "Gowtham"
        }
    ],
    message: "Users fetched successfully"
};
```

The same `ApiResponse` type can work with many different data types.

---

# Generic Constraints

Sometimes you want a generic type to have certain properties.

```typescript
function get_user_name<T extends { user_name: string }>(
    user: T
): string {
    return user.user_name;
}
```

Any type passed to this function must contain:

```text
user_name: string
```

For example:

```typescript
const user = {
    user_id: 1,
    user_name: "Dinesh"
};

console.log(get_user_name(user));
```

---

# Generic Interfaces

Generics can also be used with interfaces.

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
```

Example:

```typescript
interface Product {
    product_id: number;
    product_name: string;
}

const product_response: ApiResponse<Product> = {
    success: true,
    data: {
        product_id: 101,
        product_name: "Laptop"
    }
};
```

---

# Tuples

A tuple represents an array with a specific number and order of elements.

```typescript
let user_data: [number, string] = [
    1,
    "Dinesh"
];
```

The first value must be a number.

The second value must be a string.

This is invalid:

```typescript
let user_data: [number, string] = [
    "Dinesh",
    1
];
```

Tuples are useful when the position of each value has a defined meaning.

---

# Enums

TypeScript supports enums for named sets of values.

```typescript
enum UserRole {
    ADMIN,
    USER,
    MODERATOR
}
```

Use:

```typescript
const role = UserRole.ADMIN;
```

String enums can make the values clearer:

```typescript
enum OrderStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    CANCELLED = "cancelled"
}
```

Use:

```typescript
const order_status = OrderStatus.CONFIRMED;
```

For many modern TypeScript codebases, string literal unions are also commonly used:

```typescript
type OrderStatus =
    | "pending"
    | "confirmed"
    | "cancelled";
```

---

# Classes with TypeScript

TypeScript adds type information to JavaScript classes.

```typescript
class User {
    user_id: number;
    user_name: string;

    constructor(
        user_id: number,
        user_name: string
    ) {
        this.user_id = user_id;
        this.user_name = user_name;
    }

    get_user_name(): string {
        return this.user_name;
    }
}
```

Create an object:

```typescript
const user = new User(
    1,
    "Dinesh"
);

console.log(user.get_user_name());
```

---

# Access Modifiers

TypeScript provides access modifiers such as:

```text
public
private
protected
```

Example:

```typescript
class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    get_balance(): number {
        return this.balance;
    }
}
```

You can call:

```typescript
const account = new BankAccount(5000);

console.log(account.get_balance());
```

But direct access is restricted:

```typescript
account.balance;
```

TypeScript reports an error.

These modifiers primarily provide compile-time access checking.

---

# Decorators

Decorators are a feature for attaching behavior or metadata to classes and class members.

A decorator can be represented conceptually as:

```typescript
function log_class(target: Function) {
    console.log("Class created:", target.name);
}
```

Then:

```typescript
@log_class
class User {
}
```

The decorator is associated with the class.

Decorators are commonly seen in frameworks and libraries that use metadata-driven class patterns.

Examples include frameworks such as NestJS and Angular.

Decorator support and syntax depend on the TypeScript configuration and the decorator model being used, so it is important to follow the configuration required by the framework or project.

Decorators are an advanced TypeScript topic. Understanding the basic idea is more important initially than memorizing decorator implementation details.

---

# TypeScript Configuration

A TypeScript project commonly has:

```text
tsconfig.json
```

This file controls how TypeScript compiles the project.

Example:

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "strict": true,
        "outDir": "./dist"
    },
    "include": [
        "src/**/*.ts"
    ]
}
```

Important options include:

| Option             | Purpose                        |
| ------------------ | ------------------------------ |
| `target`           | JavaScript version to generate |
| `module`           | Module system used in output   |
| `strict`           | Enables stronger type checking |
| `outDir`           | Output directory               |
| `rootDir`          | Source directory               |
| `moduleResolution` | How modules are resolved       |

---

# Strict Mode

TypeScript can perform stronger checking using:

```json
{
    "compilerOptions": {
        "strict": true
    }
}
```

Strict mode catches more potential errors.

For example, it can identify situations where a value may be `undefined` when your code expects a definite value.

This is one of the most useful settings for serious TypeScript projects.

---

# TypeScript with Node.js

A Node.js TypeScript project can look like:

```text
backend/
│
├── src/
│   ├── server.ts
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── types/
│
├── dist/
├── package.json
├── tsconfig.json
└── node_modules/
```

Development flow:

```text
TypeScript source
       ↓
Type checking
       ↓
Compilation
       ↓
JavaScript
       ↓
Node.js
```

Modern Node.js tooling can also execute TypeScript directly in development in some setups, but compilation and type checking remain important concepts.

---

# JavaScript vs TypeScript

| JavaScript                           | TypeScript                                                       |
| ------------------------------------ | ---------------------------------------------------------------- |
| Dynamically typed                    | Statically type-checked                                          |
| `.js`                                | `.ts`                                                            |
| Types checked mainly at runtime      | Types checked during development/compilation                     |
| No interfaces                        | Interfaces available                                             |
| No generics                          | Generics available                                               |
| No TypeScript decorators/type system | Decorators and richer type features                              |
| Runs directly in Node.js/browser     | Usually transformed or executed through TypeScript-aware tooling |
| Flexible                             | More structured                                                  |

TypeScript does not replace JavaScript at runtime.

The final runtime environment still executes JavaScript.

---

# Practical Example — API Data

Imagine an API returns user information.

Define the structure:

```typescript
interface User {
    user_id: number;
    user_name: string;
    email: string;
    is_active: boolean;
}
```

Define the response:

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
```

Use it:

```typescript
async function get_user(): Promise<ApiResponse<User>> {
    const response = await fetch(
        "https://example.com/api/user"
    );

    return response.json();
}
```

Now TypeScript knows that:

```text
get_user()
    ↓
Promise
    ↓
ApiResponse<User>
    ↓
data
    ↓
User
```

So:

```typescript
const response = await get_user();

console.log(response.data.user_name);
console.log(response.data.email);
```

TypeScript can provide autocomplete and detect invalid property access.

---

# TypeScript Compilation

Suppose:

```typescript
const user_name: string = "Dinesh";

console.log(user_name);
```

Run:

```powershell
tsc app.ts
```

The compiler produces JavaScript similar to:

```javascript
const user_name = "Dinesh";

console.log(user_name);
```

The type annotation:

```typescript
: string
```

does not exist in the generated JavaScript because TypeScript types are primarily development-time information.


# JavaScript Design Patterns

## Introduction

A **design pattern** is a commonly used solution structure for a recurring software-design problem.

A design pattern is **not a ready-made piece of code**. Instead, it is a way of organizing classes, objects, functions, and modules.

For example, imagine an education platform:

```text
User
 ├── Student
 ├── Teacher
 └── Admin
```

Different parts of the application may need different ways to create objects, notify users, manage shared resources, or select algorithms.

Design patterns provide established approaches for these problems.

The major patterns covered here are:

* Singleton
* Factory
* Observer
* Module
* MVC
* Strategy

---

# Singleton Pattern

## What is Singleton?

The **Singleton pattern** ensures that only **one instance of an object** exists throughout the application.

Instead of allowing multiple objects to be created, the application shares one object.

### Real-world example

An application may need one:

* database connection manager
* application configuration
* logging service
* cache manager

You generally don't want every part of the application creating its own configuration manager.

---

## Basic Singleton Example

```javascript
class Database_connection {
    constructor() {
        if (Database_connection.instance) {
            return Database_connection.instance;
        }

        this.connection_status = "connected";

        Database_connection.instance = this;
    }

    get_status() {
        return this.connection_status;
    }
}

const connection_1 = new Database_connection();
const connection_2 = new Database_connection();

console.log(connection_1 === connection_2);
```

Output:

```text
true
```

Both variables point to the same object.

```text
connection_1
      ↓
 ┌──────────────┐
 │   Singleton  │
 │              │
 │ connected    │
 └──────────────┘
      ↑
connection_2
```

---

## Singleton using a Module

JavaScript modules naturally provide singleton-like behavior because a module is evaluated once and its exported values are reused.

### config.js

```javascript
const application_config = {
    api_url: "https://api.example.com",
    environment: "production"
};

export default application_config;
```

### user_service.js

```javascript
import application_config from "./config.js";

console.log(application_config.api_url);
```

### order_service.js

```javascript
import application_config from "./config.js";

console.log(application_config.environment);
```

Both services use the same configuration object.

---

## When to use Singleton

Useful for resources that should have one shared instance:

```text
Configuration
Logger
Cache
Connection manager
Application state
```

However, Singleton should not be used everywhere. Excessive use can create hidden global state and make testing harder.

---

# Factory Pattern

## What is Factory?

The **Factory pattern** provides a function or class responsible for creating objects.

Instead of creating objects directly throughout the application, object creation is centralized.

Without a factory:

```javascript
const student = new Student();
const teacher = new Teacher();
const admin = new Admin();
```

With a factory:

```javascript
const user = create_user("student");
```

The factory decides which object should be created.

---

## Example

Suppose an education platform has different types of users.

```javascript
class Student {
    constructor(name) {
        this.name = name;
        this.role = "student";
    }
}

class Teacher {
    constructor(name) {
        this.name = name;
        this.role = "teacher";
    }
}

class Admin {
    constructor(name) {
        this.name = name;
        this.role = "admin";
    }
}
```

Create a factory:

```javascript
function create_user(role, name) {
    if (role === "student") {
        return new Student(name);
    }

    if (role === "teacher") {
        return new Teacher(name);
    }

    if (role === "admin") {
        return new Admin(name);
    }

    throw new Error("Invalid user role");
}
```

Now:

```javascript
const student = create_user("student", "Arun");
const teacher = create_user("teacher", "Priya");
const admin = create_user("admin", "Dinesh");

console.log(student);
console.log(teacher);
console.log(admin);
```

The calling code does not need to know how each object is constructed.

---

## Factory Flow

```text
create_user()
      |
      ↓
Check role
      |
 ┌────┼─────┐
 ↓    ↓     ↓
Student Teacher Admin
```

---

## When to use Factory

Factory is useful when:

* many related object types exist
* object creation contains logic
* the exact object type is determined at runtime
* you want to hide construction details

For example:

```text
Payment
 ├── UPI
 ├── Card
 └── Net Banking
```

A payment factory could create the appropriate payment processor.

---

# Observer Pattern

## What is Observer?

The **Observer pattern** allows one object to notify multiple other objects when something changes.

There is usually:

```text
Subject
   |
   ├── Observer 1
   ├── Observer 2
   └── Observer 3
```

The subject maintains a list of observers.

When something happens, all observers are notified.

---

## Real-world Example

Consider a banking application.

When a transaction occurs:

```text
Transaction completed
       |
       ├── Send email
       ├── Send notification
       └── Update transaction history
```

The transaction system doesn't need to directly manage every notification system.

Instead, interested components subscribe to the event.

---

## JavaScript Example

```javascript
class Event_manager {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notify(data) {
        this.observers.forEach((observer) => {
            observer(data);
        });
    }
}
```

Create observers:

```javascript
function send_email(data) {
    console.log(`Email sent for transaction ${data.transaction_id}`);
}

function send_notification(data) {
    console.log(`Notification sent for transaction ${data.transaction_id}`);
}

function update_transaction_history(data) {
    console.log(`Transaction ${data.transaction_id} added to history`);
}
```

Subscribe them:

```javascript
const transaction_events = new Event_manager();

transaction_events.subscribe(send_email);
transaction_events.subscribe(send_notification);
transaction_events.subscribe(update_transaction_history);
```

Notify them:

```javascript
transaction_events.notify({
    transaction_id: 1001,
    amount: 5000
});
```

Output:

```text
Email sent for transaction 1001
Notification sent for transaction 1001
Transaction 1001 added to history
```

---

## Why Observer is useful

It creates **loose coupling**.

The transaction system only says:

```javascript
transaction_events.notify(transaction);
```

It doesn't need to know how email, notifications, or history are implemented.

---

## JavaScript Events and Observer

The browser's event system follows a similar idea.

```javascript
button.addEventListener("click", handle_click);
```

Here:

```text
Button
  ↓
click event
  ↓
handle_click()
```

The event listener acts like an observer waiting for a change/event.

---

# Module Pattern

## What is Module Pattern?

The **Module pattern** organizes related variables and functions into a single unit while controlling what is publicly accessible.

It helps create:

* private data
* public functions
* organized code
* encapsulation

---

## Example

```javascript
const bank_account = (() => {
    let balance = 0;

    function deposit(amount) {
        balance += amount;
    }

    function withdraw(amount) {
        if (amount > balance) {
            throw new Error("Insufficient balance");
        }

        balance -= amount;
    }

    function get_balance() {
        return balance;
    }

    return {
        deposit,
        withdraw,
        get_balance
    };
})();
```

Use it:

```javascript
bank_account.deposit(5000);

console.log(bank_account.get_balance());

bank_account.withdraw(1000);

console.log(bank_account.get_balance());
```

Output:

```text
5000
4000
```

But this does not work:

```javascript
console.log(bank_account.balance);
```

because `balance` is private.

---

## Module Structure

```text
Module
 ├── Private data
 ├── Private functions
 │
 └── Public API
       ├── deposit()
       ├── withdraw()
       └── get_balance()
```

The outside code only interacts with the public API.

---

## Modern JavaScript Modules

Modern ES modules provide a cleaner approach.

### bank_account.js

```javascript
let balance = 0;

function deposit(amount) {
    balance += amount;
}

function withdraw(amount) {
    if (amount > balance) {
        throw new Error("Insufficient balance");
    }

    balance -= amount;
}

function get_balance() {
    return balance;
}

export {
    deposit,
    withdraw,
    get_balance
};
```

### app.js

```javascript
import {
    deposit,
    withdraw,
    get_balance
} from "./bank_account.js";

deposit(5000);

withdraw(1000);

console.log(get_balance());
```

The `balance` variable remains inside the module.

---

# MVC Pattern

## What is MVC?

MVC stands for:

```text
M → Model
V → View
C → Controller
```

It separates an application's responsibilities.

```text
              User
               |
               ↓
          Controller
          /         \
         ↓           ↓
      Model        View
         |           ↑
         └───────────┘
```

---

# Model

The **Model** manages application data and business logic.

For example:

```javascript
const users = [
    {
        user_id: 1,
        user_name: "Arun",
        role: "student"
    },
    {
        user_id: 2,
        user_name: "Priya",
        role: "teacher"
    }
];

function get_users() {
    return users;
}

export {
    get_users
};
```

The model is responsible for the data.

---

# View

The **View** displays information to the user.

For example:

```javascript
function render_users(users) {
    const user_list = document.querySelector("#user_list");

    user_list.innerHTML = "";

    users.forEach((user) => {
        const item = document.createElement("li");

        item.textContent = `${user.user_name} - ${user.role}`;

        user_list.appendChild(item);
    });
}
```

The view is responsible for presentation.

---

# Controller

The **Controller** connects the Model and View.

```javascript
import { get_users } from "./user_model.js";

function load_users() {
    const users = get_users();

    render_users(users);
}

load_users();
```

The controller decides what should happen when the user interacts with the application.

---

## MVC Flow

Suppose a user clicks:

```text
"Show Users"
```

The flow becomes:

```text
User
 ↓
Controller
 ↓
Model
 ↓
Get data
 ↓
Controller
 ↓
View
 ↓
Display data
```

---

## MVC in Backend Applications

MVC is also commonly used with Node.js and Express.

Example structure:

```text
backend/
│
├── models/
│   └── user_model.js
│
├── controllers/
│   └── user_controller.js
│
├── routes/
│   └── user_routes.js
│
└── app.js
```

A request might flow like this:

```text
GET /api/users
       ↓
Route
       ↓
Controller
       ↓
Model
       ↓
Database
       ↓
Controller
       ↓
JSON response
```

MVC becomes particularly useful as applications become larger.

---

# Strategy Pattern

## What is Strategy?

The **Strategy pattern** allows you to define multiple algorithms or behaviors and choose one at runtime.

Instead of writing:

```javascript
if (...)
else if (...)
else if (...)
```

for every possible behavior, you can create separate strategies.

---

## Real-world Example

Consider payment processing.

There may be:

```text
UPI
Card
Net Banking
```

Each payment method has different processing logic.

Create separate strategies:

```javascript
function pay_with_upi(amount) {
    return `Paid ₹${amount} using UPI`;
}

function pay_with_card(amount) {
    return `Paid ₹${amount} using Card`;
}

function pay_with_net_banking(amount) {
    return `Paid ₹${amount} using Net Banking`;
}
```

Select a strategy:

```javascript
function process_payment(strategy, amount) {
    return strategy(amount);
}
```

Now:

```javascript
console.log(
    process_payment(pay_with_upi, 1000)
);

console.log(
    process_payment(pay_with_card, 2000)
);
```

Output:

```text
Paid ₹1000 using UPI
Paid ₹2000 using Card
```

The payment processor doesn't need to know the internal implementation of each payment method.

---

## Strategy using Objects

Another approach:

```javascript
const payment_strategies = {
    upi: pay_with_upi,
    card: pay_with_card,
    net_banking: pay_with_net_banking
};
```

Then:

```javascript
const payment_method = "upi";

const result = payment_strategies[payment_method](1500);

console.log(result);
```

This is useful when the strategy is selected dynamically.

---

# Strategy vs Factory

These patterns can look similar, but their purposes are different.

| Pattern  | Main Purpose                 |
| -------- | ---------------------------- |
| Factory  | Creates an object            |
| Strategy | Selects a behavior/algorithm |

Example:

```text
Factory
   ↓
Which object should I create?

Strategy
   ↓
Which behavior should I use?
```

For example:

```javascript
const payment_processor = create_payment_processor("upi");
```

Factory decides what object to create.

Then:

```javascript
payment_processor.pay(1000);
```

The selected object determines how the payment works.

---

# Singleton vs Module

Both can provide shared state, but they are conceptually different.

| Singleton                                   | Module                                 |
| ------------------------------------------- | -------------------------------------- |
| Focuses on one instance                     | Focuses on code organization           |
| Usually implemented with class/object logic | Built naturally into ES modules        |
| Controls object creation                    | Controls exports and visibility        |
| Common for shared services                  | Common for organizing application code |

---

# Observer vs Strategy

| Observer                            | Strategy                           |
| ----------------------------------- | ---------------------------------- |
| Handles notifications/events        | Handles interchangeable behavior   |
| One event can notify many observers | Usually one strategy is selected   |
| Focuses on communication            | Focuses on algorithm selection     |
| Useful for event-driven systems     | Useful for changing business logic |

---

# How These Patterns Work Together

Large applications often use several patterns at the same time.

For example, an education platform could have:

```text
Application
│
├── Singleton
│     └── Application configuration
│
├── Factory
│     └── Create Student / Teacher / Admin
│
├── Observer
│     └── Notify users about events
│
├── Module
│     └── Organize services
│
├── MVC
│     └── Separate Model / View / Controller
│
└── Strategy
      └── Select payment / notification behavior
```

They solve different problems.

---

# Practical Example

Consider a banking application.

A transaction is created:

```javascript
const transaction = {
    transaction_id: 1001,
    amount: 5000,
    payment_method: "upi"
};
```

A possible architecture could be:

```text
Controller
     |
     ↓
Transaction Service
     |
     ├── Factory
     │      ↓
     │   Payment Processor
     │
     ├── Strategy
     │      ↓
     │   UPI/Card/Net Banking
     │
     └── Observer
            ↓
       ┌────┼─────────┐
       ↓    ↓         ↓
     Email Push   Transaction History
```

A Singleton could provide shared application configuration:

```text
Application Configuration
          ↓
      Singleton
          ↓
 ┌────────┼────────┐
 ↓        ↓        ↓
Auth   Payment   Notification
```

Modules keep these pieces separated into files.

MVC can organize the overall application.

---

# Choosing a Design Pattern

The important thing is **not to use patterns just because they exist**.

First identify the problem.

If the problem is:

```text
"I need exactly one shared instance."
```

Consider:

```text
Singleton
```

If the problem is:

```text
"I need to create different types of objects."
```

Consider:

```text
Factory
```

If the problem is:

```text
"When something happens, multiple components need to know."
```

Consider:

```text
Observer
```

If the problem is:

```text
"I need to organize code and hide internal implementation."
```

Consider:

```text
Module
```

If the problem is:

```text
"My application has separate data, UI, and request/control logic."
```

Consider:

```text
MVC
```

If the problem is:

```text
"I have multiple algorithms/behaviors and need to choose one."
```

Consider:

```text
Strategy
```

The key idea is that **design patterns are tools for organizing software**, not rules that every application must follow.

# JavaScript Code Organization

## Introduction

Code organization means arranging application code in a way that makes it:

* easy to understand
* easy to modify
* easy to test
* easy to debug
* easy for multiple developers to work on

A small application may work with:

```text
app.js
```

But a larger application can contain hundreds of files.

Without proper organization:

```text
app.js
 ├── API calls
 ├── database logic
 ├── validation
 ├── UI rendering
 ├── authentication
 ├── business logic
 └── event handling
```

This quickly becomes difficult to maintain.

Good architecture separates these responsibilities.

---

# Separation of Concerns

One of the most important ideas in code organization is **Separation of Concerns**.

Each part of the application should have a clear responsibility.

For example:

```text
User Interface
      ↓
Controller
      ↓
Business Logic
      ↓
Database
```

Instead of putting everything into one function:

```javascript
function create_user() {
    // validate user
    // access database
    // hash password
    // send email
    // generate response
    // update UI
}
```

Separate the responsibilities:

```text
Controller
   ↓
Validation
   ↓
Service
   ↓
Repository
   ↓
Database
```

This makes each part easier to understand and test.

---

# MVC

MVC stands for:

```text
Model
View
Controller
```

It separates an application into three major responsibilities.

```text
             User
               |
               ↓
          Controller
          /         \
         ↓           ↓
      Model        View
         |
         ↓
      Database
```

---

## Model

The Model manages:

* application data
* data-related operations
* business rules related to data

Example:

```javascript
const users = [
    {
        user_id: 1,
        user_name: "Arun",
        role: "student"
    },
    {
        user_id: 2,
        user_name: "Priya",
        role: "teacher"
    }
];

function get_users() {
    return users;
}

export {
    get_users
};
```

The model doesn't need to know how the data is displayed.

---

## View

The View handles presentation.

```javascript
function render_users(users) {
    const user_list = document.querySelector("#user_list");

    user_list.innerHTML = "";

    users.forEach((user) => {
        const list_item = document.createElement("li");

        list_item.textContent =
            `${user.user_name} - ${user.role}`;

        user_list.appendChild(list_item);
    });
}
```

The View doesn't need to know where the users came from.

---

## Controller

The Controller connects the Model and View.

```javascript
import { get_users } from "./user_model.js";

function load_users() {
    const users = get_users();

    render_users(users);
}
```

The controller coordinates the flow.

---

## MVC Request Flow

For a web application:

```text
User
 ↓
Request
 ↓
Controller
 ↓
Model
 ↓
Database
 ↓
Model
 ↓
Controller
 ↓
View / JSON Response
```

For example:

```text
GET /users
     ↓
user_controller.js
     ↓
user_model.js
     ↓
Database
     ↓
Users
     ↓
JSON response
```

---

# MVC in Express

A Node.js application could be organized like this:

```text
backend/
│
├── controllers/
│   └── user_controller.js
│
├── models/
│   └── user_model.js
│
├── routes/
│   └── user_routes.js
│
├── services/
│   └── user_service.js
│
├── middleware/
│   └── auth_middleware.js
│
├── config/
│   └── database.js
│
└── app.js
```

The request might flow like:

```text
Route
 ↓
Controller
 ↓
Service
 ↓
Model
 ↓
Database
```

This is a common extension of MVC.

---

# MVVM

MVVM stands for:

```text
Model
View
ViewModel
```

It is particularly useful for applications with dynamic user interfaces.

The major difference is the **ViewModel**.

```text
             View
              ↕
         ViewModel
              ↕
             Model
```

The ViewModel acts as an intermediary between the UI and application data.

---

# Model in MVVM

The Model represents the application's data.

```javascript
const user = {
    user_id: 1,
    user_name: "Arun",
    email: "arun@example.com"
};
```

---

# View in MVVM

The View is the UI.

For example:

```html
<div>
    <h2 id="user_name"></h2>
    <p id="user_email"></p>
</div>
```

---

# ViewModel

The ViewModel prepares data for the View.

```javascript
const user_view_model = {
    user_name: "",
    user_email: "",

    load_user(user) {
        this.user_name = user.user_name;
        this.user_email = user.email;
    }
};
```

The View can use the ViewModel's data.

```javascript
function render_user() {
    document.querySelector("#user_name").textContent =
        user_view_model.user_name;

    document.querySelector("#user_email").textContent =
        user_view_model.user_email;
}
```

---

# MVC vs MVVM

| MVC                                   | MVVM                                           |
| ------------------------------------- | ---------------------------------------------- |
| Model + View + Controller             | Model + View + ViewModel                       |
| Controller handles application flow   | ViewModel manages UI state                     |
| Common in backend applications        | Common in UI-heavy applications                |
| Controller receives requests/events   | ViewModel exposes UI-ready data                |
| Express applications commonly use MVC | Vue-style architectures resemble MVVM concepts |

The distinction is not always strict. Modern frameworks often combine ideas from several architectural patterns.

---

# Folder Structure

Folder structure determines how application files are grouped.

There is no single folder structure that works for every project.

The structure should reflect the application's architecture.

---

# Simple JavaScript Project

For a small application:

```text
project/
│
├── index.html
├── style.css
└── app.js
```

This is perfectly reasonable when the application is small.

You don't need 20 folders for a three-file project.

---

# Medium Frontend Application

As the application grows:

```text
project/
│
├── index.html
│
├── css/
│   ├── reset.css
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── api.js
│   ├── validation.js
│   └── utils.js
│
└── assets/
    ├── images/
    └── icons/
```

Each folder has a clear purpose.

---

# Feature-Based Structure

For larger frontend applications, organizing by feature can be useful.

```text
src/
│
├── features/
│   │
│   ├── authentication/
│   │   ├── login.js
│   │   ├── register.js
│   │   └── auth_api.js
│   │
│   ├── users/
│   │   ├── user_list.js
│   │   ├── user_profile.js
│   │   └── user_api.js
│   │
│   └── payments/
│       ├── payment.js
│       └── payment_api.js
│
├── components/
│   ├── button.js
│   ├── modal.js
│   └── navbar.js
│
├── utils/
│   ├── date.js
│   └── validation.js
│
└── app.js
```

This keeps related files together.

---

# Layer-Based Structure

Another approach is organizing by technical responsibility.

```text
src/
│
├── controllers/
├── services/
├── models/
├── repositories/
├── routes/
├── middleware/
├── utils/
└── config/
```

For a backend:

```text
Request
   ↓
Routes
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

Each layer has a specific responsibility.

---

# Routes

Routes define application endpoints.

```javascript
router.get("/users", get_users);
router.post("/users", create_user);
```

Routes should primarily describe **which endpoint maps to which controller**.

Avoid putting large business logic directly inside routes.

Instead of:

```javascript
router.post("/users", async (request, response) => {
    // 100 lines of logic
});
```

prefer:

```javascript
router.post("/users", create_user);
```

---

# Controllers

Controllers handle incoming requests and outgoing responses.

```javascript
async function create_user(request, response) {
    const user_data = request.body;

    const user = await user_service.create_user(user_data);

    response.status(201).json({
        success: true,
        user
    });
}
```

The controller coordinates the request.

---

# Services

Services contain business logic.

```javascript
async function create_user(user_data) {
    if (!user_data.email) {
        throw new Error("Email is required");
    }

    const user = await user_repository.create(user_data);

    return user;
}
```

The service answers:

> What should the application do?

---

# Repository

A repository handles data access.

```javascript
async function create(user_data) {
    return database.query(
        "INSERT INTO users (...) VALUES (...)",
        user_data
    );
}
```

The repository answers:

> How do I access the data?

This creates a useful separation:

```text
Controller
"What request did I receive?"

Service
"What should happen?"

Repository
"How do I access the data?"
```

---

# Configuration

Configuration should be separated from application logic.

Example:

```text
config/
└── database.js
```

```javascript
const database_config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
};

export default database_config;
```

Environment-specific values should generally come from environment variables rather than being hardcoded.

---

# Utilities

Utilities contain reusable functions that don't belong to a specific feature.

Example:

```text
utils/
├── date.js
├── validation.js
└── response.js
```

Example:

```javascript
function is_valid_email(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export {
    is_valid_email
};
```

Avoid turning `utils` into a dumping ground for unrelated application logic.

---

# Clean Code

Clean code means code that is easy for developers to understand and safely modify.

It is not about making code look complicated or following one specific formatting style.

---

# Meaningful Names

Bad:

```javascript
const x = 5000;
const y = 1000;
```

Better:

```javascript
const account_balance = 5000;
const withdrawal_amount = 1000;
```

The name should communicate the purpose.

---

# Functions Should Have One Main Responsibility

Avoid:

```javascript
function process_user() {
    // validate user
    // save user
    // send email
    // generate report
    // update UI
}
```

Separate responsibilities:

```javascript
function validate_user(user_data) {
    // validation
}

function save_user(user_data) {
    // database operation
}

function send_welcome_email(user_data) {
    // email operation
}
```

Then coordinate them:

```javascript
async function process_user(user_data) {
    validate_user(user_data);

    const user = await save_user(user_data);

    await send_welcome_email(user);

    return user;
}
```

---

# Avoid Repetition

This is called **DRY**:

```text
Don't Repeat Yourself
```

Bad:

```javascript
const student_name = user.first_name + " " + user.last_name;

const teacher_name = teacher.first_name + " " + teacher.last_name;
```

If the same operation is repeated frequently, extract reusable logic:

```javascript
function get_full_name(user) {
    return `${user.first_name} ${user.last_name}`;
}
```

Then:

```javascript
const student_name = get_full_name(student);
const teacher_name = get_full_name(teacher);
```

DRY does not mean forcing every similar-looking line into an abstraction. An abstraction should make the code clearer, not harder to understand.

---

# Avoid Deep Nesting

Hard to read:

```javascript
if (user) {
    if (user.is_active) {
        if (user.has_permission) {
            if (user.account_verified) {
                process_user(user);
            }
        }
    }
}
```

Use early returns:

```javascript
function process_user(user) {
    if (!user) {
        return;
    }

    if (!user.is_active) {
        return;
    }

    if (!user.has_permission) {
        return;
    }

    if (!user.account_verified) {
        return;
    }

    process_user_account(user);
}
```

This keeps the main logic easier to see.

---

# Avoid Giant Functions

Instead of:

```javascript
function checkout() {
    // 300 lines
}
```

break the process into meaningful operations:

```text
checkout()
   |
   ├── validate_cart()
   ├── calculate_total()
   ├── process_payment()
   ├── create_order()
   └── send_confirmation()
```

Then:

```javascript
async function checkout(cart) {
    validate_cart(cart);

    const total = calculate_total(cart);

    await process_payment(total);

    const order = await create_order(cart);

    await send_confirmation(order);

    return order;
}
```

---

# Keep Business Logic Out of the UI

Avoid:

```javascript
button.addEventListener("click", () => {
    const amount = Number(input.value);

    if (amount > 50000) {
        // complex banking rules
    }

    // database logic
    // API logic
    // UI logic
});
```

The event handler should mainly coordinate the UI action.

Better:

```javascript
button.addEventListener("click", async () => {
    const amount = Number(input.value);

    const result = await process_transaction(amount);

    display_result(result);
});
```

Business logic belongs elsewhere.

---

# Keep Files Focused

Bad:

```text
utils.js
```

containing:

```text
database connection
email service
date formatting
authentication
payment logic
HTML rendering
```

Better:

```text
utils/
├── date.js
└── validation.js

services/
├── payment_service.js
└── email_service.js

config/
└── database.js
```

The file name should give you a reasonable idea of what is inside it.

---

# Dependency Direction

A well-organized application usually has a clear dependency direction.

For example:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

The controller should not normally bypass everything and directly manipulate database details.

Avoid:

```text
Controller
    ↓
Database
    ↓
UI
```

when the application has enough complexity to benefit from intermediate layers.

---

# A Practical Node.js Structure

A larger Express application could look like:

```text
backend/
│
├── src/
│   │
│   ├── config/
│   │   ├── database.js
│   │   └── environment.js
│   │
│   ├── routes/
│   │   ├── user_routes.js
│   │   └── auth_routes.js
│   │
│   ├── controllers/
│   │   ├── user_controller.js
│   │   └── auth_controller.js
│   │
│   ├── services/
│   │   ├── user_service.js
│   │   └── auth_service.js
│   │
│   ├── repositories/
│   │   ├── user_repository.js
│   │   └── auth_repository.js
│   │
│   ├── middleware/
│   │   ├── auth_middleware.js
│   │   └── error_middleware.js
│   │
│   ├── models/
│   │   └── user_model.js
│   │
│   ├── utils/
│   │   ├── validation.js
│   │   └── response.js
│   │
│   ├── app.js
│   └── server.js
│
├── tests/
│
├── .env
├── package.json
└── package-lock.json
```

The request flow becomes:

```text
HTTP Request
     ↓
Route
     ↓
Controller
     ↓
Service
     ↓
Repository
     ↓
Database
     ↓
Repository
     ↓
Service
     ↓
Controller
     ↓
HTTP Response
```

This is a combination of architectural ideas rather than a requirement to follow one exact pattern.

---

# MVC vs MVVM vs Layered Architecture

These concepts operate at somewhat different levels.

| Concept                 | Main Purpose                                            |
| ----------------------- | ------------------------------------------------------- |
| MVC                     | Separates Model, View, Controller                       |
| MVVM                    | Separates Model, View, ViewModel                        |
| Layered architecture    | Separates application responsibilities into layers      |
| Feature-based structure | Groups code by business feature                         |
| Clean code              | Makes individual code easier to understand and maintain |

They can also be combined.

For example:

```text
Feature
│
├── Controller
├── Service
├── Repository
└── Model
```

while the frontend might use:

```text
Feature
│
├── View
├── ViewModel
└── API
```

---

# Code Organization in a Real Application

Imagine an online learning platform.

A user opens:

```text
/users/123
```

The backend might work like this:

```text
Route
  ↓
user_controller.js
  ↓
user_service.js
  ↓
user_repository.js
  ↓
Database
```

The frontend receives the response:

```json
{
    "user_id": 123,
    "user_name": "Arun",
    "courses": 5
}
```

The frontend might organize the data like:

```text
View
  ↕
ViewModel
  ↕
API module
  ↓
Backend
```

This keeps the frontend and backend responsibilities separate.

---

# Good Folder Structure Principles

A good folder structure should answer three questions quickly:

```text
Where is the API logic?

Where is the business logic?

Where is the UI logic?
```

It should also make related code easy to find.

A useful principle is:

```text
Small project
    ↓
Keep structure simple

Growing project
    ↓
Introduce separation

Large project
    ↓
Organize by features/layers
```

Don't create architecture just for the sake of architecture.

The structure should solve an actual complexity problem.

# JavaScript Data Structures and Algorithms

## Introduction

A **data structure** is a way of organizing and storing data so that it can be used efficiently.

An **algorithm** is a sequence of steps used to solve a problem.

For example, suppose an application has 1 million users.

The question is not only:

```text
How do I store the users?
```

It is also:

```text
How quickly can I find a user?
How quickly can I add a user?
How quickly can I remove a user?
```

Data structures and algorithms help answer these questions.

---

# Data Structures

The main structures covered here are:

```text
Stack
Queue
Linked List
Set
Map
Tree
Graph
```

JavaScript already provides some powerful built-in structures such as:

```text
Array
Set
Map
```

Other structures such as linked lists, trees, and graphs are usually implemented using objects, classes, arrays, or combinations of them.

---

# Big O Notation

Before studying data structures, understand **Big O notation**.

Big O describes how the amount of work grows as the input size increases.

Common complexities:

| Complexity | Meaning                  |
| ---------- | ------------------------ |
| O(1)       | Constant                 |
| O(log n)   | Logarithmic              |
| O(n)       | Linear                   |
| O(n log n) | Common efficient sorting |
| O(n²)      | Quadratic                |
| O(2ⁿ)      | Exponential              |

For example:

```javascript
function get_first_user(users) {
    return users[0];
}
```

The function directly accesses the first element.

Complexity:

```text
O(1)
```

Now:

```javascript
function find_user(users, user_id) {
    for (const user of users) {
        if (user.user_id === user_id) {
            return user;
        }
    }

    return null;
}
```

In the worst case, every user may need to be checked.

Complexity:

```text
O(n)
```

---

# Stack

A **Stack** follows:

```text
LIFO
Last In, First Out
```

The last item inserted is the first item removed.

Think about a stack of books:

```text
      ┌────────┐
      │ Book 3 │ ← removed first
      ├────────┤
      │ Book 2 │
      ├────────┤
      │ Book 1 │
      └────────┘
```

---

# Stack in JavaScript

An array can behave as a stack.

```javascript
const browser_history = [];

browser_history.push("/home");
browser_history.push("/products");
browser_history.push("/checkout");

console.log(browser_history.pop());
```

Output:

```text
/checkout
```

The last page added was removed first.

---

## Stack Operations

```javascript
const stack = [];

stack.push("A");
stack.push("B");
stack.push("C");

console.log(stack.pop());
console.log(stack.pop());
```

Output:

```text
C
B
```

Common operations:

```text
push() → add
pop()  → remove last
peek   → inspect last
```

JavaScript does not have a dedicated `peek()` method, but:

```javascript
const top_item = stack[stack.length - 1];
```

---

## Stack Use Cases

Stacks are useful for:

```text
Browser history
Undo/redo
Function call stack
Expression evaluation
Backtracking
DFS
```

JavaScript itself uses a **call stack** to manage function execution.

---

# Queue

A **Queue** follows:

```text
FIFO
First In, First Out
```

Think about a queue at a bank:

```text
First → Customer 1
         Customer 2
         Customer 3
Last  → Customer 4
```

Customer 1 is served first.

---

# Queue in JavaScript

A simple implementation:

```javascript
const print_queue = [];

print_queue.push("document_1");
print_queue.push("document_2");
print_queue.push("document_3");

const first_document = print_queue.shift();

console.log(first_document);
```

Output:

```text
document_1
```

---

## Queue Operations

```text
enqueue → add to end
dequeue → remove from beginning
front   → inspect first item
```

With an array:

```javascript
queue.push(item);
queue.shift();
```

However, repeatedly using `shift()` can be inefficient for very large queues because remaining elements may need to be re-indexed.

A custom queue can use an index:

```javascript
class Queue {
    constructor() {
        this.items = [];
        this.front_index = 0;
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.front_index >= this.items.length) {
            return undefined;
        }

        const item = this.items[this.front_index];

        this.front_index++;

        return item;
    }
}
```

---

## Queue Use Cases

```text
Print jobs
Task processing
Message queues
Request processing
Breadth-first search
Background jobs
```

---

# Linked List

A **Linked List** consists of nodes.

Each node contains:

```text
Data
Next reference
```

Example:

```text
┌───────┐      ┌───────┐      ┌───────┐
│   A   │ ───→ │   B   │ ───→ │   C   │
└───────┘      └───────┘      └───────┘
```

Unlike an array, the elements do not need to be stored next to each other in memory.

---

# Linked List Node

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

Create nodes:

```javascript
const node_1 = new Node("A");
const node_2 = new Node("B");
const node_3 = new Node("C");

node_1.next = node_2;
node_2.next = node_3;
```

The structure becomes:

```text
A → B → C → null
```

---

# Linked List Class

```javascript
class Linked_list {
    constructor() {
        this.head = null;
    }

    append(value) {
        const new_node = new Node(value);

        if (!this.head) {
            this.head = new_node;
            return;
        }

        let current_node = this.head;

        while (current_node.next) {
            current_node = current_node.next;
        }

        current_node.next = new_node;
    }
}
```

Use it:

```javascript
const user_list = new Linked_list();

user_list.append("Arun");
user_list.append("Priya");
user_list.append("Dinesh");
```

Structure:

```text
Arun → Priya → Dinesh → null
```

---

# Linked List vs Array

| Operation             |                 Array |      Linked List |
| --------------------- | --------------------: | ---------------: |
| Access by index       |                  O(1) |             O(n) |
| Search                |                  O(n) |             O(n) |
| Insert at beginning   |                  O(n) |             O(1) |
| Remove from beginning |                  O(n) |             O(1) |
| Memory                | Usually less overhead | Extra references |

JavaScript applications commonly use arrays rather than manually implemented linked lists, but understanding linked lists is important for algorithms and interviews.

---

# Set

A JavaScript `Set` stores **unique values**.

```javascript
const user_ids = new Set();

user_ids.add(101);
user_ids.add(102);
user_ids.add(101);

console.log(user_ids);
```

The duplicate `101` is ignored.

```text
101
102
```

---

## Set Operations

```javascript
const user_ids = new Set([101, 102, 103]);

console.log(user_ids.has(102));

user_ids.delete(102);

console.log(user_ids.has(102));
```

Output:

```text
true
false
```

---

## Set Use Case

Removing duplicates:

```javascript
const user_roles = [
    "student",
    "teacher",
    "student",
    "admin",
    "teacher"
];

const unique_roles = [...new Set(user_roles)];

console.log(unique_roles);
```

Output:

```text
["student", "teacher", "admin"]
```

---

# Map

A JavaScript `Map` stores:

```text
key → value
```

Example:

```javascript
const users = new Map();

users.set(101, {
    user_name: "Arun",
    role: "student"
});

users.set(102, {
    user_name: "Priya",
    role: "teacher"
});
```

Retrieve:

```javascript
console.log(users.get(101));
```

---

## Map Operations

```javascript
users.set(103, {
    user_name: "Dinesh",
    role: "admin"
});

console.log(users.has(103));

users.delete(103);

console.log(users.size);
```

Common operations:

```text
set()
get()
has()
delete()
clear()
```

---

# Map vs Object

Both can store key-value data.

Object:

```javascript
const user = {
    user_id: 101,
    user_name: "Arun"
};
```

Map:

```javascript
const user = new Map();

user.set("user_id", 101);
user.set("user_name", "Arun");
```

Map is particularly useful when:

* keys are dynamic
* keys are not necessarily strings
* frequent additions/removals are required
* you need built-in map operations

---

# Tree

A **Tree** is a hierarchical data structure.

Example:

```text
             Root
            /    \
          A        B
        /   \      \
       C     D      E
```

Trees contain:

```text
Root
Node
Child
Parent
Leaf
```

A node without children is called a **leaf**.

---

# Binary Tree

A binary tree allows each node to have at most two children.

```text
          10
         /  \
        5    20
       / \   / \
      3   7 15 25
```

---

# Binary Search Tree

A **Binary Search Tree**, or BST, follows:

```text
Left values < Node value < Right values
```

Example:

```text
          10
         /  \
        5    20
       / \   / \
      3   7 15 25
```

Searching can be efficient when the tree is balanced.

---

# Tree in JavaScript

```javascript
class Tree_node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

Insert:

```javascript
function insert_node(root, value) {
    if (!root) {
        return new Tree_node(value);
    }

    if (value < root.value) {
        root.left = insert_node(root.left, value);
    } else {
        root.right = insert_node(root.right, value);
    }

    return root;
}
```

Create a tree:

```javascript
let root = null;

root = insert_node(root, 10);
root = insert_node(root, 5);
root = insert_node(root, 20);
root = insert_node(root, 3);
root = insert_node(root, 7);
```

---

# Tree Traversal

Traversal means visiting nodes.

The major traversal methods are:

```text
Inorder
Preorder
Postorder
Level-order
```

For:

```text
       10
      /  \
     5    20
```

Inorder:

```text
5 → 10 → 20
```

Preorder:

```text
10 → 5 → 20
```

Postorder:

```text
5 → 20 → 10
```

In a Binary Search Tree, inorder traversal produces values in sorted order.

---

# Graph

A **Graph** represents relationships between objects.

Example:

```text
A ───── B
│       │
│       │
C ───── D
```

The objects are **vertices/nodes**.

The connections are **edges**.

Graphs can be:

```text
Directed
Undirected
Weighted
Unweighted
```

---

# Real-world Graph Example

A social network can be represented as:

```text
Arun ─── Priya
 │        │
 │        │
Dinesh ── Kumar
```

Each person is a node.

Each relationship is an edge.

---

# Graph Using Adjacency List

JavaScript can represent a graph using `Map`.

```javascript
const graph = new Map();

graph.set("Arun", ["Priya", "Dinesh"]);
graph.set("Priya", ["Arun", "Kumar"]);
graph.set("Dinesh", ["Arun"]);
graph.set("Kumar", ["Priya"]);
```

This means:

```text
Arun
 ├── Priya
 └── Dinesh
```

---

# Graph Traversal

Two important graph algorithms are:

```text
BFS
Breadth-First Search

DFS
Depth-First Search
```

BFS uses a queue.

DFS commonly uses a stack or recursion.

---

# BFS

```javascript
function breadth_first_search(graph, start_node) {
    const queue = [start_node];
    const visited = new Set([start_node]);

    while (queue.length > 0) {
        const current_node = queue.shift();

        console.log(current_node);

        for (const neighbor of graph.get(current_node) || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
```

BFS explores nearby nodes first.

---

# DFS

```javascript
function depth_first_search(graph, node, visited = new Set()) {
    if (visited.has(node)) {
        return;
    }

    visited.add(node);

    console.log(node);

    for (const neighbor of graph.get(node) || []) {
        depth_first_search(graph, neighbor, visited);
    }
}
```

DFS explores deeply before returning.

---

# Algorithms

An algorithm is a sequence of operations used to solve a problem.

Important categories here are:

```text
Sorting
Searching
Recursion
Dynamic Programming
```

---

# Searching

Searching means finding a particular value.

Two important approaches are:

```text
Linear Search
Binary Search
```

---

# Linear Search

Linear search checks elements one by one.

```javascript
function linear_search(numbers, target) {
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] === target) {
            return index;
        }
    }

    return -1;
}
```

Example:

```javascript
const numbers = [10, 25, 40, 55, 70];

console.log(linear_search(numbers, 40));
```

Output:

```text
2
```

Complexity:

```text
O(n)
```

---

# Binary Search

Binary search works on a **sorted array**.

Example:

```text
[10, 20, 30, 40, 50, 60, 70]
```

Search for:

```text
60
```

Instead of checking every value:

```text
Check middle
     ↓
     40

60 > 40

Search right half
     ↓
50 60 70

Check middle
     ↓
60
```

---

## Binary Search Implementation

```javascript
function binary_search(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (numbers[middle] === target) {
            return middle;
        }

        if (numbers[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}
```

Complexity:

```text
O(log n)
```

The important requirement is that the data must be sorted.

---

# Sorting

Sorting means arranging data in an order.

Example:

```text
Before:
40 10 30 20

After:
10 20 30 40
```

Common sorting algorithms include:

```text
Bubble Sort
Selection Sort
Insertion Sort
Merge Sort
Quick Sort
```

---

# Bubble Sort

Bubble Sort repeatedly compares neighboring elements.

```javascript
function bubble_sort(numbers) {
    const result = [...numbers];

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] =
                    [result[j + 1], result[j]];
            }
        }
    }

    return result;
}
```

Example:

```javascript
console.log(
    bubble_sort([40, 10, 30, 20])
);
```

Output:

```text
[10, 20, 30, 40]
```

Average/worst-case complexity:

```text
O(n²)
```

Bubble Sort is useful for learning algorithms, but it is generally not the first choice for production sorting.

---

# JavaScript Array Sort

In real JavaScript applications, you will often use:

```javascript
const numbers = [40, 10, 30, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output:

```text
[10, 20, 30, 40]
```

JavaScript's built-in `sort()` is generally preferable to manually implementing Bubble Sort for ordinary application work.

---

# Recursion

Recursion happens when a function calls itself.

A recursive function needs:

```text
Base case
Recursive case
```

Without a base case, recursion can continue indefinitely.

---

# Simple Recursion

```javascript
function countdown(number) {
    if (number === 0) {
        return;
    }

    console.log(number);

    countdown(number - 1);
}

countdown(5);
```

Output:

```text
5
4
3
2
1
```

---

# Factorial

Mathematically:

```text
5! = 5 × 4 × 3 × 2 × 1
```

Recursive implementation:

```javascript
function factorial(number) {
    if (number <= 1) {
        return 1;
    }

    return number * factorial(number - 1);
}
```

```javascript
console.log(factorial(5));
```

Output:

```text
120
```

The call stack looks conceptually like:

```text
factorial(5)
    ↓
factorial(4)
    ↓
factorial(3)
    ↓
factorial(2)
    ↓
factorial(1)
```

Then the calls return in reverse order.

---

# Recursion and Trees

Recursion is particularly useful for trees.

For example:

```javascript
function traverse_tree(node) {
    if (!node) {
        return;
    }

    console.log(node.value);

    traverse_tree(node.left);
    traverse_tree(node.right);
}
```

The recursive structure naturally follows the tree structure.

---

# Dynamic Programming

Dynamic Programming, commonly called **DP**, is used when a problem contains:

```text
Overlapping subproblems
+
Optimal substructure
```

The key idea is:

> Solve smaller problems once and reuse their results.

---

# Fibonacci Problem

Fibonacci:

```text
0 1 1 2 3 5 8 13 ...
```

A simple recursive solution:

```javascript
function fibonacci(number) {
    if (number <= 1) {
        return number;
    }

    return fibonacci(number - 1) +
           fibonacci(number - 2);
}
```

This creates many repeated calculations.

For example:

```text
fibonacci(5)
 ├── fibonacci(4)
 │    ├── fibonacci(3)
 │    └── fibonacci(2)
 │
 └── fibonacci(3)
      ├── fibonacci(2)
      └── fibonacci(1)
```

`fibonacci(3)` and other values are calculated repeatedly.

---

# Memoization

Memoization stores previously calculated results.

```javascript
function fibonacci(number, memo = {}) {
    if (number <= 1) {
        return number;
    }

    if (memo[number] !== undefined) {
        return memo[number];
    }

    memo[number] =
        fibonacci(number - 1, memo) +
        fibonacci(number - 2, memo);

    return memo[number];
}
```

Now previously calculated values are reused.

---

# Tabulation

Another DP approach is **tabulation**.

It builds results from the smallest problem upward.

```javascript
function fibonacci(number) {
    if (number <= 1) {
        return number;
    }

    const table = [0, 1];

    for (let index = 2; index <= number; index++) {
        table[index] =
            table[index - 1] +
            table[index - 2];
    }

    return table[number];
}
```

The table might look like:

```text
Index:  0  1  2  3  4  5
Value:  0  1  1  2  3  5
```



# Data Structure and Algorithm Relationship

Data structures and algorithms work together.

For example:

```text
Problem:
Find nearby users
       ↓
Graph
       ↓
BFS
       ↓
Queue
```

Another example:

```text
Problem:
Undo last action
       ↓
Stack
       ↓
pop()
```

Another:

```text
Problem:
Quickly find user by ID
       ↓
Map
       ↓
get(user_id)
```

Another:

```text
Problem:
Search sorted numbers
       ↓
Array
       ↓
Binary Search
```

---

# Choosing a Data Structure

| Requirement             | Useful Structure |
| ----------------------- | ---------------- |
| Last-in-first-out       | Stack            |
| First-in-first-out      | Queue            |
| Sequential linked nodes | Linked List      |
| Unique values           | Set              |
| Key-value lookup        | Map              |
| Hierarchical data       | Tree             |
| Relationships/networks  | Graph            |

---

# Choosing an Algorithm

| Problem                    | Common Approach        |
| -------------------------- | ---------------------- |
| Find item in unsorted data | Linear Search          |
| Find item in sorted data   | Binary Search          |
| Arrange data               | Sorting                |
| Hierarchical traversal     | DFS / BFS              |
| Explore graph              | BFS / DFS              |
| Repeated subproblems       | Dynamic Programming    |
| Tree processing            | Recursion              |
| Undo operations            | Stack-based processing |

---


Actual performance can depend on the implementation and data shape. For example, an unbalanced binary search tree can degrade toward O(n).

---

# Practical JavaScript Example

Imagine an application that manages employees.

You might choose:

```text
Employee lookup
      ↓
Map
```

```javascript
const employee_map = new Map();

employee_map.set(101, {
    employee_name: "Arun",
    department: "Engineering"
});

employee_map.set(102, {
    employee_name: "Priya",
    department: "Finance"
});
```

For unique skills:

```text
Employee skills
      ↓
Set
```

```javascript
const skills = new Set([
    "JavaScript",
    "Node.js",
    "SQL"
]);
```

For processing tasks:

```text
Background jobs
      ↓
Queue
```

For undo operations:

```text
User actions
      ↓
Stack
```

For organization hierarchy:

```text
CEO
 ↓
Manager
 ↓
Team
```

Use a tree.

For relationships between employees:

```text
Employee ↔ Employee
```

A graph can represent those relationships.

---

