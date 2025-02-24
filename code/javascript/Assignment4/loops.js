//Challenge#1

const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];

// // log each word to the console
for(word of wordList){
    console.log(word);
}

for(caps of wordList){
    console.log(caps.toUpperCase()); //capitalize each word
}



for (letter of wordList){
    let capitalizedLetter= letter[0].toUpperCase() + letter.slice(1);
    console.log(capitalizedLetter);  //capitalize the first letter

}

//Challenge#2
for(let num1=1; num1<=10; num1 ++){
    if(num1 % 3==0){
        console.log(`${num1} :True`);
        
    }else{
        console.log(`${num1} :False`);
    }
    
}

// Extra Challenge FizzBuzz

for(let fizz=1; fizz <=40; fizz++){
    if(fizz % 15==0){
        console.log("FizzBuzz");
    }else if(fizz %5 ==0){
        console.log("Buzz");
    }else if(fizz %3 ==0){
        console.log("Fizz");
    }else{
        console.log(fizz);

    }
    
}
