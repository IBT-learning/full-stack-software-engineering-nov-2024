// Challenge 1
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bigNums = nums.filter((x) => x > 7);
console.log(bigNums);

const evenNums = nums.filter((x) => x % 2 === 0);
console.log(evenNums);

const divisibleByThree = nums.filter((x) => x % 3 === 0);
console.log(divisibleByThree);

// Challenge 2
const squareNums = nums.map((x) => x * x);
console.log(squareNums);

const havlvedNums = nums.map((x) => x / 2);
console.log(havlvedNums);

// Challenge 3
const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];
const priceProduct = prices.filter((price) => price.price < 20);
console.log(priceProduct);

const inStockPtoducts = prices.filter((price) => price.inStock);
console.log(inStockPtoducts);

const inStockAndCheap = prices.filter(
  (price) => price.inStock && price.price < 20
);
console.log(inStockAndCheap);

// Challenge 4
const saleProduct = prices.map((price) => {
  return {
    price: price.price * 0.75,
  };
});
console.log(saleProduct);

const targetedSale = prices.map((price) => {
  if (price.price > 10) {
    return {
      price: price.price * 0.75,
    };
  }
  return price.price;
});
console.log(targetedSale);

const saleAds = prices.map((price) => {
  if (price.price > 10) {
    return `${price.product} are on sale for only $${
      price.price * (0.75).toFixed(2)
    }!`;
  }
  return price.price;
});
console.log(saleAds);
