const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const largerThan7 = numbers.filter((num) => num > 7);
console.log(`Numbers greater than 7 are:`, largerThan7);

// creating an array of even numbers

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(`Even Numbers are:`, evenNumbers);

// Charlenge #2: Using .map

const squarenumbers = numbers.map((num) => num ** 2);
console.log(`The square of all the numbers are:`, squarenumbers);

const halfNumbers = numbers.map((num) => num / 2);
console.log(`Half of each number are:`, halfNumbers);

// Charlenge #3: Using .fillter to fillter objects

const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];

const affordableProducts = prices.filter((item) => item.price < 20);
console.log(`Product objects that cost less than $20:`, affordableProducts);

const inStockProduct = prices.filter((item) => item.inStock);
console.log(`Product objects that are in stock:`, inStockProduct);

const productAffordableInstock = prices.filter(
  (item) => item.inStock && item.price < 20
);
console.log(
  `product objects that are in stock AND cost less than $20:`,
  productAffordableInstock
);

// Challenge #4: Using .map() to map objects

const reduceSale = prices.map((item) => ({
  ...item,
  price: item.price * 0.75,
}));
console.log(
  `array with all the same objects, but with the prices reduced by 25%:`,
  reduceSale
);

const selectiveSalesPrice = prices.map((item) =>
  item.price > 10 ? { ...item, price: item.price * 0.75 } : item
);

console.log(
  `The sale is only for products that cost more than $10:`,
  selectiveSalesPrice
);

const salesAd = selectiveSalesPrice.map(
  (item) => `${item.product} is on sale for only $${item.price.toFixed(2)}!`
);

console.log(salesAd);

const adString = salesAd.reduce((acc, curr) => acc + " " + curr, " ");
console.log(adString);
