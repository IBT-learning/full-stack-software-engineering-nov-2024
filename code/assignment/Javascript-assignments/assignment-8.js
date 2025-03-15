const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Challenge #1
const largerNum = nums.filter((x) => x > 7);
console.log(largerNum)

const evenNums = nums.filter((x) => x % 2 == 0);
console.log(evenNums)

const divisibleNums = nums.filter((x) => x % 3 == 0);
console.log(divisibleNums);

// Challenge #2
const squareNums = nums.map((x) => x ** 2);
console.log(squareNums);

const halvedNums = nums.map((x) => x / 2);
console.log(halvedNums);


// Challenge #3
const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ]

  const lowerProducts = prices.filter((prices) => prices.price < 20);
  console.log(lowerProducts)


  const inStockProducts = prices.filter((prices) => prices.inStock == true);
  console.log(inStockProducts);

  const inStockAndLower = prices.filter((prices) => prices.inStock == true && prices.price < 20);
  console.log(inStockAndLower);

  

  // Challenge #4
  const reducedPriceBy25 = prices.map(prices => ({
    ...prices, price: prices.price * 0.75
}));
  console.log(reducedPriceBy25);


  const productsOver10 = prices.map(prices => prices.price > 10 ? {  // map(); the ... makes a copy of the prices array 
    ...prices, price: prices.price * 0.75} : prices
);
  console.log(productsOver10);



  const ad = prices.filter(prices => prices.price > 10).map(prices =>    // using filter and map functions together
    `${prices.product} are on sale for only $${(prices.price * 0.75).toFixed(2)}!`
);
console.log(ad);



// Extra challenge
const joinAllString = ad.reduce((total, current) => total + "\n" + current + "\n"); //using reduce(). 
console.log(joinAllString);