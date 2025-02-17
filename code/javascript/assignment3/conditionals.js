
//challenge#1
const movieTitle= "Into the badlands"
const isScary= true
const isRomantic= false

if(isScary &&isRomantic){
    console.log (`${movieTitle} is both romantic and scary!`)
}
else if(isRomantic){
    console.log (`${movieTitle} is romantic`)
}
else if(isScary){
    console.log (`${movieTitle} is scary!`)
}
else{
    console.log (`${movieTitle} is neither romantic nor scary`)
}

//Extra challenge

const movieTitleB= "Prison Break"
const isScaryB= true
const isRomanticB= false 
const isFunny=true

if(isScaryB &&isRomanticB){
    if(isFunny &&isRomanticB ){
    console.log (`${movieTitleB} is both romantic and scary!`)}
}
else if(isRomanticB||isScaryB){
    if(isFunny ||isRomanticB){
    console.log (`${movieTitleB} is funny`)}
}
else if(isRomanticB){
    if(isFunny ||isRomanticB){
    console.log (`${movieTitleB} is romantic`)}
}
else if(isScaryB){
    console.log (`${movieTitleB} is scary!`)
}
else{
    console.log (`${movieTitleB} is neither romantic nor scary`)
}

