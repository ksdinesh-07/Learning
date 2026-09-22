// Strings

const productName = "Oversized T-Shirt";
const category = "Women's Fashion";
const price = 499;

//length

console.log(productName.length);

if(productName.length<=30){
    console.log("Product name is valid");
}

// methods

//toupper case
console.log(productName.toUpperCase());

//tolowercase
console.log(category.toLowerCase());

const user_search = "T-SHIRT";

if (user_search.toLowerCase() === "t-shirt") {
    console.log("Product found");
}


//trim

const user_name="       dinesh ks   ";
console.log(user_name.trim());

//includes()

console.log(productName.includes("T-S"));

const searchText = "t-shirt";

if (productName.toLowerCase().includes(searchText.toLowerCase())) {
    console.log("Product found");
}

//startswith

const product_code="TSHIRT-101";
console.log(product_code.startsWith("TSHIRT"));


if (productName.toLowerCase().includes(searchText.toLowerCase())) {
    console.log("Product found");
}

//endswith

const image_name="t-shirt.jpg";
if (image_name.endsWith(".jpg")) {
    console.log("Valid image format");
}

//slice

const shortName = productName.slice(0, 9);
console.log(shortName);

//replace

const updatedName = productName.replace("T-Shirt", "Hoodie");
console.log(updatedName);

//split

const categories = "T-Shirts,Jeans,Shoes";
const categoryList = categories.split(",");
console.log(categoryList);

//conctenation

const message = "Product: " + productName + ", Price: ₹" + price;
console.log(message);

//template literals

const message_using_backticks = `Product: ${productName}, Price: ₹${price}`;
console.log(message_using_backticks);

//escaping


// const mes = 'Women's Fashion'; ---> cause error

const mess = 'Women\'s Fashion';
console.log(mess);

// Double quote \n

const text = "He said \"Hello\"";
console.log(text)

// new line \n

const new_line= "Order Confirmed\nThank you for shopping!";
console.log(new_line);

// tab \t

const product = "T-Shirt\t₹499";
console.log(product);