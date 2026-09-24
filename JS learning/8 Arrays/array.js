// declaring the array
let product=new Array();
product=['Mobile','Laptop','TV']
// console.log(typeof(product));

let Mobile_list=['Redmi','Realme','Poco','Apple'];
// console.log(Mobile_list);

// let category=['breakfast','lunch','dinner']
// console.log(category);

// // accessing using indexing

// console.log(Mobile_list[1]);

// // differnt data type store in same array

// const available=['juice',98,null,true,{name:'kishore',shop_name:'Well good'},function add(a,b){return a+b}]
// console.log(available[5](1,2));

// //insert

// Mobile_list[1]='Lava';
// console.log(Mobile_list);

//  Mobile_list.push("moto") //push adds the element at last
//  console.log(Mobile_list);


//  Mobile_list.unshift('One plus') // adds rhe element at beginning
//  console.log(Mobile_list);

//  //delete an elemnt 
    
//  Mobile_list.pop(); //removes the last element
//  console.log(Mobile_list);

//  Mobile_list.shift(); //removes the first element

//  console.log(Mobile_list.pop()); //shows the removed element

 // accessing the element using for-of faster
for(mobile of Mobile_list){
    console.log(mobile);
}

// accessing using the for-in but slower
for(mobile in Mobile_list){
    console.log(Mobile_list[mobile]);
}

// length
console.log(Mobile_list.length);

let updated_product_list=new Array('Ink','Pen','Pencil');
console.log(updated_product_list);
console.log(typeof(updated_product_list));

// 2 D Array
let mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(mat);
console.log(mat[0][1]);



// Example

//creation
// const products = [
//     { id: 1, name: "T-Shirt", price: 499 },
//     { id: 2, name: "Jeans", price: 999 },
//     { id: 3, name: "Shoes", price: 1499 }
// ];


//indexing
console.log(products[0]);


//Add to product cart 

const cart = [];
cart.push(products[0]);
console.log(cart);

//remove the last element
cart.pop();

// add beginning of the array
cart.unshift(products[2]);

// removes first item
cart.shift();

//splice  - removes a specific product
cart.splice(1, 1);

console.log(cart)

const sampleCart = [
  { id: 101, name: "Wireless Mouse", price: 25.99, quantity: 1 },
  { id: 102, name: "Mechanical Keyboard", price: 89.99, quantity: 1 },
  { id: 103, name: "USB-C Cable (2m)", price: 8.50, quantity: 3 },
  { id: 104, name: "Water Bottle", price: 15.00, quantity: 2 }
];

const feature_product=sampleCart.slice(0,2);
console.log(feature_product)

//map -> transform every item


const product_name=sampleCart.map(function(prod){
    return prod.name;
});

console.log(product_name);


//filter ---> Show Products Under ₹1000

const low_price_products=sampleCart.filter(function(afford_products){
    return afford_products.price<12;
})

console.log(low_price_products);


// reduce ---> calculate cart total

const total_cart=sampleCart.reduce(function(sum,prod){
    return sum+prod.price;
},0);

console.log(total_cart);

// map() → Creates a new array by transforming every element.

// filter() → Creates a new array containing only elements that satisfy a condition.

// reduce() → Processes all elements and combines them into a single result.



const products = [
  {
    id: 101,
    title: "Wireless Noise-Canceling Headphones",
    price: 129.99,
    category: "Electronics",
    inStock: true,
    tags: ["audio", "wireless", "gadget"],
    details: {
      brand: "SoundWave",
      color: "Matte Black",
      warrantyMonths: 12
    },
    ratings: [5, 4, 5, 4, 5]
  },
  {
    id: 102,
    title: "Ergonomic Mesh Office Chair",
    price: 245.00,
    category: "Furniture",
    inStock: true,
    tags: ["office", "home", "comfort"],
    details: {
      brand: "SitWell",
      color: "Charcoal Grey",
      warrantyMonths: 24
    },
    ratings: [4, 4, 3, 5]
  },
  {
    id: 103,
    title: "Stainless Steel Vacuum Water Bottle",
    price: 24.95,
    category: "Kitchen & Dining",
    inStock: false,
    tags: ["eco-friendly", "hydration", "outdoor"],
    details: {
      brand: "HydroPeak",
      color: "Ocean Blue",
      warrantyMonths: 6
    },
    ratings: [5, 5, 4, 5, 5, 4]
  },
  {
    id: 104,
    title: "Mechanical Gaming Keyboard",
    price: 89.99,
    category: "Electronics",
    inStock: true,
    tags: ["gaming", "peripherals", "rgb"],
    details: {
      brand: "ClickMaster",
      color: "RGB Custom",
      warrantyMonths: 12
    },
    ratings: [4, 5, 4, 3, 5]
  },
  {
    id: 105,
    title: "Water-Resistant Trail Running Shoes",
    price: 110.00,
    category: "Apparel",
    inStock: true,
    tags: ["sports", "footwear", "outdoor"],
    details: {
      brand: "TerraStride",
      color: "Forest Green",
      warrantyMonths: 3
    },
    ratings: [5, 4, 4]
  }
];

const product_find = products.find((product) => {
    return product.id === 102;
});

console.log(product_find);

// push() — Add a new item
// Where is it used?

// Shopping cart

// Scenario

// A customer clicks:

// Add to Cart

// const cart = [];

// const product = {
//     product_id: 101,
//     product_name: "Wireless Headphones",
//     price: 2499,
//     quantity: 1
// };

// cart.push(product);

// console.log(cart);


// some()  — Is any product out of stock?
// Real scenario

// Admin dashboard wants to show:

//  Some products are unavailable

const has_out_of_stock_product = products.some((product) => {
    return product.inStock === false;
});

console.log(has_out_of_stock_product);

// Output:

true

// every()  — Are all products in stock?

const all_products_available = products.every((product) => {
    return product.inStock === true;
});

console.log(all_products_available);

Output:

false

// Because product 103 is unavailable.

// . sort() — Price low to high
// Real scenario

// User selects:

// price low to high

const sorted_products = [...products];

sorted_products.sort((a, b) => {
    return a.price - b.price;
});

//sort modifies the original array

// 23. sort() — Highest rated products

// First calculate/assume average ratings

products_with_average_rating.sort((a, b) => {
    return b.average_rating - a.average_rating;
});
// Real scenario

// Top Rated

// The application sorts products by rating.


// slice() -pagination

// Suppose there are 100 products in the real application.

// const page_size = 2;
// const page_1 = products.slice(0, 2);
// const page_2 = products.slice(2, 4);

// splice() — Delete product
// Real scenario

// Delete Product #103


const product_index = products.findIndex((product) => {
    return product.id === 103;
});


// products.splice(product_index, 1);

// some() inside nested data
// Scenario

// Find products where at least one rating is 5.

const products_with_five_star = products.filter((product) => {
    return product.ratings.some((rating) => {
        return rating === 5;
    });
});

// Again:

// filter()
//    ↓
// some()

// This is very important for complex data processing.

// You already have a list sorted from oldest to newest and want to show newest first.

// products.reverse();

// But remember:

// reverse() modifies the original array.

// Safer:

// const reversed_products = [...products].reverse();

// concat() — Combine product lists

// Suppose your application receives:

// const electronics_products = [...];
// const apparel_products = [...];

// Combine:

// const all_products = electronics_products.concat(apparel_products);

// at() — Access from the end

// Instead of:

// products[products.length - 1]

// you can:

// products.at(-1)
// Real scenario

// Get the most recently added product:

// const latest_product = products.at(-1);



// ratings: [5, 4, 5]

// check:

console.log(Array.isArray(products[0].ratings));

// Output:

// true
// When processing API data, you might need to verify:
// Did the server actually give me an array

//number ascending order
const sorted_products1 = [...products].sort((a, b) => {
    return a.price - b.price;
});

console.log(sorted_products1);