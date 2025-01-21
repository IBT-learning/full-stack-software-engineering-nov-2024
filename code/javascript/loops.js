//Challenge #1

// Log each word in the array
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];

for (const word of wordList) {
    console.log(word);
}

//Capitalize each word
for (let word of wordList) {
    word = word.toUpperCase();
    console.log(word);
}

//Capitalize only the first letter using .slice()
for (let word of wordList) {
    const capitalized = word[0].toUpperCase() + word.slice(1);
    console.log(capitalized);
}

//Create a new array with capitalized words
const fullyCapitalizedArray = [];
for (let word of wordList) {
    const fullyCapitalizedWord = word.toUpperCase(); // Capitalizes every letter
    fullyCapitalizedArray.push(fullyCapitalizedWord);
}

console.log(fullyCapitalizedArray);

//Add capitalized words to a string
let capitalizedString = ""; // Initialize an empty string to store the result.

for (let word of wordList) {
    // Capitalize every letter of the word using .toUpperCase()
    capitalizedString += word.toUpperCase() + " ";
}

console.log(capitalizedString.trim()); // Log the result without trailing spaces.
console.log(typeof capitalizedString)

//Challenge #2

//Write a loop that executes exactly 10 times and checks divisibility by 3
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(`${i} is divisible by 3: true`);
    } else {
        console.log(`${i} is divisible by 3: false`);
    }
}

//FizzBuzz
for (let i = 1; i <= 40; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else {
        console.log(i);
    }
}







