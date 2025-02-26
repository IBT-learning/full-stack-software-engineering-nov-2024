//step 1: Create a constant variable called movieTitle and assign it a string with the title of a movie you like

const movieTitle = "Django Unchained";

// step 2: Create a constant variable called isScary and assign it either true or false
const isScary = false;

// step 3: Create a constant variable called isRomantic and assign it either true or false
const isRomantic = false;

//step4: Write a conditional statement that will log only one of these sentences to the console:
//this movie is both romantic and scary!
//this movie is romantic
//this movie is scary
//this movie is neither romantic nor scary
if (isScary && isRomantic) {
  console.log(`${movieTitle} this movie is both romantic and scary!`);
} else if (isRomantic) {
  console.log(`${movieTitle} this movie is romantic`);
} else if (isScary) {
  console.log(`${movieTitle} this movie is scary`);
} else {
  console.log(`${movieTitle} this movie is neither romantic nor scary`);
}

// Part2: Extra challenge

//Add another variable isFunny and see if you can represent all possible combinations

const isFunny = true;

// using nested conditionals? (Putting conditional statements inside of other conditionals?)

if (isFunny) {
  if (isScary && isRomantic) {
    console.log(`${movieTitle} is Funny, Scary, and Romantic!`);
  } else if (isScary) {
    console.log(`${movieTitle} is funny and scary`);
  } else if (isRomantic) {
    console.log(`${movieTitle} is funny and romantic`);
  } else {
    console.log(`${movieTitle} is just funny`);
  }
} else {
  if (isScary && isRomantic) {
    console.log(`${movieTitle} is scary and romantic!`);
  } else if (isScary) {
    console.log(`${movieTitle} is scary!`);
  } else if (isRomantic) {
    console.log(`${movieTitle} is romantic!`);
  } else {
    console.log(`${movieTitle} is neither funny, scary, romantic!`);
  }
}
