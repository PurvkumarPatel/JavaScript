let a = 10
const b = 20
var c= 30
// golbal scope
// {} is scope in most of languages
if(true){
  //local scope
  let ab = 80
  console.log(a);//10
  var ca = 50;
  const b = 100;
  console.log(b);//100
  var c = 90
  console.log(c);//90 bcz of var
}

//console.log(ab); // error ab is not defined
console.log(ca);// 50 bcz of use var 
console.log(a);//10
console.log(b);//20
console.log(c);//90

//  when we run using node is different from windows scope

// nested scope
function one(){
  const uname = "hitesh"
  function two(){
    const web = "youtube"
    console.log(uname);//hitesh
  }
  //console.log(web);//error
  two()
}
one()

if (true) {
  const username = "hitesh"
  if (username === "hitesh") {
      const website = " youtube"
      console.log(username + website); //hitesh youtube
  }
  // console.log(website);// error outside access
}

// console.log(username);

console.log(addone(5)) // 6 //here function can be accessed before initializing

function addone(num){
    return num + 1
}

addTwo(5) // Error here it cant be acceaaible bcz function stored in variable
const addTwo = function(num){// here addTwo called as ana expression
    return num + 2
}
console.log(addTwo);//[Function: addTwo]
console.log(addTwo(5));//7