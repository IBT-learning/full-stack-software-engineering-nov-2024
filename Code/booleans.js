//let isTrue = true
//let isFalse = false

//console.log(typeof isTrue);
//console.log(typeof isFalse);

//console.log(Boolean (1));
//console.log(Boolean (0));

//console.log(Boolean ('no string attached'));
//console.log(Boolean (''));

//console.log(Boolean ([]));
//console.log(Boolean ([1,2,3,]));

//console.log(isFalse = isTrue);
//console.log(isFalse == isTrue);
//console.log(isFalse != 1);

//console.log(isTrue === 5);
//console.log(isFalse === isTrue);
//console.log(isFalse === "");

//console.log(isTrue = false && isFalse != 1);
//console.log(isFalse != '' && isTrue == 10);

//const complexTrue = 
//(isTrue = 1 && isFalse != ''||
//isFalse == [] && 'string' === isFalse && isFalse != 1)
//console.log(complexTrue);


//CHALLENGE 1: BOOLEANS

const personAge = 60
const isAdult = (personAge > 18 && 18 < personAge)
console.log(isAdult);

const random = Boolean(Math.floor(Math.random() * 100)) 
console.log(random);


const isElderly = (personAge != 60 && 60 < personAge) 
console.log(isElderly);

const firstQuestion =  true
const secondQuestion = false
const message1 = `Is this person an adult?: ${firstQuestion}`
console.log(message1);
const message2 = `Is this person elderly?: ${secondQuestion}`
console.log(message2);

if (70 >= personAge ) {
    console.log('This person is an elderly');
}
if (40 < personAge) {
    console.log('This person is an adult');
}
if (20 <= 20) {
    console.log('The person is a child');
}


//CHALLENGE 2: BOOLEANS

let lyric = "The wold is beautiful";
let includesLove = lyric.toLowerCase().includes("love") 
||
lyric.toLowerCase().includes("heart")
||
lyric.toLowerCase().includes("life")
||
lyric.toLowerCase().includes("baby")
||
lyric.toLowerCase().includes("yeah");

console.log(includesLove);

const isTypical = (10 > 5) && (5 !== 0);
console.log(isTypical);

const isVeryTpical = (10 > 5) && (5 !== 0) && ("hello".length > 0);
console.log(isVeryTpical);


//const isTypical = (10 > 5) && (5 !== 0);
const isVeryTypical = isTypical && ("hello".length > 0);
if (isVeryTypical) {
    console.log("This song is vey typical");    
} else if (isTypical) {
    console.log("This song is typical");
} else {
    console.log("This song is not typical");    
}


































