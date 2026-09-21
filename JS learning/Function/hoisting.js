//Function Declaration

console.log(calculate_total(500,2));

function calculate_total(price,quantity){
    return price*quantity;
}

//output ==> 998;
// So a function declaration can be called before its declaration.


//Function Expression

console.log(validate_login("user@gmail.com", "12345678"));

const validate_login = function(email, password) {
    if (email === "user@gmail.com" && password === "12345678") {
        return "Login Success";
    }

    return "Invalid email or password";
};

//output ==> reference error
// creates the variable using const, and the variable cannot be accessed before its initialization.

// Arrow Function

console.log(verify_login("user@gmail.com", "12345678"));

const verify_login = (email, password) => {
    return email === "user@gmail.com" && password === "12345678";
};

//output ==> reference Error
// Doesn't work before initialization.