//if 
const login = true;
if (2 !== "2") {
  console.log("ok");//!== then this executes
}else{
  console.log("kuch toh dadbadh he");// != then this is executed
}

// Comparison Operators
// >,<,<=,>=,==,===(strict checking),!=, !==

if (2 !== "2") {
  let power = "ok"
  console.log(`ok ${power} he`);// ok ok he
}
//console.log(`${power}`);// error due to scope // no error if we use VAR 

// do not type as below way
// if (balance > 500) console.log("test"),console.log("test2");

//shorthand notation
let balance = 1000;
balance>1500?console.log("OK"):console.log("NOT OK");// NOT OK 

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");
}
// lesss than 1200

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
//logical Operator
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");// not executes
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");//excutes
}