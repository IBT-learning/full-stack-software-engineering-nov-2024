
const movieTitle = "The Throne Room" //movie title

const isScary = true //boolean value
const isRomantic = false //boolean value


//assigning boolean values to the variables
if (isRomantic && isScary) {
    console.log(`${movieTitle} is both romantic and scary!`)
}else if (isRomantic) {
    console.log(`${movieTitle} is romantic.`)
}else if (isScary) {
    console.log(`${movieTitle} is scary.`)
}else {
    console.log(`${movieTitle} is neither romantic nor scary.`)
}

//Extra Challenge(Optional)

const IsBloody = true //boolean value

//assigning boolean values to the variables
if (isRomantic && isScary && IsBloody) {
    console.log(`${movieTitle} is both romantic and scary and bloody!`)
}else if (isRomantic && IsBloody) {
    console.log(`${movieTitle} is romantic and bloody.`)
}else if (isScary && IsBloody) {
    console.log(`${movieTitle} is scary and bloody.`)
}else if (IsBloody) {
    console.log(`${movieTitle} is bloody.`)
}else {
    console.log(`${movieTitle} is neither romantic nor scary nor bloody.`)
}