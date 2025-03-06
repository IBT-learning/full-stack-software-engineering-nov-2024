// Challenge #1

// Create a constant variable called personAge and assign it a number between 1 and 100.
// const personAge = 28;
const personAge = Math.floor(Math.random() * 101);

// Create a constant variable called isAdult and assign it a boolean expression determining whether that number is above or below 18
const isAdult = personAge >= 18;

// Create a constant variable called isElderly and assign it a boolean expression determining whether that number is above or below 60
const isElderly = personAge >= 60;

// Create a template string that will read like this: Is this person an adult? true. Is this person elderly? false (but fill in the correct variables for true and false)
const personInfo = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`;

console.log(`Person's age: ${personAge}`);
console.log(personInfo);

// Conditional statement to categorize the person
if (personAge < 18) {
    console.log("This person is a child.");
} else if (personAge >= 60) {
    console.log("This person is elderly.");
} else {
    console.log("This person is an adult.");
}

//////////////////////////////////////////////////////////////

// Challenge #2

// create a constant variable called lyric and assign it your favorite song lyric.
const lyric = "Fly me to the moon Let me play among the stars And let me see what spring is like On a-Jupiter and Mars In other words, hold my hand In other words, baby, kiss me. Fill my heart with song And let me sing forevermore You are all I long for All I worship and adore In other words, please be true In other words, I love you";

// create a constant variable called includesLove and assign it a JS expression determining whether your lyric includes the word "love"
const includesLove = lyric.includes("love");

//do the same thing with the words "heart", "life", "baby", and "yeah".
const includesHeart = lyric.includes("heart");
const includesLife = lyric.includes("life");
const includesBaby = lyric.includes("baby");
const includesYeah = lyric.includes("yeah");

//create and log a constant variable called isTypical and assign it a boolean expression determining whether ANY of the conditions are true
const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;
console.log(isTypical);

//create and log a constant variable called isVeryTypical and assign it a boolean expression determining whether ALL of the conditions are true
const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;
console.log(isVeryTypical);

//Use a conditional statement to log "This song is typical" or "This song is very typical" or "This song is not typical" to the console.
if (isVeryTypical) {
    console.log("This song is very typical");
} else if (isTypical) {
    console.log("This song is typical");
} else {
    console.log("This song is not typical");
}


// Find (or write!) a song lyric that meets each condition. Repeat the previous step for each lyric.
