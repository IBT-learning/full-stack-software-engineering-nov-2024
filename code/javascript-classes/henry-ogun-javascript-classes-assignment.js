class BankAccount {
    // Constructor initializes the basic account properties
    constructor(ownerName) {
        this.ownerName = ownerName;
        this.balance = 0;
        // Adding a transactions array to keep track of all account activity
        this.transactions = [];
    }

    // Helper method to validate amounts being passed to deposit/withdraw
    validateAmount(amount) {
        // Check if amount is actually a number
        if (typeof amount !== 'number') {
            throw new Error('Transaction amount must be a number');
        }
        
        // Convert amount to a number with 2 decimal places to handle floating point precision
        return Number(amount.toFixed(2));
    }

    // Deposit method that handles both positive and negative amounts
    deposit(amount) {
        try {
            const validatedAmount = this.validateAmount(amount);
            
            // If amount is negative, redirect to withdraw
            if (validatedAmount < 0) {
                return this.withdraw(Math.abs(validatedAmount));
            }

            this.balance += validatedAmount;
            
            // Record the transaction
            this.transactions.push({
                type: 'deposit',
                amount: validatedAmount,
                date: new Date(),
                resultingBalance: this.balance
            });

            console.log(`Successfully deposited $${validatedAmount}. New balance: $${this.balance}`);
            return true;

        } catch (error) {
            console.error(`Deposit failed: ${error.message}`);
            return false;
        }
    }

    // Withdraw method with overdraft protection
    withdraw(amount) {
        try {
            const validatedAmount = this.validateAmount(amount);

            // Handle negative withdrawal amounts
            if (validatedAmount < 0) {
                return this.deposit(Math.abs(validatedAmount));
            }

            // Check for sufficient funds
            if (this.balance < validatedAmount) {
                throw new Error('Insufficient funds');
            }

            this.balance -= validatedAmount;
            
            // Record the transaction
            this.transactions.push({
                type: 'withdrawal',
                amount: validatedAmount,
                date: new Date(),
                resultingBalance: this.balance
            });

            console.log(`Successfully withdrew $${validatedAmount}. New balance: $${this.balance}`);
            return true;

        } catch (error) {
            console.error(`Withdrawal failed: ${error.message}`);
            return false;
        }
    }

    // Method to display transaction history
    printTransactions() {
        console.log(`\nTransaction History for ${this.ownerName}'s Account`);
        console.log('----------------------------------------');
        
        if (this.transactions.length === 0) {
            console.log('No transactions found.');
            return;
        }

        this.transactions.forEach((transaction, index) => {
            const date = transaction.date.toLocaleDateString();
            const time = transaction.date.toLocaleTimeString();
            const type = transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1);
            
            console.log(`${index + 1}. ${type}`);
            console.log(`   Date: ${date} ${time}`);
            console.log(`   Amount: $${transaction.amount}`);
            console.log(`   Balance: $${transaction.resultingBalance}`);
            console.log('----------------------------------------');
        });
    }
}

// Create a new account
const person = new BankAccount('Henry Ogun');

// Test basic functionality
person.deposit(100);                 // Should work fine
person.withdraw(50);                 // Should work fine
person.withdraw(1000);               // Should fail (insufficient funds)

// Test edge cases
person.deposit('100');               // Should fail (invalid type)
person.deposit(-50);                 // Should be handled as a withdrawal
person.withdraw(-30);                // Should be handled as a deposit

// Print transaction history
person.printTransactions();