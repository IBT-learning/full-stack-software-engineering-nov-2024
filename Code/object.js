const restaurant = {
    name: "Gigi's Pizza Shack",
    address: "no 27, Adelere close, Gbagi Egbeda Ibadan",
    tags: ["pizza", "family", "dine-in", "take-out", "arcade"],
    //website: "http://www.gigispizza.com/",
    staff: {
      owner: {
        name: "Gigi",
        "phone number": "123-234-3456",
      },

      manager: {
        name: "Rose",
        "phone number": "234-345-4567",
      },

      chef: {
        name: "Musa",
        "phone number": "345-456-5678",
      },

      accountant: {
        name: "daud",
        "phone number": "431-213-8956",
      }
    },
  }



//Challenge1: Accesssing data

console.log(restaurant.name);
console.log(restaurant.tags);
console.log(restaurant.staff["Owner: gigi", "Manager: rose", "Chef: musa"]);

//challenge2: Updating Data

console.log(restaurant);

//challenge3: Creating a new object

const foodPriceList = {
  rice: 170.5,
  beans: 106.7,
  meat: 100,
  pap: 50,

  //Creating and object method
  order (dishes) {
    let total = 0;
    let orderedItems = [];
    for (let dish of dishes)
      if (this[dish] !== 
  undefined) {
                total += this[dish];
                orderedItems.push(`${dish}:
            #${this[dish].toFixed(2)}`);
          } else {
            orderedItems.push(`${dish}: Not available`);
          }

    
    return `Your order:\n$
    {orderedItems.join("\n")}\nTotal: #$
    {total.toFixed(2)}`;
  }
};


console.log(foodPriceList);

console.log(foodPriceList.order(["rice", "beans", "meat", "pap"]));







