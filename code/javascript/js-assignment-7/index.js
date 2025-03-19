class BankAccount {
  constructor(ownerName) {
    this.ownerName = ownerName;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient Funds");
      return;
    }
    this.balance -= amount;
  }
}

// Create instance and test methods
const person = new BankAccount("Alice");
person.deposit(100);
console.log(person.balance); // Will print 100

person.withdraw(50);
console.log(person.balance); // Will print 50

person.withdraw(200); // Will print "Insufficient Funds"
