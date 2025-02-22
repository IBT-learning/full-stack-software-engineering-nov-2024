// 1
function capitalize(word) {
  return word.toUpperCase();
}
value = capitalize("hello");
console.log("To capital ⭐", value);

// 2
const percentCalc = (amount, percent) => {
  return amount * percent * 0.01;
};
console.log("PercentCalc, 20% or 200 = ", percentCalc(200, 20));

// 3
const divisible = (dividend, divisor) => dividend % divisor == 0;
console.log("6 is divisible by 3 = ", divisible(6, 3));
console.log("15 is divisible by 4 = ", divisible(15, 4));

// 4
const greet = (name, status) =>
  (status == "friend" && `Hello ${name}`) ||
  (status == "enemy" && `Go away ${name} !`) ||
  " Welcome, stranger";
console.log(greet("Superman", "friend"));
