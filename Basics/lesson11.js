//Functions

function add(num1, num2){ //parameters
    return num1 + num2;
}
const res = add(3,8);//arguments
console.log(res);

function loginUser(username) { //username = "Ashu" Default
    if(username === undefined){
        return "please enter name"
    }
    /*if(!username){
        return "please enter name"
    }*/
    return `${username} logged in`
}
console.log(loginUser());


function calculateCartPrice(...num1) { //rest operator takes multiple arguments
    return num1
}
console.log(calculateCartPrice(200,300,400)); //[ 200, 300, 400 ]
/*function calculate(val1, val2, ...num1) {
    console.log(val1,val2); //200 300
    console.log(num1); //[ 400, 500 ]
}
console.log(calculate(200,300,400,500))*/

//How to pass object to function
const user1 = {
    username: "Ashu",
    price: 199
}
function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
handleObject(user1) //Username is Ashu and price is 199
handleObject({
    username: "Tannu",
    price: 300
}) //Username is Tannu and price is 300

//Passing array
const arr1 = [100,200,300]

function secondValue(arr) {
    console.log(arr[1])
}
secondValue(arr1) //200
secondValue([300,400,500]) //400


//Arrow functions

const user = {
    username: "Srutee",
    price: 999,
    welcome: function(){
        console.log(`${this.username} welcome`); //for current context in object
        console.log(this); //{ username: 'Pam', price: 999, welcome: [Function: welcome] }
    }
}
user.welcome() //Srutee welcome
user.username = "Pam"
user.welcome() //Pam welcome
console.log(this); //{} but in brower it returns "window" object

/*
function chai() {
    let username = "user"
    console.log(this.username); // it doesn't work in functions, only in objects
}
chai()//undefined
*/

//Arrow function
const hello = () =>{
    console.log("hello");
}
const addTwo = (n1,n2)=> console.log(n1+n2);
addTwo(3,4) //7

//if {} are used then we have to use return, else we can simply pass n1+n2 or (n1+n2)
const object = () => ({user: "abc"}) //for returning object

