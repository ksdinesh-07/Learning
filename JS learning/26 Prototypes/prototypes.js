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

//without prototyp
// const account_1 = {
//     account_number: "ACC001",
//     balance: 50000,

//     deposit(amount) {
//         this.balance += amount;
//     },
//     withdraw(amount) {
//         this.balance -= amount;
//     }
// };

// const account_2 = {
//     account_number: "ACC002",
//     balance: 30000,

//     deposit(amount) {
//         this.balance += amount;
//     },
//     withdraw(amount) {
//         this.balance -= amount;
//     }
// };

//we can use prototype
const account_methods = {
    deposit(amount) {
        this.balance += amount;
    },
    withdraw(amount) {
        this.balance -= amount;
    },
    get_balance() {
        return this.balance;
    }
};

//create acc using the prototype
const account_1 = Object.create(account_methods);
account_1.account_number = "ACC001";
account_1.balance = 50000;

const account_2 = Object.create(account_methods);
account_2.account_number = "ACC002";
account_2.balance = 30000;


//use
account_1.deposit(5000);
account_2.withdraw(2000);