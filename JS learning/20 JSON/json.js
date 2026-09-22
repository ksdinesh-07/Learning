const sample_data=fetch('./data/sample_data.json');

sample_data.then((res)=>{
    console.log(res)
    return res.json()
})
.then((data)=>{
    console.log('My data',data)
})
.catch((err)=>{
    console.log(err);
})



const order = {
  customer: "Dinesh",
  product: {
    name: "T-Shirt",
    quantity: 2
  }
};
// Shallow copy

const updatedOrder = { ...order };
updatedOrder.product.quantity = 3;
console.log(order.product.quantity);

// Output:3

// The nested product object is shared.

// Deep copy
const updatedOrder = structuredClone(order);
updatedOrder.product.quantity = 3;
console.log(order.product.quantity);

// Output:2

// Now the original order is independent