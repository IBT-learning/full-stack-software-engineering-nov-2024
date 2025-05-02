
class BankAccount {
    constructor(ownerName) {
      this.ownerName = ownerName;
      this.balance = 0;
      this.transactions = []; 
    }
  

    deposit(amount) {

      if (typeof amount !== 'number' || isNaN(amount)) { 

        console.log("Invalid amount. Please enter a number.");
        return;
      }
  

      if (amount < 0) {
        console.log("Negative amount detected. Converting to withdrawal.");
        this.withdraw(Math.abs(amount));
        return;
      }
  
      this.balance += amount;
      this.transactions.push({
        type: 'deposit',
        amount: amount,
        date: new Date(),
        balanceAfter: this.balance
      });
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    withdraw(amount) {

      if (typeof amount !== 'number' || isNaN(amount)) {
        console.log("Invalid amount. Please enter a number.");
        return;
      }

      if (amount < 0) {
        console.log("Negative amount detected. Converting to deposit.");
        this.deposit(Math.abs(amount));
        return;
      }
  
      if (amount > this.balance) {
        console.log("Insufficient Funds");
        this.transactions.push({
          type: 'failed withdrawal',
          amount: amount,
          date: new Date(),
          balanceAfter: this.balance
        });
        return;
      }
  
      this.balance -= amount;
      this.transactions.push({
        type: 'withdrawal',
        amount: amount,
        date: new Date(),
        balanceAfter: this.balance
      });
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
  

    printTransactions() {
      console.log(`\nTransaction History for ${this.ownerName}`);
      
      this.transactions.forEach((transaction, index) => {
        console.log(`${index + 1}. ${transaction.type.toUpperCase()}`);
        console.log(`   Amount: $${transaction.amount}`);
        console.log(`   Date: ${transaction.date.toLocaleString()}`);
        console.log(`   Balance after: $${transaction.balanceAfter}`);

      });
    }
  }
  

  const person = new BankAccount("John Doe");
  
t
  person.deposit(100);
  console.log(person.balance); 
  

  person.withdraw(30);
  console.log(person.balance);
  

  person.withdraw(100);

  person.deposit("not a number"); 
  person.deposit(-50); 
  person.withdraw(-20);
  

  person.printTransactions();