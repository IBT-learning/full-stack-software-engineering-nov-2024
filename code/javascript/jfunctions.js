function capitalize(word){
    return word.toUpperCase();
}
console.log(capitalize("hello")); 



function percentCalc(amount, percentage) {
    return (amount * percentage) / 100;
  }
  
  console.log(percentCalc(200, 20)); 


  function divisible(dividend, divisor) {
    if (dividend % divisor === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(divisible(6, 3));  
  console.log(divisible(15, 4)); 
  

  function greeting(firstName, status) {
    if (status === "friend") {
      return `Hello ${firstName}!`;
    } else if (status === "enemy") {
      return `Go away ${firstName}!`;
    } 
  }
  
  console.log(greeting("Superman", "friend"));  
  console.log(greeting("Lex Luthor", "enemy")); 
  

  