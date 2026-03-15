const balance = 1000;
let result = 123.8929;
console.log(balance.toFixed(2)); // 1000.00

let res = result.toPrecision(3);
result = 1000/3;
res = result.toPrecision(6); // 333.333 
console.log(res); // 124
console.log(typeof res); // toFixed() and toPrecision() return a string

const num = 1000000;
console.log(num.toLocaleString()); // 10,00,000
console.log(num.toLocaleString('en-US')); // 1,000,000

const num2 = new Number(100);

/*
num.MAX_VALUE; // 1.7976931348623157e+308
num.MIN_VALUE; // 5e-324
num.POSITIVE_INFINITY;  // Infinity
num.NEGATIVE_INFINITY;  // -Infinity 
num.safeInteger(Number.MAX_SAFE_INTEGER + 1); // false
*/

/* MATH
    Math.floor()
    Math.ceil()
    Math.round()
    Math.abs()
    Math.max()
    Math.min()
    Math.random()
    Math.pow()
    Math.sqrt()
    Math.PI
 */
console.log(Math.random()); //between 0 and 1
console.log(Math.random() * 10 + 1); // between 1 and 10
console.log(Math.floor((Math.random() * 10) + 1)); // between 1 and 10

//Between a range of numbers
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // between 10 and 20