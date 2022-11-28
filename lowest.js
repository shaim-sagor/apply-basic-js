function lowestNumber(arrayNum) {
    let lowest = arrayNum[0];
    for (let i = 0; i < arrayNum.length; i++) {
        const arrayElement = arrayNum[i];
        if (arrayElement < lowest) {
            lowest = arrayElement;
        }
    }

    return lowest;
}

let arrayInput = [12, 51, 43, 32, 11, 133, 35, 64, 62, 13, 17, 15];
let arrayResult = lowestNumber(arrayInput);
console.log(arrayResult);