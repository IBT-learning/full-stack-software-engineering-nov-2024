// step 1: Create a constant variable called personAge and assign it a number between 1 and 100
const personAge = Math.floor(Math.random() * 101);

// step 2: Create a constant variable called isAdult and assign it a boolean expression determining whether that number is above or below 18
//console.log(personAge);
const isAdult = personAge >= 18;

// step 3:Create a constant variable called isElderly and assign it a boolean expression determining whether that number is above or below 60
const isElderly = personAge >= 60;

//step 4: Create a template string that will read like this: Is this person an adult? true. Is this person elderly? false (but fill in the correct variables for true and false)
const statusMessage = `is this person an adult? ${isAdult}. is this person elderly? ${isElderly}.`;

console.log(`person's age: ${personAge}`);
console.log(statusMessage);

// step 5: adding conditional statement
if (personAge < 18) {
  console.log("This person is a child");
} else if (personAge < 60) {
  console.log("This person is an Adult");
} else {
  console.log("This person is Elderly");
}

// challenge 2

// step 1: create a constant variable called lyric and assign it your favorite song lyric
const lyric = "With all the life in my heart I wants to love you baby, oh yeah";

// step 2: create a constant variable called includesLove and assign it a JS expression determining whether your lyric includes the word "love", "heart", "life", "baby", and "yeah".
const includesLove = lyric.includes("love");
const includesHeart = lyric.includes("heart");
const includesLife = lyric.includes("life");
const includesBaby = lyric.includes("baby");
const includesYeah = lyric.includes("yeah");

//Log the results to verify
console.log(`includes "love": ${includesLove}`);
console.log(`includes "heart": ${includesHeart}`);
console.log(`includes "life": ${includesLife}`);
console.log(`includes "baby": ${includesBaby}`);
console.log(`includes "yeah": ${includesYeah}`);

//step 3: check if the song is typical or very typical

const isTypical =
  includesLove || includesHeart || includesLife || includesBaby || includesYeah;

const isVeryTypical =
  includesLove && includesHeart && includesLife && includesBaby && includesYeah;

//Log the results

console.log(`This song is typical? ${isTypical}`);
console.log(`This song is very typical? ${isVeryTypical}`);

//step 4: using conditional statement to log a message

if (isVeryTypical) {
  console.log("This song is very typical.");
} else if (isTypical) {
  console.log("This son is typical.");
} else {
  console.log("This song is not typical.");
}
