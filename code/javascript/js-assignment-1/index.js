const fullName = "Owen Iraoya";

console.log(fullName.length);

console.log(`Hello, my name is ${fullName}`);

console.log(`When my friends see me they shout ${fullName.toUpperCase()}!`);

// NUMBERS
const num = 10;
const result = (num * 2 + 8) / 2 - num;
console.log(result);

const radius = 10;
const area = Math.PI * Math.pow(radius, 2);
const roundedArea = Number(area.toPrecision(4));
console.log(roundedArea);
