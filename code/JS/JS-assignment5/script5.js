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

// Challenge 4
function greeting(firstName, status){
  if(status.toLowerCase() === 'friend'){
    return `Hello ${firstName}!`;
  }else if(status.toLowerCase() === 'enemy'){
    return `You are not welcome here ${firstName}!`;
  }
}

console.log(greeting('Thanos', 'Enemy'));
console.log(greeting('Natasha Romanoff', 'friend'));

// extra challenge 4
function greeting2(firstName, status){
  if(status.toLowerCase() === 'friend'){
    return `Hello ${firstName}!`;
  }else if(status.toLowerCase() === 'enemy'){
    return `You are not welcome here ${firstName}!`;
  }else{
    return `Invalid status: \n Identify yourself as a friend or enemy!`
  }
}

console.log(greeting2('Thanos', 'Enemy'));
console.log(greeting2('Natasha Romanoff', 'friend'));
console.log(greeting2('Abigail', 'cousin'))
