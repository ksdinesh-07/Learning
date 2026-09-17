// global scope

let college = "xyz College";
function showCollege() {
    console.log(college);
}
showCollege();
console.log(college);

// local scope

function studentDetails() {
    let name = "Dinesh";
    console.log(name);
}
studentDetails();


// console.log(name);  ---> Cause Error

let university = "Anna University";
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

//variable shadowing

let name = "Dinesh";
function showName() {
    let name = "Arun";
    console.log("Inside function:", name);
}
showName();
console.log("Outside function:", name);

//closure

function createCounter() {
    let count = 0;
    function counter() {
        count++;
        console.log("Count:", count);
    }
    return counter;
}

const myCounter = createCounter();
myCounter();
myCounter();
myCounter();


// multiple closures

function createUser(name) {
    function showUser() {
        console.log("User:", name);
    }
    return showUser;
}
const user1 = createUser("Dinesh");
const user2 = createUser("Arun");

user1();
user2();

