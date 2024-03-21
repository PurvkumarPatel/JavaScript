// how memory works in JavaScript
// primitive datatype use stack memory (gives copy)
// non primitive datatype use heap memory (gives reference)

//stack
let onevar = "Purv";
let secondvar = onevar;
secondvar = "Patel"; // here we change value if it was reference onevar value also changed but that not so secondvar was copy variable 

console.log(onevar);//Purv
console.log(secondvar);//Patel

//heap
let userOne = {
  email : "Patel@ok.com",
  name : "Hase"
} 
console.log(typeof userOne);
console.log(userOne);

let userTwo = userOne;
userTwo.name= "Chebhai"
console.log("After change in userTwo");
console.log(userOne);
console.log(userTwo);