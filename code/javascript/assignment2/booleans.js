// Challenge #1
const personAge = 25
const isAdult = personAge >18
console.log(isAdult)
const isElderly= personAge >60 
console.log (isElderly)
console.log( `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`)

// Extra challenge
const personAgeB=Math.floor(Math.random()*100 + 1)
console.log(personAgeB)
const isAdultB = personAgeB >18
console.log(isAdultB)
const isElderlyB= personAgeB >60 
console.log (isElderlyB)

if(personAgeB<18){
    console.log("This person is a child")
}
else if(isAdultB){
    console.log("This person is an adult")
}
else{
    console.log("This person is elderly")
}
// challenge#2

const lyric = "You got me singing love songs.yeah, this the type of song your heart tip on. pour up song that make you fall in love song" 

const includesLove= lyric.includes("love")
const includesHeart= lyric.includes("heart")
const includesLife= lyric.includes("life")
const includesBaby= lyric.includes("baby")
const includesYeah= lyric.includes("yeah")
//to determine if any of the conditions is true
const isTypical= includesLove ||includesHeart || includesLife || includesBaby||  includesYeah
//to determine all conditions are true
const isVeryTypical= includesLove && includesHeart &&  includesLife && includesBaby && includesYeah

console.log( isTypical)
console.log( isVeryTypical)


//Extra challenges
if(isTypical ){
    console.log("This song is typical")
}
else if(isVeryTypical){
    console.log("This song is very typical")
}
else{
    console.log("This song is not typical")
}

const lyricB = " This life got me singing love songs.yeah, this the type of song your heart tip on,baby pour up song that make you fall in love song" 

const includesLoveB= lyric.includes("love")
const includesHeartB= lyric.includes("heart")
const includesLifeB= lyric.includes("life")
const includesBabyB= lyric.includes("baby")
const includesYeahB= lyric.includes("yeah")
//to determine if any of the conditions is true
const isTypicalB= includesLoveB ||includesHeartB || includesLifeB || includesBabyB||  includesYeahB
//to determine all conditions are true
const isVeryTypicalB= includesLoveB && includesHeartB &&  includesLifeB && includesBabyB && includesYeahB 

// console.log(includesLoveB)
// console.log(includesHeartB)
// console.log(includesLifeB)
// console.log(includesBabyB)
// console.log(includesYeahB)

console.log( isTypicalB)
console.log( isVeryTypicalB)