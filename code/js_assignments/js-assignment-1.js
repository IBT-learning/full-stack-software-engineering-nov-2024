//STRINGS
// Create a constant variable and assign it a string literal with your name
const myName = "Kennedy";

//Console log the length of the string
console.log(myName.length);

//Console log the string template "Hello, my name is ____" but fill in the blank with the name variable
console.log("Hello my name is " + myName + ".");

// Console log the string template "When my friends see me they shout ____!" but fill in the blank with your name in all caps. (Use a string method to capitalize it!)
console.log("When my friends see me they shout " + myName.toUpperCase() + "!");

//NUMBERS
// chanllenge 1:

//Create a constant variable with a number in it. (You can choose any number, with any number of digits.)
const number = 6;
// Multiply the number by 2
const multiplyByTwo = number * 2;
// Add 8
const addEight = multiplyByTwo + 8;
//Divide by 2
const divideByTwo = addEight / 2;
// Subtract the original number
const subtractOriginalNumber = divideByTwo - number;
// Console log the result
console.log(subtractOriginalNumber);


// Challenge 2:
// Find the area of a circle with a given radius (), rounded to four digits
let radius = 2; //if radius is 3
let area = Math.PI * radius * radius;
console.log(area.toFixed(4)); //returns 12.5664. when radius is 2.
console.log(area.toFixed(4)); //return 28.2743. When radius is 3. 