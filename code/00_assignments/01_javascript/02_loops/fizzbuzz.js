const cl = console.log

// FizzBuzz Challenge for numbers btw 0-40
for (let i = 1; i <= 40; i++){
    i % 3 == 0 && i % 5 == 0? cl("FIZZBUZZ")
    : i % 5 == 0? cl("BUZZ")
    : i % 3 == 0? cl("FIZZ") 
    : cl(i)
}