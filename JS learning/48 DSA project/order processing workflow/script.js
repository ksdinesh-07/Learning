const orders = [
    {
        order_id: "ORD-101",
        amount: 1500,
        payment_status: "pending",
        status: "Created"
    },
    {
        order_id: "ORD-102",
        amount: 2500,
        payment_status: "pending",
        status: "Created"
    },
    {
        order_id: "ORD-103",
        amount: 800,
        payment_status: "pending",
        status: "Created"
    }
];

// create 1 node
function create_node(name, children = []) {
    return {name,children};
}

// order processing decision tree
const workflow_tree = create_node("Order Created", [
    create_node("Check Payment", [
        create_node("Payment Success", [
            create_node("Process Order", [
                create_node("Order Confirmed")
            ])
        ]),
        create_node("Payment Failed", [
            create_node("Retry Payment", [
                create_node("Retry or Cancel Order")
            ])
        ])
    ])
]);

// display the orders 
function display_orders() {
    const orders_table = document.getElementById("orders_table");
    const order_select = document.getElementById("order_id");

    orders_table.innerHTML = "";
    order_select.innerHTML = "";

    for (const order of orders) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.order_id}</td>
            <td>₹${order.amount}</td>
            <td>${order.payment_status}</td>
            <td>${order.status}</td>`;

        orders_table.appendChild(row);
        const option =document.createElement("option");
        option.value= order.order_id;
        option.textContent = order.order_id;
        order_select.appendChild(option);
    }
}

// traverse  tree based on payment status
function find_next_action(node, payment_status) {
    if (node.name === "Check Payment") {
        const target_name = payment_status === "success" ? "Payment Success": "Payment Failed";
        const target_node = node.children.find(child => child.name === target_name);
        return target_node;
    }
    return null;
}

// process an order
function process_order() {
    const selected_order_id=document.getElementById("order_id").value;
    const payment_status=document.getElementById("payment_status").value;
    const order = orders.find(item => item.order_id === selected_order_id);
    if (!order) {
        return;
    }

    // find the payment decision in the tree
    const check_payment_node = workflow_tree.children[0];
    const payment_node = find_next_action(check_payment_node,payment_status);

    if (payment_status === "success") {
        order.payment_status = "success";
        order.status = "Confirmed";
    } else {
        order.payment_status = "failed";
        order.status = "Retry Required";
    }

    display_orders();

    const result = document.getElementById("result");
    result.className = payment_status;
    result.textContent =order.order_id + ": " +payment_node.name + " → " + (payment_status === "success"? "Process Order ---> Order Confirmed": "Retry Payment ---> Retry or Cancel Order");
}

// init the function
display_orders();


document.getElementById("process_button").addEventListener("click",process_order);
