// 1
const myArray = Array.from(Array(10), (_, i) => i + 1);

console.log(
  "Larger than 7: ",
  myArray.filter((n) => n > 7)
);
console.log(
  "Even Numbers Only: ",
  myArray.filter((n) => n % 2 == 0)
);
console.log(
  "Divisible by 3: ",
  myArray.filter((n) => n % 3 == 0)
);

// 2
console.log(
  " Squared :",
  myArray.map((y) => y ** 2)
);
console.log(
  " Halfed :",
  myArray.map((y) => y / 2)
);

// 3
const prices = [
  { product: "shoe", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];
/*
console.log("Cost less than $20: ", prices.filter(({price})=> price<20))
console.log("In stock: ", prices.filter(({inStock})=> inStock))
console.log("Cost less than $20 AND in Stock: ", prices.filter(({inStock, price})=> inStock && price<20))

Can you use .reduce() to join all the strings from the previous together into one long string?
*/
//4
salesDay = prices
  .filter(({ price }) => price > 10)
  .map(
    ({ price, product }) => `${product}s are on sale for only ${price * 0.25}`
  );
console.log(salesDay);
// Extra
reduced = salesDay.reduce(
  (returnedInitiallyAtIndex0, currentStartsAtIndex1) =>
    `  ${returnedInitiallyAtIndex0} *** ${currentStartsAtIndex1} `
);
console.log(reduced);
