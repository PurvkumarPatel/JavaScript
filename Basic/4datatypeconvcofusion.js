let score = null; // "33" "33abs" null use this values and see what happened

console.log(typeof score);
console.log(typeof(score));

let valinother = Number(score);
console.log(typeof valinother);
console.log(valinother); //NaN undefined exucute


// "33" => 33
// "33abs" => NaN
// true => 1

let login = "patel"
let boollogin = Boolean(login);
console.log(boollogin);

// 1 -> true
// "" -> false
// "patel" -> true

let st = 33;
let stringscon = String(st);
console.log(stringscon);
console.log(typeof stringscon);