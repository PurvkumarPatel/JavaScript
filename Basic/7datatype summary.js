// datatype divided on basis of memoru allocate and access
// primitive - non primitive

// primitive 7 types: string, number, boolean, null, undefined, symbol, BigInt // call by value

// JavaScript is a dynamically typed language (no need to define type of variable)

const score = 100
const scoreGrade = "A"

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') // every symbol is different even symbol content is same 
console.log(id === anotherId);
const bigNumber = 3456543576654356754n // n that defines big int

// reference type (non primitivr)
// array, objects, functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof score); // number 
console.log(typeof scoreGrade); // string 
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // null -> object
console.log(typeof userEmail); // undefined
console.log(typeof id);// Symbol
console.log(typeof anotherId); //symbol
console.log(typeof bigNumber);//bigint
console.log(typeof heros);//arrays -> object
console.log(typeof myObj);//object -> object
console.log(typeof myFunction);//function -> object function 

// Object (native and does not implement [[Call]])	"object"
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".