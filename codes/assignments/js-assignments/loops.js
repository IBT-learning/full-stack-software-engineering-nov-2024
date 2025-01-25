// Challenge 1

const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

for (word of wordList){
    console.log(word)
}


for (word of wordList){
    console.log(word.toUpperCase()); 

}

//Extra Challenge

let capitalArray = []
let capitalString = ""

//Capitalizing the first letter in the array
for (word of wordList){
    let  firtsLetter = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(firtsLetter)

    capitalArray.push(firtsLetter) //Creating a new array and adding each capitalized word to it
    capitalString += firtsLetter + " "  //Adding each capitalized word to a string

    }

console.log(capitalArray);
console.log(capitalString);




//Challenge 2

for (let i =2; i<=20; i+=2){
    console.log(i)

if (i%3 == 0){
    console.log("true")
}
else{
    console.log("false")
}
}

