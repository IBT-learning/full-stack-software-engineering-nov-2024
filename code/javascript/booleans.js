// Challenge 1 
const personAge = 25; 

const isAdult = personAge >= 18;  

const isElderly = personAge >= 60;  

const result = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`;  

console.log(result);

// Optional

const personAge2 = Math.floor(Math.random() * 101);  
console.log(`Person's Age: ${personAge}`); 

const isAdult2 = personAge >= 18;  

const isElderly2 = personAge >= 60;  

const results = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`;  
console.log(result);  

if (personAge < 18) {  
    console.log("This person is a child.");  
} else if (personAge < 60) {  
    console.log("This person is an adult.");  
} else {  
    console.log("This person is elderly.");  
}
// Challenge 2

const lyric = "I will always love you, my heart will go on.";  


const includesLove = lyric.includes("love");  
const includesHeart = lyric.includes("heart");  
const includesLife = lyric.includes("life");  
const includesBaby = lyric.includes("baby");  
const includesYeah = lyric.includes("yeah");  


const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;  


const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;  


console.log(`Includes "love": ${includesLove}`);  
console.log(`Includes "heart": ${includesHeart}`); 
console.log(`Includes "life": ${includesLife}`); 
console.log(`Includes "baby": ${includesBaby}`); 
console.log(`Includes "yeah": ${includesYeah}`); 
console.log(`Is Typical: ${isTypical}`); 
console.log(`Is Very Typical: ${isVeryTypical}`); 

// Challenge:
if (isVeryTypical) {  
    console.log("This song is very typical");  
} else if (isTypical) {  
    console.log("This song is typical");  
} else {  
    console.log("This song is not typical");  
}
