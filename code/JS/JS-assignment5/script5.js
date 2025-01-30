// challenge 1
function capitalize(word){
  return word.toUpperCase();
}

console.log(capitalize('hello'));

// challenge 2
function perentCalc(amount, percentage){
  return (percentage/100) * amount;
}

console.log(perentCalc(200, 20));

// Challenge 3
function divisible (divided, divisor){
  if(divided % divisor === 0){
    return true;
  }else{
    return false;
  }
}

console.log(divisible(10, 2));
console.log(divisible(15, 6));
