// Shorten Console.log
const cl = console.log;

// Challenge #1: Capitalize



// Declare a function called capitalize that takes one argument, word
function capitalize(word) {

    // Within the function, capitalize the word
    let newWord = word.toString().toUpperCase()
    
    // Return the capitalized word
    return newWord;
}

console.log(capitalize("hello"))
