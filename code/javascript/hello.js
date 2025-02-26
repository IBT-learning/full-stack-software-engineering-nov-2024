// create a constant variable and assign it a string literal with your name
const MyName = "Macwilliams Josiah";
console.log(MyName);

//Console log the length of the string
console.log(MyName.length);

//Console log the string template "Hello, my name is ____" but fill in the blank with the name variable

console.log(`Hello, my name is ${MyName}`);

//Console log the string template "When my friends see me they shout ____!" but fill in the blank with your name in all caps. (Use a string method to capitalize it!)

console.log(`When my friends see me they shout ${MyName.toUpperCase()}!`);

//Create a constant variable with a number in it
const MyNumber = 25;

//Multiply the number by 2
let Ans1 = MyNumber * 2;

//Add 8
Ans1 += 8; //Add 8
//Divide by 2
Ans1 /= 2; //Divide by 2

//Subtract the original numbe
Ans1 -= 25; //Subtract the original number

//Console log the result
console.log(Ans1);

console.log("Challenge 2:"); //Challenge 2:
//Find the area of a circle with a given radius (), rounded to four digits: Assuming Radius = 6 => A=PI*R^2
const r = 7; //initializing Radius
const area = Math.PI * Math.pow(r, 2); //Calculate the area of the circle
console.log(area); // display the area of the circle
console.log(Math.PI); // display the value of PI

const roundedArea = area.toFixed(4); //rounded to 4 decimal place
console.log(roundedArea); //print the result
