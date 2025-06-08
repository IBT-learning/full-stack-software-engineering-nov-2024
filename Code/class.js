class BankAccount {
    constructor (ownerName, balance = 0) {
        this.ownerName = ownerName;
        this.balance = balance;
    }
//To depost money:

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited #${amount}. New balance: #${this.balance}`);
            }
            else {
                console.log("Deposit must be greater than zero.");
            }
            
        }
//To withdral money:
        withdraw(amount) {
            if (amount > 0 && amount <= this.amount) {
                this.balance -= amount;
                console.log(`Withdrew #${amount}. New balance: #${this.balance}`);
            }
            else if (amount <= 0) {
                console.log("Withdrawal amount must be greater than Zero.");   
            }
            else{
                console.log("insufficient fund");
                
            }            
         }

}


const imaginaryPersonAccount = new BankAccount("Segun Fawole");
imaginaryPersonAccount.GetAccountInfo

//Deposit moneyy and result
const person = new BankAccount("Segun Fawole");
console.log(person.deposit(100));

