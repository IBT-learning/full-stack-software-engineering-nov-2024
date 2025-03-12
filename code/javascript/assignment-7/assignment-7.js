// Challenge #1: Create a class BankAccount
class BankAccount {

    constructor(ownerName) {
      this.ownerName = ownerName;
      this.balance = 0; 
    }
  
    // Challenge #2: Create class methods
    deposit(amount) {
      this.balance += amount; 
    }
  

    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log("Insufficient Funds"); 
      }
    }
  }
  

  const person = new BankAccount("John Doe");
  
  
  person.deposit(100);
  console.log(person.balance);
  person.withdraw(50);
  console.log(person.balance);
  person.withdraw(100); 
  console.log(person.balance);