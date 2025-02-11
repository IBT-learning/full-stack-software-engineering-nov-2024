const movieTitle = "Seasoned with Love";
const isScary = false;
const isRomantic = true;

if (movieTitle && isScary && isRomantic){
    console.log(`${movieTitle} is both romantic and scary!`);
}else if (movieTitle && !isRomantic){
    console.log(`${movieTitle} is romantic`);
}else if (movieTitle && isScary && !isRomantic){
    console.log(`${movieTitle} is scary`);
}else{
    console.log(`${movieTitle} is neither romantic nor scary`);
}