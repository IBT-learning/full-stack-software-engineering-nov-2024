const movieTitle = "Pirates of the Carribean Dead men tell no tales";
const isScary = true;
const isRomantic = true;

if (isScary && isRomantic) {
  console.log(`${movieTitle} is both scary and romantic `);
} else if (isRomantic && !isScary) {
  console.log(`${movieTitle} is  romantic `);
} else if (!isRomantic && isScary) {
  console.log(`${movieTitle} is  scary `);
} else {
  console.log(`${movieTitle} is neither romantic nor scary `);
}

// Extra Challenge
isFunny = false;
if (isScary && isRomantic && isFunny) {
  console.log(`${movieTitle} is scary, romantic and funny `);
}

// Conditons for ROmantic and others
else if (isRomantic) {
 
 
    if (!isScary && !isFunny) {
    console.log(`${movieTitle} is Romantic `);
  } else if (!isScary && isFunny) {
    console.log(`${movieTitle} is both romantic and funny `);
  } else if (isScary && !isFunny) {
    console.log(`${movieTitle} is both romantic and scary `);
  }
}
// Conditons for Scary and others
else if (isScary) {
  if (!isRomantic && !isFunny) {
    console.log(`${movieTitle} is Scary `);
  }
  if (!isRomantic && isFunny) {
    console.log(`${movieTitle} is both scary and funny `);
  } 
}


 else if (isFunny) {
   if (!isRomantic && !isScary) {
     console.log(`${movieTitle} is funny `);
   }
 }
 
 
 else {
   console.log(`${movieTitle} is neither romantic nor scary nor funny `);
 }
