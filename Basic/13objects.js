// 2 types to declare objects
// 1. as litreal
// 2. as construct
// Object.create // constructure method

// singleton is not made if we declare as litreal
// if we make objrct using construture than it was an singleston

// object litreals

const sybol = Symbol("ke1");
const Jsuser = {
  name:"hitesh",
  "full name":"hitesh sdbi",
  syboll : "myk1",// used as string not a Symbol
  [sybol] : "mfgh",
  age : 18,
  location:"haod",
  email: 'hiten@gmsolf.sj',
  isloggedin: false,
  laslogindays:["mon","fdfs"],

} // key value
// age , email, name take as "" string by Jsuser

//accesss elements of objects
console.log(Jsuser.email);//hiten@gmsolf.sj
console.log(Jsuser["email"]);//hiten@gmsolf.sj
//console.log(Jsuser."full name");// it can't be accessed 
console.log(Jsuser["full name"]);// hitesh sdbi
console.log(Jsuser["syboll"]);//myk1
//console.log(Jsuser["sybol"]);//undefined

Jsuser.email="sdib$gdsu"
//Object.freeze(Jsuser) //freez so no who can update
Jsuser.email="fgdas$gdsu"//sdib$gdsu
console.log(Jsuser.email);

Jsuser.grettings = function(){
  console.log("ashdi");
}
console.log(Jsuser.grettings);//ashdi
console.log(Jsuser.grettings());//undefined

Jsuser.gretting4 = function(){
  console.log(`ash2hvhdi,${this.age}`);
}

console.log(Jsuser.gretting4());//ash2hvhdi,18    undefined

//
// object defined using constructure or singleton

const suser = new Object() // singlton obj using constructor
const nsuaer = {} // non singlton obj using litreal

suser.id = "ui21dc43"
suser.name = "oabye"
suser.islog = false

console.log(suser);

const ruser = {
  email: "shdbsaj",
  fullname:{
    userfname:{
      fname: "ojdd",
      lname: "dnad"
    }
  }
}
console.log(ruser.fullname); // { userfname: { fname: 'ojdd', lname: 'dnad' } }
console.log(ruser.fullname.userfname.lname);//dnad

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 5: "a", 2: "b"}

const obj3 = {obj1,obj2}
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'b', '5': 'a' } }

// const obj4 = Object.assign(obj1,obj2)
// console.log(obj4);//{ '1': 'a', '2': 'b', '5': 'a' }

const obj4 = Object.assign({},obj1,obj2)//{} optinal parameter it will combine source objects into a targrt object whoch is {}
console.log(obj4);//{ '1': 'a', '2': 'b', '5': 'a' }

const obj5 = {...obj1, ...obj2}//...(spread oprator)
console.log(obj5);//{ '1': 'a', '2': 'b', '5': 'a' }

const user = [
  {
    id:1,
    email:"sfvish@"
  },
  {
    id:2,
    email:"sfvidfsssh@"
  },
  {
    id:3,
    email:"sdfsdfsdwqw@"
  }
]

console.log(user[1].email);//sfvidfsssh@

console.log(Object.keys(ruser));//[ 'email', 'fullname' ]
// it gives a key in array formate
console.log(Object.values(ruser));//[ 'shdbsaj', { userfname: { fname: 'ojdd', lname: 'dnad' } } ]
console.log(Object.entries(ruser));//[ [ 'email', 'shdbsaj' ], [ 'fullname', { userfname: [Object] } ] ] 
console.log(ruser.hasOwnProperty('fullname'));//true
console.log(ruser.hasOwnProperty('fname'));//false
console.log(ruser.fullname.userfname.hasOwnProperty('fname'));//true

// distructring of objects
const course = {
  instrctur:"patel",
  price: "999",
  courteacher: "purv"
}

//course.instrctur

const {instrctur : inst} = course
// distructure instrctur and give short name inst using :
console.log(inst);// patel

// react start
const navbar= (company)=> {

}
navbar(Company = "patel12")
//react end

// json used in api formate
// {
//   name :"bdfja",
//   coursename:"asdbasd",
//   price:"free"
// }
// array of objects
// [
//   {},
//   {}
// ]
