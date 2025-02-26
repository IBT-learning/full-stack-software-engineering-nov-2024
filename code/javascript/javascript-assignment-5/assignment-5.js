// Challenge #1
function capitalize(word) {
    return word.toUpperCase();
  }
  
  console.log(capitalize("hello"));
  
  
  // Challenge #2
  function percentCalc(amount, percentage) {
    return (amount * percentage) / 100;
  }
  
  console.log(percentCalc(200, 20)); 
  
  
  // Challenge #3
  function divisible(dividend, divisor) {
    return dividend % divisor === 0;
  }
  
  console.log(divisible(6, 3)); 
  console.log(divisible(15, 4)); 
  
  
  // Challenge #4
  function greeting(firstName, status) {
    if (status === "friend") {
      return `Hello ${firstName}!`;
    } else if (status === "enemy") {
      return `Go away ${firstName}!`;
    }
  }
  
  console.log(greeting("Superman", "friend"));
  console.log(greeting("Lex Luthor", "enemy"));