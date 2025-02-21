// Challenge 1
class BankAccount {
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance || 0;
  }
  // Challenge 2
  deposit(amount) {
    return typeof amount === "number" && (this.balance += amount);
  }

  // Challenge 3
  withdraw = (amount) =>
    (typeof amount === "number" &&
      (amount <= this.balance) &&
      (this.balance -= amount)) ||
    (!typeof amount === "number" && console.log(amount, " Not a number !")) ||
    console.log("Insufficient funds");
}
const person = new BankAccount("John Doe");
console.log("class", person);

let x = 100;
let retD = person.deposit(x);
console.log("deposit, ", 100, "  balance = ", person.balance, "return -", retD);

let y = 2;
let retW = person.withdraw(y);
console.log(" withdraw  ", y, " balance = ", person.balance, "withdraw returns -", retW);

console.log(person.toConosle(2))