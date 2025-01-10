// Challenge 1: Strings
const name = "John Doe";

// Console log the length of the string
console.log(name.length);

// Console log the string template "Hello, my name is ____"
console.log(`Hello, my name is ${name}`);

// Console log the string template "When my friends see me they shout ____!" with the name in all caps
console.log(`When my friends see me they shout ${name.toUpperCase()}!`);
// Challenge 1: Numbers
const number = 20;  // You can choose any number

// Perform the operations
const result = ((number * 2) + 8) / 2 - number;

// Console log the result
console.log(result);  // The result should be 4

// Challenge 2: Area of a circle with a given radius (rounded to 4 digits)
const radius = 2;  // You can change this value to test with other radii
const area = (Math.PI * Math.pow(radius, 2)).toFixed(4);

// Console log the area
console.log(area);  // The result for radius 2 should be 12.5664
