const wordsList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];

for (let i = 0; i < wordsList.length; i++) {
    console.log(wordsList[i].charAt(0).toUpperCase() + wordsList[i].slice(1));
}



let i = 1;
while (i <= 10) {
    console.log(i, i % 3 === 0 ? "yes" : "no");
    i++;
}
