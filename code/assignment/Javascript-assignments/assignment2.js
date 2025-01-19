
// Challenge 1
const personAge = 55;
const isAdult = personAge >= 18 //boolean expression determining whether that number is above or below 18
const isElderly = personAge >= 60 //boolean expression determining whether that number is above or below 60

personStatus = (`Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`);
console.log(personStatus);


//Extra Challenge
const randomAge = (Math.floor(Math.random() * 100)); //random number between 0 and 100
console.log(`The person's random age is ${randomAge}.`);

//using conditional statements to determine the age group of the random number
if (randomAge < 18) {
    console.log("This person is a child.");
} else if (randomAge < 60) {
    console.log("This person is an adult.");
} else {
    console.log("This person is elderly.");
}



// Challenge 2
const lyric = "God's love is amazing"
const includesLove = lyric.includes("love")
const includesHeart = lyric.includes("heart")
const includesLife = lyric.includes("life")
const includesBaby = lyric.includes("baby")
const includesYeah = lyric.includes("yeah")

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah
console.log("isTypical?", isTypical)

const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah
console.log("isVeryTypical?", isVeryTypical)

//Extra Challenge
if (isTypical) {
    console.log("This lyric is typical.");
} else if (isVeryTypical) {
    console.log("This lyric is very typical.");
} else {
    console.log("This lyric is not typical.");
}