const cl = console.log
let alpha = "abcdef"

cl("a string is a text defined by quote marks")
cl("a string can include any symbol text, emojis or pasted text")
cl("!@^&*&$%*%%^$5*^@$*%")
cl('dsfffs "fdfhgj"')
cl('"ggfhf"')
cl("you can operate on " + "strings") //concatenation
cl("dsjkskdjksjdsk \"dgfgjgng\"" + "\"oj\"") //escape  special characters with a backslash

// STRING TEMPLATES
cl(`string templates are defined by backtics`)
cl(`John's`)
cl(`string templates can take operatiions ${1 + 1} ${alpha}`) //string interpolation

// ATTRIBUTES
cl('the length of this string will be checked'.length)

// METHODS

//TO UPPPERCASE
const cat = "Hiccup"
const angryCat = cat.toUpperCase()

cl(angryCat)
cl(angryCat.replace('HI', 'MI'))

// replace
const parag = "This is a Boy"
// const ferret = /boy/i

cl(parag.replace(/boy/i, "hey"))
cl("skfjskf".replace(/s/g, "k").replace("f", "1"))


//INCLUDES
const sentense = "The quick brown animal jumps over the lazy dog"
let word = "fox"

cl(`the word ${word} ${sentense.includes(word)? `is` : `is not`} in the sentence`)

const one = 1

//ALTERNATE WAY OF IF STATEMENT
one == 3? cl("True") : cl("False")

//INDEXING
cl("How are".length)

const abc = "abcdefg"
cl(abc[1]) //b

//SLICE
cl("alphabets".slice(1, 8))

// PADSTART() AND PADEND()
console.log(String(7).padStart(5, "sss"))
console.log(String(7).padEnd(5, "000"))