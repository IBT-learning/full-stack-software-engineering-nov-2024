// Shortening Console.log
const cl = console.log

// CHALLENGE ONE
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

// Write a for..of loop that logs each word in the array
for (let word of wordList){
    cl(word)
}

cl("")

//Now, within the loop, capitalize each word
for (let word of wordList){
    cl(word.toUpperCase())
}

cl("")

// EXTRA CHALLENGE //Try capitalizing only the first letter. 

// N/B: I DIDN'T USE SLICE FOR THIS, JUST AN ARRRAY OF AN ARRAY

for (let word of wordList){
    cl(word[0].toUpperCase())
}

cl("")

//Rather than simply logging each word in the array, try creating a new array and adding each capitalized word to it
const capitalWords = new Array()
let i = -1;
for (let word of wordList){
    i++
    capitalWords[i] = word.toUpperCase()
}
cl(capitalWords)

cl("")
// Add each capitalized word to a string instead of (or in addition to) an array
for (let word of wordList){
    cl(`THE WORDS ARE: ${word.toUpperCase()}`)
}





