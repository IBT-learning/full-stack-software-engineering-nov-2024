// Renaming console.log
const cl = console.log

const personAge = 100

const isAdult = personAge > 18

const isElderly = personAge > 60

const stringLiteral = `Is this person an adult? ${isAdult}. Is this person elderly ${isElderly}`

// Output of Answer
cl(stringLiteral)

// EXTRA CHALLENGE
const personAge1 = Math.floor(Math.random() * 100)
cl("Age", personAge1)

personAge1 > 60? cl("This person is Elderly")
: personAge1 > 18? cl("This person is an Adult")
: cl("This person is a Child")