import lodash from "lodash";

const product_list = [
    {
        product_name: "Laptop",
        price: 55000,
    },
    {
        product_name: "Keyboard",
        price: 2500,
    },
    {
        product_name: "Mouse",
        price: 1200,
    },
];

// const product_name = "Laptop"
// const product_price = 55000
// const unused_value = 100
// console.log(product_name)
// console.log(product_category)

const sorted_products = lodash.orderBy(product_list, ["price"], ["desc"]);

console.log(sorted_products);
