// function get_product() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Product loaded");
//         }, 2000);
//     });
// }

// async function show_product() {
//     const product_data = await get_product();
//     console.log(product_data);
// }

// show_product();

function get_product() {
    return new Promise((resolve, reject) => {
        reject("Product not found");
    });
}
async function show_product() {
    try {
        const product_data = await get_product();
        console.log(product_data);
    }
    catch (error) {
        console.log(error);
    }
}
show_product();

async function load_product() {
    try {
        console.log("Loading product...");
        const product_data = await Promise.resolve("Product loaded");
        console.log(product_data);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Loading completed");
    }
}
load_product();

function get_product() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Product loaded");
            resolve();
        }, 3000);
    });
}
function get_offer() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Offer loaded");
            resolve();
        }, 2000);
    });
}
async function load_data() {
    await get_product();
    await get_offer();
}
load_data();


function get_product() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Product loaded");
            resolve();
        }, 3000);
    });
}
function get_offer() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Offer loaded");
            resolve();
        }, 2000);
    });
}
async function load_data() {
    const product_promise = get_product();
    const offer_promise = get_offer();
    await product_promise;
    await offer_promise;
}
load_data();

function get_product() {
    return Promise.resolve("Product loaded");
}

function get_offer() {
    return Promise.resolve("Offer loaded");
}

async function load_data() {
    const [product_data, offer_data] = await Promise.all([
        get_product(),
        get_offer()
    ]);
    console.log(product_data);
    console.log(offer_data);
}

load_data();