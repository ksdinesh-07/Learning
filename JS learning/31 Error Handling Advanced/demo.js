class RestaurantClosedError extends Error {
    constructor(message) {
        super(message);
        this.status_code = 400;
        this.is_operational = true;
    }
}

class PaymentError extends Error {
    constructor(message) {
        // super(message);
        this.status_code = 402;
    }
}

// function place_order(restaurant_status) {
//     if (restaurant_status === "closed") {
//         throw new RestaurantClosedError("Restaurant is currently closed");
//     }w
//     console.log("Order placed successfully");
// }

function place_order() {
    throw new PaymentError("Payment failed");
}


try {
    place_order("closed");
} catch (error) {
    if (error instanceof RestaurantClosedError) {
        console.log("Custom error handled");
        console.log("Message:", error.message);
        console.log("Status code:", error.status_code);
        console.log("Operational error:", error.is_operational);
    }
    else if (error instanceof PaymentError) {
        console.log("Payment problem");
    }
     else {
        console.log("Unknown error:", error.message);
    }
}