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