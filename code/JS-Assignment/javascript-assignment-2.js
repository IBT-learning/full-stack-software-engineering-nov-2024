const personAge = Math.floor(Math.random() * 100) + 1;
const isAdult = personAge >= 18;
const isElderly = personAge >= 60;

console.log(`The chosen number is ${personAge}`);
console.log(
  `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`
);

if (isAdult && !isElderly) {
  console.log('This person is an adult');
} else if (isAdult && isElderly) {
  console.log('This person is elderly');
} else {
  console.log('This person is a child');
}
