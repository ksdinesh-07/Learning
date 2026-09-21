// // window and alert()

// console.log(window);

// // window.alert("Exam Starts now!");

// console.log(window.innerHeight);

// const examStarted = true;

// if (window.innerWidth < 768) {
//     console.log("Mobile-sized screen");
// }


// if (examStarted) {
//     // alert("Your exam has started!");
// }


// //window open

// window.open('https://amazon.com');

// const button=document.getElementById('instructionsButton');

// button.addEventListener('click',()=>{
//     window.open('https://google.com');
// })


// // window.print();

// const print_result=document.getElementById("print_button");
// print_result.addEventListener("click",()=>{
//     window.print();
// })


// //window close

// const examWindow = window.open("https://google.com");
// examWindow.close();

// //window.print




// //confirm

// // const submitExam = confirm("Are you sure you want to submit the exam?");

console.log(window.location);


//window

console.log("Window object:",window);
console.log("Browser width:",window.innerWidth);
console.log("browser height:",window.innerHeight);

//checking the browser size

if(window.innerWidth < 700){
    console.log("Mobile sized Screen")
}else{
    console.log("Destop size screen");
}

//alert

const exam_started=true;
if(exam_started){
    //alert('Your exam has started!)
}

//prompt

const student_name=prompt("Enter your name:");
const student_name_element=document.getElementById('student_name');
if(student_name){
    student_name_element.textContent=`Student: ${student_name}`;
}else{
    alert("Student name is required");
}


//navigator

const browser_info=document.getElementById("browser_info");
    browser_info.innerHTML=`Online:${navigator.onLine}<br>
    Language:${navigator.language}<br>
    Browser:${navigator.userAgent}
`;

if(!navigator.onLine){
    alert("Internet connection is required for the exam.");
}

//screen

console.log("Screen width:", screen.width);
console.log("Screen height:", screen.height);

if (screen.width < 800) {
    alert("Please use a larger screen for the exam.");
}

//location

console.log("Current URL:",location.href);

//exam instruction


const exam_instruction_btn=document.getElementById("instructions_button");
exam_instruction_btn.addEventListener("click",()=>{
    window.open("instruction.html",
    "_blank",
    "width=600,height=400"
    );
});

//start Exam

const start_button=document.getElementById('start_button');
const exam_status=document.getElementById('exam_status');
const exam_info=document.getElementById('exam_info');

start_button.addEventListener('click',()=>{
    const start_exam=confirm("Are you want to start the exam?");

    if(start_exam){
        alert('Exam started!');
        exam_status.textContent="Exam Status: Started";
        exam_info.innerHTML=`
            Student: ${student_name}<br>
            Exam: MCQ <br>
            Status: In Progress
        `;

        //changing the location for the exam
        location.href = `exam.html?student=${student_name}`;    
    }else{
        alert('Exam was not Started');
    }
})

//submitting the exam

const submit_button=document.getElementById("submit_button");
submit_button.addEventListener('click',()=>{
    const submit_exam=confirm('Are you want to submit the exam?');
    if (submit_exam){
        exam_status.textContent='Exam Status: Submitted';

        exam_info.innerHTML=`Student: ${student_name}<br>
            Exam:MCQ <br>
            Status:Submitted<br>
            Score: 85 / 100
        `;

        alert("Exam submitted Successfully.");
    }else{
        alert("Exam Submission cancelled.");
    }
})

//print result

const print_button=document.getElementById('print_button');
print_button.addEventListener('click',()=>{
    window.print();
});

// History

const back_button=document.getElementById('back_button');
back_button.addEventListener('click',()=>{
    history.back();
})


// history console

console.log('History entries:',history.length);