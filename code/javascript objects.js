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


console.log(restaurant.name);


console.log(restaurant.tags[2]);


console.log(restaurant.staff.chef.name);

 
for (let tag of restaurant.tags) {
  console.log(tag);
}

restaurant.address = "Moi Avenue , Nairobi, NRB 00100";

restaurant.staff["software developer"] = {
  name: "Kevin",
  "phone number": "+254719745438",
};

delete restaurant.website;

console.log(restaurant);


var menu = {
    sardines: {
      name: "Sardines",
      price: 250,
    },
    hawaiianPizza: {
      name: "Hawaiian Pizza",
      price: 1200,
    },
    tilapia: {
      name: "Tilapia",
      price: 900,
    },
    roastBeef: {
      name: "Roast Beef",
      price: 550,
    },
  };
  
  
  console.log(menu);
  

 var menu = {
    sardines: {
      name: "Sardines",
      price: 250,
    },
    hawaiianPizza: {
      name: "Hawaiian Pizza",
      price: 1200,
    },
    tilapia: {
      name: "Tilapia",
      price: 900,
    },
    roastBeef: {
      name: "Roast Beef",
      price: 550,
    },
  
    order: function (items) {
      let total = 0;
      for (let item of items) {
        if (this[item]) {
          total += this[item].price;
        } else {
          console.log(`"${item}" is not on the menu.`);
        }
      }
      return total;
    },
  };
  
  const myOrder = ["sardines", "tilapia", "roastBeef"];
  console.log("Total cost: Ksh", menu.order(myOrder));
  