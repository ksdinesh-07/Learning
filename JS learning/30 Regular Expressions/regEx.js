const email_input=document.getElementById("email");
const phone_input=document.getElementById("phone");
const resume_input=document.getElementById("resume");
const validate_button=document.getElementById("validate");
const result=document.getElementById("result");

validate_button.addEventListener("click", function () {
    const email=email_input.value;
    const phone=phone_input.value;
    const resume=resume_input.value;

    // 1. regex syntax

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 2. test()

    const valid_email = email_pattern.test(email);
    console.log("Valid email:", valid_email);


    // 3. Phone validation

    const phone_pattern = /^\d{10}$/;
    const valid_phone = phone_pattern.test(phone);
    console.log("Valid phone:", valid_phone);

    // 4. match()

    const skills = resume.match(/JavaScript|Node.js|AWS/gi);
    console.log("Skills found:", skills);

    // 5. replace()

    const hidden_phone = phone.replace(
        /\d(?=\d{4})/g,
        "*"
    );
    console.log("Hidden phone:", hidden_phone);


    // 6. exec()

    const email_result = email_pattern.exec(email);
    console.log("Email match details:", email_result);


    // Final result

    if (valid_email && valid_phone) {
        result.innerText = "Application details are valid.";
    } else {
        result.innerText = "Please enter valid application details.";
    }

});