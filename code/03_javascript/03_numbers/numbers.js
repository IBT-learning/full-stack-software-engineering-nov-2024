const cl = console.log

//NUMBERS
let one = 1
let two = 2


//BASIC ARITHMETIC OPERATORS
cl(1 + 2) //add
cl(one + 2)

cl(one - two) //subtract

cl(one * two) //multiply

cl(one / two) //divide

//ADVANCED ARITHMETIC OPERATORS
cl(one ** two) //exponent
cl(one % two) //modulus, finds the remainder
cl(12 % 1.2) //modulus, finds the remainder

//BUILT IN MATH OBJECTS
cl((19 / 5))
cl(Math.floor(19 / 5)) //rounds down to neaerest whole
cl(Math.ceil(19 / 5)) //rounds up to nearest whole
cl(Math.round(19 / 5)) //rounds to nearest whole


///RANDDOM NUMBER
function getRandomnum (num){

    let gen = Math.floor(Math.random() * num)
    return gen
}

cl(getRandomnum(10))

//FIXED POINT NOTATION
cl(Math.PI.toFixed(3))


//NUMBER CONSTRUCTOR
255 === 0xff? cl("True") : cl("False") //Hexadecimal notation
255 === 255.0? cl("True") : cl("False") //Decimal
255 === 0b11111111? cl("True") : cl("False") //Binary notation
255 === 0.255e3? cl("True") : cl("False") //decimal exponential notation

//MAX AND MIN
cl(Math.min(4, 5, 1, 6))
cl(Math.max(4, 5, 1, 6))

//INFINITY
cl(Infinity)
cl(Infinity + Infinity)
cl(Infinity - Infinity)

//CHAINING OPPERATIONS
cl(6 * 8 + 3 - 1) //50 Uses BODMAS