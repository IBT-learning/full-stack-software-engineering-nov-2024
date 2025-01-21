// Challenge 1
const wordList = [
  "every",
  "word",
  "in",
  "this",
  "array",
  "should",
  "be",
  "capitalized",
];
// for(const word of wordList) console.log(word.toUpperCase());
// capitalize first letter
// const newWordList = wordList.slice(0)
// for(const word of newWordList){
//     // let Word = word.slice(0,1).toUpperCase()+ word.slice(1,word.length)
//     //use spliced
//     const firstLetter = word.slice(0,1).toUpperCase();
//     console.log(firstLetter)
//     let word1 = newWordList.splice(0,1,firstLetter)
//     console.log(newWordList)
// }

console.log("newWordList".slice(0, 1));
const tobeSpliced = ["hiii", "hey", "hiii", "hey"];
console.log(tobeSpliced.splice(1, 1, "delete hey only"));
console.log(tobeSpliced);
