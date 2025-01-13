// Challenge 1
const personAge = 18;
const isAdult = personAge > 18;
const isElderly = personAge < 60;
const result = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`;
console.log(result);

// Optional
const personAge2 = Math.round(Math.random() * 100);
if (personAge2 < 18) {
  console.log("This person is a child");
} else if (personAge2 > 18 && personAge2 < 60) {
  console.log("This person is an adult");
} else if (personAge2 > 60) {
  console.log("This person is elderly");
}

// Challenge2
const lyric = "Ontop of the Love is beautiful but there is no place to fall";
const includesLove = lyric.includes("love");
const includesHeart = lyric.includes("heart");
const includesLife = lyric.includes("life");
const includesBaby = lyric.includes("baby");
const includesYeah = lyric.includes("yeah");
const isTypical =
  includesLove || includesHeart || includesLife || includesBaby || includesYeah;
console.log(isTypical);

const isVeryTypical =
  includesLove && includesHeart && includesLife && includesBaby && includesYeah;
console.log(isVeryTypical);

// Optional
if (isTypical) {
  console.log("This song is typical");
} else if (isVeryTypical) {
  console.log("This song is very typical");
} else {
  console.log("This song is not typical");
}
