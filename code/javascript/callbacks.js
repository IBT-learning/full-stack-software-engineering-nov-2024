const add = (x,y)=> x+y;
const subtract =(h,t)=> h-t;
console.log(add(3,7));
const doMath=(a,b, nothing)=>{
    return nothing(a,b);
};
console.log(doMath(4,8,add))
console.log(doMath(12,10,subtract));

const something=(f, q, doings)=>{
    return doings(f,q);
};

console.log(something(10,20,(f,q)=>f*q));

const practice = [1,2,3,4,5,6,7,8,9,10];

const arrays = practice.filter((num)=> num >7);
        console.log(arrays)
const number = practice.filter((num)=> num>5);
console.log(number);
const even = practice.filter((num)=> num%2===0)
console.log (even)
const divisibleByThree =practice.filter((num)=> num%3===0)
console.log(divisibleByThree);

//CHALLENGE TWO
const square = practice.map((num)=> num * num);
console.log(square);

const halve = practice.map((num)=>num/2);
console.log(halve);

//CHALLENGE THREE
const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ]
  const product = prices.filter((num)=>num.price<20);
  console.log(product);
  const price = prices.filter((num)=>num.inStock===true);
  console.log(price);
  const object = prices.filter(num=>num.inStock===true && num.price < 20);
  console.log(object);
  
  //CHALLENGE FOUR 
  const cheapPrice=prices.map((num)=>num.price * 0.75);
  console.log(cheapPrice);
 const prince = prices.map((num)=>{
    if (num.price >10){
        console.log(num.price*0.75);
        
    }return{
        ...num,
        price:num.price > 10 ? num.price*0.75:num.price
    };
 })
 console.log(prince);
 const saleAds = prince
  .filter(item => item.price < prices.find(p => p.product === item.product).price) // Only include discounted items
  .map(item => `${item.product} is on sale for only $${item.price.toFixed(2)}!`);
console.log(saleAds);