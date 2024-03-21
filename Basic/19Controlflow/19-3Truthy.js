//const userEmail = "sdfhvi.si"//Got user email
//const userEmail = "" //Don't have user email
const userEmail = []//Got user email
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {// to check array use this 
    console.log("Array is empty");//Array is empty
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {//object.keys given an array of keys
    console.log("Object is empty");//Object is empty
}

// false == 0 == "" it gives true

if ("" == 0) {
  console.log("Got user email");// executes
}

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20 // 10 
// here value which comes first it will be assigned to variable except null and undefined 
console.log(val1);

// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") // more than 80