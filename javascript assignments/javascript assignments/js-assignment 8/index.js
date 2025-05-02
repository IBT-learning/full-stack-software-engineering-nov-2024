
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const largerThan7 = numbers.filter(num => num > 7);
console.log("Numbers > 7:", largerThan7);


const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); 

const divisibleBy3 = numbers.filter(num => num % 3 === 0);
console.log("Divisible by 3:", divisibleBy3); 


const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers); 


const halvedNumbers = numbers.map(num => num / 2);
console.log("Halved numbers:", halvedNumbers); 


const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];


const cheapProducts = prices.filter(item => item.price < 20);
console.log("Products < $20:", cheapProducts);


const inStockProducts = prices.filter(item => item.inStock);
console.log("In stock products:", inStockProducts);


const cheapInStockProducts = prices.filter(item => item.inStock && item.price < 20);
console.log("In stock and < $20:", cheapInStockProducts);


