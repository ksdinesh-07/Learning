// function declar

function greet() {
    console.log("Hello!");
}
greet();


// parameter

function greetStudent(name) {
    console.log("Hello", name);
}
greetStudent("Dinesh");
greetStudent("Arun");


// multiple parameter

function add(a, b) {
    console.log(a + b);
}
add(10, 20);


// return

function multiply(a, b) {
    return a * b;
}
let result = multiply(5, 4);
console.log("Result:", result);


// function 

const subtract = function(a, b) {
    return a - b;
};
console.log("Subtraction:", subtract(20, 5));


// arrow function

const divide = (a, b) => {
    return a / b;
};
console.log("Division:", divide(20, 5));


// short arrow function

const square = number => number * number;
console.log("Square:", square(5));


// hoisting

sayHello();
function sayHello() {
    console.log("Hello from function hoisting!");
}


// foreach in function

const names = ["Dinesh", "Arun", "Priya"];
names.forEach(function(name) {
    console.log("Student:", name);
});