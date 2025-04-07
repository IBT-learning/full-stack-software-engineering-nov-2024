// Challenge #1: Practice .filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersLargerThan10 = numbers.filter((num) => num > 7);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const divisibleby = numbers.filter((num) => num % 3 === 0);

// Challenge #2: Practice .map()
const squaredNumbers = numbers.map((number) => number ** 2);
const halvedNumbers = numbers.map((number) => number / 2);

// Challenge #3: Using .filter() to filter objects
const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];

const CheapProducts = prices.filter((producut) => producut.price < 20);
const ProductsInStock = prices.filter((producut) => producut.inStock);
const CheapPoductsInStock = prices.filter(
  (producut) => producut.inStock && producut.price < 20
);

console.log(CheapPoductsInStock);
// Challenge #4: Using .map() to map objects

const getdiscountedPrice = (amount, discountPercent) => {
  return (amount - discountPercent / 100).toFixed(2);
};

const discountedProducts = prices.map((product) => {
  return {
    ...product,
    price: getdiscountedPrice(product.price, 20),
  };
});
const discountedExpensiveProducts = prices.map((product) => {
  return {
    ...product,
    price:
      product.price > 10
        ? getdiscountedPrice(product.price, 10)
        : product.price,
  };
});

const AdsList = discountedExpensiveProducts.map(
  (product) => `${product.product} are on sale for ${product.price} `
);


console.log(AdsList)