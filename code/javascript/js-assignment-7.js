// Challenge 1
class BankAccount {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }

  isValidNumber(number) {
    if (!(typeof number === "number")) {
      return {
        success: false,
        message: "Enter Valid Number",
      };
    } else {
      return {
        success: true,
        message: "Valid Number",
      };
    }
  }

  deposit(amount) {
    if (this.isValidNumber(amount).success) {
      this.balance += amount;
    } else {
      console.log(this.isValidNumber(amount).message);
    }
  }

  withdraw(amount) {
    if (this.isValidNumber(amount).success) {
      if (amount > this.balance) {
        console.log("Insufficient Funds");
      } else {
        this.balance -= amount;
      }
    } else {
      console.log(this.isValidNumber(amount).message);
    }
  }
}

const imaginaryPerson = new BankAccount("Jeff Bezoz");

// imaginaryPerson.deposit(100);
imaginaryPerson.deposit(-20);
console.log(imaginaryPerson.balance);

// Create class methods
