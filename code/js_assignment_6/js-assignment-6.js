//pasting this object given.

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
  }

  ///////////////////////////////////////////////

//   Challenge #1: Accessing Data

// Use dot or bracket notation as needed to console log the following information:
// The restaurant's name
console.log(restaurant.name);
// The third item ("dine-in") from the list of tags
console.log(restaurant.tags[2]);
// The chef's name
console.log(restaurant.staff.chef.name);

// Use a loop to console log each of the tags
for (let i = 0; i < restaurant.tags.length; i++) {
    console.log(restaurant.tags[i]);
}

/////////////////////////////////////////////////////

// Challenge #2: Updating Data

// Using dot or bracket notation to update the object
// Move the restaurant to somewhere in your city (change the address)
restaurant.address = "1 nile avenue, Port Harcourt, NG 10001";

// Hire yourself to the staff (make up a position for yourself and add it to the "staff")
restaurant.staff.ITStaff = {
    name: "Kennedy",
    "phone number": "456-567-6789",
};

// Remove the website from the object
delete restaurant.website;

// Console log the object to see the changes
console.log(restaurant);

/////////////////////////////////////////////////////

// Challenge #3: Creating a new object

//Write a new object literal that represents a menu with prices. It can include whatever dishes you like. 
const menu = {
    pizza: 1000.0,
    burger: 500.0,
    fries: 20.0,
    noddles: 200.0
};

/////////////////////////////////////////////////////

// Challenge #4: Creating an object method

// Write an order method on the menu object that does the following:
// takes one argument, an array of strings
// loop over the strings, and add up the total for the corresponding menu items
// return the total cost of the order

menu.order = function (orderItems) {
    let total = 0;
    for (let i = 0; i < orderItems.length; i++) {
        total += this[orderItems[i]];
    }
    return total;
}

console.log(menu.order(["burger", "fries", "noddles"])) 
console.log(menu.order(["burger", "fries", "noddles", "pizza", "noddles"])) 


// Extra challenges (optional)

//Use dot or bracket notation to add the menu to the restaurant object
restaurant.menu = menu;

//Ignore invalid inputs:
menu.order = function (orderItems) {
    if (!Array.isArray(orderItems)) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < orderItems.length; i++) {
        if (this[orderItems[i]]) {
            total += this[orderItems[i]];
        }
    }
    return total;
}
console.log(menu.order(["burger", "fries", "noddles", "pizza", "noddles", "ice cream"]))

