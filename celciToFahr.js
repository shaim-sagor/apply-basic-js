
//celcious to fahrenheit

function celciToFahr(celci) {
    var givenCelci = celci;
    let toFahr = givenCelci * (9 / 5) + 32;
    return toFahr;
}

var input1 = 10;
var result1 = celciToFahr(input1);
console.log(input1, ' celcious is ', result1, 'Fahrenheit');


