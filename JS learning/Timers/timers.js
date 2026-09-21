// setTimeout() ---> setTimeout() executes a function once after the specified delay.

// console.log("started")
// setTimeout(() => {
//     console.log("Runs after 2 sec...")
// }, 2000);
// console.log('End');


// const fun=(name)=>{
//     console.log(`hello : ${name}`)
// }

// setTimeout(fun,3000,'dinesh');


// const time_out=setTimeout(()=>{
//     console.log("This will not execute");
// },5000)

// clearTimeout(time_out);


//setinterval
// let count=0;
// const counter=setInterval(()=>{
//     console.log(`${count} sec completed `);
//     count+=2;
//     if (count===10){
//         clearInterval(counter);
//     }
// },2000);


// setTimeout(() => {
//     alert("Your exam will start soon!");
// }, 5000);

// setInterval(() => {
//     console.log("Exam is running");
// }, 3000);


// let time_left = 10;
// const timer = setInterval(() => {
//     console.log(`Time left: ${time_left} seconds`);
//     time_left--;
//     if (time_left < 0) {
//         clearInterval(timer);
//         console.log("Exam time is over");
//     }
// }, 1000);

const start_button = document.getElementById("start_button");
const cancel_button = document.getElementById("cancel_button");
const display = document.querySelector(".display_time");
let exam_timer;
let time_left = 10;

start_button.addEventListener("click", () => {
    exam_timer = setInterval(() => {
        display.innerText = `Time left: ${time_left} seconds`;
        time_left--;
        if (time_left < 0) {
            clearInterval(exam_timer);
            display.innerText = "Exam time is over";
        }

    }, 1000);

});

cancel_button.addEventListener("click", () => {
    clearInterval(exam_timer);
    display.innerText = "Exam cancelled";
});
