function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var givenInches = 342;
var givenInches1 = 182;
var result = inchToFeet(givenInches);
var result1 = inchToFeet(givenInches1);
console.log('the result feet is ', result, result1);


//mile to km

function mileToKm(miles) {
    var km = miles * 1.61;
    return km;

}

var givenMiles = 43;
var kmResult = mileToKm(givenMiles);
console.log('total km is ', kmResult);

// km to miles

function kmToMiles(kms) {
    var mile = kms * 0.62;
    return mile;
}

var givenKm = 10;
var mileResult = kmToMiles(givenKm);
console.log('miles result is ', mileResult);