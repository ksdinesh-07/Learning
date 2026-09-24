const balance_display=document.getElementById("balance");
const transfer_amount=document.getElementById("transfer_amount");
const transfer_button=document.getElementById("transfer_button");
const transaction_status=document.getElementById("transaction_status");
let account_balance = 10000;
const transaction_fee_percentage = 2;

transfer_button.addEventListener("click", () => {
    const amount =Number(transfer_amount.value);
    console.log("Transfer button clicked");
    console.log("Transfer amount:", amount)
    console.log("Current balance:", account_balance);
    if (amount <= 0) {
        console.warn("Invalid transfer amount");
        transaction_status.textContent ="Enter a valid amount";
        return;
    }

    if (amount > account_balance) {
        console.error("Insufficient balance");
        transaction_status.textContent ="Insufficient balance";
        return;
    }

    //calcu bug
    const transaction_fee =amount * transaction_fee_percentage;
    const final_amount=amount + transaction_fee;

    console.log("Transaction fee:", transaction_fee);
    console.log("Final amount:", final_amount);
    account_balance=account_balance - final_amount;
    balance_display.textContent =`₹${account_balance}`;
    transaction_status.textContent =`Transfer successful. ₹${final_amount} deducted`;
    console.log("Updated balance:",account_balance);
});