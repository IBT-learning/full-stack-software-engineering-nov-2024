/*
JavaScript Assignment #7: Classes
You will complete all of these challenges in the same file.

Challenge #1: Create a class
Create a new class BankAccount with attributes ownerName and balance
ownerName should be passed in to the constructor
balance should be initialized as 0
Create a new instance of the class for an imaginary person, person

 */

// class bankAccount{
//   constructor(ownerName, balance=0){
//     this.ownername = ownerName;
//     this.balance = balance;
//
//   }
// }
//
// let person = new bankAccount("zaki", 400);
//
// console.log(person)

/*
Challenge #2: Create class methods
Create a method deposit that takes one argument, amount. The method should increase the balance by that amount.

Call person.deposit(100) and then console log person.balance. It should say 100.

Now do the same, with a withdaw method that reduces the balance.

Don't let people overdraft! Have the withdraw method first check the balance, and if there isn't enough money, cancel the transaction and print a message that says "Insufficient Funds"
 */

class bankAccount {
    constructor(ownerName, balance = 0) {
      this.ownername = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      return (this.balance += amount);
    }
  
    withdraw(amount) {
      if (this.balance >= amount) {
        return (this.balance -= amount);
      } else {
        return ` insufficient balance.`;
      }
    }
  }
  
  let person = new bankAccount("zaki");
  
  console.log(person);
  console.log(person.deposit(200));
  console.log(person.balance);
  
  console.log(person.withdraw(400));
  console.log(person);
  console.log(person.balance);