const path = require("path");
const { v4: uuidv4 } = require("uuid");
const {
    read_file,
    write_file
} = require("./file_service");
const product_file =
    path.join(
        __dirname,
        "../data/products.json"
    );
// Get all products
async function get_products() {
    const products =await read_file(product_file);
    return products;
}
// Add product
async function add_product(
    product_name,
    price,
    category
) {
    const products =
        await read_file(product_file)
    const new_product = {
        id: uuidv4(),
        product_name,
        price,
        category
    };

    products.push(new_product);
    await write_file(
        product_file,
        products
    );
    return new_product;
}

module.exports = {
    get_products,
    add_product
};