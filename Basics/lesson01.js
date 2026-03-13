"use strict"; //enables strict mode which helps catch common coding mistakes and "unsafe" actions such as assigning values to undeclared variables
const id = 5; //can't change the value of const variables
let name = 'John'; //let variables can be changed but not redeclared
var roll = 10; //global scope
let marksValid = true; //without var, let, or const, the variable is automatically global and can be accessed anywhere
let variable = null; //no value or no object
let undefinedVariable; //declared but has not been assigned a value
let symbolVariable = Symbol('symbol'); //unique and immutable data type used to create unique identifiers for object properties
console.table([id, name, roll, marksValid, variable, undefinedVariable, symbolVariable]);
console.log(typeof variable); //object (this is a known quirk in JavaScript, null is considered an object type)
console.log(typeof undefinedVariable); //undefined
console.log(typeof name); //string
console.log(typeof id); //number
console.log(typeof marksValid); //boolean    
console.log(typeof symbolVariable); //symbol
