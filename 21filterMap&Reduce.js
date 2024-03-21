const mynums = [1,2,3,4,5,6,7,8,9,10]
const newNums = mynums.filter((num)=> num>4) // here filter return values but it need condition 
console.log(newNums);// [ 5, 6, 7, 8, 9, 10 ]

const newNums2 = mynums.filter((num)=> {
  num>4// here we open new scope so write down a return keyword
})
console.log(newNums2);// []

const newNums1 = mynums.filter((num)=> {
  return num>4
})
console.log(newNums1);// [ 5, 6, 7, 8, 9, 10 ]

const newN = []
mynums.forEach((num)=>{
  if(num>4){
    newN.push(num)
  }
})
console.log(newN);// [ 5, 6, 7, 8, 9, 10 ]

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')
console.log(userBooks);
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]
userBooks = books.filter( (bk) => { 
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   }
// ]


// map
const myNuu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNu = myNuu.map( (num) => { return num + 10})// map returns values
// console.log(newNu);
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

const newNu = myNuu //chaining we can apply multiple times map filter etc
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNu);
// [
//   41, 51,  61, 71,
//   81, 91, 101
// ]

// Reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const anum = [1,2,3]

// accumulator
// The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

// currentValue
// The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

// currentIndex
// The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

// array
// The array reduce() was called upon.
const mtotal = anum.reduce(function (accumu,currval){
  console.log(`acc: ${accumu} and currval: ${currval} and now acc + currval is stored in acc which is ${accumu+currval}`);
  return accumu + currval
},0)// here 0 is initialvalue
// const mtot = anum.reduce((accumu,currval) => (accumu+currval) , 0)
console.log(mtotal);
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6

const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay); // 22996