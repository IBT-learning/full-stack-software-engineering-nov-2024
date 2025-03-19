// Challenge 1

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

for (const element of wordList) {
  console.log(element.toUpperCase());
}

//Extra Challenge
const capitalizedWords = [];
for (const element of wordList) {
  // console.log(element.toUpperCase());
  const letter = element.slice(0, 1);
  const restOfWord = element.slice(1);
  capitalizedWords.push(letter.toUpperCase() + restOfWord);
  //   console.log(capitalizedWords);
}

console.log(capitalizedWords.toString().replace(/,/g, " "));

//Challenge 2

for (let i = 0; i <= 10; i++) {
  // const element = array i];
  if (i % 3 === 0) {
    console.log(i, "yes");
  }
}

// Extra Challenge
for (let i = 0; i <= 40; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
