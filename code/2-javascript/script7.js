// 

class BankAccount {
    constructor(ownerName, balance) {
    ownerName: ownerName;
    balance: balance;
}
ownerName= 'default';
balance = 0;
}
console.log('our class -', BankAccount, 'ouwner name ', BankAccount.ownerName, 'balance ', BankAccount.balance)
console.log(' constructed inside console - ', new BankAccount('John Doe', 1000), "owner name = ", new BankAccount('John Doe', 1000).ownerName, 'balance = ', new BankAccount('John Doe', 1000).balance)
let account = new BankAccount('John Doe', 1000);
console.log(' constructed class - ', account, "owner name ", account.ownerName, 'balance ', account.balance)
