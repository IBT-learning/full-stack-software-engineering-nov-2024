// JavaScript Assignment #7: Classes

//Challenge #1: Create a class

// Create a new class BankAccount with attributes ownerName and balance
// ownerName should be passed in to the constructor
// balance should be initialized as 0
class BankAccount
{
    constructor(ownerName)
    {
        this.ownerName = ownerName;
        this.balance = 0;
    }
}

// Create a new instance of the class for an imaginary person, person
let imaginaryPerson = new BankAccount("John Doe", 0);

////////////////////////////////////////////////////

// Challenge #2: Create class methods

// Create a method deposit that takes one argument, amount. The method should increase the balance by that amount.
BankAccount.prototype.deposit = function(amount)
{
    this.balance += amount;
}

//Call person.deposit(100) and then console log person.balance. It should say 100.
imaginaryPerson.deposit(100);
console.log(imaginaryPerson.balance);


//Now do the same, with a withdaw method that reduces the balance.
// Don't let people overdraft! Have the withdraw method first check the balance, and if there isn't enough money, cancel the transaction and print a message that says "Insufficient Funds"
BankAccount.prototype.withdraw = function(amount)
{
    if(this.balance < amount)
    {
        console.log("Insufficient Funds");
    }
    else
    {
        this.balance -= amount;
    }
}


//Extra challenges (optional)

//What happens if you give the deposit and withdraw methods arguments that are not numbers? Can you handle those cases?
BankAccount.prototype.deposit = function(amount)
{
    if(typeof amount !== 'number')
    {
        console.log("Invalid Input");
    }
    else
    {
        this.balance += amount;
    }
}

BankAccount.prototype.withdraw = function(amount){
    if(this.balance < amount && typeof amount !== 'number')
    {
        console.log("Invalid Input or Insufficient Funds");
    }
    else
    {
        this.balance -= amount;
    }
}

//What happens if you pass a negative number to the deposit method? Can your method detect that situation, and call this.withdraw instead? (Math.abs() might help you here.)
BankAccount.prototype.deposit = function(amount)
{
    if(amount < 0)
    {
        this.withdraw(Math.abs(amount));
    }
    else
    {
        this.balance += amount;
    }
}

//Can you keep a log of the user's transactions? Try storing this information in whatever way seems appropriate to you.
// How about a printTransactions method that gives the users a nicely formatted list of transations?
BankAccount.prototype.transactions = [];

//Deposit transactions log
BankAccount.prototype.deposit = function(amount)
{
    if(amount < 0)
    {
        this.withdraw(Math.abs(amount));
    }
    else
    {
        this.balance += amount;
        this.transactions.push(`Deposit: ${amount}`);
    }
}

//Withdraw transactions log
BankAccount.prototype.withdraw = function(amount)
{
    if(this.balance < amount)
    {
        console.log("Insufficient Funds");
    }
    else
    {
        this.balance -= amount;
        this.transactions.push(`Withdraw: ${amount}`);
    }
}
