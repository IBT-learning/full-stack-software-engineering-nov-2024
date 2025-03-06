// Challenge #1

// Paste this line into your code:
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

//Write a for..of loop that logs each word in the array
for(let i = 0; i < wordList.length; i++){
    // Now, within the loop, capitalize each word
    console.log(wordList[i].toUpperCase());
}

// (this is actually a strings challenge) Try capitalizing only the first letter. There is no string method that does this, so you will need to utilize .slice()
for(let i = 0; i < wordList.length; i++){
    // Now, within the loop, capitalize each word
    console.log(wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1));
}

//Rather than simply logging each word in the array, try creating a new array and adding each capitalized word to it
let capitalizedFirstLetterArray = [];
for(let i = 0; i < wordList.length; i++){
    // Now, within the loop, capitalize each first letter of every word and add to the capitalizedFirstLetterArray array
    capitalizedFirstLetterArray.push(wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1));
}

//Add each capitalized word to a string instead of (or in addition to) an array
let capitalizedFirstLetterString = "";
for(let i = 0; i < wordList.length; i++){
    // Now, within the loop, capitalize each first letter of every word and add to the capitalizedFirstLetterString string
    capitalizedFirstLetterString += wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1) + " ";
}


// Challenge #2

//Write a loop that will execute exactly 10 times. You can do this with either a while loop or a "classic" for loop
for(let i = 0; i < 10; i++){
    console.log("This is loop iteration " + i);
}

//For each loop, console log whether the number is divisible by 3. (You can do this with modulo)
// you will need a conditional inside your loop for this!
// you can log "true" and "false", or if you prefer, "yes" and "no"
for(let i = 0; i < 10; i++){
    if(i % 3 === 0){
        console.log("This number is divisible by 3");
    } else {
        console.log("This number is not divisible by 3");
    }
}


//Extra challenges (optional)

// Solve FizzBuzz without looking up a solution! This is one of the classic beginning programming challenges
// Here is an explanation of the children's math game FizzBuzz
// Write a JS loop that will go 40 times, and for each number console log the number, and either Fizz, Buzz, or FizzBuzz next to it
// Be mindful of the order of your conditions!
for(let i = 1; i <= 40; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}