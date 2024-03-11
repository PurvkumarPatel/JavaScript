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