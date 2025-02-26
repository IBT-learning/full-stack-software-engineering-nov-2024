const cl = console.log

// BOOLEANS
let isTrue = true
let isFalse = false

cl(`${isTrue} and ${isFalse} types are ${typeof isFalse} and ${typeof isTrue}`)

cl(" ")

cl(Boolean(0)) //False
cl(Boolean(1)) //True //anything that isn't zero(0) is true
cl(Boolean(0.0001)) //True also... Even verysmall numbers are true
cl(Boolean(-1)) //True also... Including -ve numbers
cl(Boolean("abcdef")) //True also... Including -ve numbers
cl(Boolean(Infinity)) //True also... Including Infinity
cl(Boolean(NaN)) //This is False... This is a type number
cl(Boolean("")) //This is False... An emtpy string is False... N/B: empty string is "" not " "
cl(Boolean(undefined)) //This is False... 
cl(Boolean(null)) //This is False...

//COMPARISON OPERATORS
numbers = [1, 3, 5] // = is an assignment operator

cl(" ")

cl(typeof numbers == "object") // == is a comparison operator

cl(" ")

cl(true != true) // the != is called Not-Equality or Inverse Equality operator

cl(" ")

cl(5 == "5") // the != is called Not-Equality or Inverse Equality operator //checks for only value

cl(" ")

cl(1 === 1) // === Strict-Equality sperator //checks for value and type

cl(5 === "5") // === says FALSE wheras was TRUE with ==

cl(" ")

cl(1 !== 1) // === Strict-Not-Equality sperator //checks for value and type

cl(5 !== "5") 

// GREATER AND LESS THAN OPERATORS

cl(1 < 20) // less than operator (==> True)
cl(1 > 20) // greater than operator (==> False)

cl(" ")

cl(1 <= 20) // less-than-or-equal-to operator (==> True)
cl(1 >= 20) // greater-than-or-equal-to-operator (==> False)
cl(1 >=1 ) // ==> True
cl(1 > isFalse) // ==> True

cl(" ")

//CHAINING BOOLEAN OPERATIONS

// && is called the Logical AND Operator (both or all sides have to be True)
cl(isTrue = true && isFalse != 1) //True

cl(isTrue = true && isFalse == 1) //False

cl(isTrue = true && isFalse == 1 && "this string" != "other string") //True

cl("")

// || is called the Logical OR Operator (only one of the sides needs be True)
cl(isTrue = true || isFalse != 1) //True

cl(isTrue = true || isFalse == 1) //True

cl(isTrue = true || isFalse == 1 || "this string" || "other string") //True
