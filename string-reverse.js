const givenString = 'I am programer';

function reverseString(strings) {
    let reversed = '';
    for (const letters of strings) {
        console.log(letters);
        reversed = letters + reversed;
    }
    return reversed;

}

const result = reverseString(givenString);
console.log(result);