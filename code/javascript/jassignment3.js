const movieTitle = "Pulp Fiction"; 
const isScary = false; 
const isRomantic = true; 

if (isScary && isRomantic) {
  console.log(`${movieTitle} is both romantic and scary!`);
} else if (isRomantic) {
  console.log(`${movieTitle} is romantic.`);
} else if (isScary) {
  console.log(`${movieTitle} is scary.`);
} else {
  console.log(`${movieTitle} is neither romantic nor scary.`);
}
