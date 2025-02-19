// Challenge #1: Practice .filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const greaterThan7 = numbers.filter(num => num > 7)
console.log(greaterThan7);

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);

const divisibilityBy3 = numbers.filter(num => num % 3 === 0)
console.log(divisibilityBy3);


// Challenge #2: Practice .map()
const squaredNumbers = numbers.map(num => num ** 2)
console.log(squaredNumbers);

const halvedNumbers = numbers.map(num => num / 2)
console.log(halvedNumbers);


// Challenge #3: Using .filter() to filter objects

const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];
  

const below20 = prices.filter(item => item.price < 20)
console.log(below20);

const inStock = prices.filter(item => item.inStock)
console.log(inStock);

const inStockAndBelow20 = prices.filter(item => item.inStock && item.price < 20)
console.log(inStockAndBelow20);


// Challenge #4: Using .map() to map objects

const discountedPrices = prices.map(item => ({
    product: item.product,
    price: item.price * 0.75,
    inStock: item.inStock
}))

console.log(discountedPrices);


const selectiveDiscount = prices.map(item => {
    if (item.price > 10) {
        return {
            product: item.product,
            price: item.price * 0.75,
            inStock: item.inStock
        }
    } else {
        return item
    }
})

console.log(selectiveDiscount);


const saleAd = selectiveDiscount.map(item => 
    `${item.product} is on sale for only $${item.price.toFixed(2)}!`
)

console.log(saleAd);


// Extra Challenge: Use .reduce() to join all the sale ads into one string


const saleMessageConcat  = saleAd.reduce((acc, currMsg) => acc + " " + currMsg)
console.log(saleMessageConcat);








