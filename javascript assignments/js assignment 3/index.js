const movieTitle = "spiderman";
const isScary = true;
const isRomantic = true;
const isFunny = true;


if (isRomantic && isScary){
    console.log(`${movieTitle} is both romantic and scary`);
    
} else if (isRomantic){
    console.log(`${movieTitle} is romantic.`);    
} else if (isScary){
    console.log(`${movieTitle} is scary`);
} else (`${movieTitle} is neither romantic nor scary.`)



// extra challenge 
if (isFunny) {
    if (isRomantic && isScary) {
      console.log(`${movieTitle} is funny, romantic, and scary!`);
    } else if (isRomantic) {
      console.log(`${movieTitle} is funny and romantic.`);
    } else if (isScary) {
      console.log(`${movieTitle} is funny and scary.`);
    } else {
      console.log(`${movieTitle} is funny.`);
    }
  } else {
    if (isRomantic && isScary) {
      console.log(`${movieTitle} is both romantic and scary.`);
    } else if (isRomantic) {
      console.log(`${movieTitle} is romantic.`);
    } else if (isScary) {
      console.log(`${movieTitle} is scary.`);
    } else {
      console.log(`${movieTitle} is neither romantic nor scary.`);
    }
  }