//challenge#1; creating a class

class BankAccount{
    constructor(ownerName, balance){
        this.name=ownerName;
        this.balance=0;     
    }

    deposit(amount){
        if(typeof amount === "number" && amount > 0){
            this.balance += amount;
             return  `Deposited $${amount}. New balance : $${this.balance}`;

        } else{
            return "Invalid Input";
        }
    }

    withdraw(amount){
        if(amount > this.balance){
            return "You have Insufficient Funds";
        }else{
            this.balance -=amount;
            return `Amount Withdrawn; $${amount} New Balance:$${this.balance}`;
        }
    }
}

const person= new BankAccount("David",);

console.log(person.deposit(300));
console.log(person.deposit(200));
console.log(person.deposit(400));
console.log(person.deposit(500));
console.log(person.deposit(300));
console.log(person.deposit(tttthchhd));
// console.log(person);


console.log(person.withdraw(4500));
console.log(person);













// class Medal{
//     constructor(sport, year,level){
//         this.sport=sport;
//         this.year=year;
//         this.level=level;
//     }
// }


// class Olympian{
//     constructor(fullName, sport, year){
//         this.name= fullName;
//         this.sport= sport;
//         this.year= year;
//         this.yearsCompeted=[];
//         this.medals=[];
//     }

//     describe(){
//         return `${this.name} is an athlete in the sport of ${this.sport} and has competed in ${this.yearsCompeted.length} Olympics. She has won ${this.medals.length} medals`;
//     }
//     compete(year,medal){
//         if(medal){
//             const newMedal =new Medal(this.sport , medal, year);
//             this.medals.push(newMedal);
//         }
//         if(!this.yearsCompeted.includes(year)){
//             this.yearsCompeted.push(year);
//         }
//     }
// }

// const faith= new Olympian("Faith Kipyegon","running","Kenya");
// const Katie= new Olympian("Katie Mwizi","swimming","USA");
// const Simeone= new Olympian("Simeone Billes","gymnastics","USA");

// faith.compete(2012);
// faith.compete(2016, "gold");
// faith.compete(2020, "gold");

// Katie.compete(2012, "gold");

// Katie.compete(2016, "gold");
// Katie.compete(2016, "gold");
// Katie.compete(2016, "gold");
// Katie.compete(2016, "gold");
// Katie.compete(2016, "silver");

// Katie.compete(2020, "gold");
// Katie.compete(2020, "gold");
// Katie.compete(2020, "silver");
// Katie.compete(2020, "silver");
// Katie.compete(2020);

// console.log(faith);
// console.log(faith.describe());

// // console.log(Katie);
// // console.log(Katie.describe());
