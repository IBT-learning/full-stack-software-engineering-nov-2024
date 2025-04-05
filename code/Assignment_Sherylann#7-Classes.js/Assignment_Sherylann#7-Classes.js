

//Challenge #1
class BankAccount {
    constructor(ownerName) {
        this.ownerName = ownerName;
        this.balance = 0;
        this.transactions = [];
    }
//Challenge #2 - Deposit Method
    deposit(amount) {
        if (typeof amount !== 'number' || isNaN(amount)) {
            console.log("Invalid deposit amount. Please enter a number.");
            return;
        }
        
        if (amount < 0) {
            console.log("Negative deposit detected. Converting to withdrawal.");
            this.withdraw(Math.abs(amount));
            return;
        }
        
        this.balance += amount;
        this.transactions.push({ type: 'Deposit', amount: amount, newBalance: this.balance });
        console.log(`Deposited Kes.${amount}. New balance: Kes.${this.balance}`);
    }

    withdraw(amount) {
        if (typeof amount !== 'number' || isNaN(amount)) {
            console.log("Invalid withdrawal amount. Please enter a number.");
            return;
        }
        
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
            return;
        }
        
        if (amount > this.balance) {
            console.log("Insufficient Funds");
            return;
        }
        
        this.balance -= amount;
        this.transactions.push({ type: 'Withdrawal', amount: amount, newBalance: this.balance });
        console.log(`Withdrew Kes.${amount}. New balance: Kes.${this.balance}`);
    }

    printTransactions() {
        console.log(`Transaction history for ${this.ownerName}:`);
        this.transactions.forEach((transaction, index) => {

            console.log(`${index + 1}. ${transaction.type}: Kes${transaction.amount} | Balance: Kes${transaction.newBalance}`);
        });
    }
}

// Creating a new bank account for an imaginary person Challenge#1
const person = new BankAccount("Agnes Ann");

// Testing deposit and withdraw methods Challnge#2
person.deposit(100);
person.withdraw(50);
person.deposit(-20); // Should convert to a withdrawal
person.withdraw(1000); // Should fail due to insufficient funds
person.deposit("Ann"); // Should fail due to invalid input(not a number just a string of words)
person.withdraw(-10); // Should fail due to invalid input(this is a negative number )

// Print transactions
person.printTransactions();
