//DATE AND TIME
/* Starts from 1 January 1970 00:00:00 UTC */
let mydate = new Date();
let mydate2 = new Date("March 15, 2026 12:00:00");
let mydate3 = new Date(2026, 2, 15); //month starts from 0
console.log(mydate2.toDateString());//Sun Mar 15 2026


console.log(typeof mydate); //object

console.log(mydate); //2023-06-17T12:00:00.000Z
console.log(mydate.toString()); //Sun Mar 15 2026 12:00:00 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString()); //Sun Mar 15 2026
console.log(mydate.toLocaleDateString()); //15/3/2026

console.log(mydate.getDate()); //15
console.log(mydate.getDay()); //0
console.log(mydate.getMonth()); //2
console.log(mydate.getFullYear()); //2026
console.log(mydate.getHours()); //8


/*
getDate() - returns the day of the month (from 1 to 31)
getDay() - returns the day of the week (from 0 to 6)
getMonth() - returns the month (from 0 to 11)
getYear() - returns the year (two digits) 
getFullYear()   - returns the year (four digits)
getHours() - returns the hour (from 0 to 23)
getMinutes() - returns the minutes (from 0 to 59)
getSeconds() - returns the seconds (from 0 to 59)
getMilliseconds() - returns the milliseconds (from 0 to 999)
getTime() - returns the number of milliseconds since January 1, 1970
*/ 

let mytime = Date.now();
console.log(mytime); //1687017600000
console.log(mydate2.getTime()); //1710484800000
console.log(Math.floor(Date.now()/1000)); //1687017600


//to get current time in hours, minutes and seconds
let hours = mydate.getHours();
let minutes = mydate.getMinutes();
let seconds = mydate.getSeconds();
console.log(`Current time is ${hours}:${minutes}:${seconds}`); //Current time is 8:0:0
