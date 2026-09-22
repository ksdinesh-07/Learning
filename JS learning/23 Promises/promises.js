// const pay_btn = document.getElementById("pay_btn");
// const display = document.getElementById("display");

// pay_btn.addEventListener("click", () => {
//     const payment = Promise.resolve("Payment successful");
//     payment.then(message => {
//         display.innerText = message;
//     });

// });

// const pay_btn = document.getElementById("pay_btn");
// const display = document.getElementById("display");

// pay_btn.addEventListener("click", () => {
//     const payment = Promise.reject("Payment failed");
//     payment
//         .then(message => {
//             display.innerText = message;
//         })
//         .catch(error => {
//             display.innerText = error;
//         });
// });


const load_btn = document.getElementById("load_btn");
const display = document.getElementById("display");

load_btn.addEventListener("click", () => {
    display.innerText = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(product => {
            display.innerText = product.title;
        })
        .catch(error => {
            display.innerText = "Failed to load product";
        })
        .finally(() => {
            console.log("Loading completed");
        });
});




function login() {
    return Promise.resolve({ user_id: 101 });
}
function getProfile(user_id) {
    return Promise.resolve(`Profile of user ${user_id}`);
}
login()
    .then(user => {
        return getProfile(user.user_id);
    })
    .then(profile => {
        console.log(profile);
    })
    .catch(error => {
        console.log("Something went wrong");
    });



const products = fetch("https://jsonplaceholder.typicode.com/posts/1");
const categories = fetch("https://jsonplaceholder.typicode.com/posts/2");
const offers = fetch("https://jsonplaceholder.typicode.com/posts/3");
Promise.all([
    products,
    categories,
    offers
])
.then(async ([productResponse, categoryResponse, offerResponse]) => {
    const product = await productResponse.json();
    const category = await categoryResponse.json();
    const offer = await offerResponse.json();

    console.log("Product:", product.title);
    console.log("Category:", category.title);
    console.log("Offer:", offer.title);
})
.catch(error => {
    console.log("Failed to load store data");
});




const serverA = new Promise(resolve => {
    setTimeout(() => {
        resolve("Server A response");
    }, 2000);
});

const serverB = new Promise(resolve => {
    setTimeout(() => {
        resolve("Server B response");
    }, 1000);
});

Promise.race([
    serverA,
    serverB
])
.then(result => {
    console.log(result);
});