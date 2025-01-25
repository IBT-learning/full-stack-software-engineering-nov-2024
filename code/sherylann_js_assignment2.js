//challenge #1

// Generating a random number between 1 and 100 for personAge
const personAge = Math.floor(Math.random() * 100) + 1;

// ill just add this to see the random number generated 
console.log(personAge);

// Determine if the person is an adult (above 18)
const isAdult = personAge > 18;

// Determine if the person is elderly (above 60)
const isElderly = personAge > 60;

// Create a template string to display the results
const resultString = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`;

// Print the result to the console
console.log(resultString);

//  Using a conditional statement to determine if the person is a child, adult, or elderly
if (personAge <= 18) {
    console.log("This person is a child.");
} else if (personAge > 18 && personAge <= 60) {
    console.log("This person is an adult.");
} else {
    console.log("This person is elderly.");
}

//challenge #2

// Step 1: Assign your favorite song lyric
const lyric = "Love me jeje, love me tender ooh.You know your love turn me up like NEPA. Anything you want and I'ma do whatever. Because I love and I love and I love and I love you only .";//love me jeje by Tems

// Step 2: Determine if the lyric includes specific words
const includesLove = lyric.includes("love");
const includesHeart = lyric.includes("heart");
const includesLife = lyric.includes("life");
const includesBaby = lyric.includes("baby");
const includesYeah = lyric.includes("yeah");

// Step 3: Determine if ANY of the conditions are true
const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;

// Step 4: Determine if ALL of the conditions are true
const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;

// Log the results
console.log(`Includes "love": ${includesLove}`);
console.log(`Includes "heart": ${includesHeart}`);
console.log(`Includes "life": ${includesLife}`);
console.log(`Includes "baby": ${includesBaby}`);
console.log(`Includes "yeah": ${includesYeah}`);
console.log(`Is this song typical? ${isTypical}`);
console.log(`Is this song very typical? ${isVeryTypical}`);

//Using a conditional statement
if (isVeryTypical) {
    console.log("This song is very typical.");
} else if (isTypical) {
    console.log("This song is typical.");
} else {
    console.log("This song is not typical.");
}

// Optional Challenge: Example with a lyric that meets all conditions
const perfectLyric = "Love in my heart, life with you, baby yeah!";
const includesLove2 = perfectLyric.includes("love");
const includesHeart2 = perfectLyric.includes("heart");
const includesLife2 = perfectLyric.includes("life");
const includesBaby2 = perfectLyric.includes("baby");
const includesYeah2 = perfectLyric.includes("yeah");

//if is typical
const isTypical2 = includesLove2 || includesHeart2 || includesLife2 || includesBaby2 || includesYeah2;
//if is very typical
const isVeryTypical2 = includesLove2 && includesHeart2 && includesLife2 && includesBaby2 && includesYeah2;
///results
console.log(`For the lyric: "${perfectLyric}"`);
console.log(`Is this song typical? ${isTypical2}`);
console.log(`Is this song very typical? ${isVeryTypical2}`);

//use of conditional statement
if (isVeryTypical2) {
    console.log("This song is very typical.");
} else if (isTypical2) {
    console.log("This song is typical.");
} else {
    console.log("This song is not typical.");
}
