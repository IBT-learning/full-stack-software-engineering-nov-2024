'use strict'


const restaurant = {
    name: "Gigi's Pizza Shack",
    address: "123 Abuja, Nigera",
    tags: ["pizza", "family", "dine-in", "take-out", "arcade"],
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
        name: "Lucid",
        "phone number": "145-456-5678",
      },
      techConsultant: {
        name: "Lucid",
        "phone number": "145-456-5678",
        responsibilities: [
          "Maintaining restaurant website", ],
    },
  } 
}
  
  console.log(restaurant.name);
  console.log(restaurant.tags[2]);
  console.log(restaurant.staff.chef.name);
  

  for (let i = 0; i < restaurant.tags.length; i++) {
    console.log(restaurant.tags[i]);
  }

  console.log(restaurant);
  
  const menus = {
    beans: 1.5,
    cake: 2.1,
    meat: 8.1,
    eggs: 1.9,
  }

  console.log(menus);

  
  const menu = {
    margheritaPizza: 12,
    bbqChickenPizza: 14,
    spaghettiCarbonara: 13,
    garlicKnots: 6,
  
    order: function(items) {
      let total = 0;
      for (let item of items) {
        if (this[item]) {
          total += this[item];
        }
      }
      return total;
    }
  };
  