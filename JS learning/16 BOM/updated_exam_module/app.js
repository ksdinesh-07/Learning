const question_data = [
    {
        question_id: 1,
        question: "Which language runs directly in a web browser?",
        options: ["Java", "JavaScript", "Python", "C++"],
        correct_answer: "JavaScript"
    },
    {
        question_id: 2,
        question: "Which API is used to store data in the browser?",
        options: ["Web Storage API", "File API", "Stream API", "Buffer API"],
        correct_answer: "Web Storage API"
    },
    {
        question_id: 3,
        question: "Which API is used to access the user's location?",
        options: ["Canvas API", "DOM API", "Geolocation API", "Notification API"],
        correct_answer: "Geolocation API"
    },
    {
        question_id: 4,
        question: "Which API is used to draw graphics?",
        options: ["Canvas API", "Storage API", "History API", "Fetch API"],
        correct_answer: "Canvas API"
    },
    {
        question_id: 5,
        question: "Which API can display browser notifications?",
        options: ["Notification API", "Canvas API", "DOM API", "Storage API"],
        correct_answer: "Notification API"
    }
];

let current_question_index = 0;
let user_answers = {};
let exam_seconds = 300;
let timer_interval;

const candidate_name_input =document.getElementById("candidate_name");
const start_exam_button =document.getElementById("start_exam_button");
const exam_section =document.getElementById("exam_section");
const result_section =document.getElementById("result_section");
const question_number =document.getElementById("question_number");
const question_progress =document.getElementById("question_progress");
const question_container =document.getElementById("question_container");
const previous_button =document.getElementById("previous_button");
const next_button =document.getElementById("next_button");
const submit_button =document.getElementById("submit_button");
const exam_timer =document.getElementById("exam_timer");
const location_status =document.getElementById("location_status");
const candidate_result =document.getElementById("candidate_result");
const score_result =document.getElementById("score_result");
const location_result =document.getElementById("location_result");
const restart_button =document.getElementById("restart_button");

// DOM API
function display_question() {

    const current_question =question_data[current_question_index];
    question_number.textContent=`Question ${current_question_index + 1}`;
    question_progress.textContent=`${current_question_index + 1} / ${question_data.length}`;
    question_container.innerHTML = "";

    const question_text=document.createElement("p");
    question_text.className = "question_text";
    question_text.textContent =current_question.question;
    question_container.appendChild(question_text);
    current_question.options.forEach((option) => {
        const label=document.createElement("label");
        label.className = "option";
        const radio=document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = option;
        if (user_answers[current_question.question_id] === option) {
            radio.checked = true;
        }
        radio.addEventListener("change", () => {
            user_answers[current_question.question_id] =
                radio.value;
            save_exam_progress();
        });
        label.appendChild(radio);
        label.appendChild(
            document.createTextNode(option)
        );
        question_container.appendChild(label);
    });

    previous_button.disabled=current_question_index === 0;
    next_button.disabled=current_question_index === question_data.length - 1;
}


// Web Storage API
function save_exam_progress() {
    const exam_data = {
        candidate_name: candidate_name_input.value,
        current_question_index,
        user_answers
    };
    localStorage.setItem("exam_progress",JSON.stringify(exam_data));
}

function load_exam_progress() {
    const saved_exam =localStorage.getItem("exam_progress");
    if (!saved_exam) {
        return;
    }
    const exam_data=JSON.parse(saved_exam);
    candidate_name_input.value=exam_data.candidate_name || "";
    current_question_index=exam_data.current_question_index || 0;
    user_answers=exam_data.user_answers || {};
}


// Geolocation API
function get_candidate_location() {
    if (!navigator.geolocation) {
        location_status.textContent="Geolocation is not supported.";
        return;
    }
    location_status.textContent="Getting candidate location...";
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude =position.coords.latitude;
            const longitude =position.coords.longitude;
            const location_data = {latitude,longitude};
            localStorage.setItem("candidate_location",JSON.stringify(location_data));
            location_status.textContent =`Location captured: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;},
        (error) => {
            location_status.textContent =`Location error: ${error.message}`;
        }
    );
}


// Timer
function start_timer() {
    timer_interval =setInterval(() => {
            exam_seconds--;
            const minutes =Math.floor(exam_seconds / 60);
            const seconds =exam_seconds % 60;
            exam_timer.textContent =`Time Left: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
            if (exam_seconds <= 0) {
                clearInterval(timer_interval);
                submit_exam();
            }
        }, 1000);
}


// Canvas API
function draw_score_chart(correct_answers, incorrect_answers) {
    const score_canvas=document.getElementById("score_canvas");
    const canvas_context =score_canvas.getContext("2d");
    canvas_context.clearRect(0,0,score_canvas.width,score_canvas.height);
    const chart_x = 100;
    const chart_width = 300;
    const chart_height = 40;
    const total_questions =correct_answers + incorrect_answers;
    const correct_width=(correct_answers / total_questions) * chart_width;
    const incorrect_width =(incorrect_answers / total_questions) * chart_width;
    canvas_context.fillStyle = "#2563eb";
    canvas_context.fillRect(
        chart_x,
        100,
        correct_width,
        chart_height
    );

    canvas_context.fillStyle = "#dc2626";

    canvas_context.fillRect(
        chart_x + correct_width,
        100,
        incorrect_width,
        chart_height
    );

    canvas_context.fillStyle = "#111827";

    canvas_context.font =
        "16px Arial";

    canvas_context.fillText(
        `Correct: ${correct_answers}`,
        chart_x,
        80
    );

    canvas_context.fillText(
        `Incorrect: ${incorrect_answers}`,
        chart_x,
        170
    );

    canvas_context.fillText(
        `Score: ${correct_answers} / ${total_questions}`,
        chart_x,
        220
    );
}


// Notification API
function send_notification(score) {
    if (!("Notification" in window)) {
        return;
    }
    if (Notification.permission === "granted") {
        new Notification(
            "Exam Submitted",
            {
                body: `Your exam has been submitted. Score: ${score}/${question_data.length}`
            }
        );
    } 
    else if (Notification.permission !== "denied") {
        Notification.requestPermission()
            .then((permission) => {
                if (permission === "granted") {
                    new Notification(
                        "Exam Submitted",
                        {
                            body: `Your exam has been submitted. Score: ${score}/${question_data.length}`
                        }
                    );
                }
            });
    }
}


// Submit exam
function submit_exam() {
    clearInterval(timer_interval);
    let correct_answers = 0;
    question_data.forEach((question) => {
        if(user_answers[question.question_id] ===question.correct_answer) {
            correct_answers++;
        }
    });
    const incorrect_answers =question_data.length - correct_answers;
    const candidate_name =candidate_name_input.value || "Candidate";
    candidate_result.textContent =`Candidate: ${candidate_name}`;
    score_result.textContent =`Score: ${correct_answers} / ${question_data.length}`;
    const saved_location =localStorage.getItem("candidate_location");

    if (saved_location) {
        const location_data =JSON.parse(saved_location);
        location_result.textContent =`Location: ${location_data.latitude.toFixed(4)}, ${location_data.longitude.toFixed(4)}`;
    } 
    else {
        location_result.textContent ="Location: Not available";
    }
    exam_section.classList.add("hidden");
    result_section.classList.remove("hidden");
    draw_score_chart(correct_answers,incorrect_answers);
    send_notification(correct_answers);
    localStorage.removeItem("exam_progress");
}

// Start exam
start_exam_button.addEventListener("click",() => {
        const candidate_name=candidate_name_input.value.trim();
        if (!candidate_name) {
            alert("Please enter your name.");
            return;
        }
        get_candidate_location();
        exam_section.classList.remove("hidden");
        start_exam_button.disabled = true;
        candidate_name_input.disabled = true;
        display_question();
        start_timer();
        save_exam_progress();
    }
);


// Previous question
previous_button.addEventListener("click",() => {
        if (current_question_index > 0) {
            current_question_index--;
            display_question();
            save_exam_progress();
        }
    }
);


// Next question
next_button.addEventListener("click",() => {
        if(current_question_index <question_data.length - 1) {
            current_question_index++;
            display_question();
            save_exam_progress();
        }
    }
);


// Submit
submit_button.addEventListener("click",() => {
        const confirmation =confirm("Are you sure you want to submit the exam?");
        if (confirmation) {
            submit_exam();
        }
    }
);


// Restart
restart_button.addEventListener("click",() => {
        localStorage.clear();
        location.reload();
    }
);


// Restore previous exam
load_exam_progress();
