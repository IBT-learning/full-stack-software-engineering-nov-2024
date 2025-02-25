// ======================
// Initial Restaurant Object
// ======================
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
  
  // ======================
  // Challenge #1: Accessing Data
  // ======================
  console.log("Restaurant Name:", restaurant.name);
  console.log("Third Tag:", restaurant.tags[2]);
  console.log("Chef's Name:", restaurant.staff.chef.name);
  
  console.log("\nAll Tags:");
  restaurant.tags.forEach(tag => console.log(tag));
  
  // ======================
  // Challenge #2: Updating Data
  // ======================
  restaurant.address = "456 Tech St, Lagos 100001";
  restaurant.staff.intern = {
    name: "Your Name",
    "phone number": "555-123-4567"
  };
  delete restaurant.website;
  
  console.log("\nUpdated Restaurant Object:");
  console.log(restaurant);
  
  // ======================
  // Challenge #3: Creating Menu Object
  // ======================
  const menu = {
    pizza: 12.99,
    pasta: 10.50,
    salad: 8.75,
    soda: 2.50,
    fries: 4.99,
    
    // ======================
    // Challenge #4: Order Method
    // ======================
    order(items) {
      let total = 0;
      items.forEach(item => {
        if (this[item]) {
          total += this[item];
        }
      });
      return total.toFixed(2);
    }
  };
  
  // Extra Challenge: Add menu to restaurant
  restaurant.menu = menu;
  
  // ======================
  // Testing
  // ======================
  console.log("\nOrder Tests:");
  console.log(restaurant.menu.order(["pizza", "fries"])); // 17.98
  console.log(restaurant.menu.order(["pasta", "salad", "soda"])); // 21.75
  console.log(restaurant.menu.order(["burger", "fries"])); // 4.99 (ignores invalid burger)