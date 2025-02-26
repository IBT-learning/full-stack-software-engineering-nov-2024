const restaurant = {
  name: "Gigi's Pizza Shack",
  address: "123 Main St, Portland OR 97200",
  tags: ["pizza", "family", "dine-in", "take-out", "arcade"],
  website: "http://www.gigispizza.com/",
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
  },
};

// Challenge #1: Accessing Data
//------------------------------

// Log the restaurant's name

console.log("restaurant name is =>:", restaurant.name);
console.log();

// Log The third item ("dine-in") from the list of tags

console.log("The third item tag is =>:", restaurant.tags[2]);
console.log();

// Log The chef's name

console.log("The chef name is =>", restaurant.staff.chef.name);

console.log();

// Use a loop to console log each of the tags

console.log("All Tags are:");
console.log();

for (let tag of restaurant.tags) {
  console.log(tag);
}

// Challenge #2: Updating Data
console.log();

// Using dot or bracket notation to update the object
//Move the restaurant to somewhere in your city (change the address)
restaurant.address = "N0 20 Jack close Trade Moore Estate Abuja Nigeria";

//Hire yourself to the staff (make up a position for yourself and add it to the "staff")

restaurant.staff.accountant = {
  name: "Macwilliams",
  "phone number": "08055111555",
};

// Remove the website from the object

delete restaurant.website;

console.log("Updated restaurant List =>:", restaurant);

// Challenge #3: Creating a new object

// Write a new object literal that represents a menu with prices. It can include whatever dishes you like
console.log();

const menu = {
  rice: 1000.0,
  meatPie: 300.0,
  salad: 350.5,
  coke: 275.5,
};

// Challenge #4: Creating an object method
// Write an order method on the menu object that does the following:

// takes one argument, an array of strings
menu.order = function (items) {
  let total = 0;
  for (let item of items) {
    if (this.hasOwnProperty(item) && typeof this[item] === "number") {
      total += this[item];
    }
  }
  return total;
};

console.log("Order 1 Total:", menu.order(["rice", "meatPie"]));

console.log("Order 2 Total:", menu.order(["rice", "meatPie", "salad"]));

console.log();

// Extra challenges (optional)
// Use dot or bracket notation to add the menu to the restaurant object

// add the menu to the restaurant object
restaurant.menu = menu;

// Make an order using restaurant.menu.order()

// Ignore invalid inputs:
console.log(
  "Restaurant Total Order:",
  restaurant.menu.order(["rice", "meatPie", "coke", "pasta", "salad"])
); // pasta will be ignore as is not on the menu list.
