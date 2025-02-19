const numbers = [...Array(10)].map((_, i) => i + 1);

console.log(numbers.filter(n => n > 7)); 
console.log(numbers.filter(n => n % 2 === 0));
console.log(numbers.filter(n => n % 3 === 0)); 


console.log(numbers.map(n => n ** 2)); 
console.log(numbers.map(n => n / 2));


const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ]
  
  console.log(prices.filter(item => item.price < 20));
  console.log(prices.filter(item => item.inStock)); 
  console.log(prices.filter(item => item.inStock && item.price < 20)); 

  const discountedPrices = prices.map(item => ({
    ...item,
    price: (item.price * 0.75).toFixed(2)
  }));
  console.log(discountedPrices);
  
  const selectiveDiscount = prices.map(item => ({
    ...item,
    price: item.price > 10 ? (item.price * 0.75).toFixed(2) : item.price.toFixed(2)
  }));
  console.log(selectiveDiscount);
  
  const saleAds = selectiveDiscount
    .filter(item => item.price < prices.find(p => p.product === item.product).price)
    .map(item => `${item.product} is on sale for only $${item.price}!`);
  
  console.log(saleAds);
  