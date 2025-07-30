// Function to analyze lyrics
function analyzeLyric(lyric) {
    console.log("\nAnalyzing lyric:", lyric);

    // Check for common words
    const includesLove = lyric.toLowerCase().includes("love");
    const includesHeart = lyric.toLowerCase().includes("heart");
    const includesLife = lyric.toLowerCase().includes("life");
    const includesBaby = lyric.toLowerCase().includes("baby");
    const includesYeah = lyric.toLowerCase().includes("yeah");

    // Log individual word checks
    console.log("\nWord check results:");
    console.log("Contains 'love':", includesLove);
    console.log("Contains 'heart':", includesHeart);
    console.log("Contains 'life':", includesLife);
    console.log("Contains 'baby':", includesBaby);
    console.log("Contains 'yeah':", includesYeah);

    // Check if the song is typical (has ANY of the words)
    const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;
    console.log("\nIs typical (contains any word):", isTypical);

    // Check if the song is very typical (has ALL of the words)
    const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;
    console.log("Is very typical (contains all words):", isVeryTypical);

    // Determine typicality level
    if (isVeryTypical) {
        console.log("This song is very typical");
    } else if (isTypical) {
        console.log("This song is typical");
    } else {
        console.log("This song is not typical");
    }
}

// Test cases with different lyrics
const lyric1 = "Yeah baby, I love life with all my heart";  // Has all words
const lyric2 = "Love is all you need";  // Has only "love"
const lyric3 = "The sound of silence";  // Has none of the words
const lyric4 = "Yeah baby, feel the love";  // Has multiple but not all words

console.log("=== Test Case 1: Lyric with all words ===");
analyzeLyric(lyric1);

console.log("\n=== Test Case 2: Lyric with only 'love' ===");
analyzeLyric(lyric2);

console.log("\n=== Test Case 3: Lyric with no typical words ===");
analyzeLyric(lyric3);

console.log("\n=== Test Case 4: Lyric with some typical words ===");
analyzeLyric(lyric4);

// Bonus: Real song lyrics examples
const realLyrics = [
    "Yeah baby, all my life I've been in love with your heart", // Very typical
    "Love me tender, love me sweet", // Typical (love only)
    "Yesterday, all my troubles seemed so far away", // Not typical
    "Yeah baby, my heart is full of love" // Typical (multiple words)
];

console.log("\n=== Analyzing Real Song Lyrics ===");
realLyrics.forEach((lyric, index) => {
    console.log(`\n--- Real Song Example ${index + 1} ---`);
    analyzeLyric(lyric);
});