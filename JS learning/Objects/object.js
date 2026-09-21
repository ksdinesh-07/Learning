const objectName=new Object()  // object constructor syntax

const objectName2={} //object literal syntax

const person={
    // properties
    f_name:'dinesh',
    l_name:'ks',
    age:21,
    is_alive:true,
    //array
    hobies:["sleep","food","cricket"],
    contact_details:{
        ph_no: 8144004841,
        email:"ks.dinesh005@gmail.com"
    },
    //method
     full_name:function (){
        return this.f_name + ' ' + this.l_name
    }
    //modern js method
    // full_name1(){
    //    return this.f_name + ' ' + this.l_name 
    // }
}

// add property
person.color="blue";

//access

//property
// person.f_name
// console.log(person.f_name)


//method
// person.full_name();

//value
// console.log(person.contact_details.ph_no);


// document.getElementById('result').innerHTML=person.full_name();


//object merging

const person_methods={
    year_of_birth(){
        return new Date().getFullYear() - this.age;
    },
    fav_number:[1,3,5,7,9],
    get fav_num(){
        return this.fav_number
    }
}

console.log(person_methods.fav_number);


Object.assign(person,person_methods);

// console.log(person.year_of_birth());
    

// copy 

const copied_person=Object.assign({},person);
// console.log(person,copied_person);

//object merging spread operator

const final_copy={...person,...person_methods};
console.log(final_copy);

//delete

delete person.age;
console.log(person)

function full_name(f_name,l_name){
    return{
        f_name,
        l_name
    }
}
// console.log(f_name,l_name);

const personal_details={
    // properties
    f_name:'dinesh',
    l_name:'ks',
    age:21,
    is_alive:true,
    //array
    hobies:["sleep","food","cricket"],
    contact_details:{
        ph_no: 8144004841,
        email:"ks.dinesh005@gmail.com"
    },
    //method
     full_name:function (){
        return this.f_name + ' ' + this.l_name
    }
    //modern js method
    // full_name1(){
    //    return this.f_name + ' ' + this.l_name 
    // }
}

//destructuring
// const {f_name:nick_name ,l_name}=personal_details
// console.log(f_name,l_name);

let primary_color,secondary_color;

({primary_color,secondary_color,...other_values}= {
    lev1:"blue",
    levl2:"red",
    levl3:"white",
    levl4:"black"
})

console.log(primary_color,secondary_color,other_values);

const movieCatalog = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genres: ["Sci-Fi", "Action", "Thriller"],
    rating: 8.8,
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    genres: ["Sci-Fi", "Action"],
    rating: 8.7,
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genres: ["Sci-Fi", "Drama", "Adventure"],
    rating: 8.6,
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    show_title(){
        return this.title;
    }
  }
];


//accessing

//1 dot notation
console.log(movieCatalog[0].title);

//2 bracket notation
console.log(movieCatalog[1]['title']);

//methods
console.log(movieCatalog[2].show_title());

//destructuring

const {title,year}=movieCatalog[0];
console.log("destrucuring values:",title,year);

//keys

const keys=Object.keys(movieCatalog[0]);
console.log(keys);

//values

const values=Object.values(movieCatalog[0]);
console.log(values);

//entries

const entries=Object.entries(movieCatalog);
console.log(entries);

//length

console.log(Object.keys(movieCatalog[0]).length);

//for each

Object.entries(movieCatalog[0]).forEach(([key,value])=>{
    console.log(`${key}:,value`);
})



