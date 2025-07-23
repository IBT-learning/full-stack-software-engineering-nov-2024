// Challenge 1

const personAge = 45
const isAdult = personAge >= 18
const isElderly = personAge > 60   
const ageVerification = 'Is this person an adult? ' + isAdult + '. Is this person elderly? ' + isElderly + '.'
console.log(ageVerification)

// Extra Challenge 1: part 1

const genratedAge = Math.floor(Math.random() * 101) // Found this function on youtube
console.log('Generated age:  ' + genratedAge)

const isAdultx = personAge >= 18
const isElderlyx = personAge > 60
const ageReport = 'Is this person an adult? ' + isAdult + '.' + ' Is this person elderly? ' + isElderly + '.'
console.log(ageReport)

//Extra challenge 1:part 2

if (isElderly) {
    console.log("This person is elderly"); 
}
else if (isAdult){
    console.log("This person is an adult");
}
else {
    console.log("This person is a child")
}

// Challenge 2

const lyric = "You can't be everything to everybody I wanna be your lover, your best friend Your Batman, Spider-Man Fighter pilot shooting down your rivals and I wanna damn near kill you to be the one that heal you up I wanna be the one to fill you up On nights when you need good dick to cheer you up I wanna be the one to build you up A wall worth five billion bucks to keep out the rah-rah And the blah-blah-blah so nobody try to steal your thunder Pull you under, toss my hoes out, Royal Rumble We done moved out to the boondocks Built a big house, there he wonders How somewhere along the way He went from Huey to Eddie Wuncler I been so disconnected, my perspective is ignorant When you rich, niggas don't wanna correct you Say something crazy, they won't interject Do every drug that you want, they gon' let you Dangerous when it's nobody to check you I be havin' to check myself Nigga, stop holding that money, you know you got plenty I be havin' to spread my wealth"
const includesLove = lyric.includes('love')
const includesHeart = lyric.includes('heart')
const includesLife = lyric.includes('life')
const includesBaby = lyric.includes('baby')
const includesYeah =lyric.includes('yeah')
const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah
const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah

console.log('Does the lyric include "love"? ' + includesLove)
console.log('Does the lyric include "heart"? ' + includesHeart)
console.log('Does the lyric include "life"? ' + includesLife)
console.log('Does the lyric include "baby"? ' + includesBaby)
console.log('Does the lyric include "yeah"? ' + includesYeah)
console.log('Is this lyric typical? ' + isTypical)
console.log('Is this lyric very typical? ' + isVeryTypical)

// Extra Challenge 2: part 1

if (isTypical) {
    console.log("This song is typical");
}
else if (isVeryTypical) {
    console.log("This song is very typical");
}
else{
    console.log("This song is not typical")
}

// Extra Challenge 2: part 2

const Lyric = "love hits the heart hard like liquid fire and life is a baby that never grows old, yeah"
const includesLovex = Lyric.includes('love')
const includesHeartx = Lyric.includes('heart')
const includesLifex = Lyric.includes('life')
const includesBabyx = Lyric.includes('baby')
const includesYeahx = Lyric.includes('yeah')
const isTypicalx = includesLovex || includesHeartx || includesLifex || includesBabyx || includesYeahx
const isVeryTypicalx = includesLovex && includesHeartx && includesLifex && includesBabyx && includesYeahx

console.log('Does the lyric include "love"? ' + includesLovex)
console.log('Does the lyric include "heart"? ' + includesHeartx)
console.log('Does the lyric include "life"? ' + includesLifex)
console.log('Does the lyric include "baby"? ' + includesBabyx)
console.log('Does the lyric include "yeah"? ' + includesYeahx)
console.log('Is this lyric typical? ' + isTypicalx)
console.log('Is this lyric very typical? ' + isVeryTypicalx)
