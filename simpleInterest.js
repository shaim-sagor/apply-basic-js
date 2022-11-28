
function simpleInterest(total, rate, year) {
    var totalInterest = (total * rate * year) / 100;
    return totalInterest;
}
let result1 = simpleInterest(100, 2, 3);
let result2 = simpleInterest(200, 11, 3);
console.log(result1, result2);
