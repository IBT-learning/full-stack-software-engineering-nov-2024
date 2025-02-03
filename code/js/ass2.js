const personAge = 50
const isAdult = (personAge >= 18)
const isElderly = (personAge >= 60)
console.log(`Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`)

// Extra Challenge

let personAge_ = Math.floor(Math.random() * 100)
console.log(personAge_)
if(personAge_ >= 60){
  console.log("This person is an adult")
} else if(personAge_ > 18){
  console.log("This person is an adult")

} else {
  console.log("This person is a child")
}

// Challenge 2

const lyric = "Ma pa mi oo, Iyawo asiko, Mapa mii oo Iyawo Olele" +
"Eni Ere, ola ijam iwo ni Ife, ti oyinbo pe mo Love life and heart"
const includesLove = (lyric.includes("love"))
console.log(includesLove)
console.log(lyric.includes("heart"))
console.log(lyric.includes("life"))
console.log(lyric.includes("baby"))
console.log(lyric.includes("yeah"))

const isTypical = lyric.includes("heart") || lyric.includes("life") ||
lyric.includes("baby") || lyric.includes("yeah")
console.log(isTypical)

const isVeryTypical = lyric.includes("heart") && lyric.includes("life") &&
lyric.includes("baby") && lyric.includes("yeah")
console.log(isVeryTypical)

// Extra Challenges

if(isVeryTypical){
  console.log("This song is very typical")
} else if(isTypical){
  console.log("This song is typical")
} else{
  console.log("This song is not typical")
}

console.log("=============================")

const lyric_ = "🎶 Title: Yeah, My Heart 🎶" +
"(Verse 1) Yeah, you’re the rhythm in my life," +  
"Baby, you make it feel so right." +  
"Every beat of my heart calls your name," +  
"Without you, it’s not the same. Ma pa mi oo, Iyawo asiko, Mapa mii oo Iyawo Olele" +
"Eni Ere, ola ijam iwo ni Ife, ti oyinbo pe mo Love life and heart" +  
"Yeah, baby, stay with me tonight," +  
"This heart beats for you, hold me tight." +  
"In this life, you’re my only light," +  
"Forever love, yeah, feels so right." +  
"🔥 Short and sweet! Let me know if you want tweaks! 🎵"

const includesLove_ = (lyric_.includes("love"))
console.log(includesLove_)
console.log(lyric_.includes("heart"))
console.log(lyric_.includes("life"))
console.log(lyric_.includes("baby"))
console.log(lyric_.includes("yeah"))

const isTypical1 = lyric_.includes("heart") || lyric_.includes("life") ||
lyric_.includes("baby") || lyric_.includes("yeah")
console.log(isTypical1)

const isVeryTypical2 = lyric_.includes("heart") && lyric_.includes("life") &&
lyric_.includes("baby") && lyric_.includes("yeah")
console.log(isVeryTypical2)

if(isVeryTypical2){
  console.log("This song is very typical")
} else if(isTypical1){
  console.log("This song is typical")
} else{
  console.log("This song is not typical")
}
