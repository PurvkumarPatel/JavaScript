// array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
// asswociative array - map (not available in JS)
// shallow copy - call by referance
// deep copy - call by value

 const myARR = [0,1,2,3,4,5] // must be bracece elements can be anything, 0 base indexing
// copy is shallow in array of JS
const myheros = ["aerin", "patel"]
const arr2 = new Array(5,25,3,6)
console.log(myARR[1]);//1
console.log(typeof myheros); // objects

// Array Methods

myARR.push(6) // add elements
myARR.push(8)
myARR.pop()// remove last element
myARR.unshift(9)// add fisrt in array
myARR.shift() // remove first elemenr

console.log(myARR.includes(9));//false
console.log(myARR.indexOf(20));//2 if not exits -1

const newArr = myARR.join(); // bind and covert in string with coma sparated
console.log(newArr);//0,1,2,3,4,5,6
console.log(newArr[1]);//,
console.log(typeof newArr);//string type
console.log(myARR);

// slice, splice
console.log("A",myARR); // original array // A [ 0, 1, 2, 3, 4, 5, 6]
const neAr = myARR.slice(1,3); // 3 not included [ 1, 2 ]
console.log(neAr);
console.log("B",myARR);// after slice no differance in array as it is //B [ 0, 1, 2, 3, 4, 5, 6]
const neAr2 = myARR.splice(1,3);// remove 1 to 3 element from array
console.log("C",myARR); // aplice removed array element from 1 to 3 //C [ 0, 4, 5, 6 ]
console.log(neAr2); // [ 1, 2, 3 ]

