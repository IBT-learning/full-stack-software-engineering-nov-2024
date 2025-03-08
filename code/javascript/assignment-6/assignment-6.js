// Restaurant whole object
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
  
  // Challenge #1
  console.log(restaurant.name); 
  

  console.log(restaurant.tags[2]); 
  

  console.log(restaurant.staff.chef.name); // Output: Musa
  

  restaurant.tags.forEach(tag => {
    console.log(tag); 
  });
  
  // Challenge #2
  restaurant.address = "456 New St, Portland OR 97201";
  restaurant.staff.yourPosition = {
    name: "ChatGPT",
    "phone number": "555-555-5555",
  };
  delete restaurant.website;
  console.log(restaurant);
  
  // Challenge #3
  const menu = {
    burger: 5.0,
    fries: 3.5,
    pizza: 7.5,
    salad: 4.0,
  };
  
  // Challenge #4
  

  menu.order = function (items) {
    let total = 0;

    items.forEach(item => {
      if (this[item]) { 
        total += this[item];
      }
    });
    return total;
  };
  
  console.log(menu.order(["burger", "fries"]));
  console.log(menu.order(["burger", "fries", "fries"])); 