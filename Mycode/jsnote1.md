# JavaScript Assignment #1: Strings and Numbers
In this assignment you will perform some basic operations and `console.log()` the results.
Create a new file inside your code folder for this assignment. You will run your code using `node <your-file-path>.js`. Remember that the path to your file is always relative to your working directory!
You may do these challenges all together in one file, or in separate files, according to your preference. You will turn them in all together.
### Strings
-   Create a constant variable and assign it a _string literal_ with your name
-   Console log the _length_ of the string
-   Console log the _string template_ "Hello, my name is \_\_\_\_" but fill in the blank with the name variable.
-   Console log the _string template_ "When my friends see me they shout \_\_\_\_!" but fill in the blank with your name in all caps. (Use a string method to capitalize it!)
### Numbers
#### Challenge 1:
-   Create a constant variable with a number in it. (You can choose any number, with any number of digits.)
-   Multiply the number by 2
-   Add 8
-   Divide by 2
-   Subtract the original number
-   Console log the result
-   The result should be 4
Tips:
-   You can use any number of variables to do this, but you only need one or two!
-   If you choose to combine operations within a single line, don't forget about mathematical order of operations
#### Challenge 2:
-   Find the area of a circle with a given radius (), rounded to four digits
-   Console log the result
Tips:
-   A radius of 2 should give you 12.5664, and a radius of 3 should give you 28.2743
-   Don't forget about order of operations!
-   When you are ready to submit, make a pull request following the steps in our [Git Steps](../../../git-steps.md) document.
‎2-javascript/data-types/data-type-notes.md
+28


Original file line number	Diff line number	Diff line change
@@ -0,0 +1,28 @@
# JavaScript Data Types
## Primitive types
A primitive type stores a single value. It is not an object, and has no properties or methods. There are exactly 7 primitive types:
-   string
-   number (including NaN)
-   boolean
-   null
-   undefined
-   bigint (we'll never use these)
-   symbol (we'll never use these)
Though each data point has no properties or methods, the type itself has properties and methods which we can use to read or manipulate the data.
## Reference types
Reference types store references to collections of data, rather than single data points.
There are a basically unlimited number of reference types, which are all, under the hood, different implementations of a JS object. The reference types we are most likely to see and use are:
-   object
-   array
-   function
-   map
-   set
-   (and more)
‎2-javascript/data-types/numbers.js
+52
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,52 @@
const one = 1
const two = 2
// basic arithmetic operators
console.log(1 + 2)
console.log(one + two)
console.log(1 - 2)
console.log(2 * 4)
console.log(5 / 2)
// advanced arithmetic operators
console.log(4 ** 3) // exponent
console.log(19 % 5) // modulo, finds the remainder
// BUILT-IN MATH OBJECT
console.log(Math.floor(19 / 5)) // this is floor division, floor rounds down
console.log(Math.ceil(Math.PI)) // ceiling, rounds up
console.log(Math.round(Math.SQRT1_2)) // rounds to nearest whole integer
console.log(Math.max(5, 2, 7, 14234, 9, 3)) // finds the highest value of the the given numbers
console.log(Math.min(5, 2, 7, 14234, 9, 3)) // finds the lowest value of the the given numbers
// RANDOM NUMBERS
console.log(Math.random())
// random number between zero and ten
const randomNum = Math.floor(Math.random() * 10)
console.log(randomNum)
// fixed-point notation
console.log(Math.PI.toFixed(4)) // gives just four decimal places
// other silly things
console.log(Number.MAX_SAFE_INTEGER)
console.log(Infinity * Number.MAX_SAFE_INTEGER)
console.log(Math.sqrt(-1)) // NaN (NotANumber), imaginary numbers are not built in to JS
// CHAINING OPERATIONS
console.log(6 * 8 + 3 - 1)
// 6 times 3, plus 4, times 2, plus ten, divide by 3 = 18
console.log(6 * 3 + 4 * 2 + 10 / 3) // 29.999, not what we wanted!
// avoid this by doing the operations on separate lines
let newNum = 6 * 3
newNum = newNum + 4
newNum = newNum * 2 + 10
newNum = newNum / 3
console.log(newNum)
// or split it up using the grouping operator ()
console.log(((6 * 3 + 4) * 2 + 10) / 3)
‎2-javascript/data-types/strings.js
+51
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,51 @@
console.log("a string is text defined by quote marks")
console.log("strings can include any symbol you can type or paste")
console.log("@$)(*SLKJFWOI)($@()#$@$*(S+_!#)@$🙂🙂🙂")
console.log("My cat Hiccup says 'meow'") // include quotes in a string by using the other type of quotes
console.log('John\'s cat Hiccup says "meow"') // or escape special characters with a back slash
console.log("you can operate " + "on strings") // concatenation
// STRING TEMPLATES
console.log(`string templates, or template strings, are defined by backticks`)
console.log(`string templates can include ' and " characters`)
console.log(`string templates have at least ${1 + 1} super powers`) // string interpolation
// you can put any valid JS code in between the curly brackets
// ONLY WORKS in string templates, not other types of strings
const me = "Danny"
const cat = "Hiccup"
const catSound = "meow"
console.log(`${me}'s cat ${cat} says "${catSound}"`)
// STRING LITERAL VS INTERPOLATED STRING
const literal = "a string literal is a string exactly as written"
const templateLiteral = `template strings can be literal`
const concatenated =
    "it stops being literal" + " " + "when you perform operations on it"
console.log(concatenated)
const interpolated = `or when you ${"operate inside"} the string template`
console.log(interpolated)
// ATTRIBUTES
console.log("use dot notation to access attributes".length) //37
console.log(cat.length) // 6
// STRING METHODS
const angryCat = cat.toUpperCase()
console.log(angryCat, cat, catSound)
const catOuch = catSound.replace("ow", "ouch")
console.log(catSound) //meow (the original is not changed)
console.log(catOuch) //meouch
// INDEXING
// indexing is referring to specific points in a string or array by its location
// location is identified by sequential integers
// starting with 0
//           0123456
const abc = "abcdefg"
// access by index
console.log(abc[6]) //g
console.log(catOuch.slice(2)) //ouch
console.log(catOuch.slice(2, 4)) //ou
‎2-javascript/variables.js
+77
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,77 @@
/* 
    VARIABLES
    * a variable represents one piece of data in memory
    * in JS variables must be declared
    * declaration
        * allows memory space to be reserved using an identifier
        * starts with keywords: let, const, or (archaic) var
        * variable names must start with a letter, $, or _
        * if no value is assigned, it's undefined
    * assignment
        * gives the variable a data value
        * can be any value or data type
        * can be reassigned (unless declared with const)
    * initialization
        * giving a new variable its first value
        * usually done on the same line as declaration
    
    Naming things is one of the two hard problems of computer science
    * what makes a good variable name?
        * JS variable names use camelCase
            * first letter lowercase
            * if there are multiple words
            * first letter of subsequent words are capitalized
        * names should describe either
            * the data the variable stores, or
            * the intended usage of that data
        * longer is better than shorter (but not longer than necessary)
    
    Side note on casing:
    Different case conventions are used in different situations
        * kebab-case (we use this in html and css)
        * camelCase (used for most things in JS)
        * WordCase or PascalCase (used for certain things in JS)
        * snake_case (used in Python)
        * SCREAMING_SNAKE_CASE or CONSTANT_CASE (used in JS for constants)
*/
let a // declaration
console.log(a) //undefined
a = "aaaaa" // assignment
console.log(a) //"aaaaa"
a = 111111 // reassignment
console.log(a) //111111
let b = 222222
console.log(b)
console.log(a + b) //333333
let c = a + b
console.log(c) //333333
let d = c
console.log(d) //333333
console.log("*********")
c + 100
console.log(c) //333333
let e = c + 100
console.log(e) //333433
c++ // c = c + 1
console.log(c) //333334
c++
c++
c++
console.log(c) //333337
// c = a + b
// console.log(c) //333333
console.log("*********")
console.log(d)
const address = "123 Main St"
// address = "321 Main St" // TypeError: Assignment to constant variable.
‎README.md
+17


Original file line number	Diff line number	Diff line change
@@ -34,6 +34,23 @@ Git is a distributed version control system that tracks versions of files. It is

🔗 [CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.php)

### JavaScript
| Week | Topic               | Link                                                   |
| ---- | ------------------- | ------------------------------------------------------ |
| 8    | Strings and Numbers | [JS Assignment #1](./2-javascript/assignments/js-assignment-1.md)  | 
<!-- 
| 9    | Booleans            | [JS Assignment #2](./2-javascript/assignments/js-assignment-2.md)  |
| 9    | Conditionals        | [JS Assignment #3](./2-javascript/assignments/js-assignment-3.md)  |
| 9    | Loops               | [JS Assignment #4](./2-javascript/assignments/js-assignment-4.md)  |
| 10   | Functions           | [JS Assignment #5](./2-javascript/assignments/js-assignment-5.md)  |
| 11   | Objects             | [JS Assignment #6](./2-javascript/assignments/js-assignment-6.md)  |
| 11   | Classes             | [JS Assignment #7](./2-javascript/assignments/js-assignment-7.md)  |
| 12   | Callbacks           | [JS Assignment #8](./2-javascript/assignments/js-assignment-8.md)  |
| 12   | JS Final Project    | [JS Final Project](./2-javascript/assignments/js-final-project.md) |
-->