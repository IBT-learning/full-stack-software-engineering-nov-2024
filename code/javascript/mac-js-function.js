// Challenge #1: Capitalize
console.log("Challenge #1. Capitalizing a word using function");
console.log("------------------------------------------------");

console.log();

function Capitalize(word) {
  // Declare a function called capitalize that takes one argument, word
  // Within the function, capitalize the word

  return word.toUpperCase(); //Return the capitalized word
}

console.log(Capitalize("hello")); //When you run console.log(capitalize("hello")) you should get HELLO
console.log();
console.log();

// Challenge #2: Percentage Calculator
console.log("Challenge #2: Percentage Calculator");
console.log("-----------------------------------");
console.log();

function PercentCalc(amount, Percentage) {
  //Declare a function called percentCalc that takes two arguments, amount and percentage
  return (amount * Percentage) / 100; //Return the given percentage of the amount
}

console.log(PercentCalc(200, 20)); //console.log(percentCalc(200, 20)) you should get 40
// Challenge #3: Divisible

console.log();
console.log();
console.log("Challenge #3: Divisible");
console.log("-----------------------");
console.log();

function divisible(dividend, divisor) {
  //Declare a function called divisible that takes two argments, dividend and divisor
  return dividend % divisor === 0; //Determine whether the dividend is divisible by the divisor (meaning the division will result in a whole number with remainder)
}

console.log(divisible(6, 3)); //When you run console.log(divisble(6, 3)) you should get true

console.log(divisible(15, 4)); //When you run console.log(divisble(15, 4)) you should get false

console.log();
console.log();
console.log("Challenge #4: Friend, Enemy");
console.log("---------------------------");
console.log();

function greeting(firstName, status) {
  // Declare a function called greeting that takes in two arguments, firstName and status

  if (status === "friend") {
    // write a conditional that determined whether status is the string "friend" or the string "enemy"
    return `Hello ${firstName}!`; //If the person is a friend, return the string that welcomes them by their name
  } else if (status === "enemy") {
    //If the person is an enemy, return a string that tells them to go away
    return `Go away ${firstName}!`;
  } else {
    //Extra challenge
    return `I dont know you ${firstName}. Who are you?`;
  }
}

// test the function
console.log(greeting("Superman", "friend")); //console.log(greeting("Superman", "friend")) you should get something like Hello Superman!

console.log();

console.log(greeting("Lex Luthor", "enemy")); // when you console.log(greeting("Lex Luthor", "enemy")) you should get something like Go away Lex Luthor!

console.log();

console.log(greeting("Jade Kuku", "neutral"));
