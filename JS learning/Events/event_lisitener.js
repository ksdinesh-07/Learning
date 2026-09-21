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

const product = document.getElementById("product");
const buyButton = document.getElementById("buyButton");

    buyButton.addEventListener("click", function() {
        console.log("Button clicked");
    });

    product.addEventListener("click", function() {
        console.log("Product container clicked");

    });

const products = document.getElementById("products");

    products.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            console.log("Product selected");
        }
});