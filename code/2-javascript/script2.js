// JavaScript Assignment #2: Booleans

// Challenge #1
// const personAge = 5;
const randomAge = Math.random() * 100;
const personAge = Math.round(randomAge);
const isAdult = personAge > 18;
const isElderly = personAge > 60;

const isTeenStr = !isAdult ? "This person is a Child." : "";
const isAdultStr = isAdult ? "This person is an Adult." : "";
const isElderlyStr = isElderly ? "This person is Elderly." : "";

console.log(isElderlyStr || isAdultStr || isTeenStr);
console.log("The age is " + personAge);
