//Arrays
let arr = [2,4,5,8];
let arr2 = new Array(2,4,5,8);
let arr3 = Array.of(2,4,5,8);
let arr4 = Array.from("Hello"); //creates an array from an iterable object
let arr5 = Array(5); //creates an array with 5 empty slots
let arr6 = Array(5).fill(0); //creates an array with 5 slots filled with 0
let arr7 = Array(5).fill().map((e,index) => index + 1); //creates an array with 5 slots filled with numbers from 1 to 5
let arr8 = Array(5).fill().map(() => Math.floor(Math.random() * 100) + 1); //creates an array with 5 slots filled with random numbers from 1 to 100
//console.table([arr, arr2, arr3, arr4, arr5, arr6, arr7, arr8]);
//console.log(arr8);

//Array methods
console.log(arr);//original

arr.push(10); //adds to the end
arr.unshift(1); //adds to the beginning
console.log(arr);

arr.pop(); //removes the last element
arr.shift(); //removes the first element
console.log(arr);

arr.splice(2, 0, 6); //adds an element at index 2 without removing any element
//arr.splice(2, 1, 6); //replaces the element at index 2 with 6
console.log(arr);
arr.splice(2, 1); //removes 1 element at index 2
console.log(arr);

console.log(arr.slice(1, 3)); //new array from index 1 to 2 (3 is not included)
console.log(arr.concat([10, 12])); //new array merging two or more arrays

console.log(arr.join(" ")); //returns a string by concatenating all elements of the array with a specified separator
console.log(arr.indexOf(5)); //returns the first index of the specified element, or -1 if not found
console.log(arr.includes(5)); //returns true if the array contains the specified element, otherwise false   

console.log(arr.reverse()); //reverses the order of the elements in the array
arr.sort();
console.log(arr.sort((a, b) => b - a)); //sorts the array in descending order

console.log(arr.map(x => x * 2)); //returns a new array with the results
console.log(arr.filter(x => x > 5));

console.log(arr.reduce((acc, x) => acc + x, 0)); //returns result of applying against an accumulator and each element in the array from left to right   

arr.forEach(x => console.log(x)); //once for each array element    
arr.some(x => x > 5); //returns true if at least one pass, otherwise false
arr.every(x => x > 5); //returns true if all elements pass, otherwise false  
arr.find(x => x > 5); //returns first elementthat satisfies, otherwise undefined
arr.findIndex(x => x > 5); //returns index of the first element, otherwise -1

arr.flat(); //returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
arr.copyWithin(0, 2);   
//copies a sequence of array elements within the array to the position starting at target index, overwriting the existing values

arr.entries(); //contains the key/value pairs for each index
arr.keys(); //contains the keys for each index
arr.values(); //contains the values for each index        
arr.includes(5); //returns true if the array contains the specified element, otherwise false
arr.indexOf(5); //returns the first index of the specified element, or -1 if not found
arr.lastIndexOf(5); //returns the last index of the specified element, or -1 if not found

arr.length;
arr.length = 3; //truncates the array to 3 elements
arr.length = 5; //extends the array to 5 elements, new elements are undefined

arr.toString(); //returns a string representing the array and its elements

Array.isArray(arr); //returns true if the object is an array, otherwise false
arr.at(2); //returns the element at the specified index, supports negative indexing
arr.flat(1);