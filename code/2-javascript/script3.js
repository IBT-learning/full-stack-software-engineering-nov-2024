// Challenge 1
const movieTitle = "The tomorrow war";
const isScary = true;
const isRomantic = false;

// using ||
const movie =
  (isScary && isRomantic && `${movieTitle} is both romantic and scary!`) ||
  (isScary && !isRomantic && `${movieTitle} is scary!`) ||
  (!isScary && isRomantic && `${movieTitle} is romantic!`) ||
  isScary ||
  isRomantic ||
  `${movieTitle} is neither romantic nor scary.`;
console.log("scary or romantic" ,movie);

// Additional: with if else and funny property
const isFunny = false;

let movieIs;
if (isScary && isRomantic) {
  if (isFunny) movieIs = `${movieTitle} is romantic, scary and funny!`;
  else movieIs = `${movieTitle} is both romantic and scary!`;
} else if (isScary) {
  if (isFunny) movieIs = `${movieTitle} is both scary and funny!`;
  else movieIs = `${movieTitle} is scary!`;
} else if (isRomantic) {
  if (isFunny) movieIs = `${movieTitle} is both romantic and funny!`;
  else movieIs = `${movieTitle} is romantic!`;
} else {
  if (isFunny) movieIs = `${movieTitle} is funny!`;
  else movieIs = `${movieTitle} is neither romantic, nor scary, nor funny!`;
}

console.log("scary romantic, or funny" ,movieIs);
