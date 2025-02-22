// ## Challenge 1
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
// capitalize first letter
const newWordList = Array(wordList.length).fill("");
let counter = 0;
for (const word of wordList) {
  const firstLetter = word.slice(0, 1).toUpperCase();
  const newWord = firstLetter + word.slice(1);
  newWordList[counter++] += newWord;
}
console.log(newWordList);

// ## Challenge 2
console.log("\n\n\t\t\t\t challenge 2");
let i = 10;
for (let i = 0; i < 10; i++) {
  console.log(i, " - ", i % 3 == 0);
}
// Fizz Buzz
let loops = 1;
while (loops <= 40) {
  if (loops % 3 == 0) {
    if (loops % 5 == 0) console.log(`\t\t ${loops} = FizzBuzz`);
    else console.log(`\t\t ${loops} = Fizz`);
  } else if (loops % 5 == 0) console.log(`\t\t ${loops} = Buzz`);
  else console.log('\t\t',loops)
  loops += 1;
}
