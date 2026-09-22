// for-loop

console.log("FOR LOOP");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while-loop

console.log("WHILE LOOP");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// do-while

console.log("DO...WHILE LOOP");
let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 5);


// break
console.log("BREAK");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}


// contnue

console.log("CONTINUE");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}


// for-in

console.log("FOR...IN");
const student = {
    name: "Dinesh",
    age: 21,
    course: "AI & DS"
};
for (let key in student) {
    console.log(key, student[key]);
}


// for-of

console.log("FOR...OF");
const products = [
    "T-Shirt",
    "Jeans",
    "Shoes"
];
for (let product of products) {
    console.log(product);
}


// foreach

console.log("FOREACH");
products.forEach(function(product) {
    console.log(product);
});