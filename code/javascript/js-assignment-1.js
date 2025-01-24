const myName="sherifah"
console.log(myName.length);
console.log(`"Hello, my name is ${myName}"`);
const sentence=`"When my friends see me they shout ${myName}!"`;
console.log(sentence.toUpperCase(myName));

console.log("*******************");
const anyNumber=5;
const multiplication=anyNumber*2;
const addittion=multiplication+8;
const division=addittion/2;
const answer=division-anyNumber;
console.log(answer);

console.log(Math.PI);
function calculateCircumference(radius){
    return 2 * Math.PI * radius;
}
console.log(calculateCircumference(2).toFixed(4))


