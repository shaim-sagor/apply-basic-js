
function largestNumber(arrayNum) {
    let largest = arrayNum[0];
    for (let i = 0; i < arrayNum.length; i++) {
        const arrayElement = arrayNum[i];
        if (arrayElement > largest) {
            largest = arrayElement;
        }
    }

    return largest;
}

let arrayInput = [12, 51, 43, 32, 11, 133, 35, 64, 62, 13, 17];
let arrayResult = largestNumber(arrayInput);
console.log(arrayResult);
