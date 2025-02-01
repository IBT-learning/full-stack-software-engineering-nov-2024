// const personAge =30;
// const aldult = personAge >= 18;
// isAdult = true
// console.log(isAdult); // true


// const isElderly = personAge >= 60;
// isElderly = false

// const temp = `Is his prson an aldult? ${isAdult}. Is this person elderly? ${isElderly}`
// console.log(temp); // Is his prson an aldult? true. Is this person elderly? false

const personAge = Math.floor(Math.random() * 100)
let isAdult = true
let isElderly = false
console.log(personAge)
if (personAge >= 18) {
    console.log(isAdult);
}
else if(personAge>=60){
    console.log(isElderly);
}
 else {
    console.log("Under age");
};



// Challenge 2

const lyrics = "What a healing Jesus I found in you, you are my healing Jesus";
const includesLove= lyrics.includes("love");
const includesHeart = lyrics.includes("heart");
const includesHealing = lyrics.includes("healing");
const includesLife = lyrics.includes("life");
const includesBaby = lyrics.includes("baby");
const includesJesus = lyrics.includes("Jesus");

const isTypical = true;
const isCliche = false;

if (includesLove && includesHeart && includesHealing && includesLife && includesBaby && includesJesus) {
    console.log(isTypical);
}
else if (includesLove || includesHeart || includesHealing || includesLife || includesBaby || includesJesus) {
    console.log(isCliche);
}else{
    console.log("Not found");
}
