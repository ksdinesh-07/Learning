let cart_count = 0;
const add_to_cart_button = document.getElementById("add_to_cart");
const cart_count_display = document.getElementById("cart_count");

add_to_cart_button.addEventListener("click", function () {
    cart_count++;
    cart_count_display.innerText = `Cart Items: ${cart_count}`;
});

