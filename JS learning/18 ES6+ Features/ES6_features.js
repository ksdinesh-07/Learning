import { productName, productPrice } from "./products.js";

//let and const

let cartCount = 0;
cartCount = cartCount + 1;
cartCount = cartCount + 1;
console.log(cartCount);

//output 2

const productPrice = 499;
console.log(productPrice);

//cannot productPrice=599;

//arrow fn

const calculateTotal = (price, quantity) => {
    return price * quantity;
};

const total = calculateTotal(499, 2);
console.log(total);

//Template Literals

const productName = "T-Shirt";
const price = 499;
const message = `Product: ${productName}, Price: ₹${price}`;
console.log(message);

//spread Operator

const summerProducts = ["T-Shirt", "Shorts"];
const allProducts = [...summerProducts, "Cap"];
console.log(allProducts);

const product = {
    name: "T-Shirt",
    price: 499
};

const updatedProduct = {
    ...product,
    price: 599
};

console.log(updatedProduct);

//Rest Operator

function calculateTotal(...prices) {
    let total = 0;
    for (const price of prices) {
        total += price;
    }
    return total;
}
console.log(calculateTotal(499, 999));

//Destructuring

const product1 = {
    name: "Oversized T-Shirt",
    price: 499,
    stock: 20
};

const sizes = ["S", "M", "L"];
const [small, medium, large] = sizes;

console.log(small);
console.log(medium);
console.log(large);


console.log(productName);
console.log(productPrice);