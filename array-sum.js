
// var numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {

//     var element = numbers[i];
//     sum = sum + element;


// }

// console.log(sum);

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        sum = sum + element;

    }

    return sum;
}

let input = arraySum([1, 2, 3, 4, 5, 6]);
console.log(input);