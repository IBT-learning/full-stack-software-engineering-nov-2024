// Assigning a song lyric
const lyric = "Cause baby, you're all that I want, when you're lying here in my arms, I'm finding it hard to believe we're in heaven";

// Checking for specific words
const includesLove = lyric.includes("love");
const includesHeart = lyric.includes("heart");
const includesLife = lyric.includes("life");
const includesBaby = lyric.includes("baby");
const includesYeah = lyric.includes("yeah");

// Checking if any or all conditions are true
const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;
const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;

// Logging the results
console.log(`Includes "love"? ${includesLove}`);
console.log(`Includes "heart"? ${includesHeart}`);
console.log(`Includes "life"? ${includesLife}`);
console.log(`Includes "baby"? ${includesBaby}`);
console.log(`Includes "yeah"? ${includesYeah}`);
console.log(`Is this song typical? ${isTypical}`);
console.log(`Is this song very typical? ${isVeryTypical}`);

// Conditional statements for classification
if (isVeryTypical) {
    console.log("This song is very typical.");
} else if (isTypical) {
    console.log("This song is typical.");
} else {
    console.log("This song is not typical.");
}
