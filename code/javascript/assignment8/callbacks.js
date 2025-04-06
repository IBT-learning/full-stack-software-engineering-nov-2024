
// challenge#1: practice .filter()

const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const smallNum= numbers.filter((num1) => num1>7 );
console.log( smallNum); //numbers larger than 7

const evenNum=numbers.filter((num1) => num1 %2 ===0);
console.log(evenNum); // even numbers 

const divisibleNum= numbers.filter((num1) => num1 %3 ===0);
console.log(divisibleNum); //numbers divisible by three




// challenge#2: practice .map()

const squareOfNum= numbers.map((num1) => num1 *num1);
console.log(squareOfNum); //square of numbers

const halfOfNum= numbers.map((num1) => num1 / 2);
console.log(halfOfNum); //each number is halved




// challenge#3: using .filter() to filter objects
const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ]

const productObj= prices.filter((num1) => num1.price<20);
console.log(productObj);// create an array with only product objects that cost less than 20

const inStock= prices.filter((num1) => num1.inStock );
console.log(inStock); //an array with product objects that are in stock

const cheapAndInStock= prices.filter((num1)=> num1.price<20 && num1.inStock);
console.log(cheapAndInStock); //create an array with only the product objects that are in stock and cost less than 20



// challenge#4: using .map() to map objects

const discountedP= prices.map((num1) =>( { ...num1, price: num1.price * 0.75}));
console.log(discountedP); //create an array with the same objects but with the prices reduced by 25%

const discountedProducts= prices.map((num1) =>num1.price >10 ? {...num1, price: num1.price *0.75}:num1);
console.log(discountedProducts); //the sale is only for prodcuts that cost more than 10. rewrite the previous map to only change the prices for itmes with prices above 10


const ad=discountedProducts.map((num1)=> `${num1.product} are on sale for only ${num1.price}`);
console.log(ad);  //we're making an ad for the sale. Make an array of strings that read, for example "shoes are on sale for only 37.50"


