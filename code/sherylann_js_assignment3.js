
//challenge #1
// Initial word list
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];

// Solution 1: Logging each word capitalized
for (const word of wordList) {
    console.log(word.toUpperCase());
}

// Extra Challenge 1: Capitalizing only the first letter
for (const word of wordList) {
    const capitalized = word[0].toUpperCase() + word.slice(1); // First letter + rest of the word
    console.log(capitalized);
}

// Extra Challenge 2: Adding each capitalized word to a new array
const capitalizedWordsArray = [];
for (const word of wordList) {
    const capitalized = word[0].toUpperCase() + word.slice(1);
    capitalizedWordsArray.push(capitalized);
}
console.log(capitalizedWordsArray); // Logs the array of capitalized words

// Extra Challenge 3: Adding each capitalized word to a string
let capitalizedWordsString = "";
for (const word of wordList) {
    const capitalized = word[0].toUpperCase() + word.slice(1);
    capitalizedWordsString += capitalized + " "; // Add each word followed by a space
}
console.log(capitalizedWordsString.trim()); // Logs the full string

//challenge #2
// Solution 1: Classic for loop
for (let i = 1; i <= 10; i++) {
    console.log(`Number ${i} is divisible by 3: ${i % 3 === 0 ? "yes" : "no"}`);
}

// Solution 2: While loop
let i = 1;
while (i <= 10) {
    console.log(`Number ${i} is divisible by 3: ${i % 3 === 0 ? "yes" : "no"}`);
    i++;
}


