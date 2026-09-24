// creates a worker and execute separately
// const worker=new Worker("worker.js");
// console.log("Main thread started");

// //sending data to worker
// const students_count=10000;
// worker.postMessage(students_count);
const process_button =document.getElementById("process_button");
const status_element =document.getElementById("status");
const result =document.getElementById("result");


const worker = new Worker("web_workers.js");

process_button.addEventListener("click", () => {
    status_element.textContent = "Processing student results...";
    console.log("Sending data to worker");
    worker.postMessage(100000);
});


worker.onmessage = (event) => {
    console.log("Result received from worker");
    result.textContent =`Processed ${event.data} students`;
    status_element.textContent ="Processing completed";
};