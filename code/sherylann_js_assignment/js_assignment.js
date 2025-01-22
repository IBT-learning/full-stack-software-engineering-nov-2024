// Strings

//  constant variable and assign it a string literal with my name
const myName = "Sherylann";


// the length of my name string using the length property
console.log(`The length of the string is: ${myName.length}`);


//  "Hello, my name is ____"
console.log(`Hello, my name is ${myName}.`);


// "When my friends see me they shout ____!".....using the toUpperCase() method
console.log(`When my friends see me they shout ${myName.toUpperCase()}!`);



// Numbers


// Challenge 1:

//const number
const num = 10; 
//multiplying by 2, adding 8, dividing by 2, and then subtracting the original number....=4 as the correct answer
const result = ((num * 2 + 8) / 2) - num;
console.log(`The result of the number challenge is: ${result}`);//should give 4



// Challenge 2:


// Finding  the area of a circle with a given radius, rounded to 4 digits

//my const radius
const radius = 3; 

//area of a circle formula which is πr^2 hence i have to use the Math.pow() method to raise the radius to the power of 2 and import the Math.PI for the PI
const area = Math.PI * Math.pow(radius, 2);

//rounding the area to 4 decimal places
const roundedArea = parseFloat(area.toFixed(4));
console.log(`The area of a circle with radius ${radius} is: ${roundedArea}`);