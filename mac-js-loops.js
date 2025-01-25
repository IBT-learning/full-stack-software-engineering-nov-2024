//Challenge #1
console.log("Challenge #1");
console.log();

const wordList = [
  "every",
  "word",
  "in",
  "this",
  "array",
  "should",
  "be",
  "capitalized",
];

//Write a for..of loop that logs each word in the array
for (const word of wordList) {
  console.log(word);
}
// within the loop, capitalize each word

for (const word of wordList) {
  const capitalizedWord = word.toUpperCase();
  console.log(capitalizedWord);
}

// Extra challenges
// capitalizing only the 1st letter (using .slice())
console.log(
  "1. This is the Extra challenge for capitalizing onlt the 1st letter"
);

console.log();
console.log();

for (const word of wordList) {
  const capitalizedWord = word[0].toUpperCase() + word.slice(1);

  console.log(capitalizedWord);
}

// Creating a new array with capitalized word

console.log("2. Creating a New Array with Capitalized Word");

const capitalizeArray = [];

for (const word of wordList) {
  const capitalizedWord = word[0].toUpperCase() + word.slice(1);
  capitalizeArray.push(capitalizedWord);
}
console.log();
console.log();
console.log(capitalizeArray);

// Adding each capitalized word to a string

console.log();
console.log();

console.log(
  "3. Adding each capitalized word to a string will become a sentence below:"
);

console.log();
console.log();

let CapitalizedString = "";

for (const word of wordList) {
  const capitalizedWord = word[0].toUpperCase() + word.slice(1);

  CapitalizedString += capitalizedWord + " ";
}

console.log(CapitalizedString.trim());
console.log();
console.log();
console.log();
console.log();

// Challenge #2
//1. Write a loop that will execute exactly 10 times. You can do this with either a while loop or a "classic" for loop
console.log("Challenge #2");

// using the classic for loop
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log(`${i}: yes`);
  } else {
    console.log(`${i}: no`);
  }
}

console.log();
console.log();
// using while loop proceedure
let count = 1;
while (count <= 10) {
  if (count % 3 === 0) {
    console.log(`${count}: yes`);
  } else {
    console.log(`${count}: no`);
  }
  count++;
}

//Extra challenges
console.log();
console.log();
console.log("Extra challenges: FizzBuzz");
console.log();
console.log(
  "if the number is divisible by 3, log Fuzz, by 5, log Buzz, by 3 and 5 log FuzzBuzz, otherwise log the number"
);
console.log();

for (let i = 1; i <= 40; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}: FuzzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i}: Fuzz`);
  } else if (i % 5 === 0) {
    console.log(`${i}: Buzz`);
  } else {
    console.log(`${i}`);
  }
}

// Doing it the other way
for (let i = 1; i <= 40; i++) {
  if (i % 3 === 0) {
    console.log(`${i}: Fuzz`);
  } else if (i % 5 === 0) {
    console.log(`${i}: Buzz`);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}: FuzzBuzz`);
  } else {
    console.log(`${i}`);
  }
}
