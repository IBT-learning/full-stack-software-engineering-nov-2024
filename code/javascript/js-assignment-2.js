// Challenge #1
const personAge = 50;
const isChild = personAge < 18;
const isAdult = personAge >= 18;
const isElderly = personAge >= 60;
const results = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`;

console.log(results);

// Extra Challenge 1
const randomPersonAge = Math.floor(Math.random() * 100 + 1);
console.log("Random Person Age: ", randomPersonAge);

if (randomPersonAge < 18) {
  console.log("This person is a child");
} else if (randomPersonAge >= 18) {
  console.log("This person is an adult");
} else {
  console.log("This person is elderly");
}

// Challenge 2
const lyric = `You good, T-Minus?
Niggas been countin' me out
I'm countin' my bullets, I'm loadin' my clips
I'm writin' down names, I'm makin' a list
I'm checkin' it twice, and I'm gettin' 'em hit
The real ones been dyin', the fake ones is lit
The game is off balance, I'm back on my shit
The Bentley is dirty, my sneakers is dirty
But that's how I like it, you all on my dick
I'm all in my bag, this hard as it get
I do not snort powder, I might take a sip
I might hit the blunt, but I'm liable to trip
I ain't poppin' no pill, but you do as you wish
I roll with some fiends, I love 'em to death
I got a few mil' but not all of them rich
What good is the bread if my niggas is broke?
What good is first class if my niggas can't sit?
That's my next mission, that's why I can't quit
Just like LeBron, get my niggas more chips
Just put the Rollie right back on my wrist
This watch came from Drizzy, he gave me a gift
Back when the rap game was prayin' I'd diss
They act like two legends cannot coexist
But I'd never beef with a nigga for nothin'
If I smoke a rapper, it's gon' be legit
It won't be for clout, it won't be for fame
It won't be 'cause my shit ain't sellin' the same
It won't be to sell you my latest lil' sneakers
It won't be 'cause some nigga slid in my lane
Everything grows, it's destined to change
I love you lil' niggas, I'm glad that you came
I hope that you scrape every dollar you can
I hope you know money won't erase the pain
To the OGs, I'm thankin' you now
Was watchin' you when you was pavin' the ground
I copied your cadence, I mirrored your style
I studied the greats, I'm the greatest right now
Fuck if you feel me, you ain't got a choice
Now I ain't do no promo, still made all that noise
This shit gon' be different, I set my intentions
I promise to slap all that hate out your voice
Niggas been countin' me out
I'm countin' my bullets, I'm loadin' my clips
I'm writin' down names, I'm makin' a list
I'm checkin' it twice, and I'm gettin' 'em hit
The real ones been dyin', the fake ones is lit
The game is off balance, I'm back on my shit
The Bentley is dirty, my sneakers is dirty
But that's how I like it, you all on my dick
I just poured somethin' in my cup
I've been wantin' somethin' I can feel
Promise I am never lettin' up
Money in your palm don't make you real
Foot is on they neck, I got 'em stuck
I'ma give 'em somethin' they can feel
If it ain't 'bout the squad, don't give a fuck
Pistol in your hand don't make you real
I'm dead in the middle of two generations
I'm little bro and big bro all at once
Just left the lab with young 21 Savage
I'm 'bout to go and meet Jigga for lunch
Had a long talk with the young nigga Kodak
Reminded me of young niggas from 'Ville
Straight out the projects, no fakin', just honest
I wish that he had more guidance, for real
Too many niggas in cycle of jail
Spending they birthdays inside of a cell
We coming from a long bloodline of trauma
We raised by our mamas, Lord, we gotta heal
We hurting our sisters, the babies as well
We killing our brothers, they poisoned the well
Distorted self-image, we set up to fail
I'ma make sure that the real gon' prevail, nigga
`;

const includesLove = lyric.includes("love")
const includesHeart = lyric.includes("heart")
const includesLife = lyric.includes("life")
const includesbaby = lyric.includes("baby")
const includesYeah = lyric.includes("yeah")


const isTypical = includesHeart || includesLife || includesLove || includesbaby || includesYeah
const isVeryTypical = includesHeart && includesLife && includesLove && includesbaby && includesYeah


// Extra Challenge
if (isTypical){
    console.log("This song is typical")
}
else if(isVeryTypical)
{
    console.log("This song is very typical")
}

else{
    console.log("This soing is not typical")
}
