// const restaurant = {
//   name: "Gigi's Pizza Shack",
//   address: "123 Main St, Portland OR 97200",
//   tags: ["pizza", "family", "dine-in", "take-out", "arcade"],
//   website: "http://www.gigispizza.com/",
//   staff: {
//     owner: {
//       name: "Gigi",
//       "phone number": "123-234-3456",
//     },
//     manager: {
//       name: "Rose",
//       "phone number": "234-345-4567",
//     },
//     chef: {
//       name: "Musa",
//       "phone number": "345-456-5678",
//     },
//   },
// };

// console.log(restaurant.name);
// console.log(restaurant.tags[2]);
// console.log(restaurant.staff.chef.name);

// for (const tag of restaurant.tags) {
//   console.log(tag);
// }

// challenge 2
const restaurant = {
  name: "Gigi's Pizza Shack",
  address: "Km 7, Itokin rd, Ikorodu, Lagos",
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
    casheir: {
      name: "Jane",
      "phone number": "234-6543-2310",
    },
  },
};

delete restaurant.website;
console.log(restaurant);

// challenge 3
const menu = {
  chicken_wings: 6.0,
  lasagna: 4.99,
  Garlic_knots: 3.5,
  soda: 2.0,

  // challenge 4
  order: function (items) {
    let total = 0;
    for (const item of items) {
      if (this[item]) {
        total += this[item];
        // } else {
        //   console.log(`Sorry, ${item} is not on the menu.`);
      }
    }
    return total;
  },
};

console.log(menu.order(["chicken_wings", "lasagna", "soda"])); // 12.99
console.log(menu.order(["Garlic_knots", "soda"])); // 5.5
console.log(menu.order(["soda"])); // 2

// extra
restaurant.menu = menu;

console.log(restaurant);
console.log(restaurant.menu.order(["lasagna", "soda"]));

console.log(restaurant.menu.order(["Garlic_knots", "soda", "pizza"]));
