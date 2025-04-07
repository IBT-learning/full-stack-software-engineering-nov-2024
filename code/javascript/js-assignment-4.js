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


for(word of wordList){
    console.log(word[0].toUpperCase()+word.slice(1))
}


// Extra challenge 1
const capitalizedWordList= []
let capitalizedLongWord = ""
for (word of wordList){
        capitalizedWordList.push(word[0].toLocaleUpperCase()+word.slice(1))
         capitalizedLongWord +=word[0].toUpperCase()+word.slice(1)   
    }

    console.log(capitalizedWordList, capitalizedLongWord)


    // Challenge 2 
    for (let i =0;i<=10;i++){
        console.log(`${i%3 === 0?"Yes ":"No"}`)     
    }


    // Fizz buzz challenge 

    for  (let i = 1; i <=40; i++){
        if (i%3 === 0 && i%5 ===0){
            console.log("FizzBuzz")
        }
        else if(i%3===0){
            console.log("Fizz")
        }
        else if (i%5 ===0){
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }