// if

let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

// if -else

let mark = 75;

if (mark >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// if else-if else

let score = 85;

if (score >= 90) {
    console.log("Grade A+");
} else if (score >= 80) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else {
    console.log("Need improvement");
}


// switch

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

// conditional

let ageCheck = 20;
let message = ageCheck >= 18 ? "Eligible" : "Not Eligible";
console.log(message);

