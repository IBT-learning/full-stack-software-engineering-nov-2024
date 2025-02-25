// Create base array with numbers 1-10
const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

// Challenge #1: Filter practices
const numbersOver7 = numbers.filter(num => num > 7);
console.log('Numbers > 7:', numbersOver7);  // [8, 9, 10]

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);  // [2, 4, 6, 8, 10]

const divisibleBy3 = numbers.filter(num => num % 3 === 0);
console.log('Divisible by 3:', divisibleBy3);  // [3, 6, 9]

// Challenge #2: Map practices
const squares = numbers.map(num => num ** 2);
console.log('Squares:', squares);  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

const halvedNumbers = numbers.map(num => num / 2);
console.log('Halved numbers:', halvedNumbers);  // [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]


const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];
  
  // Challenge #3: Filtering objects
  const under20 = prices.filter(item => item.price < 20);
  console.log('Products under $20:', under20);
  
  const inStock = prices.filter(item => item.inStock);
  console.log('In-stock products:', inStock);
  
  const inStockUnder20 = prices.filter(item => item.inStock && item.price < 20);
  console.log('In-stock products under $20:', inStockUnder20);
  
  // Challenge #4: Mapping objects
  // Helper function to round to 2 decimal places
  const roundPrice = price => Math.round(price * 100) / 100;
  
  // All items 25% off
  const allItemsOnSale = prices.map(item => ({
    ...item,
    price: roundPrice(item.price * 0.75)
  }));
  console.log('All items 25% off:', allItemsOnSale);
  
  // Only items over $10 on sale
  const selectedItemsOnSale = prices.map(item => ({
    ...item,
    price: item.price > 10 ? roundPrice(item.price * 0.75) : item.price
  }));
  console.log('Selected items on sale:', selectedItemsOnSale);
  
  // Creating sale advertisement strings
  const saleAds = prices
    .filter(item => item.price > 10)
    .map(item => `${item.product} are on sale for only $${roundPrice(item.price * 0.75)}!`);
  console.log('Sale advertisements:', saleAds);
  
  // Extra challenge: Combining ads into one string
  const completeAd = saleAds.reduce((fullAd, currentAd, index) => {
    // Add appropriate punctuation and conjunctions
    if (index === 0) return currentAd;
    if (index === saleAds.length - 1) return `${fullAd} and ${currentAd}`;
    return `${fullAd}, ${currentAd}`;
  }, '');
  
  console.log('Complete advertisement:', completeAd);