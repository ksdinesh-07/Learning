// arithmetic operators

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);


// assignment operators

let price = 100;

price += 20;
console.log("After +=:", price);

price -= 10;
console.log("After -=:", price);

price *= 2;
console.log("After *=:", price);

price /= 2;
console.log("After /=:", price);


// Comparision operator

let age = 21;

console.log(age == 21);
console.log(age === 21);
console.log(age != 20);
console.log(age !== 20);
console.log(age > 18);
console.log(age < 18);
console.log(age >= 21);
console.log(age <= 21);


// logical operator

let hasId = true;
let hasTicket = true;

console.log("AND:", hasId && hasTicket);
console.log("OR:", hasId || hasTicket);
console.log("NOT:", !hasId);


// bitwise operator

let x = 5;
let y = 3;

console.log("Bitwise AND:", x & y);
console.log("Bitwise OR:", x | y);
console.log("Bitwise XOR:", x ^ y);
console.log("Left Shift:", x << 1);
console.log("Right Shift:", x >> 1);


// ternary operator

let studentAge = 20;

let result = studentAge >= 18 ? "Adult" : "Minor";

console.log(result);