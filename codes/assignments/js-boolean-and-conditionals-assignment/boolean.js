//Challenge 1

const personAge = Math.floor(Math.random() *100) +1
const isAdult = personAge >=18
const isElderly = personAge >= 60



console.log(personAge)
console.log(`Is this person an adult? ${isAdult}`);
console.log(`Is this person elderly? ${isElderly}`);


if (personAge < 18){
    console.log('This person is a child')
}
else if (personAge >=18 && personAge < 60){
    console.log('This person is an adult');
    
}
else  {
    console.log('This person is elderly')
}


// Challenge2

const lyric = 'This song of love, is from my heart, I do not need a key to worship you, yeah'
const includesLove = lyric.includes('love')
console.log(includesLove)

const includesHeart = lyric.includes('heart')
console.log(includesHeart)

const includesLife = lyric.includes('life')
console.log(includesLife)

const includesBaby = lyric.includes('baby')
console.log(includesBaby)

const includesYeah = lyric.includes('yeah')
console.log(includesYeah)

const isTypical = (includesLove && includesHeart)
console.log(isTypical);

const isVeryTypical = (!includesLife && !includesBaby && includesHeart && includesYeah && includesLove)
console.log(isVeryTypical)

//Extra Challenge

if (!includesBaby && includesLife && includesLove){
    console.log('This song is typical')
}
else if (includesHeart && includesLife && includesYeah){
    console.log('This song is very typical')
}
else {
    console.log('This song is not typical')
}