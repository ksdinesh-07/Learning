const order = new Promise((resolve, reject) => {
    const stockAvailable = true;
    if (stockAvailable) {
        resolve("Order can be placed");
    } else {
        reject("Product is out of stock");
    }
});
order
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });