// Original word list
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];

// Basic solution: Log and capitalize each word
console.log("Basic solution - Full capitalization:");
for (const word of wordList) {
    console.log(word.toUpperCase());
}

// Advanced solution 1: Capitalize first letter only
console.log("\nAdvanced solution 1 - First letter capitalization:");
for (const word of wordList) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(capitalizedWord);
}

// Advanced solution 2: Create new array with capitalized words
console.log("\nAdvanced solution 2 - Store in new array:");
const capitalizedArray = [];
for (const word of wordList) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalizedWord);
}
console.log("New array:", capitalizedArray);

// Advanced solution 3: Create sentence string
console.log("\nAdvanced solution 3 - Create sentence:");
let sentence = "";
for (const word of wordList) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    sentence += capitalizedWord + " ";
}
// Remove trailing space and add period
sentence = sentence.trim() + ".";
console.log("Sentence:", sentence);

// Bonus: All solutions combined
console.log("\nBonus - All solutions combined:");
const combinedResults = {
    originalWords: wordList,
    fullyCapitalized: [],
    firstLetterCapitalized: [],
    sentence: ""
};

for (const word of wordList) {
    // Full capitalization
    combinedResults.fullyCapitalized.push(word.toUpperCase());
    
    // First letter capitalization
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    combinedResults.firstLetterCapitalized.push(capitalizedWord);
    
    // Add to sentence
    combinedResults.sentence += capitalizedWord + " ";
}

// Clean up sentence
combinedResults.sentence = combinedResults.sentence.trim() + ".";

// Log combined results
console.log("Original words:", combinedResults.originalWords);
console.log("Fully capitalized:", combinedResults.fullyCapitalized);
console.log("First letter capitalized:", combinedResults.firstLetterCapitalized);
console.log("Sentence:", combinedResults.sentence);