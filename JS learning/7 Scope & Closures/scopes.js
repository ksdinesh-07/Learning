// global scope

let college = "xyz College"; //---> global scope
function showCollege() {
    console.log(college);
}
showCollege();
console.log(college);

// local scope

function student_details() {
    let name = "Dinesh"; //---> local scope
    console.log(name);
}
student_details();


// console.log(name);  ---> Cause Error

let university = "Anna University";  //---> global scope
function department() {
    let course = "AI & Data Science";
    function student() {
        let studentName = "Dinesh";
        console.log(university);
        console.log(course);
        console.log(studentName);
    }
    student();
}
department();

//output
// Anna University
// AI & Data Science
// Dinesh

//variable shadowing

let role = "student";
function show_profile() {
    let role = "admin";
    console.log(role);
}

show_profile();
console.log(role);

//output
// admin
// student


//closure

function create_cart() {
    let itemCount = 0;
    function add_item() {
        itemCount++;
        console.log("Items in cart:", itemCount);
    }
    return add_item;
}

const add_to_cart = create_cart();
add_to_cart();
add_to_cart();
add_to_cart();

//output
// Items in cart: 1
// Items in cart: 2
// Items in cart: 3

function normal(){
    c=1;
    return function(){
        console.log(c);
        c+=1;
    };
}

const n=normal();
n();
n();
n();


// 1.Banking transaction
function create_transaction(account_number) {
    let balance = 50000;
    function withdraw(amount) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`${account_number} withdrew ₹${amount}`);
            console.log(`Remaining balance: ₹${balance}`);
        }
    }
    return withdraw;
}

const customer_transaction =create_transaction("XXXX1234");
customer_transaction(5000);

// Lexical scoping means a function can access variables based on where the function is written in the code, not where the function is called.

// 2.online exam

function start_exam(student_name) {
    let exam_duration = 60;
    let score = 0;
    function submit_answer(correct) {
        if (correct) {
            score++;
        }
        console.log(`${student_name} - Current Score: ${score}`);
    }

    function show_exam_details() {
        console.log(`Student: ${student_name}`);
        console.log(`Duration: ${exam_duration} minutes`);
    }

    show_exam_details();

    submit_answer(true);
    submit_answer(false);
    submit_answer(true);
}

start_exam("Arun");