// Loop 10 times and check divisibility by 3
for (let i = 1; i <= 10; i++) {
    const isDivisibleBy3 = i % 3 === 0;
    console.log(`Number ${i}: ${isDivisibleBy3 ? "yes" : "no"}`);
  }

  // FizzBuzz solution for 40 iterations
for (let i = 1; i <= 40; i++) {
    let output = `${i}:`;
    
    if (i % 15 === 0) {
      output += " FizzBuzz";
    } else if (i % 3 === 0) {
      output += " Fizz";
    } else if (i % 5 === 0) {
      output += " Buzz";
    }
    
    console.log(output);
  }