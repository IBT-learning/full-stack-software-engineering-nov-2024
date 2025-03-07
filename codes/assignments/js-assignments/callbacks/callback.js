//Challenge 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Using  .filter() to create an array with only numbers that are larger than 7, even numbers and numbers divisible by 3

const greaterThanSeven = numbers.filter(num => num > 7)

const evenNumbers = numbers.filter(num => num % 2 === 0)

const divisibleByThree = numbers.filter(num => num % 3 === 0)


console.log("Numbers larger than 7 are:", greaterThanSeven)
console.log("Even numbers are:", evenNumbers)
console.log("Numbers divisible by 3 are:", divisibleByThree)


// Challenge 2
// Using .map() to square and halve all numbers from the array
const squaredNumbers = numbers.map(num => num ** 2)
const halvedNumbers = numbers.map(num => num / 2)

console.log("Squared numbers result are:", squaredNumbers)
console.log("Halved numbers result are:", halvedNumbers)

// Challenge 3

const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ]


//   Using .filter() to filter objects below $20, in stock, below $20 and also in stock
  const underTwenty = prices.filter(product => product.price < 20)
  const inStock = prices.filter(product => product.inStock)
  const inStockProductsUnderTwenty = prices.filter(product => product.price < 20 && product.inStock);

  console.log("Products under $20:", underTwenty)
  console.log("In-stock products:", inStock)
  console.log("In-stock products under $20 are:", inStockProductsUnderTwenty)


  // Challemge 4

  // 25% price slash for all products

  const sales = prices.map(item => {
    return {
      product: item.product,
      price: item.price * 0.75,
      inStock: item.inStock
    }
  })


  // When the price slash is only for products that cost more than $10.

  const selectiveSales = prices.map(item => {
    if (item.price > 10) {
      return {
        product: item.product,
        price: item.price * 0.75,
        inStock: item.inStock
      };
    } else {
      return item;
    }
  });
 
//  Sales Advertisement
  const salesAd = selectiveSales.map(item => `${item.product} are on sale for only $${item.price.toFixed(2)}!`);

  
  console.log("All products are with 25% off. Sales prices are:", sales);
  console.log("Products with selective 25% off:", selectiveSales);
  console.log("Sale advertisements:", salesAd);
