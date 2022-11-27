

function gradeCalculator(marks) {
    if (marks >= 80 && marks <= 100) {
        console.log('your grade is A+');
    }
    else if (marks >= 70 && marks <= 79) {
        console.log('your grade is A');
    }
    else if (marks >= 60 && marks <= 69) {
        console.log('your grade is A-');
    }
    else if (marks >= 50 && marks <= 59) {
        console.log('your grade is B');
    }
    else if (marks >= 40 && marks <= 49) {
        console.log('your grade is C');
    }
    else if (marks >= 80 && marks <= 100) {
        console.log('your grade is D');
    }
    else {
        console.log('your grade is F');
    }
}


gradeCalculator(25);
gradeCalculator(68);
gradeCalculator(58);