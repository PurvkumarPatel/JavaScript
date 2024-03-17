// for ------------------------------------------------

for (let i = 0; i < 10; i++) {
  const element = [i];
  if(element== 5){
    console.log("5 here");
  }
  console.log(element);
}

for (let i = 0; i < 3; i++) {
  console.log(`outer loop value: ${i} `);
  for (let j = 0; j < 3; j++) {
    console.log(`inner loop value: ${j} and ${i}`);
  }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);//3
for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
// flash
// batman
// superman
// undefined


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
  console.log(`Value of i is ${index}`);
}// stop at 5

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
      console.log(`Detected 5`);
      continue;
  }
  console.log(`Value of i is ${index}`);  
}// value of i is 5 is not printed 




// while do while loop ------------------------------------------------


let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

let mar = ['flash', "batman", "superman"]

let arr = 0
while (arr < mar.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);// Score is 11