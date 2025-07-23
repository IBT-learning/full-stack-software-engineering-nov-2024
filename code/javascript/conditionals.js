// Challenge 1

const movieTitle ="Spyder Man 3";
const isScary = true;
const isRomantic = true;
if (isScary && isRomantic){
    console.log( movieTitle+ " is both romantic and scary");
} else if (isRomantic){
    console.log( movieTitle + " is romantic");
} else if (isScary){
    console.log( movieTitle + " is scary");
} else {
    console.log( movieTitle + " is neither romantic nor scary");
}

// Extra Challenge
const isFunny = true;

if (isFunny){
    if (isScary && isRomantic){
        console.log( movieTitle + " is both funny, romantic, and scary.");
    } else if (isRomantic){
        console.log(movieTitle + " is both funny and romantic ");
    } else if (isScary){
        console.log( movieTitle + " is both funny and scary");
    } else {
        console.log( movieTitle + " is funny");
    }
} else {
    if (isScary && isRomantic){
        console.log( movieTitle + " is both romantic and scary");
    } else if (isRomantic){
        console.log( movieTitle + " is romantic");
    } else if (isScary){
        console.log( movieTitle + " is scary");
    } else {
        console.log( movieTitle + " is neither romantic nor scary");
    }
}







