// Shortening Console
const cl = console.log

let number = 10

let digit = 0

digit = number * 2
digit += 8
digit /= 2
digit -= number

// Console the operation
cl(digit)

// FINDING THE AREA OF A CIRCLE
function area (radius){
    let area = 2 * Math.PI * radius

    return `The area of a given circle of radius ${radius} is ${area}`
}

// To check for the area of a circle with radius "2"
cl(area(2))