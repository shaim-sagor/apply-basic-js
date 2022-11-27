function fahrToCelci(fahr) {
    var givenFahr = fahr;
    let toCalci = (givenFahr - 32) * (5 / 9);
    return toCalci;
}

var input2 = 10;
var result2 = fahrToCelci(input2);
console.log(input2, ' Fahrenheit is ', result2, 'Celcious.');