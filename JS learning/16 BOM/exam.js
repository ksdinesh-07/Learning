const params = new URLSearchParams(location.search);

const question_data = [
    {
        id: "q1",
        question: "Which object represents the browser window?",
        options: ["window", "document", "screen"],
        answer: "window"
    },
    {
        id: "q2",
        question: "Which BOM property gives the browser viewport width?",
        options: ["innerWidth", "screen", "location"],
        answer: "innerWidth"
    },
    {
        id: "q3",
        question: "Which object provides the current URL?",
        options: ["location", "screen", "history"],
        answer: "location"
    }
];

const student_name = params.get("student");
const student_name_element=document.getElementById("student_name");
student_name_element.textContent=`Student: ${student_name}`;
const question_container=document.getElementById("question_container");
const submit_button=document.getElementById("submit_button");

question_data.forEach((question_item) => {
    const question_heading=document.createElement("h2");
    question_heading.textContent=`Question ${question_item.id}`;
    const question_text=document.createElement("p");
    question_text.textContent=question_item.question;
    question_container.appendChild(question_heading);
    question_container.appendChild(question_text);


    question_item.options.forEach((option) => {
        const label=document.createElement("label");
        const radio_button=document.createElement("input");
        radio_button.type = "radio";
        radio_button.name = question_item.id;
        radio_button.value = option;
        label.appendChild(radio_button);
        label.appendChild(document.createTextNode(` ${option}`));
        question_container.appendChild(label);
        question_container.appendChild(document.createElement("br")
        );
    });

    question_container.appendChild(document.createElement("hr"));
});


submit_button.addEventListener("click", () => {
    const submission=confirm("Do you want to submit the exam?");
    if(!submission){
        return;
    }
    let score = 0;
    for (const question_item of question_data) {
        const selected_answer=document.querySelector(`input[name="${question_item.id}"]:checked`);
        if (!selected_answer) {
            alert(
                `Please answer ${question_item.id}.`
            );
            return;
        }
        if (selected_answer.value===question_item.answer) {
            score++;
        }
    }

    console.log("Score:", score);
    alert("Exam submitted successfully.");
    location.href =`result.html?student=${student_name}&score=${score}`;
});
