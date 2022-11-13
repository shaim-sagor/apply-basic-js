function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

var input1 = 2100;
var input2 = 1992;
var result1 = isLeapYear(input1);
var result2 = isLeapYear(input2);
console.log('is my year leap year ', result1);
console.log('is my year leap year ', result2);