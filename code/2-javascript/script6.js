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
// 1
const restaurantName = restaurant.name;
const thirdDineIn = restaurant.tags[2];
const chefName = restaurant.staff.chef.name;
console.log(restaurantName, thirdDineIn, chefName);
// 2
restaurant.address = "456 Elm St, Addis Ababa 1000";
restaurant.staff["web developer"] = {
  name: "Jodi T",
  "phone number": "456-567-6789",
};
delete restaurant.website;
console.log(restaurant);
// 3
const menu = {
  pizza: 10,
  pasta: 12,
  salad: 8,
  soda: 2,
};
// 4
menu.order = function (order) {
  let total = 0;
  for (const item of order) {
    total += this[item];
  }
  return total;
};
console.log(menu.order(["pizza", "pasta", "salad", "soda"]));
console.log(menu.order(["pizza", "pasta", "salad", "soda", "pizza"]));
// 5
restaurant.menu = menu;
console.log(restaurant.menu.order(["pizza", "pasta", "salad", "soda"]));
console.log(
  restaurant.menu.order(["pizza", "pasta", "salad", "soda", "pizza"])
);
console.log(restaurant.menu.order(["burger", "fries", "pasta"]));
