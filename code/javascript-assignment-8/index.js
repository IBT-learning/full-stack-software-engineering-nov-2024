// Challenge 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersLargerThanSeven = numbers.filter((num) => num > 7);
console.log(numbersLargerThanSeven);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
const divisibleByThree = numbers.filter((num) => num % 3 === 0);
console.log(divisibleByThree);

//Challenge 2

const squares = numbers.map((num) => num * num);
console.log(squares);

const halves = numbers.map((num) => num / 2);
console.log(halves);

// Challenge 3
const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];

const affordableProducts = prices.filter((item) => item.price < 20);
console.log(affordableProducts);

const inStockProducts = prices.filter((item) => item.inStock);
console.log(inStockProducts);

const affordableInStockProducts = prices.filter(
  (item) => item.inStock && item.price < 20
);
console.log(affordableInStockProducts);

// Challenge 4

const salePrices = prices.map((item) => {
  return { ...item, price: item.price * 0.75 };
});
console.log(salePrices);

const selectiveSalePrices = prices.map((item) => {
  return item.price > 10 ? { ...item, price: item.price * 0.75 } : item;
});
console.log(selectiveSalePrices);

const saleAd = prices.map((item) => {
  return item.price > 10
    ? `${item.product} are on sale for only $${(item.price * 0.75).toFixed(2)}!`
    : `${item.product} are available for $${item.price.toFixed(2)}.`;
});
console.log(saleAd);
