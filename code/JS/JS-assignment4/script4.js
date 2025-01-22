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

// Challenge 2
for (let i = 1; i < 11; i++){
  if (i % 3 === 0){
    console.log('Yes');
  }else{
    console.log('No');
  }
}

// extra challenge 2
for (let i = 1; i < 41; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  }else if (i % 3 === 0){
    console.log('Fizz');
  }else if (i % 5 === 0){
    console.log('Buzz');
  }else{
    console.log(i);
  }
}