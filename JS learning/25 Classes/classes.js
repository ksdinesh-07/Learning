//object

// let user={
//     name:'dinesh',
//     age:23,
//     display:()=>{
//         console.log('hello')
//     }
// };

// //class

// class User{
//     //private;
//     #name;

//     constructor(name,age){
//         this.#name=name;
//         this.age=age;
//     }

//     display(){
//         console.log("Name :",this.#name);
//         console.log('Age:',this.age);
//         return 1;
//     }

//     //getter_method
//     get name(){
//         return "Name is " + this.#name;
//     }

//     //setter method
//     set name(name){
//         if (name=='dinesh'){
//             this.#name=name;
//         }else{
//             this.age=19;
//         }
//     }

// }


// let details=new User('dinesh',21);
// details.name='dinesh ks'
// console.log(details.name,details.age)
// console.log(typeof(details));
// console.log(details.display())


//inheritance

class parent{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    display(){
        console.log('Parent display')
        console.log(this.name);
        console.log(this.age);
    }
}

class child extends parent{
    constructor(name,age,nationality){
        super(name,age);
        this.nationality=nationality;
    }
    // display(){
    //     console.log('child display')
    //     console.log(this.name);
    //     console.log(this.age);
    //     console.log(this.nationality);
    // }
}

// let human=new parent('dinesh',21);
// human.display();

let Children=new  child('dinesh ks',19,'Indian');
// console.log(Children)
Children.display();