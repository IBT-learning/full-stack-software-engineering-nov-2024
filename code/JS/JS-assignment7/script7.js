
class BankAccount {
  constructor (ownerName){
    this.ownerName = ownerName;
    this.balance = 0; // already initialising it, it doesn't need to be a parameter in the constructor method
    this.transactionHistory = []; // to store the array of transaction objects
  }

  deposit(amount){
    if (typeof amount !== 'number'){
      throw new TypeError(`Argument '${amount}' must be a valid number!`);
    }

    if (amount < 0){
      amount = Math.abs(amount); // reassign the amount variable to a non-negative number

      return this.withdraw(amount)
    }

    this.balance += amount;
    this._recordTransaction('deposit', amount);
    return this.balance;
  }

  withdraw(amount){
    if (typeof amount !== 'number'){
      throw new TypeError(`Argument '${amount}' must be a valid number`);
    }

    if (amount > this.balance){
      console.log('INSUFFICIENT FUNDS!');
      return this.balance;
    }else{
      this.balance -= amount;
      this._recordTransaction('withdrawal', amount);
      return this.balance;
    }
  }

  _recordTransaction(type, amount){
    // declare a transaction obejct that will be pushed into the 'transactionHistrory' array
    const transaction = {
      type: type,
      amount: amount,
      balanceAfter: this.balance
    };

    this.transactionHistory.push(transaction);
  }

  printTransactions(){
    // purpose: to log to the console the objects in the 'transactionHistory' array in a formatted list
    console.log(`Transaction history for ${this.ownerName}: \n-----`);
    for (let transaction of this.transactionHistory){
      console.log(`Type: ${transaction.type} \nAmount: ${transaction.amount} \nBalance after Transaction: ${transaction.balanceAfter} \n-----`);
    }
  }
}

const person1 = new BankAccount('Jurgen Klopp');

person1.deposit(100);
console.log(person1.balance);

person1.withdraw(20);
console.log(person1.balance);

person1.deposit(-30); // this reflects as a withdrawal
console.log(person1.balance); // balance is now 30 less even though we called the deposit() method

person1.withdraw(90); //attempts to overdraft

person1.printTransactions();
