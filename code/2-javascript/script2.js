// JavaScript Assignment #2: Booleans

// Challenge #1
const randomAge = Math.random() * 100;
const personAge = Math.round(randomAge);
const isAdult = personAge > 18;
const isElderly = personAge > 60;

const isTeenStr = !isAdult && "This person is a Child.";
const isAdultStr = isAdult && "This person is an Adult.";
const isElderlyStr = isElderly && "This person is Elderly.";
console.log(" \n****** Challenge One ****** \nThe age is " + personAge);
console.log(isElderlyStr || isAdultStr || isTeenStr);

// Challenge #2
//const lyric = "ፓፓፓፓ ኤኤይ፣ ፓፓፓፓ love ኦኦው";
const lyric = `Shine bright like a diamond
Shine bright like a diamond
Find light in the beautiful sea, I choose to be happy
You and I, you and I, we're like diamonds in the sky
You're a shooting star I see, a vision of ecstasy
When you hold me, I'm alive, we're like diamonds in the sky
I knew that we'd become one right away
Oh, right away
At first sight I felt the energy of sun rays
I saw the inside your eyes
So shine bright, tonight, you and I
We're beautiful like diamonds in the sky
Eye to eye, so alive
Shine bright like a diamond
baby, life, yaeh, heart
`;

const includesLove = lyric.includes("love");
const includesHeart = lyric.includes("heart");
const includesLife = lyric.includes("life");
const includesBaby = lyric.includes("baby");
const includesYaeh = lyric.includes("yaeh");
// const includesDiamonds = lyric.includes("diamonds");

const isTypical =
  includesLove || includesHeart || includesLife || includesBaby || includesYaeh;
//   includesDiamonds;
const isVeryTypical =
  includesLove && includesHeart && includesLife && includesBaby && includesYaeh;
//   includesDiamonds;
console.log(" \n****** Challenge Two ****** \nThe song is, Diamonds, Rihanna ");
let statement =
  (!isTypical && "This song is not typical") ||
  (isVeryTypical && "This song is very typical") ||
  "This song is typical.";
console.log(statement);

// Print the words included
const strs = ["love", "heart", "life", "baby", "yaeh"];
const arr = [includesLove, includesHeart, includesLife, includesBaby, includesYaeh];
let wordsIncluded = "";
arr.forEach((a, c) => {
  a &&
    ((wordsIncluded && (wordsIncluded += `, ${strs[c]}`)) ||
      (wordsIncluded += strs[c]));
});
console.log(`The words included now are = ${wordsIncluded || "NONE"}`);
