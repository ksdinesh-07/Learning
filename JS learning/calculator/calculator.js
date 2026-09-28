const current_display = document.getElementById("current_display");
const previous_display = document.getElementById("previous_display");
const number_buttons = document.querySelectorAll("[data-number]");
const operation_buttons = document.querySelectorAll("[data-operation]");
const action_buttons = document.querySelectorAll("[data-action]");

let current_value = "0";
let previous_value = null;
let selected_operation = null;
let waiting_for_value = false;


function update_display() {
    current_display.textContent = current_value;
    if (previous_value !== null && selected_operation !== null) {
        previous_display.textContent=`${previous_value} ${selected_operation}`;
    } else {
        previous_display.textContent = "";
    }
}


function input_number(number) {
    if (waiting_for_value) {
        current_value = number;
        waiting_for_value = false;
    } else {
        if (current_value === "0") {
            current_value = number;
        } else {
            current_value += number;
        }
    }
    update_display();
}


function input_decimal() {
    if (waiting_for_value) {
        current_value = "0.";
        waiting_for_value = false;
        update_display();
        return;
    }
    if (!current_value.includes(".")) {
        current_value += ".";
    }
    update_display();
}


function select_operation(operation) {
    if (current_value === "Error") {
        return;
    }
    if (previous_value !== null && selected_operation !== null) {
        calculate_result();
    }
    previous_value = Number(current_value);
    selected_operation = operation;
    waiting_for_value = true;
    update_display();
}


function calculate_result() {
    if (
        previous_value === null ||
        selected_operation === null
    ) {
        return;
    }

    const second_value = Number(current_value);
    let result;

    if (selected_operation === "+") {
        result = previous_value + second_value;
    }
    else if (selected_operation === "-") {
        result = previous_value - second_value;
    }
    else if (selected_operation === "*") {
        result = previous_value * second_value;
    }
    else if (selected_operation === "/") {
        if (second_value === 0) {
            current_value = "Error";
            previous_value = null;
            selected_operation = null;
            waiting_for_value = true;
            update_display();
            return;
        }
        result = previous_value / second_value;
    }

    current_value = String(result);
    previous_value = null;
    selected_operation = null;
    waiting_for_value = true;
    update_display();
}


function clear_calculator() {
    current_value = "0";
    previous_value = null;
    selected_operation = null;
    waiting_for_value = false;
    update_display();
}


function delete_number() {
    if (waiting_for_value || current_value === "Error") {
        return;
    }
    if (current_value.length === 1) {
        current_value = "0";
    } else {
        current_value = current_value.slice(0, -1);
    }
    update_display();
}


function calculate_percentage() {
    if (current_value === "Error") {
        return;
    }
    current_value = String(
        Number(current_value) / 100
    );
    update_display();
}


function change_sign() {
    if (current_value === "0") {
        return;
    }
    if (current_value.startsWith("-")) {
        current_value = current_value.slice(1);
    } else {
        current_value = "-" + current_value;
    }
    update_display();
}


number_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const number = button.dataset.number;
        input_number(number);
    });

});


operation_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const operation = button.dataset.operation;
        select_operation(operation);
    });

});


action_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const action = button.dataset.action;
        if (action === "clear") {
            clear_calculator();
        }
        else if (action === "delete") {
            delete_number();
        }
        else if (action === "percentage") {
            calculate_percentage();
        }
        else if (action === "sign") {
            change_sign();
        }
        else if (action === "decimal") {
            input_decimal();
        }
        else if (action === "equals") {
            calculate_result();
        }
    });
});


document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key >= "0" && key <= "9") {
        input_number(key);
    }
    else if (key === ".") {
        input_decimal();
    }
    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ) {
        select_operation(key);
    }
    else if (key === "Enter" || key === "=") {
        calculate_result();
    }
    else if (key === "Backspace") {
        delete_number();
    }
    else if (key === "Escape") {
        clear_calculator();
    }
    else if (key === "%") {
        calculate_percentage();
    }
});