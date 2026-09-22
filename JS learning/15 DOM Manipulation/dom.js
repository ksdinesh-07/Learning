// //get element by id

// const page_title = document.getElementById('pageTitle');
// console.log(page_title);   
// page_title.textContent = "Men's Fashion";

// //queryselector

// const cart_item=document.querySelector("#cartItems");
// console.log(cart_item);
// cart_item.textContent="hello";

// //create element

// const view_desc=document.createElement('div');
// view_desc.textContent="Fine Quality premium T-shirts";


// //inner html

// const cartItems = document.getElementById("cartItems");
// cartItems.innerHTML = `<h3>Order Confirmed</h3>
//                         <p>Thank you for your purchase!</p>`;

// //class list

// const product =document.querySelector(".product");
// //adding class list

// // removing class list
// // product.classList.remove('selected');

// const add_button=document.querySelector('#addButton')

// add_button.addEventListener("click",function(){
//     add_button.classList.add('Selected');
//     add_button.textContent="Added!"
//     add_button.ariaDisabled=true;
// })

// //attributes

// const image=document.querySelector('img');
// console.log(image.getAttribute("src"));

// image.setAttribute("alt","Customer ptofile photo");

// image.removeAttribute("alt");

// const button = document.getElementById("buyButton");
// button.setAttribute("disabled", "");

// const link = document.getElementById("productLink");
// link.setAttribute("href", "/products/tshirt");

// const email_input=document.getElementById("email_input");
// email_input.setAttribute("placeholder","Enter your email");

// ----------------------------------------------------------
const pageTitle = document.getElementById("pageTitle");
const addButton = document.getElementById("addButton");
const cartItems = document.getElementById("cartItems");

const product = document.querySelector(".product");

addButton.addEventListener("click", function() {

    // Change heading
    pageTitle.textContent = "Product Added";

    // Create new cart item
    const cartItem = document.createElement("div");

    // Add content
    cartItem.innerHTML = `
        <p>Oversized T-Shirt - ₹499</p>
    `;

    // Add class
    cartItem.classList.add("cart-item");

    // Add attribute
    cartItem.setAttribute("data-product", "tshirt");

    // Add item to cart
    cartItems.appendChild(cartItem);

    // Highlight product
    product.classList.add("added");

    console.log(cartItem.getAttribute("data-product"));
});

const course=document.getElementById('course');
const select_button=document.getElementById("selectButton");
select_button.addEventListener("click",function(){
    course.classList.add("selected");
})