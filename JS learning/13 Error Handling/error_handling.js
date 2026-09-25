//error
// const json={"name":"Anbu","age":28}

// const user=JSON.parse(json)

// console.log('Showing the UI',user.name)

try{
    console.log(3)
    // console.lag(2)
    console.log(1)
    console.log("finall")
}catch(error){
    console.log("Error :",error)  //Type Error
}

try{
    console.log('code tries');
    // console.unknown("something");
    console.log('Everything is good');
} catch(err){
    if (err instanceof ReferenceError){
        console.log('This is an reference error');
    }
    console.log('Error : ', err);
}

try{

    try{

    }catch(err){

    }
}catch(err){

}

// 1.opening the file
try{
    //2. writing the file
}catch(err){
    console.log('Error :',err)
}finally{
    //3. close the file
}


try{

    const json='{"name":"Anbu","age":28,"is_online":"false"}'
    const user=JSON.parse(json);
    console.log('Showing the UI',user.name);
    console.log('Showing the UI',user.age);

    if(user.is_online){
        //throw 'Is_Online is not available' ---> custom Error
        // throw new Error("Invalid user"); ---> Error Object (stack trace) 
        throw new ReferenceError('Invalid user');
    }
    
}catch(err){
    console.log('Error:',err);
    console.log(err.message)
}

const productPrice = 499;
const stock = 5;
const quantity = 2;
const paymentSuccessful = true;

try {
    console.log("Processing order...");

    if (quantity <= 0) {
        throw new Error("Quantity must be greater than 0");
    }

    if (quantity > stock) {
        throw new Error("Not enough stock available");
    }

    const total = productPrice * quantity;

    if (!paymentSuccessful) {
        throw new Error("Payment failed");
    }

    console.log(`Order placed successfully`);
    console.log(`Total: ₹${total}`);
}
catch (error) {
    console.log(`Order failed: ${error.message}`);
}
finally {
    console.log("Order process completed");
}

// Custom Errors

//             A custom error is an error that we create ourselves to represent a specific problem in our application.

//             JavaScript provides the Error constructor:

//                 new Error("message")

//             Example:

//                 throw new Error("Invalid product price");

//             This is a custom error message created by the developer.

//         ## Creating a Custom Error Class

//             For larger applications, we can create our own error class.

//             Example

//                 class OrderError extends Error {
//                     constructor(message) {
//                         super(message);
//                         this.name = "OrderError";
//                     }
//                 }

//                 try {
//                     throw new OrderError("Order quantity is invalid");
//                 } 
//                 catch (error) {
//                     console.log(error.name);
//                     console.log(error.message);
//                 }

//             Output:

//                 OrderError
//                 Order quantity is invalid

//         ## Purpose of Custom Errors?    

//             Custom errors help us identify different types of problems clearly.
                
//                 an e-commerce application might have:

//                     -OrderError
//                     -PaymentError
//                     -AuthenticationError
//                     -ValidationError

//                 Instead of receiving a generic: Error

//                 we can identify what type of problem occurred.

//                 Example:

//                     class PaymentError extends Error {
//                         constructor(message) {
//                             super(message);
//                             this.name = "PaymentError";
//                         }
//                     }

//                     Then:

//                         throw new PaymentError("Payment failed");

//                         The application can identify:

//                             PaymentError ---> Payment failed

//         ## Handling Different Errors

//             We can check the type of error inside catch.

//                 try {
//                     let user = null;
//                     console.log(user.name);
//                 } 
//                 catch (error) {
//                     if (error instanceof TypeError) {
//                         console.log("Invalid object access");
//                     }
//                 }

//             Output:

//                 Invalid object access

//                 This allows the application to respond differently to different errors.

//         ## Example -
        
//             1.Product purchase

//             try {
//                 let quantity = 0;
//                 if (quantity <= 0) {
//                     throw new Error("Quantity must be greater than 0");
//                 }
//                 console.log("Order placed");
//             } 
//             catch (error) {
//                 console.log(error.message);
//             } finally {
//                 console.log("Order process completed");
//             }

//         Output:

//             Quantity must be greater than 0
//             Order process completed

//             2.requests product information from a server

//                 try {
//                     let response = await fetch("/api/products");

//                     if (!response.ok) {
//                         throw new Error("Failed to load products");
//                     }

//                     let products = await response.json();

//                 } 
//                 catch (error) {
//                     console.log("Unable to load products");
//                 }


//                 Example:    

//                     the user might see:

//                     Unable to load products.
//                     Please try again.