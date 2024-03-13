function saymayname(){
  console.log("a");
  console.log("a");
  console.log("a");
  console.log("a");
}

// here saymyname is refrence and () is execution
saymayname()

function atttwonum(num1, num2){// here when we define function it is called parameter here num1 and num2
  console.log(num1+num2);
}

// when we call function then 1 and  called as arguments
atttwonum(1,2) // 3
atttwonum(1,"4") // 14
atttwonum(1,"a") // 1a

const result = atttwonum(1,2) 
console.log("result", result);//result undefined


function addtwonum(num1, num2){
  let result2 =(num1+num2);
  return result2;
  // after return it was not execute bcz it was unreachebale
}

addtwonum(1,2)// nothing printed
const result1 = addtwonum(1,2) 
console.log("result", result1);//result 3

function loginuser(username){
  return `${username} just logged in`
}
console.log(loginuser("patel"));//patel just logged in
console.log(loginuser());//undefined just logged in

function logu(username = "default name "){
  if(username === undefined){ // !username also u can use
    console.log("Please enter use name");
    return 
  }
  return `${username} just logged in`
}

console.log(logu()); // Please enter use name
// undefined


function clcprice(num){
  return num
}
console.log(clcprice(200));//200
console.log(clcprice(200,300,400));//200

function clcpricerest(...num){// here ... is not a spread operator it was called as rest oprator 
  return num
}
console.log(clcpricerest(200,300,400));//[ 200, 300, 400 ]

function clcpricevalrest(val1,val2,...num){
  return num
}
console.log(clcpricevalrest(200,300,400,500));//[400, 500 ]
//here val1 is 200 and val2 is 300


const user = {
  username : "patel",
  price:199
}
function hadleobj(anyobj){
  console.log(`username is ${anyobj.username} and price is ${anyobj.prices}`);//typo in prices
}
hadleobj(user);//username is patel and price is undefined
hadleobj({
  username:"sam",
  prices: 399
});//username is sam and price is 399

const mynewarray = [200,400,100,600]
function returnarray(getarray){
  return getarray[2];
}
console.log(returnarray(mynewarray)); // 100
console.log(returnarray([100,200,300]));// 300 
