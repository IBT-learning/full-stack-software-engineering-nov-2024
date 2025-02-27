//CHALLENGE ONE

// Renaming console.log
const cl = console.log

const personAge = 100

const isAdult = personAge > 18

const isElderly = personAge > 60

const stringLiteral = `Is this person an adult? ${isAdult}. Is this person elderly ${isElderly}`

// Output of Answer
cl(stringLiteral)



// EXTRA CHALLENGE
const personAge1 = Math.floor(Math.random() * 100)
cl("Age", personAge1)

personAge1 > 60? cl("This person is Elderly")
: personAge1 > 18? cl("This person is an Adult")
: cl("This person is a Child")






//CHALLENGE TWO
const lyric = `Oh oh, sometimes I get a good feeling, yeah
                I get a feeling that I never never never never had before, no no
                I get a good feeling, yeah`

const includesLove = lyric.includes("love")
const includesHeart = lyric.includes("heart")
const includesLife = lyric.includes("life")
const includesBaby = lyric.includes("baby")
const includesYeah = lyric.includes("yeah")

let isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah
let isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah

cl(isTypical, isVeryTypical)

//EXTRA CHALLENGE

isTypical && isVeryTypical? cl("This song is typical and very typical")
: isTypical? cl("This song is typical")
: isVeryTypical? cl("This song is very typical")
: cl("This song is not typical")
