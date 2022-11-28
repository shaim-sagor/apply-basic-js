// fibonacci series[ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34,55] 


// let num = [0, 1];
// for (let n = 2; n <= 10; n++) {
//     num[n] = num[n - 1] + num[n - 2];
// }

// console.log(num);

function fibonacciSeries(limit) {
    if (typeof limit != 'number') {
        return 'Please give a number';
    }
    if (limit < 2) {
        return 'please give a number more than 2'
    }



    let num = [0, 1];
    for (let n = 2; n <= limit; n++) {
        num[n] = num[n - 1] + num[n - 2];
    }
    return num;
}

// const input = ;
console.log(fibonacciSeries(-10));