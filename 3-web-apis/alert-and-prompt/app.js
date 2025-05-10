// if we run index.html in the browser, it will load this JS
// and log all of these console logs to the browser's console
console.log("hello world")

const nums = [3, 4, 5]
const product = nums.reduce(
  (acculumatedValue, element) => acculumatedValue * element
)
console.log(product)

// ? Alert
// creates a small pop-up alert with a message in it
// it doesn't go away until the user dismisses it

alert("this is a message to the user")

// ? Prompt
// prompt gives the user a text input field
// and returns the text string they type in

const answer = prompt("what is your answer to this question?")
// console.log(answer)

// ? Responses will always be a string!
// remember to change the data type if you need to

const num1 = Number(prompt("First number: "))
const num2 = prompt("Second number: ")

alert(num1 + Number(num2))

console.log(num1, num2)
