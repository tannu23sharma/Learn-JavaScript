//Scopes

//outside: global
//inside block: local

var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
}
console.log(c) //30
//only var is accessible outside, a and b are within scope of "if"
//300 is not printed, it changes

let a1 = 200
let b1 = 100
const c1 = 500
const d1 = 600
if(true){
    let a1 = 40
    let b1 = 50
    const c1 = 60
    const d1 = 70
    console.log(a1,b1,c1,d1) // 40 50 60 70
}
console.log(a1,b1,c1,d1) // 200 100 500 600


//Nested scope
function one() {
    const user = "Tannu"
    function two() {
        console.log(user); //Tannu
    }
    console.log(user); //Tannu
    two() 
}
one()


addOne(5) //no error
function addOne(num) {
    console.log(num + 1); //6
}

//addTwo(6) gives error if it is called before declare
const addTwo = function(num) {
    console.log(num + 1);
}
