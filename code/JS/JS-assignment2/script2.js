//  challenge 1
const personAge = 26;
const isAdult = personAge >= 18;
const isElderly = personAge >= 60;

let personInfo = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`;
console.log(personInfo);

//  extra challenge 1
let personAge2 = Math.floor(Math.random() * 100); // generates a random number between 0 (inclusive) and 100 (exclusive)
console.log(`Age generated: ${personAge2}`);

if (personAge2 < 18){
  console.log('This person is a child');
} else if (personAge2 < 60){
  console.log('This person is an adult');
} else{
  console.log('This person is elderly');
}


// Challenge 2
const lyric = `Green eyes, fried rice
I could cook an egg on you
Late night, game time
Coffee on the stove, yeah
You're sweet ice cream
But you could use a Flake or two
Blue bubblegum twisted 'round your tongue
I don't want you to get lost
I don't want you to go broke
I want you`

const includesLove = lyric.toLowerCase().includes('love');
const includesHeart = lyric.toLowerCase().includes('heart');
const includesLife = lyric.toLowerCase().includes('life');
const includesBaby = lyric.toLowerCase().includes('baby');
const includesYeah = lyric.toLowerCase().includes('yeah');

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;
console.log(isTypical);

const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;
console.log(isVeryTypical);

// extra challenge 2
let song1 = lyric;
if (isVeryTypical){
  console.log('Song1 is very typical')
} else if(isTypical){
  console.log('Song1 is typical')
}else{
  console.log('Song1 is not typical');
}

let song2 = `We've conquered all of Europe
We're never gonna stop
From Paris down to Turkey
We've won the fucking lot
Bob Paisley and Bill Shankly
The fields of Anfield Road
We are loyal supporters
And we come from Liverpool
Allez, Allez, Allez
Allez, Allez, Allez
Allez, Allez, Allez
Allez, Allez, Allez`;

const includesLove2 = song2.toLowerCase().includes('love');
const includesHeart2 = song2.toLowerCase().includes('heart');
const includesLife2 = song2.toLowerCase().includes('life');
const includesBaby2 = song2.toLowerCase().includes('baby');
const includesYeah2 = song2.toLowerCase().includes('yeah');

const isTypical2 = includesLove2 || includesHeart2 || includesLife2 || includesBaby2 || includesYeah2;
const isVeryTypical2 =  includesLove2 && includesHeart2 && includesLife2 && includesBaby2 && includesYeah2;

if (isVeryTypical2){
  console.log('Song2 is very typical')
} else if(isTypical2){
  console.log('Song2 is typical')
}else{
  console.log('Song2 is not typical');
}

let song3 = 'Baby I love you with all my heart, yeah this life is amazing with you!';

const includesLove3 = song3.toLowerCase().includes('love');
const includesHeart3 = song3.toLowerCase().includes('heart');
const includesLife3 = song3.toLowerCase().includes('life');
const includesBaby3 = song3.toLowerCase().includes('baby');
const includesYeah3 = song3.toLowerCase().includes('yeah');

const isTypical3 = includesLove3 || includesHeart3 || includesLife3 || includesBaby3 || includesYeah3;
const isVeryTypical3 =  includesLove3 && includesHeart3 && includesLife3 && includesBaby3 && includesYeah3;

if (isVeryTypical3){
  console.log('Song3 is very typical')
} else if(isTypical3){
  console.log('Song3 is typical')
}else{
  console.log('Song3 is not typical');
}