// String Challenge 
const name = "Timi"
console.log("Name Length: " + name.length)
console.log("Hello, my name is " + name)
console.log("When my friends see me they shout " + name.toUpperCase() + "!")

// Numbers Challenge 1
// Long Format 
const number = 6 
max = number * 2
max = max + 8
max = max / 2
max = max - number
console.log("The max is " + max)

// Short Format 
const value = 2
const solution = ((((value * 2) + 8) /2 ) - value )
console.log("The solution is " + solution)

// Numbers Challenge2
const radius = 9
const area  = Math.PI * radius ** 2
const rounded_area = area.toFixed(4)
console.log("The area of a cicle of radius " + radius + " is estimated to be " + rounded_area)
