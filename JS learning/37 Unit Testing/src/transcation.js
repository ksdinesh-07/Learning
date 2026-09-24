function calculate_fee(amount) {
    const fee_percentage=2;
    const transaction_fee=amount * fee_percentage / 100;
    return transaction_fee;
}

function calculate_final_amount(amount) {
    const transaction_fee=calculate_fee(amount);
    const final_amount=amount + transaction_fee;
    return final_amount;
}

module.exports = {calculate_fee,calculate_final_amount};