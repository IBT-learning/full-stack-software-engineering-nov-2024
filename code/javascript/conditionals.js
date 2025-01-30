 michael-js-assignment-2
// Favorite song lyric
const lyric = "You give love a bad name, and it's hard to live without you.";

// Check if the lyric includes specific words
const includesLove = lyric.includes("love");
const includesHeart = lyric.includes("heart");
const includesLife = lyric.includes("life");
const includesBaby = lyric.includes("baby");
const includesYeah = lyric.includes("yeah");

// Check if any or all conditions are true
const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;
const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;

// Log results
console.log(`Includes "love": ${includesLove}`);
console.log(`Includes "heart": ${includesHeart}`);
console.log(`Includes "life": ${includesLife}`);
console.log(`Includes "baby": ${includesBaby}`);
console.log(`Includes "yeah": ${includesYeah}`);
console.log(`Is this song typical? ${isTypical}`);
console.log(`Is this song very typical? ${isVeryTypical}`);

// Extra Challenge: Conditional statement
if (isVeryTypical) {
  console.log("This song is very typical.");
} else if (isTypical) {
  console.log("This song is typical.");
} else {
  console.log("This song is not typical.");
}
let temperature = 110
let rainy = false

let isWarmAndWet = temperature >= 70 && rainy

let isDryandCold = !rainy && temperature < 65

if (temperature < 65 && rainy) {
    console.log("Danny is grumpy!");
} else if (isWarmAndWet || isDryandCold) {
    console.log("Danny is okay");
} else {
    console.log("Danny is happy!");
}

if (temperature > 100) {
    console.log ("I'm melting!")
} else if (temperature > 80) {
    console.log("it is pretty nice out!")
} else if (temperature > 65) {
    console.log("at least it's not freezing")
} else if (temperature > 35) {
    console.log("at least it's not freezing")
} else if (temperature > 15) {
    console.log("it's cold out!")
} else {
    console.log("IT IS WAY WAY TOO COLD")
}
 michael-ibt
