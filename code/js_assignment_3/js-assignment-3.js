// Challenge #1

//Create a constant variable called movieTitle and assign it a string with the title of a movie you like
const movieTitle = "Bilions";

//Create a constant variable called isScary and assign it either true or false depending on if the movie is scary or not
const isScary = false;

// Create a constant variable called isRomantic and assign it either true or false
const isRomantic = false;

//Write a conditional statement that will log only one of these sentences to the console:
// this movie is both romantic and scary!
// this movie is romantic
// this movie is scary
// this movie is neither romantic nor scary
// In each outcome, replace "this movie" with the title of your movie.
if (isRomantic && isScary) {
  console.log(movieTitle + " is both romantic and scary movie!");
} else if (isRomantic) {
  console.log(movieTitle + " is a romantic movie");
} else if (isScary) {
  console.log(movieTitle + " is scary movie");
} else {
  console.log(movieTitle + " is neither romantic nor scary movie");
}

//Add another variable isFunny and see if you can represent all possible combinations
const isFunny = true;
// Note that this adds a significant number of new options! Can you figure out how to solve it with nested conditionals? (Putting conditional statements inside of other conditionals?)

if (isRomantic && isScary && isFunny) {
  console.log(movieTitle + " is both romantic, scary and funny movie!");
} else if (isRomantic && isScary) { 
  console.log(movieTitle + " is both romantic and scary movie!");
} else if (isRomantic && isFunny) {
  console.log(movieTitle + " is both romantic and funny movie!");
}   else if (isScary && isFunny){
    console.log(movieTitle + " is both scary and funny movie!");
}else if (isRomantic) {
  console.log(movieTitle + " is a romantic movie");
} else if (isScary) {   
  console.log(movieTitle + " is a scary movie");
} else if (isFunny) {
  console.log(movieTitle + " is a funny movie");
} else {
  console.log(movieTitle + " is neither romantic nor scary nor funny movie");
}   

