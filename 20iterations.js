// for ------------------------------------------------

for (let i = 0; i < 10; i++) {
  const element = [i];
  if(element== 5){
    console.log("5 here");
  }
  console.log(element);
}

for (let i = 0; i < 3; i++) {
  console.log(`outer loop value: ${i} `);
  for (let j = 0; j < 3; j++) {
    console.log(`inner loop value: ${j} and ${i}`);
  }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);//3
for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
// flash
// batman
// superman
// undefined


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
  console.log(`Value of i is ${index}`);
}// stop at 5

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
      console.log(`Detected 5`);
      continue;
  }
  console.log(`Value of i is ${index}`);  
}// value of i is 5 is not printed 




// while do while loop ------------------------------------------------


let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

let mar = ['flash', "batman", "superman"]

let arr = 0
while (arr < mar.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);// Score is 11


// higher order array loop

// for of

// ["", "", ""]
// [{}, {}, {}]

const ar = [1, 2, 3, 4, 5]
// num is iterator and ar is object // here object doen't mean previoes one
for (const num of ar) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "Bharat")// overwrite on India

console.log(map);

for (const [key] of map) {// [] not used in key than whole map is printed 
  console.log(key);
}
// IN
// USA
// Fr

for (const [key, value] of map) {
  console.log(key, ':-', value);
}
// IN :- Bharat
// USA :- United States of America
// Fr :- France

const myObject = {
  game1: 'NFS',
  game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); 
// } // here object is not iteratable  using for of loop

// For In loop
const myObject1 = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
}

for (const key in myObject1) {
  console.log(key); // rb
  console.log(myObject1[key]); // ruby
  console.log(`${key} shortcut is for ${myObject1[key]}`); //  rb shortcut is for ruby
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);//0 1 2 3 4 
    console.log(programming[key]);// js rb py java cpp
}

// mapos
for(const key in map){ // map are not itratable in for in loop
  console.log(key);// nothing is printed but executed
}

