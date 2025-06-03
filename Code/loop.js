//Challenge 1

const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
const capWordList = [];

console.log(wordList);


for (const word of wordList) {
    const capitalized =
word.charAt(0).toUpperCase() +
word.slice(1);

capWordList.push(capitalized);
    
}

console.log(capWordList);

// Challenge 2

const num1 = [1,2,,3,4];
const num2 = [5,6,7,8,9,10];

const concatNum = num1.concat(num2);
console.log(concatNum);

let num = 0
while (num <= 10) {
    console.log("The nmber is true:", num);
    num++;

}

