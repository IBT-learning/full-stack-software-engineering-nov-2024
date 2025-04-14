// string operations
const myName = 'Florence';
console.log(myName.length);

console.log(`Hello, my name is ${myName}.`);

console.log(`When my friends see me they shout ${myName.toUpperCase()}!`);

// number operations
// challenge 1
const eggs = 12;

let newNum = ((((eggs * 2) + 8) / 2) - eggs);
console.log(newNum);

// challenge 2
const radius = 10;
const area = (Math.PI * (radius * radius)).toFixed(4);
console.log(area);
