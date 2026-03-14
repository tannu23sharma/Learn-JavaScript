let score1 = "85";
//console.table([score1,typeof score1]); 
score1 = Number(score1);
//console.table([score1,typeof score1]); 
let score2 = "85.5";
score2 = parseFloat(score2);
//console.table([score2,typeof score2]);
let score3 = "85aa";
score3 = Number(score3);
//console.table([score3,typeof score3]); //NaN (Not a Number) is a special value that indicates that a value is not a valid number
let score4 = null;
score4 = Number(score4);
console.table([score4,typeof score4]); //0 number
let score5 = undefined;
score5 = Number(score5);
console.table([score5,typeof score5]); //NaN number

/* 
- If the value is a string that can be parsed as a valid number (like "85" or "85.5"), it will be converted to that number.
- If the string cannot be parsed as a valid number (like "85aa"), it will result in NaN (Not a Number).
- If the value is null, it will be converted to 0.
- If the value is undefined, it will be converted to NaN. */
/* true = 1, false = 0 *, "" = 0 */

/* for conversion
Boolean(value) or !!value
Number(value) or +value
String(value) or value.toString() */


/* operator precedence
1. Parentheses ()
2. Exponentiation **
3. Multiplication *, Division /, Modulus %
4. Addition +, Subtraction -
5. Assignment =, +=, -=, etc. */


/* string operations
- Concatenation: + used to concatenate
- Template Literals: Template literals are enclosed by backticks (`)
 and can contain placeholders for variables or expressions, which are indicated by ${}.
- String Methods: .length, .toUpperCase(), .toLowerCase(), .trim(), .substring()*/

let name = "Alice";
console.log("Hello " + name);
console.log(`Hello ${name}`);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 3); //123
console.log(1 + 2 + "2"); //32

console.log(true); //true
console.log(+true); //1
console.log(+""); //0

/*equality operator (==) performs type coercion, it converts the operands to the same type before making the comparison. 
The strict equality operator (===) does not perform type coercion and checks both value and type.*/

console.table([null == 0, null === 0, null == undefined, null === undefined]);
//false false true false
console.table([0 == false, 0 === false, "" == false, "" === false]);
//true false true false
console.table([undefined == false, undefined >= false]);
//false false