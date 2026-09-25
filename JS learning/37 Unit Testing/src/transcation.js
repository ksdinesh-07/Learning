function calculate_fee(amount) {
    const fee_percentage=2;
    const transaction_fee=amount * fee_percentage / 100;
    console.log(fee_percentage,transaction_fee,"TESTT")
    return transaction_fee;
}

function calculate_final_amount(amount) {
    const transaction_fee=calculate_fee(amount);
    const final_amount=amount + transaction_fee;
    console.log(transaction_fee,final_amount,"TESTT")
    return final_amount;
}

module.exports = {calculate_fee,calculate_final_amount};