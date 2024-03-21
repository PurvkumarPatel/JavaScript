const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val){// here functon is call back faction no need of name of function
  console.log(val);// js ruby java python cpp
})

coding.forEach((iteam)=>{
  console.log(iteam);// js ruby java python cpp
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)// js ruby java python cpp

coding.forEach( (item, index, a)=> {// here iteam , all index and array is passed to the function by default by foreach loop
    console.log(item, index, a);
} )
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

const myCoding = [
  {
      languageName: "javascript",
      languageFileName: "js"
  },
  {
      languageName: "java",
      languageFileName: "java"
  },
  {
      languageName: "python",
      languageFileName: "py"
  },
]

myCoding.forEach( (item) => {
  console.log(item.languageName);
} )

// javascript
// java
// python

const values = coding.forEach((iteam)=>{// here foreach loop don't return anything
  console.log(iteam);
  return iteam
})
// js
// ruby
// java
// python
// cpp

console.log(values);// undefined