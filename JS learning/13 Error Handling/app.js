

const transfer_amount_input =document.getElementById("transfer_amount");
const transfer_button=document.getElementById("transfer_button");
const balance_display=document.getElementById("balance");
const status_display=document.getElementById("status");

let account_balance = 10000;

// Custom Error
class InsufficientBalanceError extends Error {
    constructor(message) {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}

class InvalidAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAmountError";
    }
}

// Transfer function
function transfer_money(amount) {
    if (amount <= 0) {
        throw new Error("Transfer amount must be greater than zero");
    }

    if (amount > account_balance) {
        throw new InsufficientBalanceError("Insufficient balance for this transfer");
    }

    account_balance =account_balance - amount;
    return account_balance;
}

// Button click
transfer_button.addEventListener("click", () => {
    const amount =Number(transfer_amount_input.value);
    try {
        console.log("Transfer started");
        console.log("Transfer amount:",amount);
        const remaining_balance=transfer_money(amount);
        console.log("Transfer successful");
        console.log("Remaining balance:",remaining_balance);
        balance_display.textContent=remaining_balance;
        status_display.textContent="Transfer successful";
    }
    catch (error) {
        console.log("Error occurred");
        console.log("Error name:",error.name);
        console.log("Error message:",error.message);
        status_display.textContent=error.message;
    }
    finally {
        console.log("Transfer process completed");
        transfer_amount_input.value = "";
    }
});

// try {
//     transfer_money(amount);
// }
// catch (error) {
//     if (error instanceof InsufficientBalanceError) {
//         console.log("Show: Your account balance is insufficient");
//     }
//     else if (error instanceof InvalidAmountError) {
//         console.log("Show: Please enter a valid amount");
//     }
//     else {
//         console.log("Show: Something went wrong");
//     }
// }