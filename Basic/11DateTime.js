// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate = new Date();
console.log(myDate);//2024-03-06T02:35:37.924Z
console.log(myDate.toDateString());//Wed Mar 06 2024
console.log(myDate.toISOString());//2024-03-06T02:35:37.924Z
console.log(myDate.toLocaleDateString());//6/3/2024
console.log(typeof myDate);//object

let myowndate = new Date(2024,0,24);// indexing from 0 for month
console.log(myowndate.toLocaleString());//24/1/2024, 12:00:00 am
console.log(myowndate.toLocaleTimeString());//12:00:00 am
console.log(myowndate.getDay()); // 3 monday 
console.log(myowndate.getHours());// 0
console.log(myowndate.getMonth());// 0 indexing from 0
console.log(myowndate.getFullYear()); // 2024
console.log(`${myowndate.getMonth()} and time `); // string interpolation 
let formattedDate =  myowndate.toLocaleString('default',{
     month: "2-digit" ,
     day: "numeric",
     year:"2-digit"
}); // change in default formate 
console.log(formattedDate);// new formateted date 

let mynewdate = new Date(2024,0,24,4,5);// new parameter added
console.log(mynewdate.toLocaleString());// 24/1/2024, 4:05:00 am

let myCreatedDate = new Date("1970-01-01")//here no 0 index also we can use "15-02-2024"
console.log(myCreatedDate.toLocaleDateString());

let mytimestamp =  Date.now(); // return miliseconds value from 1 january 1970 UTC
console.log(mytimestamp); //1709700472324
console.log(myCreatedDate.getTime()); // 0 // gettime is also gives an timestemp in ms

let currdate = new Date("01-01-2024"); 
console.log(currdate.getTime()); // 1704133800000
console.log(Math.floor((Date.now()/1000))); // in seconds

