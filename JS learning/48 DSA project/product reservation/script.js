// // Product details
// const products = [
//     {
//         product_id: "P101",
//         warehouse_id: "WH-01",
//         available_stock: 20
//     },
//     {
//         product_id: "P102",
//         warehouse_id: "WH-02",
//         available_stock: 15
//     },
//     {
//         product_id: "P103",
//         warehouse_id: "WH-01",
//         available_stock: 30
//     },{
//         product_id:"P104",
//         warehouse_id: "WH-04",
//         available_stock:40
//     }
// ];

// // Reservation order details
// const orders = [
//     {
//         order_id: "ORD-101",
//         product_id: "P101",
//         reserved_units: 8,
//         status: "active"
//     },
//     {
//         order_id: "ORD-102",
//         product_id: "P101",
//         reserved_units: 7,
//         status: "active"
//     },
//     {
//         order_id: "ORD-103",
//         product_id: "P101",
//         reserved_units: 9,
//         status: "active"
//     },
//     {
//         order_id: "ORD-104",
//         product_id: "P102",
//         reserved_units: 10,
//         status: "active"
//     },
//     {
//         order_id: "ORD-105",
//         product_id: "P102",
//         reserved_units: 8,
//         status: "active"
//     },
//     {
//         order_id: "ORD-106",
//         product_id: "P104",
//         reserved_units: 12,
//         status: "active"
//     }
// ];

// const graph = new Map();

// // Connect two nodes
// function add_connection(from, to) {
//     if (!graph.has(from)) {
//         graph.set(from, []);
//     }

//     graph.get(from).push(to);
// }

// // build graph for the selected product
// function build_graph(selected_product) {
//     graph.clear();

//     const product_node = "Product:" + selected_product.product_id;
//     const warehouse_node = "Warehouse:" + selected_product.warehouse_id;
//     const stock_node = "Stock:" + selected_product.product_id;

//     add_connection(product_node, warehouse_node);
//     add_connection(warehouse_node, stock_node);

//     for (const order of orders) {
//         if (order.product_id === selected_product.product_id && order.status === "active") {
//             const reservation_node = "Reservation:" + order.order_id;
//             const order_node = "Order:" + order.order_id;

//             add_connection(stock_node, reservation_node);
//             add_connection(reservation_node, order_node);
//         }
//     }
// }

// // find connected orde 
// function find_connected_orders(start_node) {
//     const visited = new Set();
//     const pending_nodes = [start_node];
//     const connected_orders = [];

//     while (pending_nodes.length > 0) {
//         const current_node = pending_nodes.shift();

//         if (visited.has(current_node)) {
//             continue;
//         }
//         visited.add(current_node);
//         if (current_node.startsWith("Order:")) {
//             connected_orders.push(
//                 current_node.replace("Order:", "")
//             );
//         }
//         const neighbours = graph.get(current_node) || [];
//         for (const neighbour of neighbours) {
//             pending_nodes.push(neighbour);
//         }
//     }
//     return connected_orders;
// }

// // display orders for the selected product
// function display_orders(selected_product_id) {
//     const orders_container = document.getElementById("orders");
//     orders_container.innerHTML = "";
//     const selected_orders = orders.filter(
//         order => order.product_id === selected_product_id
//     );
//     if (selected_orders.length === 0) {
//         orders_container.textContent = "No orders found for this product.";
//         return;
//     }
//     for (const order of selected_orders) {
//         const order_element = document.createElement("div");
//         order_element.className = "order";
//         order_element.textContent =
//             order.order_id + " - " +
//             order.reserved_units + " units - " +
//             order.status;
//         orders_container.appendChild(order_element);
//     }
// }

// // update product details when selection changes
// function update_product_details() {
//     const selected_product_id =document.getElementById("product_id").value;
//     const selected_product =products.find(
//         product => product.product_id ===selected_product_id
//     );
//     if (!selected_product) {
//         return;
//     }
//     document.getElementById("warehouse_id").value =selected_product.warehouse_id;
//     document.getElementById("available_stock").value =selected_product.available_stock;
//     display_orders(selected_product_id);
//     const result = document.getElementById("result");
//     result.className = "";
//     result.textContent = "Click the button to check reservations.";
// }

// // checking inventory reserve
// function check_reservations() {
//     const selected_product_id = document.getElementById("product_id").value;
//     const selected_product = products.find(
//         product => product.product_id === selected_product_id
//     );

//     const available_stock = Number(document.getElementById("available_stock").value);
//     const result = document.getElementById("result");
//     if (!selected_product || document.getElementById("available_stock").value.trim() === "" || !Number.isFinite(available_stock) ||available_stock < 0) {
//         result.className = "conflict";
//         result.textContent = "Enter a valid stock quantity.";
//         return;
//     }
//     selected_product.available_stock = available_stock;
//     build_graph(selected_product);
//     const stock_node = "Stock:" + selected_product.product_id;
//     const connected_order_ids = find_connected_orders(stock_node);
//     let total_reserved = 0;
//     for(const order of orders){
//         if(connected_order_ids.includes(order.order_id) && order.status === "active") {
//             total_reserved += order.reserved_units;
//         }
//     }

//     const remaining_stock = available_stock - total_reserved;
//     if (remaining_stock < 0) {
//         result.className = "conflict";
//         result.textContent ="CONFLICT DETECTED! Product: " +
//             selected_product.product_id +
//             ". Available stock: " + available_stock +
//             ". Reserved stock: " + total_reserved +
//             ". Over-reserved units: " +
//             Math.abs(remaining_stock) +
//             ". Review the active orders before confirming fulfilment.";
//     } else {
//         result.className = "safe";
//         result.textContent ="No reservation conflict. Product: " +
//             selected_product.product_id +
//             ". Available stock: " + available_stock +
//             ". Reserved stock: " + total_reserved +
//             ". Remaining stock: " + remaining_stock + ".";
//     }
// }

// // handle product selection
// document.getElementById("product_id").addEventListener("change",update_product_details);

// // handle inventory checking
// document.getElementById("check_button").addEventListener("click",check_reservations);

// // initiate the page page
// update_product_details();





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
    },
    {
        product_id: "P104",
        warehouse_id: "WH-04",
        available_stock: 40
    }
];

const orders = [
    { order_id: "ORD-101", product_id: "P101", reserved_units: 8, status: "active" },
    { order_id: "ORD-102", product_id: "P101", reserved_units: 7, status: "active" },
    { order_id: "ORD-103", product_id: "P101", reserved_units: 9, status: "active" },
    { order_id: "ORD-104", product_id: "P102", reserved_units: 10, status: "active" },
    { order_id: "ORD-105", product_id: "P102", reserved_units: 8, status: "active" },
    { order_id: "ORD-106", product_id: "P104", reserved_units: 12, status: "active" }
];

console.log("STEP 0: Application data loaded");
console.log("Products:", products);
console.log("Orders:", orders);

const graph = new Map();

// Connect two graph nodes
function add_connection(from, to) {
    console.log(`Adding connection: ${from} -> ${to}`);

    if (!graph.has(from)) {
        graph.set(from, []);
        console.log("Created graph entry:", from);
    }

    graph.get(from).push(to);

    console.log("Current neighbours:", graph.get(from));
}

// Build the graph for the selected product
function build_graph(selected_product) {
    console.log("\nSTEP 1: Building graph");
    console.log("Selected product:", selected_product);
    graph.clear();
    console.log("Previous graph connections cleared.");
    const product_node = "Product:" + selected_product.product_id;
    const warehouse_node = "Warehouse:" + selected_product.warehouse_id;
    const stock_node = "Stock:" + selected_product.product_id;
    console.log("Product node:", product_node);
    console.log("Warehouse node:", warehouse_node);
    console.log("Stock node:", stock_node);

    add_connection(product_node, warehouse_node);
    add_connection(warehouse_node, stock_node);
    console.log("Searching active orders...");
    for (const order of orders) {
        console.log("Checking order:", order);
        if (order.product_id === selected_product.product_id && order.status === "active") {
            const reservation_node = "Reservation:" + order.order_id;
            const order_node = "Order:" + order.order_id;

            console.log("Matching active order:", order.order_id);
            add_connection(stock_node, reservation_node);
            add_connection(reservation_node, order_node);
        } else {
            console.log("Order skipped:", order.order_id);
        }
    }

    console.log("Final graph:", graph);
    console.log("Graph building complete.");
}

// Find connected orders using Breadth-First Search
function find_connected_orders(start_node) {
    console.log("\nSTEP 2: Starting BFS");
    console.log("Starting node:", start_node);

    const visited = new Set();
    const pending_nodes = [start_node];
    const connected_orders = [];
    console.log("Initial queue:", pending_nodes);

    while (pending_nodes.length > 0) {
        const current_node = pending_nodes.shift();
        console.log("\nRemoved from queue:", current_node);
        if (visited.has(current_node)) {
            console.log("Already visited. Skipping:", current_node);
            continue;
        }

        visited.add(current_node);
        console.log("Visited nodes:", [...visited]);
        if (current_node.startsWith("Order:")) {
            const order_id = current_node.replace("Order:", "");
            connected_orders.push(order_id);
            console.log("Connected order found:", order_id);
        }

        const neighbours = graph.get(current_node) || [];
        console.log("Neighbours:", neighbours);
        for (const neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                pending_nodes.push(neighbour);
                console.log("Added to queue:", neighbour);
            }
        }
        console.log("Queue now:", pending_nodes);
    }

    console.log("Connected order IDs:", connected_orders);
    console.log("BFS complete.");
    return connected_orders;
}

// Display orders for the selected product
function display_orders(selected_product_id) {
    console.log("\nDisplaying orders for:", selected_product_id);
    const orders_container = document.getElementById("orders");
    orders_container.innerHTML = "";
    const selected_orders = orders.filter(
        order => order.product_id === selected_product_id
    );
    console.log("Orders belonging to product:", selected_orders);
    if (selected_orders.length === 0) {
        orders_container.textContent =
            "No orders found for this product.";
        return;
    }
    for (const order of selected_orders) {
        console.log("Displaying order:", order.order_id);
        const order_element = document.createElement("div");
        order_element.className = "order";
        order_element.textContent =
            order.order_id + " - " +
            order.reserved_units + " units - " +
            order.status;
        orders_container.appendChild(order_element);
    }
}

// Update product details when the selection changes
function update_product_details() {
    console.log("\nSTEP 3: Product selection");
    const selected_product_id =document.getElementById("product_id").value;
    console.log("Selected product ID:", selected_product_id);
    const selected_product = products.find(
        product => product.product_id === selected_product_id
    );

    console.log("Product found:", selected_product);
    if (!selected_product) {
        console.error("Product not found.");
        return;
    }
    document.getElementById("warehouse_id").value =selected_product.warehouse_id;
    document.getElementById("available_stock").value =selected_product.available_stock;
    console.log("Warehouse updated:", selected_product.warehouse_id);
    console.log("Stock updated:", selected_product.available_stock);
    display_orders(selected_product_id);
    const result = document.getElementById("result");
    result.className = "";
    result.textContent = "Click the button to check reservations.";
    console.log("Product details updated.");
}

// Check inventory reservations
function check_reservations() {
    console.log("\nSTEP 4: Checking reservations");
    const selected_product_id =document.getElementById("product_id").value;
    const selected_product = products.find(
        product => product.product_id === selected_product_id
    );

    const stock_input=document.getElementById("available_stock").value;
    const available_stock = Number(stock_input);
    const result = document.getElementById("result");

    console.log("Selected product:", selected_product);
    console.log("Stock input:", stock_input);
    console.log("Stock converted to number:", available_stock);

    if (!selected_product || stock_input.trim() === "" || !Number.isFinite(available_stock) || available_stock < 0 ||!Number.isInteger(available_stock)) {
        console.log("Validation failed.");
        result.className = "conflict";
        result.textContent ="Enter a valid non-negative whole number for stock.";
        return;
    }
    console.log("Validation passed.");
    selected_product.available_stock = available_stock;
    console.log("Updated stock:", selected_product.available_stock);
    build_graph(selected_product);
    const stock_node = "Stock:" + selected_product.product_id;
    console.log("Starting BFS from:", stock_node);
    const connected_order_ids = find_connected_orders(stock_node);
    console.log("Connected order IDs:", connected_order_ids);
    let total_reserved = 0;
    console.log("\nSTEP 5: Calculating reserved stock");
   
    for (const order of orders) {
        console.log("Checking reservation:", order.order_id);
        if (connected_order_ids.includes(order.order_id) &&order.status === "active") {
            total_reserved += order.reserved_units;
            console.log("Added units:",order.reserved_units,"Running total:",total_reserved);
        } else {
            console.log("Reservation not included:", order.order_id);
        }
    }

    const remaining_stock = available_stock - total_reserved;
    console.log("Available stock:", available_stock);
    console.log("Total reserved:", total_reserved);
    console.log("Remaining stock:", remaining_stock);

    if (remaining_stock < 0) {
        const over_reserved_units = Math.abs(remaining_stock);
        console.log("CONFLICT DETECTED!");
        console.log("Over-reserved units:", over_reserved_units);
        result.className = "conflict";
        result.textContent =
            "CONFLICT DETECTED! Product: " +
            selected_product.product_id +
            ". Available stock: " + available_stock +
            ". Reserved stock: " + total_reserved +
            ". Over-reserved units: " + over_reserved_units +
            ". Review the active orders before fulfilment.";
    } else {
        console.log("No reservation conflict.");
        result.className = "safe";
        result.textContent =
            "No reservation conflict. Product: " +
            selected_product.product_id +
            ". Available stock: " + available_stock +
            ". Reserved stock: " + total_reserved +
            ". Remaining stock: " + remaining_stock + ".";
    }

    console.log("Reservation check complete.");
}

// Initialize after the HTML has loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Initializing inventory application...");
    const required_ids = [
        "product_id",
        "warehouse_id",
        "available_stock",
        "orders",
        "result",
        "check_button"
    ];

    for (const id of required_ids) {
        if (!document.getElementById(id)) {
            console.error(
                "Required HTML element is missing. Check this ID:",
                id
            );
            return;
        }
    }

    console.log("All required HTML elements found.");
    document.getElementById("product_id").addEventListener("change",update_product_details);
    document.getElementById("check_button").addEventListener("click",check_reservations);
    update_product_details();
});
