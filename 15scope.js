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