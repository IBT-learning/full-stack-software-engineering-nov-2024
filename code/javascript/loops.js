// Challenge #1: Log and Capitalize Words

const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];

// Log each word in the array
for (const word of wordList) {
    console.log(word);
}

// Capitalize each word
for (let word of wordList) {
    word = word.toUpperCase();
    console.log(word);
}

// Capitalize only the first letter using .slice()
for (let word of wordList) {
    const capitalized = word[0].toUpperCase() + word.slice(1);
    console.log(capitalized);
}

// Create a new array with capitalized words
const fullyCapitalizedArray = [];
for (let word of wordList) {
    const fullyCapitalizedWord = word.toUpperCase(); // Capitalizes every letter
    fullyCapitalizedArray.push(fullyCapitalizedWord);
}
console.log(fullyCapitalizedArray);

// Add capitalized words to a string
let capitalizedString = ""; // Initialize an empty string to store the result.
for (let word of wordList) {
    capitalizedString += word.toUpperCase() + " ";
}
console.log(capitalizedString.trim()); // Log the result without trailing spaces.
console.log(typeof capitalizedString);

// Challenge #2: Divisibility and FizzBuzz

// Write a loop that executes exactly 10 times and checks divisibility by 3
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(`${i} is divisible by 3: true`);
    } else {
        console.log(`${i} is divisible by 3: false`);
    }
}

// FizzBuzz
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

// Additional Loop Examples from michael-ibt

let word = "antidisestablishmenarianism";
let count = 0;

while (count < word.length) {
    count++;
    console.log(`This loop happened ${count} times`);
}

let num = 0;
while (num < 0.9) {
    num = Math.random();
    console.log(num);
}

// Classic for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 3; i <= 1000; i) {
    i = i ** 2;
    console.log(i);
}

// For..of loop
for (letter of word) {
    console.log(letter);
}

const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
for (day of daysOfWeek) {
    if (day === "Wed") {
        console.log("Wednesday");
    } else if (day === "Sat") {
        console.log("Saturday");
    } else {
        console.log(`${day}day`);
    }
}

const vowels = "aeiou";
let justVowels = "";
for (letter of word) {
    for (v of vowels) {
        if (letter == v) {
            justVowels += letter;
        }
    }
    console.log(justVowels);
}

for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}

let sum = 0;
while (sum < 5) {
    sum++;
    console.log(sum);
}

let add = 1;
while (add < 5) {
    add += 2;
    console.log(add);
}

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

let i = 0;
while (i <= 10) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}

const words = ["This", "is", "a", "sentence"];
let sentence = "";
for (let word of words) {
    sentence += word + " ";
}
console.log(sentence.trim());