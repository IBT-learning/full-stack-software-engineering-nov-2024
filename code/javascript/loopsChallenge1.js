const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];

const capitalizedWords = []; // Array to store capitalized words
let capitalizedString = ""; // String to store capitalized words

for (const word of wordList) {
    // Capitalize only the first letter
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    
    // Add to array
    capitalizedWords.push(capitalizedWord);
    
    // Add to string with space
    capitalizedString += capitalizedWord + " ";
}

// Log results
console.log(capitalizedWords); // Array output
console.log(capitalizedString.trim()); // String output
