


let movieTitle = "Horor";
let isScary = false;
let isRomantic = false;

if (isScary && isRomantic) {
  console.log(`this movie is both scary and romantic. `);
} else if (isScary) {
  console.log(`this movie is scary `);
} else if (isRomantic) {
  console.log(`this movie is romantic `);
} else {
  console.log(`this movie is neither scary nor romantic `);
}

/*


JavaScript Assignment #3: Conditionals
You may do these challenges all together in one file, or in separate files, according to your preference. You will turn them in all together.

Challenge #1
Create a constant variable called movieTitle and assign it a string with the title of a movie you like
Create a constant variable called isScary and assign it either true or false
Create a constant variable called isRomantic and assign it either true or false
Write a conditional statement that will log only one of these sentences to the console:
this movie is both romantic and scary!
this movie is romantic
this movie is scary
this movie is neither romantic nor scary
In each outcome, replace "this movie" with the title of your movie.
TIP: try out assigning the boolean variable to different values of true and false to make sure all of the conditions work correctly
Extra challenge (optional)
Add another variable isFunny and see if you can represent all possible combinations
Note that this adds a significant number of new options! Can you figure out how to solve it with nested conditionals? (Putting conditional statements inside of other conditionals?)
*/