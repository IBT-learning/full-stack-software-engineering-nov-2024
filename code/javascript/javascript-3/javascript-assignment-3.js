const movieTitle = "The Dark Knight";
const isScary = true;
const isRomantic = false; 

if (isScary && isRomantic) {
  console.log(`${movieTitle} is both romantic and scary!`);
} else if (isRomantic) {
  console.log(`${movieTitle} is romantic`);
} else if (isScary) {
  console.log(`${movieTitle} is scary`);
} else {
  console.log(`${movieTitle} is neither romantic nor scary`);
}