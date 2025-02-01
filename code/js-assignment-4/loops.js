const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
// for (word of wordList) {
//     console.log(word.toUpperCase())
// }

for (let word of wordList){
    
    let cap = word.slice(0,1).toUpperCase() + word.slice(1)
    console.log(cap)
}

// extra challange
const newWordList = []
for (let word of wordList){
    let cap = newWordList.push(word.slice(0,1).toLocaleUpperCase() + word.slice(1))
    console.log(newWordList)
}

// Challenge 2
let count = 0
while(count <= 10){
    console.log(count)
    count++
}

// extra challenge
for (let i = 0; i <= 40; i++){
    if (i / 3){
        console.log("Fizz")
    }
    else if (i / 5){
        console.log("Buzz")
    }
    else if (i / 3 && i / 5){
        console.log("FizzBuzz")
    }
    else{
        console.log(i)
    }
}