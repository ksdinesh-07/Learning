// declaring the array
let product=new Array();
product=['Mobile','Laptop','TV']
// console.log(typeof(product));

let Mobile_list=['Redmi','Realme','Poco','Apple'];
// console.log(Mobile_list);

// let category=['breakfast','lunch','dinner']
// console.log(category);

// // accessing using indexing

// console.log(Mobile_list[1]);

// // differnt data type store in same array

// const available=['juice',98,null,true,{name:'kishore',shop_name:'Well good'},function add(a,b){return a+b}]
// console.log(available[5](1,2));

// //insert

// Mobile_list[1]='Lava';
// console.log(Mobile_list);

//  Mobile_list.push("moto") //push adds the element at last
//  console.log(Mobile_list);


//  Mobile_list.unshift('One plus') // adds rhe element at beginning
//  console.log(Mobile_list);

//  //delete an elemnt 
    
//  Mobile_list.pop(); //removes the last element
//  console.log(Mobile_list);

//  Mobile_list.shift(); //removes the first element

//  console.log(Mobile_list.pop()); //shows the removed element

 // accessing the element using for-of faster
for(mobile of Mobile_list){
    console.log(mobile);
}

// accessing using the for-in but slower
for(mobile in Mobile_list){
    console.log(Mobile_list[mobile]);
}

// length
console.log(Mobile_list.length);

let updated_product_list=new Array('Ink','Pen','Pencil');
console.log(updated_product_list);
console.log(typeof(updated_product_list));

// 2 D Array
let mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(mat);
console.log(mat[0][1]);





