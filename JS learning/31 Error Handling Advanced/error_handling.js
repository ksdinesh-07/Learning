class Insufficient_balanceError extends Error {
    constructor(message) {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}

let balance = 5000;

function check_balance(amount) {

    if (amount > balance) {
        throw new Insufficient_balanceError(
            "Insufficient balance for this transfer"
        );
    }
    return true;
}

function process_transfer(amount) {
    check_balance(amount);
    balance -= amount;
    return "Transfer successful";
}

function transfer_money(amount) {
    try {
        const result = process_transfer(amount);
        return result;
    } catch (error) {
        throw error;
    }
}

const transfer_button = document.getElementById("transfer");
const amount_input = document.getElementById("amount");
const message = document.getElementById("message");
transfer_button.addEventListener("click", function () {
    const amount = Number(amount_input.value);
    try {
        const result = transfer_money(amount);
        message.innerText = result;
    } catch (error) {
        message.innerText = error.message;
        console.error(error);
    }
});