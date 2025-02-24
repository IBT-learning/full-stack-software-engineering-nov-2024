/*

JavaScript Assignment #5: Functions
You may do these challenges all together in one file, or in separate files, according to your preference. You will turn them in all together.

Challenge #1: Capitalize
Declare a function called capitalize that takes one argument, word
Within the function, capitalize the word
Return the capitalized word
When you run console.log(capitalize("hello")) you should get HELLO

*/

function capitalize(word) {
    return word.toUpperCase();
  }
  
  console.log(capitalize("zaki"));
  
  /*
  
  Challenge #2: Percentage Calculator
  Declare a function called percentCalc that takes two arguments, amount and percentage
  Return the given percentage of the amount
  When you run console.log(percentCalc(200, 20)) you should get 40
  
  */
  
  let percentCalc = (amount, percentage) => {
    return amount * percentage;
  };
  
  console.log(percentCalc(200, 20 / 100));
  
  /*
  Challenge #3: Divisible
  Declare a function called divisible that takes two argments, dividend and divisor
  Determine whether the dividend is divisible by the divisor (meaning the division will result in a whole number with remainder)
  Tip: Use the modulo operator
  Return true or false
  When you run console.log(divisble(6, 3)) you should get true
  When you run console.log(divisble(15, 4)) you should get false
  
  
  */
  let divisible = (dividend, divisor) => {
    return dividend % divisor === 0;
  };
  
  console.log(divisible(6, 3));
  console.log(divisible(15, 4));
  
  /*
  Challenge #4: Friend, Enemy
  Declare a function called greeting that takes in two arguments, firstName and status
  Inside the function, write a conditional that determined whether status is the string "friend" or the string "enemy"
  If the person is a friend, return the string that welcomes them by their name
  If the person is an enemy, return a string that tells them to go away
  When you run console.log(greeting("Superman", "friend")) you should get something like Hello Superman!
  When you run console.log(greeting("Lex Luthor", "enemy")) you should get something like Go away Lex Luthor!
  */
  
  let greeting = (firstName, status) => {
    if (status === "friend") {
      return `hello ${firstName}!`;
    } else if (status === "enemy") {
      return `go away ${firstName}!`;
    } else {
      return `welcome anyone!`;
    }
  };
  
  console.log(greeting("Superman", "friend"));
  console.log(greeting("Lex Luthor", "enemy"));
  console.log(greeting("Lex Luthor", "someone"));
  
 