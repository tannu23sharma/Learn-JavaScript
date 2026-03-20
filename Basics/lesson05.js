//Strings
const name = 'John';
const name2 = new String('Tannu'); //String object
const word = " world";
console.log(name + word); //"John world"
console.log(`Hello ${name.toUpperCase()}, welcome to ${word}`);
console.log(name2); //gives key value pair, String {'Tannu'}
console.log(name2.valueOf()); //gives value, "Tannu"
console.log(name2[0]); //'T'
console.log(name2.__proto__); //gives all the methods in browser console

let s1 = "Ajay"
let s2 = new String("Ajay"); //String {'Ajay'}

console.log(s1 == s2);  // true (type coercion)
console.log(s1 === s2); // false (strict comparison)
console.log(s1.localeCompare(s2)); // 0 (means they are equal lexicographically)

/*Methods
name2.length;
charAt(index); // str[index]
charCodeAt(index); //returns the Unicode value of the character at the specified index

toString();
str1.concat(str2) //str1 + str2

toUpperCase();
toLowerCase();

indexOf(); //index of first occurance, if not -1
lastIndexOf(); //index of last 
startsWith(); 
endsWith(); //string ends with the characters of the specified string or not
includes(); //contains given string or not

substring(); //end not included, negative not allowed
substr(start, length); //end not included
slice(start,end) or slice(start); //End not included, negative index counts from end

split(separator, limit); //returns array
str.split('')
['H', 'e', 'l', 'l', 'o', ',', ' ', 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'T', 'a', 'n', 'n', 'u']
str.split(" ")
['Hello,', 'my', 'name', 'is', 'Tannu']
str.split(",")
['Hello', ' my name is Tannu']


trim(); //removes whitespace from both ends
trimStart(); //removes whitespace from start
trimEnd(); //removes whitespace from end

replace("s1","s2"); //replace first occurrence of S1 with S2
replaceAll(); //replace all occurrences

name ="Tannu"
name.anchor()
'<a name="undefined">Tannu Sharma</a>'

match()	//Search a string for a match regex.
matchAll()	//Return all the iterators matching the reference regex.

search()	//Search for a match in between regular expressions and a given string object.
          // 1 if found, else -1
*/ 



/* How to use regex
const regex = /pattern/flags;
const regex = new RegExp('pattern', 'flags');
Flags:
g - global  
i - case-insensitive
m - multiline
s - dotall
u - unicode
y - sticky
*/
const rule = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
function validPassword(s) {
  return rule.test(s); //you can also use s.match(rule) which returns an array of matches or null if no match is found
}

console.log(validPassword("Abc123$%")); // true
console.log(validPassword("abc12345")); // false (no uppercase, no special)

/* 
(?=.*[A-Z]) at least one uppercase
(?=.*[a-z]) at least one lowercase
(?=.*\d) at least one digit
(?=.*[^A-Za-z0-9]) at least one special char
.{8,} length minimum 8 characters
^ start of string
$ end of string
?=. is a positive lookahead, it checks for the presence of the pattern without consuming characters.
{8} exactly 8 characters
*/

const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*
^[^\s@]+ matches one or more characters that are not whitespace or '@' at the beginning of the string.
@ matches the '@' symbol.
[^\s@]+ matches one or more characters that are not whitespace or '@' after the '@' symbol.
\. matches the '.' symbol (escaped with a backslash).
[^\s@]+$ matches one or more characters that are not whitespace or '@' at the end of the string.
*/

//No whitespace and 4-20 chars
const username = /^[^\s]{4,20}$/;
/*
^[^\s] matches the start of the string followed by a character that is not whitespace.
{4,20} specifies that the preceding character (not whitespace) must occur between 4 and 20 times.
$ matches the end of the string.
*/

//Only letters and spaces
const Name = /^[A-Za-z ]+$/;

//yyyy-mm-dd
const date = /^\d{4}-(0[1-9]|1[0-2])-([0-2]\d|3[01])$/;
/*
^\d{4} matches the start of the string followed by exactly 4 digits (the year).
- matches the '-' symbol.
(0[1-9]|1[0-2]) matches either a month from 01 to 09 or from 10 to 12.
- matches the '-' symbol.
([0-2]\d|3[01]) matches either a day from 00 to 29 or from 30 to 31.
*/