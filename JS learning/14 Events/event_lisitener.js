let btn=document.getElementById('sj');

btn.addEventListener('click',(event)=>{
    btn.textContent="Thanks for clicking";
    console.log('clicked');
})

btn.addEventListener('mouseover',(event)=>{
    btn.textContent='Thanks for hovering';
    console.log('hover');
})

btn.addEventListener('mouseout',(event)=>{
    btn.textContent='Thanks for hovering out';
    console.log('hover out');

})

document.addEventListener('keydown',(event)=>{
    if(event.key==='ArrowUp'){
        btn.textContent=Number(btn.textContent)+1;
    }
    else if(event.key==='ArrowDown'){
        btn.textContent=Number(btn.textContent)-1;
    }
    
    console.log(event.key);
})


// event listener
const add_button=document.getElementById('add_button');

add_button.addEventListener('click',function(event){
    console.log(event.type);
    console.log(event.target);
    console.log('Product added to cart')
})

//event obj ---> event

const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Login form submitted");
});

//event Bubbling

// const product = document.getElementById("product");
// const buyButton = document.getElementById("buyButton");

//     buyButton.addEventListener("click", function() {
//         console.log("Button clicked");
//     });

//     product.addEventListener("click", function() {
//         console.log("Product container clicked");

//     });

// const products = document.getElementById("products");

//     products.addEventListener("click", function(event) {
//         if (event.target.tagName === "BUTTON") {
//             console.log("Product selected");
//         }
// });


// const product_list =document.getElementById("product_list");
// const buy_buttons =document.querySelectorAll(".buy_button");

// buy_buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         console.log("Button clicked");
//     });
// });

// product_list.addEventListener("click", () => {
//     console.log("Product list clicked");
// });

const product_list=document.getElementById("product_list");
const product=document.getElementById("product");
const buy_button=document.getElementById("buy_button");

// Button event
buy_button.addEventListener("click", () => {
    console.log("1. Buy Button clicked");
});
// Product event
product.addEventListener("click", () => {
    console.log("2. Product clicked");
});
// Product list event
product_list.addEventListener("click", () => {
    console.log("3. Product List clicked");
});
// Body event
document.body.addEventListener("click", () => {
    console.log("4. Body clicked");
});



// One event listener on parent
// product_list.addEventListener("click", (event) => {
//     console.log("Product list clicked");

//     // Check whether the clicked element is a Buy Now button
//     if (event.target.classList.contains("buy_button")) {

//         console.log("Buy button clicked");

//         // Find the product containing the button
//         const product =
//             event.target.closest(".product");

//         // Get product ID
//         const product_id =
//             product.dataset.product_id;

//         // Get product name
//         const product_name =
//             product.querySelector("h3").textContent;

//         console.log("Product ID:", product_id);
//         console.log("Product Name:", product_name);
//     }

// });