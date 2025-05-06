// Challenge #1: Practice .filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Numbers greater than 7
const greaterThanSeven = numbers.filter(num => num > 7);
console.log("Greater than 7:", greaterThanSeven); 

// Even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens); 

// Divisible by 3
const divisibleByThree = numbers.filter(num => num % 3 === 0);
console.log("Divisible by 3:", divisibleByThree); // [3, 6, 9]

// Challenge #2: Practice .map()
// Squares
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

// Halves
const halves = numbers.map(num => num / 2);
console.log("Halves:", halves); // [0.5, 1, 1.5, ..., 5]

// Challenge #3: Using .filter() to filter objects
const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];

// Products under $20
const underTwenty = prices.filter(item => item.price < 20);
console.log("Under $20:", underTwenty);

// In-stock items
const inStockOnly = prices.filter(item => item.inStock);
console.log("In stock only:", inStockOnly);

// In-stock and under $20
const inStockUnderTwenty = prices.filter(item => item.inStock && item.price < 20);
console.log("In stock and under $20:", inStockUnderTwenty);

// Challenge #4: Using .map() to map objects
// 25% off all products
const discountedAll = prices.map(item => ({
  ...item,
  price: item.price * 0.75
}));
console.log("All discounted 25%:", discountedAll);

// 25% off products over $10 only
const selectiveDiscount = prices.map(item => ({
  ...item,
  price: item.price > 10 ? item.price * 0.75 : item.price
}));
console.log("Selective discount:", selectiveDiscount);

// Ad strings for sale
const saleAds = selectiveDiscount.map(item =>
  `${item.product} are on sale for only $${item.price.toFixed(2)}!`
);
console.log("Sale Ads:", saleAds);

// Extra Challenge: .reduce() to join ads
const saleAdString = saleAds.reduce((acc, str) => acc + " " + str, "").trim();
console.log("Full Sale Ad String:", saleAdString);
