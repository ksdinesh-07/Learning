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