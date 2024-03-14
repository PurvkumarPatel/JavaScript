const user = {
  unam: "hiu",
  pricr: 999,

  welcmessage: function(){
    console.log(`${this.unam},welcome to website`);// this is used to refer current context it means current valuse
    console.log(this);
  }
}
user.welcmessage() //hiu,welcome to website
//{ unam: 'hiu', pricr: 999, welcmessage: [Function: welcmessage] }
user.unam = "as"
user.welcmessage()//as,welcome to website
//{ unam: 'as', pricr: 999, welcmessage: [Function: welcmessage] }
console.log(this); // {} empty object
// if you run this in window than it is window object not null

function oy(){
  console.log(this); // run to see many objects comes
}
oy()

function oyh(){
  let uname = "hitesh"
  console.log(this); // run to see many objects comes
}
oyh()

function oyha(){
  let uname = "hitesh"
  console.log(this.unam);//undefined // bcz it was not working in function it is works in objects as previously we see
}
oyha()

let a = function (){
  let uname = "hitesh"
  console.log(this.unam);//undefined 
}
a()//undefined // no matter ho u define function 

let ok = () => {// remove function and apply arrow called as arrow function
  let uname = "hitesh"
  console.log(this);// {} //diffrenet from normal function
  console.log(this.unam);//undefined
}
ok()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // this is excplict return bcz we use {}
const addTwo = (num1, num2) => (num1 + num2 )// called as an implicit return used when we have to do only return
console.log(addTwo(3, 4))//7

const addTwe = (num1, num2) => {usnam:"sdf"}//can return obj without ()
console.log(addTwe(3, 4))//undefined

const addTww = (num1, num2) => ( {usnam:"sdf"} )
console.log(addTww(3, 4))//{ usnam: 'sdf' }

