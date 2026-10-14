const output = document.getElementById("output");

function print(message) {
    output.textContent += `${message}\n`;
}

class Logger {
    static instance;
    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }
        Logger.instance = this;
    }

    log(message) {
        print(`Singleton: ${message}`);
    }
}

class EmailNotification {
    send(message) {
        print(`Factory: Email - ${message}`);
    }
}

class SmsNotification {
    send(message) {
        print(`Factory: SMS - ${message}`);
    }
}

function notification_factory(type) {
    if (type === "email") {
        return new EmailNotification();
    }
    if (type === "sms") {
        return new SmsNotification();
    }
}

class Event_manager {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    notify(message) {
        this.observers.forEach((observer) => observer(message));
    }
}

const bank_account = (() => {
    let balance = 5000;
    return {
        deposit(amount) {
            balance += amount;
        },
        get_balance() {
            return balance;
        }
    };
})();

const user_model = {
    get_user() {
        return {
            name: "Dinesh"
        };
    }
};

const user_view = {
    display_user(user) {
        print(`MVC: Welcome ${user.name}`);
    }
};

const user_controller = {
    show_user() {
        const user = user_model.get_user();
        user_view.display_user(user);
    }
};

const payment_strategies = {
    upi(amount) {
        print(`Strategy: Paid ₹${amount} using UPI`);
    },
    card(amount) {
        print(`Strategy: Paid ₹${amount} using Card`);
    }
};

function run_poc() {
    output.textContent = "";
    const logger_1 = new Logger();
    const logger_2 = new Logger();
    logger_1.log(logger_1 === logger_2);
    const notification = notification_factory("email");
    notification.send("Account created");
    const event_manager = new Event_manager();
    event_manager.subscribe((message) => {
        print(`Observer: User received - ${message}`);
    });
    event_manager.subscribe((message) => {
        print(`Observer: Admin received - ${message}`);
    });
    event_manager.notify("New transaction");
    bank_account.deposit(2000);
    print(`Module: Balance = ₹${bank_account.get_balance()}`);
    user_controller.show_user();
    const selected_strategy = payment_strategies.upi;
    selected_strategy(1500);
}

document.getElementById("run_button").addEventListener("click", run_poc);


// # Module Pattern

// ## What is Module Pattern?

// The **Module pattern** organizes related variables and functions into a single unit while controlling what is publicly accessible.

// It helps create:

// * private data
// * public functions
// * organized code
// * encapsulation

// ---

// ## Example

// ```javascript
// const bank_account = (() => {
//     let balance = 0;

//     function deposit(amount) {
//         balance += amount;
//     }

//     function withdraw(amount) {
//         if (amount > balance) {
//             throw new Error("Insufficient balance");
//         }

//         balance -= amount;
//     }

//     function get_balance() {
//         return balance;
//     }

//     return {
//         deposit,
//         withdraw,
//         get_balance
//     };
// })();
// ```

// Use it:

// ```javascript
// bank_account.deposit(5000);

// console.log(bank_account.get_balance());

// bank_account.withdraw(1000);

// console.log(bank_account.get_balance());
// ```

// Output:

// ```text
// 5000
// 4000
// ```

// But this does not work:

// ```javascript
// console.log(bank_account.balance);
// ```

// because `balance` is private.

// ---

// ## Module Structure

// ```text
// Module
//  ├── Private data
//  ├── Private functions
//  │
//  └── Public API
//        ├── deposit()
//        ├── withdraw()
//        └── get_balance()
// ```

// The outside code only interacts with the public API.

// ---

// ## Modern JavaScript Modules

// Modern ES modules provide a cleaner approach.

// ### bank_account.js

// ```javascript
// let balance = 0;

// function deposit(amount) {
//     balance += amount;
// }

// function withdraw(amount) {
//     if (amount > balance) {
//         throw new Error("Insufficient balance");
//     }

//     balance -= amount;
// }

// function get_balance() {
//     return balance;
// }

// export {
//     deposit,
//     withdraw,
//     get_balance
// };
// ```

// ### app.js

// ```javascript
// import {
//     deposit,
//     withdraw,
//     get_balance
// } from "./bank_account.js";

// deposit(5000);

// withdraw(1000);

// console.log(get_balance());
// ```

// The `balance` variable remains inside the module.

// ---


// # Strategy Pattern

// ## What is Strategy?

// The **Strategy pattern** allows you to define multiple algorithms or behaviors and choose one at runtime.

// Instead of writing:

// ```javascript
// if (...)
// else if (...)
// else if (...)
// ```

// for every possible behavior, you can create separate strategies.

// ---

// ## Real-world Example

// Consider payment processing.

// There may be:

// ```text
// UPI
// Card
// Net Banking
// ```

// Each payment method has different processing logic.

// Create separate strategies:

// ```javascript
// function pay_with_upi(amount) {
//     return `Paid ₹${amount} using UPI`;
// }

// function pay_with_card(amount) {
//     return `Paid ₹${amount} using Card`;
// }

// function pay_with_net_banking(amount) {
//     return `Paid ₹${amount} using Net Banking`;
// }
// ```

// Select a strategy:

// ```javascript
// function process_payment(strategy, amount) {
//     return strategy(amount);
// }
// ```

// Now:

// ```javascript
// console.log(
//     process_payment(pay_with_upi, 1000)
// );

// console.log(
//     process_payment(pay_with_card, 2000)
// );
// ```

// Output:

// ```text
// Paid ₹1000 using UPI
// Paid ₹2000 using Card
// ```

// The payment processor doesn't need to know the internal implementation of each payment method.

// ---

// ## Strategy using Objects

// Another approach:

// ```javascript
// const payment_strategies = {
//     upi: pay_with_upi,
//     card: pay_with_card,
//     net_banking: pay_with_net_banking
// };
// ```

// Then:

// ```javascript
// const payment_method = "upi";

// const result = payment_strategies[payment_method](1500);

// console.log(result);
// ```

// This is useful when the strategy is selected dynamically.

// ---

// # Strategy vs Factory

// These patterns can look similar, but their purposes are different.

// | Pattern  | Main Purpose                 |
// | -------- | ---------------------------- |
// | Factory  | Creates an object            |
// | Strategy | Selects a behavior/algorithm |

// Example:

// ```text
// Factory
//    ↓
// Which object should I create?

// Strategy
//    ↓
// Which behavior should I use?
// ```

// For example:

// ```javascript
// const payment_processor = create_payment_processor("upi");
// ```

// Factory decides what object to create.

// Then:

// ```javascript
// payment_processor.pay(1000);
// ```

// The selected object determines how the payment works.

// ---

// # Singleton vs Module

// Both can provide shared state, but they are conceptually different.

// | Singleton                                   | Module                                 |
// | ------------------------------------------- | -------------------------------------- |
// | Focuses on one instance                     | Focuses on code organization           |
// | Usually implemented with class/object logic | Built naturally into ES modules        |
// | Controls object creation                    | Controls exports and visibility        |
// | Common for shared services                  | Common for organizing application code |

// ---

// # Observer vs Strategy

// | Observer                            | Strategy                           |
// | ----------------------------------- | ---------------------------------- |
// | Handles notifications/events        | Handles interchangeable behavior   |
// | One event can notify many observers | Usually one strategy is selected   |
// | Focuses on communication            | Focuses on algorithm selection     |
// | Useful for event-driven systems     | Useful for changing business logic |

// ---
