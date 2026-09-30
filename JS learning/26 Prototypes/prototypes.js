// let user={
//     name:'anonymous',
//     page_access:['login','dashboard','contact'],

//     set set_name(value){
//         this.name=value;
//     },

//     get get_name(){
//         return this.name;
//     }
// }
// // console.log(user)
 

// let admin={
//     __proto__:user,
//     is_admin:'true'
// };

// admin.set_name='admin';

// console.log(admin.name);
// console.log(user.name);


// let vehicle={
//     car:'Tata'
// };


// console.log(vehicle);
// console.log(Object.prototype)
// console.log(vehicle.__proto__);

const person = {
    introduce() {
        console.log("I am a person");
    }
};

const employee = Object.create(person);
employee.name = "Dinesh";
console.log(employee.name);
employee.introduce();

console.log(Object.getPrototypeOf(employee) === person);
console.log(Object.getPrototypeOf(person) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

// output

// Dinesh
// I am a person
// true
// true
// null