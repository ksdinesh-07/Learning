// call stack
function calculate_marks() {
    console.log("Calculating marks");
    return 5;
}

function submit_exam() {
    console.log("Submit exam started");
    const marks = calculate_marks();
    console.log("Marks:", marks);
    console.log("Submit exam finished");
}


// Web API + Task Queue
setTimeout(function () {
    console.log("Timer callback executed");
}, 2000);


// microtask qqueue
Promise.resolve().then(function () {
    console.log("Promise callback executed");
});


// rendering
const timer =document.getElementById("timer");
const result =document.getElementById("result");
const answerButton =document.getElementById("answer");

// Exam timer
let time_left = 10;
const exam_timer = setInterval(function () {
    time_left--;
    timer.innerText =`Time: ${time_left}`;
    if (time_left === 0) {
        clearInterval(exam_timer);
        result.innerText ="Time is over!";
        }
}, 1000);

        
// user click event 
answerButton.addEventListener("click",function () {
    submit_exam();
    result.innerText ="Answer submitted!";
    Promise.resolve().then(function () {
        console.log("Result processed using Promise");
        result.innerText ="Result processed successfully!";
    });
});

