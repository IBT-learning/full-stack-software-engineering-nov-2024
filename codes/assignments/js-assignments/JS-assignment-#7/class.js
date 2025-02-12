class BankAccount{
    constructor(ownerName){
        this.fullName = ownerName
        this.balance = 0
    }

    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposit of ${amount} has been received. Your balance is ${this.balance}`) 
        }
        else{
            console.log(`Invalid deposit value`);
        }
        
       }

       withdraw(amount){
        if(amount > this.balance){
           console.log(`You have insufficient funds`);
        }
     else if (amount > 0) {
        this.balance -= amount;
        console.log(`Your withdrawal of ${amount} is successful. Your balance is ${this.balance}`);
         
      }
      else{
        console.log(`Invalid withdrawal amount`);
         
      }

    }
}

const person = new BankAccount("Amarachi Odunsi")

console.log(person);

person.deposit(-5)
console.log(person.balance);

person.withdraw(30)
console.log(person.balance)

person.withdraw(-3)


