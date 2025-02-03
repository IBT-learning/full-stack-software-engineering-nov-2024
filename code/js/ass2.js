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