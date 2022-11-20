
//celcious to fahrenheit

function celciToFahr(celci) {
    var givenCelci = celci;
    let toFahr = givenCelci * (9 / 5) + 32;
    return toFahr;
}

var input1 = 10;
var result1 = celciToFahr(input1);
console.log(input1, ' celcious is ', result1, 'Fahrenheit');

// fahrenheit to celcious

function fahrToCelci(fahr) {
    var givenFahr = fahr;
    let toCalci = (givenFahr - 32) * (5 / 9);
    return toCalci;
}

var input2 = 10;
var result2 = fahrToCelci(input2);
console.log(input2, ' Fahrenheit is ', result2, 'Celcious.');