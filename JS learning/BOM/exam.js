const params = new URLSearchParams(location.search);

const student_name = params.get("student");
const student_name_element =
    document.getElementById("student_name");
student_name_element.textContent =
    `Student: ${student_name}`;
const submit_button =
    document.getElementById("submit_button");

const correct_answer = {
    q1: "window",
    q2: "innerWidth"
};


submit_button.addEventListener("click", () => {
    const Submission =
        confirm("Do you want to submit the exam?");
    if (!Submission) {
        return;
    }

    let score = 0;
    const selected_answer1 =
        document.querySelector(
            'input[name="q1"]:checked'
        );
    if (!selected_answer1) {
        alert("Please answer Question 1.");
        return;
    }
    if (selected_answer1.value === correct_answer.q1) {
        score++;
    }
    
    const selected_answer2 =
        document.querySelector(
            'input[name="q2"]:checked'
        );
    if (!selected_answer2) {
        alert("Please answer Question 2.");
        return;
    }
    if (selected_answer2.value === correct_answer.q2) {
        score++;
    }
    console.log("Score:", score);
    alert("Exam submitted successfully.");
    location.href =
        `result.html?student=${student_name}&score=${score}`;

});