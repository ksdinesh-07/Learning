import display from "./display"
import add_image from "./image"
import Example_button from "../components/example_button";

display()
add_image();

const example_button=new Example_button();
example_button.render();


//ES6  - ES5

const multiply=(a,b)=>{
    let c=a*b;
    console.log(`multiplication of ${a} and ${b} :${c}`);
}

multiply(2,3);

