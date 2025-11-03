// Challenge 1: Create a class
class BankAccount {
    constructor(ownerName){
        this.ownerName = ownerName;
        this.balance = 0;
        this.transaction = []

    }
    // Challenge 2 and Extra Challenges
    deposit(amount){
        if (typeof amount !== "number"){
            console.log("INVALID TANSACTION: AMOUNT MUST BE A NUMBER");
            return;

        }
        if (amount < 0){
            this.withdraw(Math.abs(amount));
            return;
        }
        this.balance += amount;
        this.transaction.push({
            type: "deposit",
            amount: amount,
            balance: this.balance,
            timestamp: new Date().toISOString() 
        });
        console.log(`Deposited ${amount}. New balance ${this.balance}. `);

    }

    withdraw(amount){
        if (typeof amount !== "number"){
            return console.log("INVALID TANSACTION: AMOUNT MUST BE A NUMBER");

        }
        if (amount < 0){
            this.withdraw(Math.abs(amount));
            return;
        }
        if (amount > this.balance){
           this.transaction.push({
            type: "withdraw",
            amount: amount,
            success: false,
            balance: this.balance,
            timestamp: new Date().toISOString()
           });
           console.log("Insufficent Funds");
           return;
            
        }
        
        this.balance -= amount;
        this.transaction.push({
            type: "withdrawal",
            amount: amount,
            success: true,
            balance: this.balance,
            timestamp: new Date().toISOString()
        });
        console.log(`Withdrew ${amount}. New Balance ${this.balance}. `)

    }
    printTransactions(){
        console.log(`Transaction History for ${this.ownerName} `);
        if (this.transaction.length === 0){
            console.log("No Transaction Found");
            return;
        }
        this.transaction.forEach((transaction, index)=> {
            const date = new Date(transaction.timestamp).toLocaleString();
            const status = transaction.success !== undefined? (transaction.success ? 'Success' : 'Falied') : 'Success';
            console.log(`${index + 1}. ${date} - ${transaction.type.toUpperCase()}: ${transaction.amount} | ${status} | Balance: ${transaction.balance}`);
        });
    }
}

const person = new BankAccount("Jonny Dep")

console.log(`Account Name: ${person.ownerName}`)
console.log(`Current Balance: ${person.balance}`)

person.deposit(100);
console.log(person.balance);
person.withdraw(30);
person.withdraw(-20);
person.deposit(-10);
person.deposit('number')
person.withdraw(2000);

person.printTransactions();
