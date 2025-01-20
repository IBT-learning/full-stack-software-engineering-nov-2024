// challenge 1

const personAge = 25
const isAdult = personAge >= 18;
const isElderly = isAdult >= 60;
results = `Is this person an adult ? ${isAdult}. Is this person elderly ? ${isElderly}`;
console.log(results);

// extra challenges 

const personAges = Math.floor(Math.random() * 101); 
const isAdults = personAges >= 18;
const isElderlys = personAges >= 60;

console.log(`Age: ${personAges}`); 

const message = `Is this person an adult? ${isAdults}. Is this person elderly? ${isElderlys}`;
console.log(message);

if (personAges < 18) {
  console.log("This person is a child.");
} else if (personAges < 60) {
  console.log("This person is an adult.");
} else {
  console.log("This person is elderly.");
}

 
// chapllenge 2 


let lyric = "serotonin one love heart life baby yeah"
let includesLove = lyric.includes("love");
const includesHeart = lyric.includes("heart");
const includesLife = lyric.includes("life");
const includesBaby = lyric.includes("baby");
const includesYeah = lyric.includes("yeah");

console.log(includesLove);

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;
console.log(`Is this lyric typical? ${isTypical}`);

const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;
console.log(`Is this lyric very typical? ${isVeryTypical}`);





