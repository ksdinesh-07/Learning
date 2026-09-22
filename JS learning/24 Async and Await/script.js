//obj

const customer = {
    name: "Arun",
    account_number: "XXXX1234"
};

// 1. async function
async function get_account_balance() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    return {
        balance: 50000
    };
}

// 2. async function with await

async function get_transactions() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    return [
        "₹2000 - ATM Withdrawal",
        "₹5000 - Online Payment",
        "₹3000 - Bank Transfer"
    ];
}

// 3. error handling

async function load_balance() {
    try {
        const balance = await get_account_balance();
        return balance;
    } catch (error) {
        console.error("Unable to load account balance:",error);
        throw error;
    }
}

// 4. concurrency

async function load_dashboard() {
    try {
        const [balance, transactions] =
            await Promise.all([get_account_balance(),get_transactions()]);
        return {
            balance: balance,
            transactions: transactions
        };
    } catch (error) {
        console.error("Dashboard loading failed:",error);
        throw error;
    }
}

// 5. Display

const dashboard_button =document.getElementById("dashboard");
dashboard_button.addEventListener("click",async function () {
    const loading =document.getElementById("loading");
    const result =document.getElementById("result");
    loading.innerText ="Loading account details...";
    result.innerText = "";
        try {
            const dashboard =await load_dashboard();
            document.getElementById("customer").innerText =`Customer: ${customer.name}`;
            document.getElementById("account").innerText =`Account: ${customer.account_number}`;
            document.getElementById("balance").innerText =`Balance: ₹${dashboard.balance.balance}`;
            document.getElementById("transactions").innerText =`Transactions: ${dashboard.transactions.join(", ")}`;
            loading.innerText ="Dashboard loaded successfully";
        } catch (error) {
            loading.innerText ="Unable to load dashboard";
            result.innerText ="Please try again later.";
        }
    }
);