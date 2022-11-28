var first = 10;
var second = 20;
console.log(first, second);
var container = first;
first = second;
second = container;
console.log(first, second);

//destructuring

[first, second] = [second, first];
console.log(first, second);