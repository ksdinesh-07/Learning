// Object
let selected_course = {
    name: 'JavaScript',
    students: 120,
    lessons: 40
};


// Reference

let current_course = selected_course;
console.log(current_course);
console.log(selected_course === current_course);
// true


// Creating DOM reference

const course_details =document.getElementById("course-details");


// Function to display course

function show_course(course) {
    course_details.innerHTML = `
        <h2>${course.name}</h2>
        <p>Students: ${course.students}</p>
        <p>Lessons: ${course.lessons}</p>
    `;
}


// Event Listener

const buttons = document.querySelectorAll(".open-course");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        const course_name =button.dataset.course;
        selected_course = {
            name: course_name,
            students: 200,
            lessons: 50
        };
        current_course = selected_course;
        show_course(current_course);
    });
});


// Removing references

function close_course() {
    selected_course = null;
    current_course = null;
    course_details.innerHTML ="No course selected";
}


// Close button event

const close_button =document.getElementById("close-course");
close_button.addEventListener("click",close_course);

