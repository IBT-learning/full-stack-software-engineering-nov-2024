// Challenge 1
const movieTitle = "The tomorrow war";
const isScary = true;
const isRomantic = false;

// using ||
const movie = (isScary && isRomantic && "This movie is both romantic and scary")
|| (isScary && !isRomantic && "This movie is scary")
|| (!isScary && isRomantic && "This movie is romantic")
|| (isScary || isRomantic || "This movie is neither romantic nor scary");
console.log(movie)