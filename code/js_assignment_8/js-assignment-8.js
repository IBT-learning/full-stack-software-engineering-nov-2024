// JavaScript Assignment #8: Callbacks

// Challenge #1: Practice .filter()

// Make an array with the numbers 1 - 10
const arrayOfNumbersOneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use .filter() to create an array with only numbers that are larger than 7
const numbersLargerThanSeven = arrayOfNumbersOneToTen.filter(number => number > 7);
console.log(`Numbers larger then seven: ${numbersLargerThanSeven}`);

// Use .filter() to create an array with only numbers that are even
const evenNumbers = arrayOfNumbersOneToTen.filter(number => number % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`); 

// Use .filter() to create an array with only numbers that are divisible by 3
const numbersDivisibleByThree = arrayOfNumbersOneToTen.filter(number => number % 3 === 0);
console.log(`Numbers divisible by three: ${numbersDivisibleByThree}`);

//////////////////////////////////////////////////////

// Challenge #2: Practice .map()

// Use .map() to create an array with the square of each number (such as [1, 4, 9, 16...])
const squareOfNumbers = arrayOfNumbersOneToTen.map(number => number * number);
console.log(`Square of numbers: ${squareOfNumbers}`);

// Use .map() to create an array with each number halved (such as [0.5, 1, 1.5...])
const halfOfNumbers = arrayOfNumbersOneToTen.map(number => number / 2);
console.log(`Half of numbers: ${halfOfNumbers}`);


//////////////////////////////////////////////////////

// Challenge #3: Using .filter() to filter objects

const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ]

//   Use .filter() to create an array with only the product objects that cost less than $20
const productsLessThanTwenty = prices.filter(product => product.price < 20);
console.log(`Products less than $20: ${productsLessThanTwenty}`); //I had issues displaying the output i was getting [Object Object ] so i had to use a for loop to display the product names
console.log(`Products less than $20:`);
for (let i = 0; i < productsLessThanTwenty.length; i++) {
    console.log(productsLessThanTwenty[i].product);
}

//Use .filter() to create an array with only the product objects that are in stock
const productsInStock = prices.filter(product => product.inStock === true);
//using a for-loopp to display the output
console.log(`Products in stock:`);
for(let i = 0; i < productsInStock.length; i++){
    console.log(productsInStock[i].product)
}


//Use .filter() to create an array with only the product objects that are in stock AND cost less than $20
const productsInStockAndLessThanTwenty = prices.filter(product => product.inStock === true && product.price < 20);
console.log(`Products in stock and less than $20:`);
for(let i = 0; i < productsInStockAndLessThanTwenty.length; i++){
    console.log(productsInStockAndLessThanTwenty[i].product)
}

//////////////////////////////////////////////////////

// Challenge #4: Using .map() to map objects

// We're having a sale! Use .map() to create an array with all the same objects, but with the prices reduced by 25%
const reducedPrices = prices.map(product => {
    const reducedPrice = product.price * 0.25;
    const newPrice = product.price - reducedPrice;
    return newPrice;
});
console.log(`Reduced prices by 25%: ${reducedPrices}`);

// The sale is only for products that cost more than $10. Rewrite the previous map to only change the prices for items with prices above $10.
const reducedPricesAboveTen = prices.map(product => {
    if(product.price > 10){
        const reducedPrice = product.price * 0.25;
        const newPrice = product.price - reducedPrice;
        return newPrice;
    }else{
        return product.price;
    }
});
console.log(`Reduced prices above $10 by 25%: ${reducedPricesAboveTen}`);


//We're making an ad for the sale. Make an array of strings that read, for example, "shoes are on sale for only $37.50!"
const saleAd = prices.map(product => {
    const reducedPrice = product.price * 0.25;
    const newPrice = product.price - reducedPrice;
    const adMessage = `${product.product} are on sale for only $${newPrice}!`;
    return adMessage;
});
// console.log(`Sale Ad: ${saleAd}`);

for(let i = 0; i < saleAd.length; i++){
    console.log(`Sale Ad: ${saleAd[i]}`);
}


// Extra challenges (optional)

// Can you use .reduce() to join all the strings from the previous together into one long string?
const allSaleAds = saleAd.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(`All sale ads: ${allSaleAds}`);