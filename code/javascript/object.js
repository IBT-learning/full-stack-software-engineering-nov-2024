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

  // Challenge #1: Accessing Data
console.log("Restaurant Name:", restaurant.name); // The restaurant's name
console.log("Third Tag:", restaurant.tags[2]); // The third item ("dine-in") from the list of tags

// Loop through tags and log each one
for (const tag of restaurant.tags) {
    console.log(tag);
  }


  // Challenge #2: Updating Data
restaurant.address = "456 New St, Abuja, Nigeria"; // Change address

// Add myself to the staff 
restaurant.staff.developer = {
  name: "Michael",
  "phone number": "0707 111",
}; 

delete restaurant.website; // Remove website

console.log(restaurant); // Logs updated restaurant object
  
// Challenge #3: Creating a new object

const menu = {
    pizza: 8.0,
    pasta: 7.0,
    burger: 5.0,
    fries: 3.5,

    // Challenge #4: Creating an order method

    order(items) {
        let total = 0
        for (const item of items) {
            if(this[item]) {
                total += this[item]
            }
        }
        return total
    }
}

console.log(menu.order(["burger", "fries"]));

console.log(menu.order(["burger", "fries", "fries"]));

console.log(menu.order(["burger", "fries", "pasta"]));

restaurant.menu = menu

// console.log(menu.order(["burger", "fries", "pasta"]));

console.log(restaurant.menu.order(["pizza", "fries"]));



