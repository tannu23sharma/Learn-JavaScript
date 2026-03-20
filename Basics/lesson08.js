//Implementing Queue
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
let arr = [3,12,22];
console.log("Before:" + JSON.stringify(arr)); //Before:[3,12,22]
console.log(nextInLine(arr, 11)); //3
console.log(nextInLine(arr, 10)); //12
console.log(arr); //[22,11,10]
console.log("After:" + JSON.stringify(arr)); //After:[22,11,10]

//Switch Statements
function CaseAndSwitch(val){
    let ans = "";
    switch (val) {
        case 1:
            ans = "Sunday";
            break;
        case 2:
            ans = "Monday";
            break;
        case 3:
            ans = "Tuesday";
            break;
        case 4:
            ans = "Wednesday";
            break;
        case 5:
            ans = "Thursday";
            break;
        case 6:
            ans = "Friday";
            break;
        case 7:
            ans = "Saturday";
            break;
        default:
            break;
    }
    return ans;
}

console.log(CaseAndSwitch(3)); //Tuesday
console.log(CaseAndSwitch(8)); //Nothing

