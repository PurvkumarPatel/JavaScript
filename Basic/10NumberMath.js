const score = 400
console.log(score);
console.log(typeof score);

const balance = new Number(100.506)
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));// roundoff with points  after digits it shows

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));// carefull like if we use 2

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//default usa

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());// always in range 0 to 1 default
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);