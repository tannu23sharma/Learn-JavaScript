//Higher order loops

//array of objects
//[{},{},{}]

const arr = [1,2,3,4,5];
/*
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
let j = 0;
while(j < arr.length){
    console.log(arr[j]);
    j++;
} 
*/
for(let i of arr){
    console.log(i); // 1 2 3 4 5
}
for(let i in arr){
    console.log(arr[i]); // 1 2 3 4 5
}
arr.forEach((item,index)=>{
    console.log(item,index); // 1 0 2 1 3 2 4 3 5 4
})
const str = "Hello world"
for(let s of str){
    console.log(s);// H e l l o ...
}

//Maps
//unique values
const map = new Map()
map.set('a',1)
map.set('b',2)
map.set('c',3)
console.log(map); //Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
console.log(map.get('a')); //1
map.delete('a')

for(let i of map.keys()){
    console.log(i); // b c
}
for(let i of map.entries()){
    console.log(i); // [ 'b', 2 ] [ 'c', 3 ]
}
for(let [key,value] of map){
    console.log(key,value);// b 2 c 3
}
for(let i of map.values()){
    console.log(i); // 2 3
}
map.forEach((i)=>{
    console.log(i); // 2 3
})

//Looping in objects
const myObj = {
    name: "Tannu",
    age: 21
}
for(const key in myObj){
    console.log(key); //name age
}
for(const key in myObj){
    console.log(myObj[key]); //Tannu 21
}

//Objects in array
const arr1 = [
    {
        name:"Tannu",
        age: 21
    },
    {
        name:"Ashu",
        age: 20
    },
    {
        name:"Srutee",
        age: 25
    }
];
arr1.forEach((item)=>{
    console.log(item);
    //{ name: 'Tannu', age: 21 }
    //{ name: 'Ashu', age: 20 }
    //{ name: 'Srutee', age: 25 }
})
arr1.forEach((item)=>{
    console.log(item.name);// Tannu Ashu Srutee
})

//Filter in arrays
myNums = [1,2,3,4,5,6,7,8,9,10];
const ans = myNums.filter((num)=>num > 4)
console.log(ans); //[ 5, 6, 7, 8, 9, 10 ]
//same thing use loop
const ans1 = []
myNums.forEach((num)=>{
    if(num > 4)
        ans1.push(num)
})
console.log(ans1); //[ 5, 6, 7, 8, 9, 10 ]

//Filter in objects
const Books =[
    {
        title: "book1",
        genre: "history",
        price: 200
    },
    {
        title: "book2",
        genre: "math",
        price: 300
    },
    {
        title: "book3",
        genre: "english",
        price: 400
    },
    {
        title: "book4",
        genre: "history",
        price: 500
    }
]
const historyBooks = Books.filter((bk)=> bk.genre == "history");
console.log(historyBooks);
//  [{ title: 'book1', genre: 'history', price: 200},
//  { title: 'book4', genre: 'history', price: 500}]


//Combining Map and Filter
let newNums = myNums.map((num)=> num + 10)
console.log(newNums);
//[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let newNum = myNums.map((num)=> num * 10).filter((num)=> num > 40)
console.log(newNum);//[ 50, 60, 70, 80, 90, 100 ]

//Reduce
const num1 = [1,2,3,4,5]
const myTotal = num1.reduce(function(acc, val){
    console.log(`acc: ${acc} and val: ${val}`);
    //acc: 0 and val: 1
    //acc: 1 and val: 2
    //acc: 3 and val: 3
    //acc: 6 and val: 4
    //acc: 10 and val: 5
    return acc + val;
}, 0) //acc starts from this

console.log(myTotal); //15

//shortcut
//const total = myNums.reduce((acc,val)=> acc + val, 0)

//for objects
const totalprice = Books.reduce((acc,item) => acc + item.price, 0)
console.log(totalprice); //1400
