// Challenge 1
const movieTitle = "Predestination";
const isScary = false;
const isRomantic = true;
const isFunny = true;

if (isRomantic && isScary) {
  console.log("this movie is both romantic and scary!");
  //   if (isFunny) console.log("movie is also funny");
} else if (isRomantic && isFunny) {
  console.log("this movie is romantic and funny");
} else if (isScary) {
  console.log("this movie is scary");
} else if (isRomantic || isScary) {
  console.log("this movie is neither romantic nor scary");
} else if (isFunny) {
  console.log("movie is just funny");
}
