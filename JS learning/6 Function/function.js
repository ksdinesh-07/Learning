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