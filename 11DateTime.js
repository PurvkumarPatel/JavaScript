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

let mynewdate = new Date(2024,0,24,4,5);// new parameter added
console.log(mynewdate.toLocaleString());// 24/1/2024, 4:05:00 am

let myCreatedDate = new Date("2024-02-15")//here no 0 index also we can use "15-02-2024"
console.log(myCreatedDate.toLocaleDateString());

// 10 min watched