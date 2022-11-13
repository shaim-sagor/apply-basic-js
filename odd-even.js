//is even or not

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;

}

var given1 = 21;
var result1 = isEven(given1);
console.log(result1);

var given2 = 22;
var result2 = isEven(given2);
console.log(result2);


//is odd or not 
function isOdd(num) {
    if (num % 2 == 1) {
        return true
    }
    return false;
}

var given3 = 21;
var result3 = isOdd(given3);
console.log(result3);

var given4 = 22;
var result4 = isOdd(given4);
console.log(result4);
