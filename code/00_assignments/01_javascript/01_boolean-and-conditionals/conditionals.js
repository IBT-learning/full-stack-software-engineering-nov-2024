// Renaming console message
const cl = console.log


// Completed with extra challenge included
const movieTitle = `Ready player one`

const isScary = false

const isRomantic = true

const isFunny = false

isScary && isRomantic && isFunny? cl(`${movieTitle} is both Romantic, Scary and Funny`)
: isRomantic && isFunny? cl(`${movieTitle} is both Romantic and Funny`)
: isScary && isRomantic? cl(`${movieTitle} is both Scary and Romantic`)
: isScary && isFunny? cl(`${movieTitle} is both Scary and Funny`)
: isScary? cl(`${movieTitle} is Scary`)
: isRomantic? cl(`${movieTitle} is Romantic`)
: isFunny? cl(`${movieTitle} is Funny`)
: cl(`${movieTitle} is neither Romantic, Scary or Funny`)


