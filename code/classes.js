class BankAccount {
  constructor(ownerName) {
    this.name = ownerName;
    this.balance = 0;
  }

  describe() {
    return `Account created for: ${this.name}.\
 Avail Bal: ${this.balance}`;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Credit: Recieved $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient Funds");
      return;
    }

    this.balance -= amount;
    console.log(`Debit: Withdrew $${amount}. New balance: $${this.balance}`);
  }
}

const person = new BankAccount("Piper Hart");

person.deposit(100);
console.log(person.balance);

person.withdraw(50);
console.log(person.balance);

person.withdraw(100);

console.log(person);
console.log(person.describe());
