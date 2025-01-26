function capitalize (word){
return word.toUpperCase()
}

let value = capitalize("hello")
console.log('To capital ⭐',value)

// 2
const percentCalc = (amount, percent)=>{
return amount*percent*0.01
}
console.log('😍percentCalc 40=',percentCalc(200,20))

// 3
const divisible = (dividend, divisor) =>
 (dividend%divisor == 0)&& true
console.log('6 is divisible by 3', divisible(6,3))

// 4
const  greet= (name, status)=>
(status=='friend')&&`Hello ${name}` 
|| (status=='enemy')&& `Shoo ${name} Get! 😕😤`
|| ' Welcome, stranger👋'
console.log('Superman. ',greet('Superman','friend'))

