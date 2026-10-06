const params = new URLSearchParams(location.search);

const student_name = params.get("student");
const score = Number(params.get("score"));
const total_questions=2;
const incorrect_answers=total_questions - score;
const student_name_element=document.getElementById("studentName");
student_name_element.textContent=`Student: ${student_name}`;

const score_canvas=document.getElementById("score_canvas");
const score_context=score_canvas.getContext("2d");

score_context.font = "20px Arial";
score_context.fillText(`Score: ${score} / ${total_questions}`,120,30);
score_context.fillText("Correct",50,70);
score_context.fillText("Incorrect",280,70);
score_context.fillRect(50,90,score * 100,40);
score_context.fillRect(250,90,incorrect_answers * 100,40);
score_context.font = "16px Arial";
score_context.fillText(`${score} Correct`,50,160);
score_context.fillText(`${incorrect_answers} Incorrect`,250,160)

const performance_canvas=document.getElementById("performance_canvas");
const performance_context=performance_canvas.getContext("2d");
const percentage=(score / total_questions) * 100;
performance_context.font = "18px Arial";
performance_context.fillText(`Performance: ${percentage}%`,100,40);
performance_context.fillRect(50,70,percentage * 3,40);

const status_canvas=document.getElementById("status_canvas");
const status_context=status_canvas.getContext("2d");
status_context.font = "20px Arial";
status_context.fillText("EXAM SUBMITTED",100,70);