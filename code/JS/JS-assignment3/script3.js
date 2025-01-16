// Challenge 1
const movieTitle = 'Avengers: Infinity War';
const isScary = false;
const isRomantic = false;

if (isScary && isRomantic){
  console.log(`${movieTitle} is both romantic and scary!`)
}else if (isScary || isRomantic){
  if (isScary){
    console.log(`${movieTitle} is scary.`);
  }else{
    console.log(`${movieTitle} is romantic.`);
  }
}else{
  console.log(`${movieTitle} is neither scary nor romantic!`);
}

// extra challenge
const movieTitle2 = `The proposal`;
const isScary2 = false;
const isRomantic2 = true;
const isFunny2 = true;

if (isScary2 && isRomantic2 && isFunny2){
  console.log(`${movieTitle2} is scary, romantic and funny.`);
}else if(isScary2 || isRomantic2 || isFunny2){
  if (isScary2 && isRomantic2){
    console.log(`${movieTitle2} is both scary and romantic.`);
  }else if(isRomantic2 && isFunny2){
    console.log(`${movieTitle2} is both romantic and funny.`);    
  }else if(isScary2 && isFunny2){
    console.log(`${movieTitle2} is both scary and funny.`);
  }else if(isScary2){
    console.log(`${movieTitle2} is scary.`);
  }else if(isRomantic2){
    console.log(`${movieTitle2} is romantic.`);
  }else{
    console.log(`${movieTitle2} is funny.`);
  }
}else{
  console.log(`${movieTitle2} is not scary, romantic or funny.`)
}
