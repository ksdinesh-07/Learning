import { EventEmitter } from "node:events";
const order_emitter = new EventEmitter();

order_emitter.on("order_placed", (order_id, customer_name) => {
    console.log(`Order ${order_id} placed successfully.`);
    console.log(`Customer: ${customer_name}`);
});

order_emitter.on("order_placed", (order_id) => {
    console.log(`Notification: Your order ${order_id} has been received.`);
});

function place_order(order_id, customer_name) {
    console.log("Placing order...");
    order_emitter.emit("order_placed", order_id, customer_name);
}

place_order(101, "Gowtham");
