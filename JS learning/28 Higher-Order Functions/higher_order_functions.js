//obj

const order = {
    id: 101,
    customer: "Arun",
    amount: 2500,
    status: "delivered"
};

// 1. function passed as an argument

function process_order(order, callback) {
    return callback(order);
}

function check_order(order) {
    return order.status === "delivered";
}

// 2. higher order function

function calculate_discount(amount, discount_rate) {
    return amount - (amount * discount_rate / 100);
}

function apply_discount(order, discount_function) {
    return discount_function(order.amount, 10);
}

// 3. function returning a function

function create_status_checker(status) {
    return function (order) {
        return order.status === status;
    };
}

const delivered_order = create_status_checker("delivered");

// 4. higher order function with map

const orders = [
    { id: 101, amount: 2500 },
    { id: 102, amount: 1500 },
    { id: 103, amount: 3000 }
];
const order_amounts = orders.map(function (order) {
    return order.amount;
});

// 5. higher order function with filter

const expensive_orders = orders.filter(function (order) {
    return order.amount > 2000;
});

// 6. Display

const checkout_button = document.getElementById("checkout");
checkout_button.addEventListener("click", function () {
    const order_status = process_order(
        order,
        check_order
    );
    const discounted_price = apply_discount(
        order,
        calculate_discount
    );
    const is_delivered = delivered_order(order);
    document.getElementById("order").innerText =`Order ID: ${order.id}`;
    document.getElementById("amount").innerText =`Original Amount: ₹${order.amount}`;
    document.getElementById("discount").innerText =`After Discount: ₹${discounted_price}`;
    document.getElementById("status").innerText =`Delivered: ${order_status}`;
    document.getElementById("checker").innerText =`Status Checker: ${is_delivered}`;
    document.getElementById("amounts").innerText =`Order Amounts: ₹${order_amounts.join(", ₹")}`;
    document.getElementById("expensive").innerText =`Expensive Orders: ${expensive_orders.length}`;
});