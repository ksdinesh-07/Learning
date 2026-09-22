//creating a DATE Object
const order_date=new Date();
console.log("Order placed at:", order_date);

//creating a specific date
const orderDate = new Date("2026-09-20");
console.log(orderDate);

const order_Date = new Date(2026, 8, 20);
console.log(order_Date);

//get full year

console.log(orderDate.getFullYear());

//get month

console.log(orderDate.getMonth());

//get date

console.log(orderDate.getDate());

//get day

console.log(orderDate.getDay());

//get time

console.log(orderDate.getHours());
console.log(orderDate.getMinutes());
console.log(orderDate.getSeconds());

//formatting a date

// const orderDate = new Date("2026-09-20T10:30:00");

// console.log(orderDate);

const day = orderDate.getDate();
const month = orderDate.getMonth() + 1;
const year = orderDate.getFullYear();

console.log(`${day}/${month}/${year}`);

//localdatestring

console.log(orderDate.toLocaleDateString());