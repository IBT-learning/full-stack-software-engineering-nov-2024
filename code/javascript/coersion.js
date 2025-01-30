// these two are the same
let newString1 = "any string"
let newString2 = String("any string")
console.log(newString1)
console.log(newString2)


let newNumber = Number(123)
let newArray = Array([1, 2, 3], 4, 5) // takes any number of comma separated arguments
console.log(newArray)

let editNumber = Array(1,2,3)
console.log(editNumber)

newString1 = Array(newString1)
newString2 = Array(newString2)
console.log(newString1)
console.log(newString2)

newNumber = String(newNumber)
console.log(newNumber)
console.log(newNumber.length)

let output = Number([12]) 
console.log(output)

console.log(1 + "2")
console.log(3 * "2")
console.log(1 + 2)