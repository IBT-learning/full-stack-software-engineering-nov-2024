class BankAccount {
  constructor(ownerName) {
    this.ownerName = ownerName;
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      console.log("Invalid deposit amount. Please enter a number.");
      return;
    }
    if (amount < 0) {
      console.log("Negative amount detected. Converting to withdrawal.");
      this.withdraw(Math.abs(amount));
      return;
    }
    this.balance += amount;
    this.transactions.push(`Deposited: ₦${amount}`);
    console.log(`Successfully deposited ₦${amount}. New balance: ₦${this.balance}`);
  }

  withdraw(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      console.log("Invalid withdrawal amount. Please enter a number.");
      return;
    }
    if (amount < 0) {
      console.log("Cannot withdraw a negative amount.");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient Funds");
      return;
    }
    this.balance -= amount;
    this.transactions.push(`Withdrew: ${amount}`);
    console.log(`Successfully withdrew ${amount}. New balance: ${this.balance}`);
  }

  printTransactions() {
    console.log("Transaction History for " + this.ownerName + ":");
    this.transactions.forEach((transaction, index) => {
      console.log(`${index + 1}. ${transaction}`);
    });
  }
}

// Create a new instance
const person = new BankAccount("Sherifah");
person.deposit(100);
console.log(person.balance);

person.withdraw(50);
console.log(person.balance);

person.withdraw(100);

person.deposit("hello"); // Should log an error
person.deposit(-30); // Should convert to withdrawal

person.printTransactions(); // Print transaction history
