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

// Challenge 1
console.log(restaurant.name);
console.log(restaurant.tags[2]);
console.log(restaurant.staff.chef.name);
for (let i = 0; i < restaurant.tags.length; i++) {
  console.log(restaurant.tags[i]);
}

// Challenge #2:
restaurant.address = "33 Port Harcourt, Nigeria";
restaurant.staff["IT Support"] = {
  name: "Patrick Okpunor",
  "phone number": "+234 816 288 7599",
};
delete restaurant.website;
console.log(restaurant);

//Challenge 3
const menu = {
  dishes: [
    {
      name: "Burger",
      price: 20.99,
    },
    {
      name: "Pizza",
      price: 7.99,
    },
    {
      name: "Suya",
      price: 12.99,
    },
  ]
};

console.log(menu);



// Challenge #4: Creating an object method

const order = function(dishNames) {
  let totalCost = 0;

  for (let i = 0; i < dishNames.length; i++) {
    const dishName = dishNames[i];
    for (let j = 0; j < menu.dishes.length; j++) {
      if (menu.dishes[j].name === dishName) {
        totalCost += menu.dishes[j].price;
        break;
      }
    }
  }

  return totalCost;
};



const myOrder = ["Suya"];
const total = order(myOrder);
console.log(`Total cost of the order: $${total.toFixed(2)}`);
