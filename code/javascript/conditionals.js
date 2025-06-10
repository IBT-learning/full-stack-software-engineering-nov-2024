const movieTitle = "The Notebook"
const isScary = true
const isRomantic = true

console.log(`movie title: ${movieTitle}`);
console.log(`is scary: ${isScary}`);
console.log(`is romantic: ${isRomantic}`);

let isBothScaryAndRomantic = isScary && isRomantic;

if (isBothScaryAndRomantic) {
    console.log("The Notebook is both scary and romantic.");
} else if (isScary) {
    console.log(`${movieTitle} is scary.`);
} else if (isRomantic) {
    console.log(`${movieTitle} is romantic.`);
} else {
    console.log(`${movieTitle} is neither scary nor romantic.`);
}

const title = "The Notebook";
const Scary = true;
const Romantic = true;
console.log(`${title} (Scary: ${Scary}, Romantic: ${Romantic})`);

let bothConditions = Scary && Romantic;
console.log(`Both conditions (scary and romantic): ${bothConditions}`);

if (bothConditions) {
    console.log(`${title} is both scary! and romantic.`); 
} else if (Scary) {
    console.log(`${title} is scary!`);
} else if (Romantic) {
    console.log(`${title} is romantic!`);
} else {
    console.log(`${title} is neither scary nor romantic.`);
}