//  Challenge #1: Create a class

class BankAccount {
  constructor(ownerName) {
    this.ownerName = ownerName; // owner's name is passed in.
    this.balance = 0; // balance is initialized to zero.
    this.transactions = []; // an Array to keep a log of all transactions.
  }

  // Deposit method: accept an amount and increase the balance
  //Extra challenge:  if the deposit amount is negative, convert to withdrawal.

  deposit(amount) {
    if (typeof amount !== "number") {
      console.error("Deposit amount must be a number");
      return;
    }
    if (amount < 0) {
      console.log(
        "Negative deposit dectected. This will be Converted to withdrawal"
      );

      return this.withdraw(Math.abs(amount));
    }

    this.balance += amount;

    // log the succesful deposit transaction
    this.transactions.push({
      type: "deposit",
      amount: amount,
      date: new Date(),
    });
    return this.balance;
  }

  // withdrawal method: accepts an amount and reduce the balance.
  // check for sufficient funds to prevent overdrafts.
  // Extra challenge: if the withdrawal amount is negative, convert to a deposit.

  withdraw(amount) {
    if (typeof amount !== "number") {
      console.error("Withdrawal amount must a number");
      return;
    }
    if (amount < 0) {
      console.log("Negative withdrawal detected. converting to deposit.");
      return this.deposit(Math.abs(amount));
    }
    if (amount > this.balance) {
      console.error("Insufficient Funds");
      return;
    }
    this.balance -= amount;
    // log the succesful withdrawal transaction

    this.transactions.push({
      type: "withdrawal",
      amount: amount,
      balance: this.balance,
      date: new Date(),
    });
    return this.balance;
  }

  // print transaction in a formated list

  printTransactions() {
    console.log(`Transaction log for ${this.ownerName}:`);
    this.transactions.forEach((tx, index) => {
      console.log(
        `${
          index + 1
        }. [${tx.date.toLocaleString()}] ${tx.type.toUpperCase()}: $${
          tx.amount
        } -> Balance: $${tx.balance}`
      );
    });
  }
}

// example usage

// create a new bank account instance for imaginary person

const person = new BankAccount("Alice");

// initially the balance should be 0.

console.log("initial balance:", person.balance); //0

// deposit $100:

person.deposit(100);
console.log("Balance after depositing $100:", person.balance); //$100

// withdrawal $50:

person.withdraw(50);
console.log("Balance ater withdrawing $50:", person.balance); //$50

// try withdrawing more than the current balance.

person.withdraw(100); // This should print "insufficient funds".
console.log("Balance after attempting to withdraw $100:", person.balance); // $50.

// try depositing a non-number.

person.deposit("Fifty"); // should log in error.

// try depositing a negative number. Will be treated as withdrawal.

person.deposit(-25);
console.log("Balance after depositing -$25 (as a withdrawal):", person.balance); // $25

// Print Transaction Receipt.

person.printTransactions();
