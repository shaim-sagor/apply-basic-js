function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);

}
var myNumber = factorial(3);
console.log(myNumber);