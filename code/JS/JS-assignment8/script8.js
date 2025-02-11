// Challenge 1
let nums = [];
for (let i = 1; i < 11; i++){
  nums.push(i);
}

let largerThan7 = nums.filter((element) => element > 7);
console.log(largerThan7);

let evenNums = nums.filter((element) => element % 2 === 0);
console.log(evenNums);

let divisibleBy3 = nums.filter((element) => element % 3 === 0);
console.log(divisibleBy3);
