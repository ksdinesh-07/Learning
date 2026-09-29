// import {EventEmitter} from 'node:events';

// //creating an eventemitter object
// const order_system = new EventEmitter();
// // order_system has methos like .on() .emit() .once() .off()

// //listen for an event
// order_system.on("order_placed",(order_id)=>{
//     console.log(`order ${order_id} has been placed`);
// })

// order_system.emit("order_placed",101);

import { EventEmitter } from "node:events";


const user_system = new EventEmitter();

user_system.on("user_registered", (user_data) => {
    console.log(`Saving ${user_data.user_name} to database`);
});

user_system.on("user_registered", (user_data) => {
    console.log(`Sending welcome email to ${user_data.email}`);
});

user_system.on("user_registered", (user_data) => {
    console.log(`Sending notification for ${user_data.user_name}`);
});

function register_user(user_data) {
    console.log(`Registering user ${user_data.user_name}`);

    user_system.emit("user_registered", user_data);
}

const user_data = {
    user_id: 101,
    user_name: "Dinesh",
    email: "dinesh@gmail.com"
};

register_user(user_data);


//verification by email
//using the once caugth the first
user_system.once("email_verified", (user_id) => {
    console.log(`Email verified for user ${user_id}`);
});

user_system.emit("email_verified", 104);
user_system.emit("email_verified", 102);
user_system.emit("email_verified", 103);

// order system to use off the listening
const order_system = new EventEmitter();

function monitor_order(order_id) {
    console.log(`Monitoring order ${order_id}`);
}

order_system.on("order_placed", monitor_order);
order_system.emit("order_placed", 101);
order_system.off("order_placed", monitor_order);
order_system.emit("order_placed", 102);

