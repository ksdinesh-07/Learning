//obj

const product = {
    name: "Laptop",
    price: 50000,
    quantity: 1
};

// 1. pure function

function calculate_subtotal(product) {
    return product.price * product.quantity;
}

// 2. immutability

const original_product = {
    name: product.name,
    price: product.price,
    quantity: product.quantity
};

const updated_product = {
    ...original_product,
    quantity: 2
};

// 3. pure function

function apply_discount(amount,discount_rate) {
    return amount - (amount * discount_rate / 100);
}
function calculate_tax(amount,tax_rate) {
    return amount + (amount * tax_rate / 100);
}

function add_shipping(amount,shipping_charge) {
    return amount + shipping_charge;
}

// 4.compositions

function calculate_checkout(product) {
    const subtotal=calculate_subtotal(product);
    const discounted_amount=apply_discount(subtotal, 10);
    const taxed_amount=calculate_tax(discounted_amount, 18);
    const final_amount=add_shipping(taxed_amount, 500);
    return final_amount;
}

// 5. currying

function create_discount(discount_rate) {
    return function (amount) {
        return apply_discount(amount,discount_rate);
    };
}
const ten_percent_discount=create_discount(10);

// 6.Display 
const checkout_button =document.getElementById("checkout");

checkout_button.addEventListener("click", function () {
    const subtotal=calculate_subtotal(product);
    const discounted_price=ten_percent_discount(subtotal);
    const discount_amount=subtotal - discounted_price;
    const tax_amount=discounted_price * 18 / 100;
    const final_total=calculate_checkout(product);

    document.getElementById("product").innerText =`Product: ${product.name}`;
    document.getElementById("price").innerText =`Subtotal: ₹${subtotal}`;
    document.getElementById("discount").innerText =`After Discount: ₹${discounted_price}`;
    document.getElementById("tax").innerText =`Tax: ₹${tax_amount}`;
    document.getElementById("shipping").innerText =`Shipping: ₹500`;
    document.getElementById("total").innerText =`Final Total: ₹${final_total}`;
});