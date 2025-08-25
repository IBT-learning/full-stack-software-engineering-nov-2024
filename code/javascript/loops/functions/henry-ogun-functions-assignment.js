// ======================
// Challenge #1: Capitalize
// ======================
function capitalize(word) {
    return word.toUpperCase();
  }
  console.log(capitalize("hello")); // HELLO
  
  // ======================
  // Challenge #2: Percentage Calculator
  // ======================
  function percentCalc(amount, percentage) {
    return (amount * percentage) / 100;
  }
  console.log(percentCalc(200, 20)); // 40
  
  // ======================
  // Challenge #3: Divisible
  // ======================
  function divisible(dividend, divisor) {
    return dividend % divisor === 0;
  }
  console.log(divisible(6, 3)); // true
  console.log(divisible(15, 4)); // false
  
  // ======================
  // Challenge #4: Friend, Enemy
  // ======================
  function greeting(firstName, status) {
    if (status === "friend") {
      return `Hello ${firstName}!`;
    } else if (status === "enemy") {
      return `Go away ${firstName}!`;
    } else {
      // Extra challenge implementation
      return `👀 ${firstName}, I don't recognize your status... Proceed with caution!`;
    }
  }
  console.log(greeting("Superman", "friend"));  // Hello Superman!
  console.log(greeting("Lex Luthor", "enemy")); // Go away Lex Luthor!
  console.log(greeting("Joker", "stranger"));   // 👀 Joker, I don't recognize...