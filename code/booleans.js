// Challenge 1: Boolean Operations
// This code checks if a person is an adult or elderly based on their age
const personAge = 30
const isAdult = personAge >= 18;
const isElderly = personAge >= 60;

console.log(`Is the person an adult? ${isAdult}`); 
console.log(`Is the person elderly? ${isElderly}`); 

let testAge = 15;
let testIsAdult = testAge >= 18;
let testIsElderly = testAge >= 60;
console.log(`Age ${testAge}: Is adult? ${testIsAdult}, Is elderly? ${testIsElderly}`);

let testAge = 21;
let testIsAdult = testAge >= 18;
let testIsElderly = testAge >= 60;
console.log(`Age ${testAge}: Is adult? ${testIsAdult}, Is elderly? ${testIsElderly}`);

testAge = 80;
testIsAdult = testAge >= 18;
testIsElderly = testAge >= 60;
console.log(`Age ${testAge}: Is adult? ${testIsAdult}, Is elderly? ${testIsElderly}`);

const randomAge = Math.floor(Math.random() * 100); // Generates a random age between 0 and 99
console.log(`Random age: ${randomAge}`);

const randomIsAdult = randomAge >= 18;
const randomIsElderly = randomAge >= 60;

console.log(`Is this person an adult? ${randomIsAdult}`);
console.log(`Is this person elderly? ${randomIsElderly}`);


if (randomAge < 18) {
    console.log("This person is a child.");
} else if (randomAge < 60) {
    console.log("This person is an adult.");
} else {
    console.log("This person is elderly.");
}

// Challenge 2: Analyzing a Lyric
const lyric = "love can touch us one time, and last for a life time";
console.log(`Analyzing the lyric: "${lyric}"`);

const includesLove = lyric.includes("love");
const includesHeart = lyric.includes("heart");
const includesLife = lyric.includes("life");
const includesBaby = lyric.includes("baby");
const includesYeah = lyric.includes("yeah");

console.log(`includes "love": ${includesLove}`);
console.log(`includes "heart": ${includesHeart}`);
console.log(`includes "life": ${includesLife}`);
console.log(`includes "baby": ${includesBaby}`);
console.log(`includes "yeah": ${includesYeah}`);

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;
console.log(`Is typical (ANY word found) ${isTypical}`);

const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;
console.log(`Is very typical (ALL words found) ${isVeryTypical}`);