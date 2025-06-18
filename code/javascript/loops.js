// Challenge 1
const wordList = ["every", "word", "in", "this", "array", 
 "should", "be", "capitalized"]

 for (word of wordList) {
    console.log(word);
 }
     
 for (word of wordList) {
     let capitalized = word.toUpperCase();
     console.log(capitalized);
 }

//  Extra Challenge: Capitalize First Letter of Each Word
    for (word of wordList) {
        let capitalizedFirstLetter = word.charAt(0).toUpperCase() + word.slice(1);
        console.log(capitalizedFirstLetter);
    }

    // Challenge 2
    for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) {
            console.log(`${i} is divisible by 3:true`);
        } else {
            console.log(`${i} is divisible by 3:false`);
        }
    }