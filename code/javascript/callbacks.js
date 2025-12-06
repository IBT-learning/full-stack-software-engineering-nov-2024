// Challenge 1 
const number = [1,2,3,4,5,6,7,8,9,10];

// Numbers less than 7
const numLargerThan7 = number.filter(num => num >7);
console.log(numLargerThan7);

// Numbers which are even
const numEven = number.filter(num => num % 2 === 0);
console.log(numEven);

// Numbers which are divisible by 3
const numDivisible3 = number.filter(num => num % 3 === 0);
console.log(numDivisible3);

// Challenge 2

// Square of numbers
const numSquare = number.map(num => num * num );
console.log(numSquare);

// Halves of numbers 
const numHalf = number.map(num => num / 2);
console.log(numHalf);

//C hallenge 3
const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
]

// Products less than 20
const priceLessThan20 = prices.filter(item => item.price < 20);
console.log(priceLessThan20);

// Products in stock 
const productsInStock = prices.filter(item => item.inStock);
console.log(productsInStock);

// products in stocks and cost less than 20
const cheapInStock = prices.filter(item => item.inStock && item.price > 20);
console.log(cheapInStock);

// Challenge 4

// 25% Discount 
const saleDiscount = prices.map(item => ({...item, price: item.price * 0.75}));
console.log(saleDiscount);

// 25% Discount for products priced above $10
const saleGreaterThan10 = prices.map(item => ({...item, price: item.price > 10 ? item.price*0.75 : item.price}));
console.log(saleGreaterThan10);

// Array for ad for the sale 
const adStrings = prices
.filter(item => item.price > 10)
.map(item => {
  const salePrice = item.price * 0.75 
  return `${item.product} are on sale for only $${salePrice.toFixed(2)}!`
});

console.log(adStrings);

// Extra Challenge
const longAdString = adStrings.reduce((accumulator,currentString,index) => {
  if (index === 0 ) {
    return currentString;
  }else if (index === adStrings.length -1){
    return `${accumulator}, and ${currentString}`
  }else {
    return `${accumulator}, ${currentString}`
  }
} ,"");

console.log(longAdString);
