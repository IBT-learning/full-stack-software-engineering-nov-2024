//challange 1

// Creating an array with numbers ranging from 1-10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const largerThan7 = numbers.filter(num => num > 7);
console.log(largerThan7);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

const divisibleBy3 = numbers.filter(num => num % 3 === 0);
console.log(divisibleBy3); 

//challange 2


const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); 

const halvedNumbers = numbers.map(num => num / 2);
console.log(halvedNumbers); 
 
//challange 3

const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];
  
  const lessThan20 = prices.filter(item => item.price < 20);
  console.log(lessThan20);  

  const inStock = prices.filter(item => item.inStock);
  console.log(inStock);  

  const inStockAndLessThan20 = prices.filter(item => item.inStock && item.price < 20);
  console.log(inStockAndLessThan20);

   //challange 4
  const discountedPrices = prices.map(item => ({
    ...item,
    price: item.price * 0.75
  }));
  console.log(discountedPrices);
  const discountedPricesAbove10 = prices.map(item => 
    item.price > 10 ? { ...item, price: item.price * 0.75 } : item
  );
  console.log(discountedPricesAbove10);
  const saleAds = prices.map(item => 
    `${item.product} are on sale for only $${(item.price * 0.75).toFixed(2)}!`
  );
  console.log(saleAds);