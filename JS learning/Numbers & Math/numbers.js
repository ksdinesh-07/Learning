const quantity = "2";
const result = parseInt(quantity);
console.log(result);

//parseint with decimal

const price = "499.99";
console.log(parseInt(price));

//parser float
const price1 = "499.99";
const result1 = parseFloat(price);
console.log(result1);

//to fixed return string
const price2 = 499.9876;
console.log(price2.toFixed(2));

// isnan

console.log(isNaN(100));
console.log(isNaN("hello"));

const quantityInput = "3";

if (isNaN(quantityInput)) {
    console.log("Invalid quantity");
} else {
    console.log("Valid quantity");
}

//math objects

const discount = 149.6;
const finalDiscount = Math.round(discount);
console.log(finalDiscount);

//floor

const availableStock = 12.8;
console.log(Math.floor(availableStock));

//ceil

const deliveryDays = 3.2;
console.log(Math.ceil(deliveryDays));

//max

const price3 = 1499;
console.log(Math.max(price1, price2, price3));

//min

const lowestPrice = Math.min(499, 999, 1499);
console.log(lowestPrice);

//random

const code = Math.floor(Math.random() * 1000);
console.log("DFVR"+code);