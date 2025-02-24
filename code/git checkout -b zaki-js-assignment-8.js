/*
  JavaScript Assignment #8: Callbacks
You will complete all of these challenges in the same file.

Challenge #1: Practice .filter()
Make an array with the numbers 1 - 10
Use .filter() to create an array with only numbers that are larger than 7
Use .filter() to create an array with only numbers that are even
Use .filter() to create an array with only numbers that are divisible by 3


*/

// let array = [1,2,3,4,5,6,7,8,9,10];

// let newArr1 = array.filter((el)=>{if(el>7){ return el}
// })
// console.log(newArr1)

// let newArr2 = array.filter((el)=>{if(el % 2 === 0){ return el}
// })

// console.log(newArr2)

// let newArr3 = array.filter((el)=>{if(el % 3 === 0){ return el}
// })

// console.log(newArr3)

/*

Challenge #2: Practice .map()
Using that same array with number 1-10

Use .map() to create an array with the square of each number (such as [1, 4, 9, 16...])
Use .map() to create an array with each number halved (such as [0.5, 1, 1.5...])
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr1 = array.map((el) => {
  {
    return el ** 2;
  }
});
console.log(newArr1);

let newArr2 = array.map((el) => {
  {
    return el / 2;
  }
});
console.log(newArr2);

/*



Challenge #3: Using .filter() to filter objects
Start by pasting this into your code:

const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
]
Use .filter() to create an array with only the product objects that cost less than $20
Use .filter() to create an array with only the product objects that are in stock
Use .filter() to create an array with only the product objects that are in stock AND cost less than $20
*/

const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];

let filteredArr1 = prices.filter(function (el) {
  return el.price < 20;
});

console.log(filteredArr1);

let filteredArr2 = prices.filter(function (el) {
  return el.inStock;
});

console.log(filteredArr2);

let filteredArr3 = prices.filter(function (el) {
  return el.inStock && el.price < 20;
});

console.log(filteredArr3);

/*

Challenge #4: Using .map() to map objects
We're having a sale! Use .map() to create an array with all the same objects, but with the prices reduced by 25%
The sale is only for products that cost more than $10. Rewrite the previous map to only change the prices for items with prices above $10.
We're making an ad for the sale. Make an array of strings that read, for example, "shoes are on sale for only $37.50!"
Extra challenges (optional)
Can you use .reduce() to join all the strings from the previous together into one long string?
*/

// let reducedArr = prices.map(function (el){
//   return {products:el.product, price:el.price*0.75, inStock:el.inStock}
// })

let reducedArr = prices.map(function (el) {
  if (el.price > 10) {
    return {
      products: el.product,
      price: el.price * 0.75,
      inStock: el.inStock,
    };
  } else {
    return { products: el.product, price: el.price, inStock: el.inStock };
  }
});

console.log(reducedArr);

let advert = reducedArr
  .map(function (el) {
    // "shoes are on sale for only $37.50!"

    if (el.price > 10) {
      return `${el.products} are on sale for only ${el.price}`;
    }
  })
  .filter(Boolean);

console.log(advert);