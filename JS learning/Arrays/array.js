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
const products = [
    { id: 1, name: "T-Shirt", price: 499 },
    { id: 2, name: "Jeans", price: 999 },
    { id: 3, name: "Shoes", price: 1499 }
];


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