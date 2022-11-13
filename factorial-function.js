function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;

}

var firstCheck = 3;
var firstResult = getFactorial(firstCheck);
console.log(firstResult);

var secondCheck = 4;
var secondResult = getFactorial(secondCheck);
console.log(secondResult);