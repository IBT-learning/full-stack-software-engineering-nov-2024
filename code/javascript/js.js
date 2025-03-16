const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];
const capitalizedWords =[];
let capitalizedString = "";
for (const word of wordList){
    const capitalizedWord=word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
    capitalizedString += capitalizedWord + "";
    console.log(capitalizedWords);
    console.log(capitalizedString.trim());
     
}