const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
const capWordList = [];

console.log(wordList);


for (const word of wordList) {
    const capitalized =
word.charAt(0).toUpperCase() +
word.slice(1);

capWordList.push(capitalized);
    
}

console.log(capWordList);
