// Product details
const products = [
    {
        product_id: "P101",
        warehouse_id: "WH-01",
        available_stock: 20
    },
    {
        product_id: "P102",
        warehouse_id: "WH-02",
        available_stock: 15
    },
    {
        product_id: "P103",
        warehouse_id: "WH-01",
        available_stock: 30
    }
];

// Reservation order details
const orders = [
    {
        order_id: "ORD-101",
        product_id: "P101",
        reserved_units: 8,
        status: "active"
    },
    {
        order_id: "ORD-102",
        product_id: "P101",
        reserved_units: 7,
        status: "active"
    },
    {
        order_id: "ORD-103",
        product_id: "P101",
        reserved_units: 9,
        status: "active"
    },
    {
        order_id: "ORD-104",
        product_id: "P102",
        reserved_units: 10,
        status: "active"
    },
    {
        order_id: "ORD-105",
        product_id: "P102",
        reserved_units: 8,
        status: "active"
    },
    {
        order_id: "ORD-106",
        product_id: "P103",
        reserved_units: 12,
        status: "active"
    }
];

const graph = new Map();

// Connect two nodes
function add_connection(from, to) {
    if (!graph.has(from)) {
        graph.set(from, []);
    }

    graph.get(from).push(to);
}

// build graph for the selected product
function build_graph(selected_product) {
    graph.clear();

    const product_node = "Product:" + selected_product.product_id;
    const warehouse_node = "Warehouse:" + selected_product.warehouse_id;
    const stock_node = "Stock:" + selected_product.product_id;

    add_connection(product_node, warehouse_node);
    add_connection(warehouse_node, stock_node);

    for (const order of orders) {
        if (order.product_id === selected_product.product_id && order.status === "active") {
            const reservation_node = "Reservation:" + order.order_id;
            const order_node = "Order:" + order.order_id;

            add_connection(stock_node, reservation_node);
            add_connection(reservation_node, order_node);
        }
    }
}

// find connected orde 
function find_connected_orders(start_node) {
    const visited = new Set();
    const pending_nodes = [start_node];
    const connected_orders = [];

    while (pending_nodes.length > 0) {
        const current_node = pending_nodes.shift();

        if (visited.has(current_node)) {
            continue;
        }

        visited.add(current_node);

        if (current_node.startsWith("Order:")) {
            connected_orders.push(
                current_node.replace("Order:", "")
            );
        }

        const neighbours = graph.get(current_node) || [];
        for (const neighbour of neighbours) {
            pending_nodes.push(neighbour);
        }
    }

    return connected_orders;
}

// display orders for the selected product
function display_orders(selected_product_id) {
    const orders_container = document.getElementById("orders");

    orders_container.innerHTML = "";
    const selected_orders = orders.filter(
        order => order.product_id === selected_product_id
    );

    if (selected_orders.length === 0) {
        orders_container.textContent = "No orders found for this product.";
        return;
    }

    for (const order of selected_orders) {
        const order_element = document.createElement("div");

        order_element.className = "order";
        order_element.textContent =
            order.order_id + " - " +
            order.reserved_units + " units - " +
            order.status;

        orders_container.appendChild(order_element);
    }
}

// update product details when selection changes
function update_product_details() {
    const selected_product_id =document.getElementById("product_id").value;

    const selected_product = products.find(
        product => product.product_id === selected_product_id
    );

    if (!selected_product) {
        return;
    }

    document.getElementById("warehouse_id").value =selected_product.warehouse_id;
    document.getElementById("available_stock").value =selected_product.available_stock;
    display_orders(selected_product_id);

    const result = document.getElementById("result");
    result.className = "";
    result.textContent = "Click the button to check reservations.";
}

// checking inventory reserve
function check_reservations() {
    const selected_product_id = document.getElementById("product_id").value;

    const selected_product = products.find(
        product => product.product_id === selected_product_id
    );

    const available_stock = Number(document.getElementById("available_stock").value);
    const result = document.getElementById("result");

    if (!selected_product || document.getElementById("available_stock").value.trim() === "" || !Number.isFinite(available_stock) ||available_stock < 0) {
        result.className = "conflict";
        result.textContent = "Enter a valid stock quantity.";
        return;
    }

    selected_product.available_stock = available_stock;
    build_graph(selected_product);
    const stock_node = "Stock:" + selected_product.product_id;
    const connected_order_ids = find_connected_orders(stock_node);

    let total_reserved = 0;
    for (const order of orders) {
        if (connected_order_ids.includes(order.order_id) && order.status === "active") {
            total_reserved += order.reserved_units;
        }
    }

    const remaining_stock = available_stock - total_reserved;
    if (remaining_stock < 0) {
        result.className = "conflict";
        result.textContent ="CONFLICT DETECTED! Product: " +
            selected_product.product_id +
            ". Available stock: " + available_stock +
            ". Reserved stock: " + total_reserved +
            ". Over-reserved units: " +
            Math.abs(remaining_stock) +
            ". Review the active orders before confirming fulfilment.";
    } else {
        result.className = "safe";
        result.textContent ="No reservation conflict. Product: " +
            selected_product.product_id +
            ". Available stock: " + available_stock +
            ". Reserved stock: " + total_reserved +
            ". Remaining stock: " + remaining_stock + ".";
    }
}

// handle product selection
document.getElementById("product_id").addEventListener("change",update_product_details);

// handle inventory checking
document.getElementById("check_button").addEventListener("click",check_reservations);

// initiate the page page
update_product_details();