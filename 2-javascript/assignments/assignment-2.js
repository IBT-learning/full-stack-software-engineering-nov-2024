// 1st Challenge 
const personAge = 40;
const isAdult = personAge > 18;
const isElderly = personAge < 60;
const result = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`;
console.log(result);


//Extra challenge

if (personAge < 18) {
  console.log("This person is a child");
} else if (personAge > 18 && personAge < 60) {
  console.log("This person is an adult");
} else if (personAge > 60) {
  console.log("This person is elderly");
}

// 2nd Challenge
const lyric = "Your love is sweeter than wine";
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


//Extra challenge
if (isTypical){
    console.log("This song is typical");
} else if(isVeryTypical){
    console.log("This song is very typical");
} else{
    console.log("This song is not typical");
}

