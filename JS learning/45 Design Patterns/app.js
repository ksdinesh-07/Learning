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