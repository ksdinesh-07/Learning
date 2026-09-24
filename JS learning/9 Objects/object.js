const objectName=new Object()  // object constructor syntax

const objectName2={} //object literal syntax

const person={
    // properties
    f_name:'dinesh',
    l_name:'ks',
    age:21,
    is_alive:true,
    //array
    hobies:["sleep","food","cricket"],
    contact_details:{
        ph_no: 8144004841,
        email:"ks.dinesh005@gmail.com"
    },
    //method
     full_name:function (){
        return this.f_name + ' ' + this.l_name
    }
    //modern js method
    // full_name1(){
    //    return this.f_name + ' ' + this.l_name 
    // }
}

// add property
person.color="blue";

//access

//property
// person.f_name
// console.log(person.f_name)


//method
// person.full_name();

//value
// console.log(person.contact_details.ph_no);


// document.getElementById('result').innerHTML=person.full_name();


//object merging

const person_methods={
    year_of_birth(){
        return new Date().getFullYear() - this.age;
    },
    fav_number:[1,3,5,7,9],
    get fav_num(){
        return this.fav_number
    }
}

console.log(person_methods.fav_number);


Object.assign(person,person_methods);

// console.log(person.year_of_birth());
    

// copy 

const copied_person=Object.assign({},person);
// console.log(person,copied_person);

//object merging spread operator

const final_copy={...person,...person_methods};
console.log(final_copy);

//delete

delete person.age;
console.log(person)

function full_name(f_name,l_name){
    return{
        f_name,
        l_name
    }
}
// console.log(f_name,l_name);

const personal_details={
    // properties
    f_name:'dinesh',
    l_name:'ks',
    age:21,
    is_alive:true,
    //array
    hobies:["sleep","food","cricket"],
    contact_details:{
        ph_no: 8144004841,
        email:"ks.dinesh005@gmail.com"
    },
    //method
     full_name:function (){
        return this.f_name + ' ' + this.l_name
    }
    //modern js method
    // full_name1(){
    //    return this.f_name + ' ' + this.l_name 
    // }
}

//destructuring
// const {f_name:nick_name ,l_name}=personal_details
// console.log(f_name,l_name);

let primary_color,secondary_color;

({primary_color,secondary_color,...other_values}= {
    lev1:"blue",
    levl2:"red",
    levl3:"white",
    levl4:"black"
})

console.log(primary_color,secondary_color,other_values);

const movieCatalog = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genres: ["Sci-Fi", "Action", "Thriller"],
    rating: 8.8,
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    genres: ["Sci-Fi", "Action"],
    rating: 8.7,
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genres: ["Sci-Fi", "Drama", "Adventure"],
    rating: 8.6,
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    show_title(){
        return this.title;
    }
  }
];


//accessing

//1 dot notation
console.log(movieCatalog[0].title);

//2 bracket notation
console.log(movieCatalog[1]['title']);

//methods
console.log(movieCatalog[2].show_title());

//destructuring

const {title,year}=movieCatalog[0];
console.log("destrucuring values:",title,year);

//keys

const keys=Object.keys(movieCatalog[0]);
console.log(keys);

//values

const values=Object.values(movieCatalog[0]);
console.log(values);

//entries

const entries=Object.entries(movieCatalog);
console.log(entries);

//length

console.log(Object.keys(movieCatalog[0]).length);

//for each

Object.entries(movieCatalog[0]).forEach(([key,value])=>{
    console.log(`${key}:,value`);
})



//obj

const customer = {
    name: "vivek",
    account_number: "XXXX1234",
    balance: 50000,

    // 1. method

    show_balance: function () {return `Current Balance: ₹${this.balance}`;},

    // 2. nested object

    account_details: {
        account_type: "Savings",
        branch: "Coimbatore",
        ifsc_code: "ABCD0001234"
    }
};

// 3. properties

console.log(customer.name);
console.log(customer.balance);
console.log(customer.account_number);

// 4. methods

console.log(customer.show_balance());

// 5. nested objects

console.log(customer.account_details.account_type);
console.log(customer.account_details.branch);
console.log(customer.account_details.ifsc_code);

// 6. destructuring

const {
    name,
    account_number,
    balance
} = customer;

console.log(name);
console.log(account_number);
console.log(balance);

// 7. nested object destructuring

const {
    account_details: {
        account_type,
        branch,
        ifsc_code
    }
} = customer;

console.log(account_type);
console.log(branch);
console.log(ifsc_code);

// 8. Object.keys()

const customer_keys =Object.keys(customer);
console.log(customer_keys);

// 9. Object.values()

const customer_values =Object.values(customer);
console.log(customer_values);

// 10. Object.entries()

const customer_entries =Object.entries(customer);
console.log(customer_entries);

// 11. Display

const account_button =document.getElementById("account");
account_button.addEventListener("click",function () {
        document.getElementById("customer_name").innerText =`Customer: ${name}`;
        document.getElementById("account_number").innerText =`Account Number: ${account_number}`;
        document.getElementById("balance").innerText =`Balance: ₹${balance}`;
        document.getElementById("account_type").innerText =`Account Type: ${account_type}`;
        document.getElementById("branch").innerText =`Branch: ${branch}`;
        document.getElementById("keys").innerText =`Properties: ${customer_keys.join(", ")}`;
        document.getElementById("entries").innerText =`Entries: ${customer_entries
                .map(function (entry) {
                    return entry[0] + ": " + entry[1];
                })
                .join(" | ")}`;
    }
);

// Orders received from an online shopping system

const orders = [
    {
        order_id: 101,
        customer_name: "Arun",
        amount: 1200,
        status: "delivered"
    },
    {
        order_id: 102,
        customer_name: "Priya",
        amount: 800,
        status: "pending"
    },
    {
        order_id: 103,
        customer_name: "Rahul",
        amount: 2500,
        status: "delivered"
    },
    {
        order_id: 104,
        customer_name: "Meena",
        amount: 600,
        status: "cancelled"
    }
];


// 1. map()
// Get the amount of every order

const order_amounts = orders.map(function (order) {
    return order.amount;
});
console.log(order_amounts);


// 2. filter()
// Get only delivered orders
const delivered_orders = orders.filter(function (order) {
    return order.status === "delivered";
});
console.log(delivered_orders);

// 3. reduce()
// Calculate total revenue
const total_revenue = orders.reduce(
    function (total, order) {
        return total + order.amount;
    },
    0
);
console.log(total_revenue);


const product_entries = [
    ["id", 101],
    ["title", "Headphones"],
    ["price", 129.99]
];

const product = Object.fromEntries(product_entries);

console.log(product);

// o/p
// {
//     id: 101,
//     title: "Headphones",
//     price: 129.99
// }

// Object.entries()
// Object → Array

// Object.fromEntries()
// Array → Object


// hasown()

// Checks whether an object directly contains a particular property.

const product1 = {
    id: 101,
    title: "Headphones",
    price: 129.99
};

console.log(Object.hasOwn(product1, "price"));

// Output:

// true

// Object.create()

// Creates a new object using another object as its prototype.

const product_functions = {
    show_product() {
        console.log(this.title);
    }
};

// const product = Object.create(product_functions);

// product.title = "Gaming Keyboard";

// product.show_product();

objectName.freeze()
// Prevents an object from being modified.

// const product = {
//     id: 101,
//     price: 129.99
// };

// Object.freeze(product);

// product.price = 200;

// console.log(product.price);

// The price remains:

// 129.99


Object.seal()

// Prevents adding or deleting properties.

// But existing properties can still be changed.

// const product = {
//     id: 101,
//     price: 129.99
// };

// Object.seal(product);

// product.price = 149.99;

// product.category = "Electronics";

// delete product.id;

// console.log(product);

// The price can change:
// 149.99