const personAge =25;
const isAdult = personAge >=18;
const isElderly = personAge >= 60; 

const message = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`;

console.log(message);


if (personAge <16) {
    console.log("This person is a child");
} else if (personAge >=16 && personAge <60) {
    console.log("This pesrson is an adult");

} else{
    console.log("This person is an elderly");
}




const lyric = "Is there some room for me? baby, do tell, do tell"; 
const includesLove = lyric.includes("love");
const includesHeart = lyric.includes("heart");
const includesLife = lyric.includes("life");
const includesBaby = lyric.includes("baby");
const includesYeah = lyric.includes("yeah");

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;
const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;

console.log(`Lyric: "${lyric}"`);
console.log(`Includes "love"? ${includesLove}`);
console.log(`Includes "heart"? ${includesHeart}`);
console.log(`Includes "life"? ${includesLife}`);
console.log(`Includes "baby"? ${includesBaby}`);
console.log(`Includes "yeah"? ${includesYeah}`);
console.log(`Is it typical? ${isTypical}`);
console.log(`Is it very typical? ${isVeryTypical}`);

