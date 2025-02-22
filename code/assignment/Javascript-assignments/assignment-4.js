const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
 for (word in wordList){
     console.log(wordList[word].toUpperCase())
 }

//Extra Challenge
const wordList2 = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
capitalizedWords = []
for (index in wordList2){
    word = wordList2[index]
    capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first letter
    capitalizedWords.push(capitalizedWord)

    console.log(capitalizedWords)
}