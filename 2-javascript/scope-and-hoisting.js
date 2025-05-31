displayName("Danny", "B")

/* 
    ? Scope
    * determines how information is accessible/available in different parts of the program

    Three levels of scope:
    * global
        * outermost scope
        * accessible everywhere after declaration (from every other scope)
            * within the same JS file (module) in node
            * window object
    * block 
        * within a code block
        * introduced with ES6, with let and const
    * function
        * within a function   
*/

// generally we avoid declaring variables in the global scope
const globalScopVar = "global"

// UNLESS we want a global constant
const HOURS_IN_A_DAY = 24
const MINUTES_IN_AN_HOUR = 60

// console.log(HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR)

function abc(param1) {
  const functionScopeVar = "function scope"
  console.log(param1) // this only exists here, inside the function

  if (true) {
    const blockScopeVar = "block scope"
    console.log(blockScopeVar) // only exists within this if statement

    if (true) {
      const nestedBlockScopeVar = "nested block"
      console.log(nestedBlockScopeVar)
      console.log(functionScopeVar)
      console.log(HOURS_IN_A_DAY)
    }
  }
}
// console.log(functionScopeVar) // ReferenceError: functionScopeVar is not defined

// abc("parameter / argument")

nums = [1, 2, 3]

let total = 0
for (num of nums) {
  total += num
}
console.log(total)
// console.log(num) // this works but it's sloppy and kinda useless!

function outerFx() {
  const outerScopeVar = "outer function"

  function innerFx() {
    const innerScopeVar = "inner function"
    console.log(outerScopeVar)
  }
  //   console.log(innerScopeVar)
  innerFx()
}
// outerFx()

/* 
    ? HOISTING
    * the JS parsing engine reads top to bottom, left to right
    * the JS interpreter reads the code twice
    * first it looks for function declarations and vars and hoists them
        * it allocates memory space to those declarations
    * then it executes the code line by line
    * function expressions, lets and consts are not hoisted
    ! DO NOT RELY ON THIS
*/

// console.log(firstName) // ReferenceError: Cannot access 'firstName' before initialization
let firstName = "Danny"

console.log(lastName)
var lastName = "Burrow"

// displayName(firstName, lastName)

function displayName(first, last) {
  console.log(first, last)
}

const sayHello = () => console.log("hello")
sayHello()

/* 
    ? let/const vs var
    * var is hoisted, let and const are not
    * let and const can be block scoped
    * var can only be function scoped or global
*/

const newFx = () => {
  if (1) {
    let letVar = 123
    var varVar = 432
    console.log(letVar)
  }
  console.log(varVar)
}
// console.log(varVar)

newFx()
