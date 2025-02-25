//strings

const personAge = 25; 
const isAdult = personAge >= 18;
const isElderly = personAge >= 60;
const message = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`;
console.log(message);

//challenges 1
const randomAge = Math.floor(Math.random() * 101);
console.log(`Random Age: ${randomAge}`);

const isRandomAdult = randomAge >= 18;
const isRandomElderly = randomAge >= 60;

console.log(`Is this person an adult? ${isRandomAdult}. Is this person elderly? ${isRandomElderly}.`);


if (personAge < 18) {
  console.log("This person is a child");
} else if (personAge >= 18 && personAge < 60) {
  console.log("This person is an adult");
} else {
  console.log("This person is elderly");
}

//challange 2

const lyric = "I will always love you";
const includesLove = lyric.includes("love");
const includesHeart = lyric.includes("heart");
const includeslife = lyric. includesLife("life");
const includesBaby = lyric.includes("baby");
const includesYeah = lyric.includes("yeah");
const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;

console.log(`Is this song typical? ${isTypical}`);
console.log(`Is this song very typical? ${isVeryTypical}`);

//extra challange
if (isVeryTypical) {
  console.log("This song is very typical");
} else if (isTypical) {
  console.log("This song is typical");
} else {
  console.log("This song is not typical");
}