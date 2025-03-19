// Challenge 1

const capitalize = (word) => {
  const toCapital = word.toUpperCase();
  return toCapital;
};

console.log(capitalize("hello"));

//Challenge 2

function percentCalc(amount, percentage) {
  return (percentage / 100) * amount;
}

console.log(percentCalc(200, 20));

// Challenge 3
function divisible(dividend, divisor) {
  if (dividend % divisor === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divisible(6, 3));
console.log(divisible(15, 4));

// Challenge 4
function greeting(firstName, status) {
  if (status === "friend") {
    return `Hello ${firstName}, it's a pleasure to meet you!`;
  } else if (status === "enemy") {
    return "Please go away";
  } else if (status !== "friend" && status !== "enemy") {
    return "Invalid status";
  }
}

console.log(greeting("Superman", "friend"));
console.log(greeting("Lex Luthor", "enemy"));
console.log(greeting("Martha", "sister"));
