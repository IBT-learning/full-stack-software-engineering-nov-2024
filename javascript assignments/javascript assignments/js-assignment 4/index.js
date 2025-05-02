const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
for (let i=wordList; i < wordList;  wordList++);
const capitalizedWords = wordList.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(capitalizedWords);



const newArr = ["apple", "banana", "cherry"]
const capitalizedWordArray = wordList.map(word => word.charAt(0).toUpperCase() + word.slice(1));
const capitalizedWordsString = capitalizedWordArray.join(' ');
console.log(capitalizedWordArray);  
console.log(capitalizedWordsString);

 
  let i = 1;  
while (i <= 10) {
  if (i % 3 === 0) {
    console.log(`${i} is divisible by 3: yes`);
  } else {
    console.log(`${i} is divisible by 3: no`);
  }
  i++;  
}


