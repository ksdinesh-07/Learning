// function declaration
function calculate_total_price(price,quantity){
    return price*quantity;
}

const total=calculate_total_price(100,5);

//output ==> 500

function validate_login(email,password){
    if (email==="user@gmail.com" && password ==="12345678"){
        return "Login Success";
    }
    return "Invalid email or password";
}

console.log(validate_login("user@gmail.com","12345678"));

//output ==> Login Success

//function expression

const calculate_delivery = function(amount) {
    if (amount >= 500) {
        return 0;
    }
    else {
        return 50
    }
};

console.log(calculate_delivery(700));

//output ==> 0;

//arrow function

const login_verify=(username,password)=>{
    return username ==="admin@gmail.com" && password==="12345678";
}

login_verify("admin@gmail.com","12345678");

//output ==> true


// difference between the arrow function and the normal function
const student = {
    name: "dinesh",

    normal_function: function () {
        console.log(this.name);
    },

    arrow_function: () => {
        console.log(this.name);
    }
};

student.normal_function();
student.arrow_function();


//arrow fuction
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

const expensive_products = products.filter(
    product => product.price > 1000
);