//  Challenge 1
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];

for (let word of wordList){
  let capWord = word.at(0).toUpperCase() + word.slice(1);
  console.log(capWord);
}


// extra challenge1
let capArray = [];
let concatString = '';

for (let word of wordList){
  let capWord = word.at(0).toUpperCase() + word.slice(1);
  capArray.push(capWord);
  concatString += capWord + ' ';
}

console.log(capArray);
console.log(concatString);