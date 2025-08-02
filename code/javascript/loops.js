// Challenge 1 

const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]


for (word of wordList) {
    let capitalWord = word[0].toUpperCase() + word.slice(1);
    console.log(capitalWord);
}

// Extra Challenge 1

const capitalizedWordList = [];
let  capitalizedWords = '';

for (word of wordList){
    let capitalWord = word[0].toUpperCase() + word.slice(1);
    capitalizedWordList.push(capitalWord);
    capitalizedWords += capitalWord + ' ';
}
console.log(capitalizedWordList , capitalizedWords)

// Challenge 2

for (let i = 0; i < 10; i++){
    if (i % 3 === 0){
        console.log('Yes');
    } else{
        console.log('No');
    }
}

// Extra Challenge 2

for (let i = 1; i < 41; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(" FizzBuzz");
    } else if (i % 3 === 0){
        console.log(" Fizz ");
    } else if ( i % 5 === 0){
        console.log(" Buzz ");
    } else {
        console.log(i.toString());
    }
}

