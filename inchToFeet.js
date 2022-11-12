function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var givenInches = 342;
var givenInches1 = 182;
var result = inchToFeet(givenInches);
var result1 = inchToFeet(givenInches1);
console.log('the result feet is ', result, result1);