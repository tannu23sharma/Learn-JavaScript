/*Primitive datatypes
 String, Number, Boolean, null, undefined, Symbol, BigInt
 These are immutable and compared by value. 
 When you assign a primitive value to a variable, it holds the actual value. 
 When you copy that variable to another variable, it creates a new copy of the value. Changes to one variable do not affect the other.*/
 
 
 /*Non-primitive datatypes
    Object, Array, Function
    typeof object
    for function it will return function, but it is also an object
    These are mutable and compared by reference.*/

//Js is a dynamically typed language, which means that variables can hold values of any type and the type can change at runtime.

const id = Symbol('123'); //unique and immutable
const id2 = Symbol('123');
console.log(id == id2); //false, even though they have the same description, they are different symbols

const bigNum = 757558767678789798n;
//typeof bigNum will return 'bigint'
console.log(bigNum); //757558767678789798n
console.log(typeof BigInt); // 'function'


//Types of memory allocation
/* STack (primitive) copy by value
Heap (Non-primitive) copy by reference
*/

let myName = "tannu";
let anothername = myName; //copy by value
anothername = "tannu kumar"; //changing anothername does not change myName
let user1 = {
    email: "tannu@example.com",
    upi: "tannu@okaxis"
}
let user2 = user1; //copy by reference
user2.email = "hello@example.com"; //changing user2 changes user1 because they reference the same object in memory
console.log(myName); //tannu
console.log(anothername); //tannu kumar
console.log(user1.email);
console.log(user2.email);