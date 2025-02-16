// Challenge 1
let nums = [];
for (let i = 1; i < 11; i++){
  nums.push(i);
}

let largerThan7 = nums.filter((element) => element > 7);
console.log(largerThan7);

let evenNums = nums.filter((element) => element % 2 === 0);
console.log(evenNums);

let divisibleBy3 = nums.filter((element) => element % 3 === 0);
console.log(divisibleBy3);

// Challenge 2
let square = nums.map((element) => element * element);
console.log(square);

let half = nums.map((element) => element / 2);
console.log(half);

// Challenge 3
const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];

let lessThan20 = prices.filter((element) => element.price < 20);
console.log(lessThan20);

let inStockProd = prices.filter((element) => element.inStock);
console.log(inStockProd);

let faveProd = prices.filter((element) => element.price < 20 && element.inStock);
console.log(faveProd);

// Challenge 4 
 // You can chain array methods :) 
let saleAd = [];
let salePrices = prices
  .filter((element) => element.price > 10)
  .map((element) => {
    let salePrice = element.price - (element.price * 0.25);
    let str = `${element.product} on sale for ${salePrice}!`;
    saleAd.push(str);
    return salePrice;
  });

console.log(saleAd); // returns the array of sale advertisement strings
console.log(salePrices); 
