

/*

JavaScript Assignment #6: Objects
You will complete all of these challenges in the same file.

Start by pasting this object into your code:


Challenge #1: Accessing Data
Use dot or bracket notation as needed to console log the following information:
The restaurant's name
The third item ("dine-in") from the list of tags
The chef's name
Use a loop to console log each of the tags

*/

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
  
  console.log(restaurant.name);
  console.log(restaurant.tags[2]);
  console.log(restaurant.staff["chef"].name);
  
  for (let i = 0; i < restaurant.tags.length; i++) {
    console.log(restaurant.tags[i]);
  }
  
  /*
  
  Challenge #2: Updating Data
  Using dot or bracket notation to update the object
  Move the restaurant to somewhere in your city (change the address)
  Hire yourself to the staff (make up a position for yourself and add it to the "staff")
  make sure to add yourself as an object with your name and (fake!) phone number
  Remove the website from the object
  Console log the object to see the changes
  
  */
  
  restaurant.address = "corner kilifi, bondeni, mombasa island ";
  restaurant.staff.CEO = { name: "zaki", number: 8989898 };
  
  console.log(restaurant);
  
  /*
  Challenge #3: Creating a new object
  Write a new object literal that represents a menu with prices. It can include whatever dishes you like. Give it at least four dishes. An example might look like this:
  
  */
  
  // const menu = {
  //   burger: 5.0,
  //   fries: 3.5,
  //   rice:  2,
  //   bread:7,
  // }
  
  /*
  
  
  Challenge #4: Creating an object method
  Write an order method on the menu object that does the following:
  takes one argument, an array of strings
  loop over the strings, and add up the total for the corresponding menu items
  return the total cost of the order
  For example:
  console.log(menu.order(["burger", "fries"])) // 8.5
  console.log(menu.order(["burger", "fries", "fries"])) // 12
  Extra challenges (optional)
  Use dot or bracket notation to add the menu to the restaurant object
  Make an order using restaurant.menu.order()
  Ignore invalid inputs:
  console.log(menu.order(["burger", "fries", "pasta"])) // 8.5
  
  */
  
  const menu = {
    burger: 5.0,
    fries: 3.5,
    rice: 2,
    bread: 7,
    order: function (arr) {
      let total = 0;
  
      for (item of arr) {
        total += menu[item];
      }
  
      return total;
    },
  };
  
  console.log(menu.order(["burger", "fries"])); // 8.5
  console.log(menu.order(["burger", "fries", "fries", "cambe"])); // 12
  
  restaurant.menu = {
    burger: 5.0,
    fries: 3.5,
    rice: 2,
    bread: 7,
    order: function (arr) {
      let total = 0;
  
      for (item of arr) {
        let price = this[item];
  
        if (price) {
          total += price;
        } else {
          console.log(`sorry we dont the ${item} today`);
        }
      }
  
      return total;
    },
  };
  
  console.log(restaurant);
  
  console.log(restaurant.menu.order(["burger", "fries"])); // 8.5
  console.log(
    restaurant.menu.order(["burger", "fries", "fries", "bun", "cambe"])
  ); // 12