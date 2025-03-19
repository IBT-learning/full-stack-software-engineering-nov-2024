// Challenge #1: Practice .filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const largerThanSeven = numbers.filter((n) => n > 7);
// console.log(largerThanSeven);
const evenNumbers = numbers.filter((n) => n % 2 === 0);
const divisibleBy3 = numbers.filter((n) => n % 3 === 0);

// Challenge #2: Practice .map()

const numSquare = numbers.map((n) => Math.pow(n, 2));
// console.log(numSquare);
const numHalved = numbers.map((n) => n / 2);
// console.log(numHalved);

// Challenge #3: Using .filter() to filter objects
const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];

const lessThan20 = prices.filter((item) => item.price < 20);
// console.log(lessThan20);
const inStock = prices.filter((item) => item.inStock === true);
// console.log(inStock);
const sortedItems = prices.filter(
  (item) => item.inStock === true && item.price < 20
);
// console.log(sortedItems);

// Challenge #4: Using .map() to map objects

const promoSort = prices.map((item) => {
  return {
    ...item,
    price: item.price * (25 / 100),
  };
});
// console.log(promoSort);

const promoSort2 = prices.map((item) => {
  return {
    ...item,
    price: item.price > 10 ? item.price * (25 / 100) : item.price,
  };
});
// console.log(promoSort2);

const productAd = [
  "Shoes are on sale for only $37.50!",
  "Key chain is sold for cheaper every friday",
  "Jacket is below 75 dollars",
];

const reduceAd = productAd.reduce((prev, curr) => {
  return prev + " " + curr;
});

// console.log(reduceAd);
