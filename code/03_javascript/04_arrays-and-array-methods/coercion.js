// TYPE COERCION
const cl = console.log


//constructors
let newString = String("This is a String")

let newNumber = Number(5)

let newBoolean = Boolean(true)

let newUndefined = undefined

let newMap = new Map()

const newArray = Array(1, 2, 4)


cl(newString)
cl(newNumber)
cl(newBoolean)
cl(newUndefined)
cl(newMap)
cl(newArray)

cl(" ")

//CHANGING TYPES EXPLICITLY, also called type casting
newString = Array(newString)
cl(newString)

newNumber = String(newNumber)
cl(newNumber, newNumber.length) //has been converted to a string, so now we can do string stuff on it.

cl(" ")

//IMPLICIT COERCION
cl(1 + "2") // concaetnation! coerces the number to a string
cl(5 * "2") // multiplication! coerces the string to a number
cl(5 * "two") // NAN! "two" can't be coerced to a number

