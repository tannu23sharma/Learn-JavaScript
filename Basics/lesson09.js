//Objects
//property:value
let ourDog = {
    "name": "Chopper",
    "age": 2,
    "His friends": ["tommy","bruno"],
    "legs": 4,
    1: "tail"
}
/*
console.log(`Name ${ourDog.name}`); //Name Chopper
console.log("Age " + JSON.stringify(ourDog.age)); //Age 2
console.log("Friends"+" " + ourDog["His friends"]); //Friends tommy,bruno
//used when property has spaces
console.log("Friend " + ourDog["His friends"][0]); //Friend tommy
console.log(ourDog);

//Change property
ourDog.name = "Sheru";
//add new property
ourDog.bark = "bow-wow";
ourDog['ears'] = 2;
console.log(ourDog);

//delete any property
delete ourDog.ears;
console.log(ourDog);
*/

//singlelon made from constructor
//if made from literals, not singleton

const mySym = Symbol("key1")
//object literals
const jsUser = {
    name: "Tannu",
    "last name": "sharma",
    //mySym: "mykey1", // here it is not used as symbol and type is string
    [mySym]: "mykey1",
    age: 21,
    location: "jaipur",
    isLoggedIn: false,
    lastLoginDays: ["Mon","sat"]
};
console.log(jsUser.name);
console.log(jsUser["last name"]); //can't use dot notation as it contains space
//console.log(jsUser.mySym); //mykey1 type string
//mySym: 'mykey1'

console.log(jsUser[mySym]); //mykey1
//[Symbol(key1)]: 'mykey1'

/*
jsUser.age = 25;
Object.freeze(jsUser); //can't change values now
console.log(jsUser.age); //25
jsUser.age = 40;
console.log(jsUser.age); //25
*/

jsUser.greeting = function(){
    console.log("hello");
}
//console.log(jsUser.greeting); //[Function (anonymous)]
jsUser.greeting(); //hello

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
jsUser.greetingTwo();

//constructor
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//nesting
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            first: "Tannu",
            last: "Sharma"
        }
    }
}
console.log(regularUser.fullname?.userfullname.first); //? helps in optional chaining in case it doesn't exist

//merge objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3= Object.assign({},obj1,obj2)
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj4 = {...obj1,...obj2} //easier
console.log(obj4); //same thing

//data from database comes like this
const users = [
    {
        id: 1,
        email: "example@gmail"
    }
]
users[0].email //to access

console.log(tinderUser); //{ id: '123abc', name: 'Sam', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('hey')); //false

