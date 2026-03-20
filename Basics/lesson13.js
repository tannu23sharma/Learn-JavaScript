//Immediately invoked function expressions

(function database() {
    //named IIFE
    console.log(`DB connected`);
})(); //calls immediately and ends context ";"
//it is used to prevent pollution from global scope

((name)=>{
    console.log(`DB connected: ${name}`);
})("Tannu"); //DB connected: Tannu


//In conditional statements like if()
//Falsy values
//false, 0, -0, BigInt On, "", null, undefined, NaN

//Truthy values
//"0", 'false', " ", [], {}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("empty object");
}

//Nullish Coalescing operator (??): null, undefined

let val;
val = 5 ?? 10;
console.log(val); //val = 5
val = null ?? 10;
console.log(val); //val = 10
val = undefined ?? 15;
console.log(val); //val = 15

//Ternary Operator 
//condition ? statement1 : statement2
const price = 100;
price >= 80 ? console.log("more than 80"): console.log("less than 80");
