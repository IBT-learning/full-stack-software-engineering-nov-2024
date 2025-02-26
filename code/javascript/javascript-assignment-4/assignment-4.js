//challange 1
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];
let capitalizedWords = []; 
let capitalizedWordsString = "";

for (const word of wordList) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
    capitalizedWordsString += capitalizedWord + " ";
}

console.log("Capitalized words as an array:", capitalizedWords);
console.log("Capitalized words as a string:", capitalizedWordsString.trim());

//challange 2
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
