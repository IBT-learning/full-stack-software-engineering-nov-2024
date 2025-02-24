


// const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

// for(let i=0; i<wordList.length; i++){
//     console.log(wordList[i].toUpperCase())
// }
// for(let i=0; i<wordList.length; i++){
//   console.log(` ${wordList[i].slice(0, 1).toUpperCase()}${wordList[i].slice(1)}`)
// }

// let i = 1;

// while(i <= 10){

//     if(i % 3 === 0){
//         console.log(`yes`)
//     }
//     else{
//         console.log(`no`)
//     }
//     i++;
// }

let i = 1;

while (i <= 40) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`fizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`fizz`);
  } else if (i % 5 === 0) {
    console.log(`buzz`);
  } else {
    console.log(i);
  }

  i++;
}

/*

JavaScript Assignment #4: Loops
You may do these challenges all together in one file, or in separate files, according to your preference. You will turn them in all together.

Challenge #1
Paste this line into your code:
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
Write a for..of loop that logs each word in the array
Now, within the loop, capitalize each word
Extra challenges (you may any or all or none of these)
(this is actually a strings challenge) Try capitalizing only the first letter. There is no string method that does this, so you will need to utilize .slice()
Rather than simply logging each word in the array, try creating a new array and adding each capitalized word to it
Add each capitalized word to a string instead of (or in addition to) an array
Challenge #2
Write a loop that will execute exactly 10 times. You can do this with either a while loop or a "classic" for loop
For each loop, console log whether the number is divisible by 3. (You can do this with modulo)
you will need a conditional inside your loop for this!
you can log "true" and "false", or if you prefer, "yes" and "no"
Extra challenges (optional)
Solve FizzBuzz without looking up a solution! This is one of the classic beginning programming challenges
Here is an explanation of the children's math game FizzBuzz
Write a JS loop that will go 40 times, and for each number console log the number, and either Fizz, Buzz, or FizzBuzz next to it
Be mindful of the order of your conditions!
*/
