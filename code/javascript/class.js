// Challenge #1: Create a class

class BankAccount {
    constructor(ownerName) {
        this.ownerName = ownerName
        this.balance = 0
        this.transactions = []
    }
    
    // Challenge #2: Create class methods
    
    // Deposit method
    deposit(amount) {
        if (typeof amount !== "number" || isNaN(amount)) {
            console.log("Invalid amount. Please enter a number");
            return
        }
        
        if (amount < 0) {
            console.log("Negative deposit detected. Converting to withdrawal...");
            this.withdraw(Math.abs(amount))
            return
        }

        this.balance += amount
        this.transactions.push(`Deposited $${amount}`)
        console.log(`Deposit successful! New balance: $${this.balance}`);
        
    }

    // Withdraw method
    withdraw(amount) {
        if (typeof amount !== "number" || isNaN(amount)) {
            console.log("Invalid amount. Please enter a number");
            return
        }
        
        if (amount > this.balance) {
            console.log("Insufficient Funds. Your balance is still $" + this.balance);
        } else {
            this.balance -= amount
            this.transactions.push(`Withdrew $${amount}`)
            console.log(`Withdrawal successful! New balance: $${this.balance}`);
        } 
    }

    // Print all transactions
    printTransactions() {
        console.log("Transaction History:");
        if (this.transactions.length === 0) {
            console.log("No transactions yet");
        } else {
            for (let i = 0; i < this.transactions.length; i++) {
                 console.log(this.transactions[i]);
            }
        }
    }
}

const person = new BankAccount ("Michael Smith")

console.log(person);
// console.log(person.ownerName);
// console.log(person.balance);

// Testing deposit and withdrawal
person.deposit(100)
person.withdraw(50)
person.deposit(-30)
person.withdraw(100)

// Display final balance
console.log(`Final balance: $${person.balance}`);

// Print transaction history
person.printTransactions()

console.log(person.transactions);











