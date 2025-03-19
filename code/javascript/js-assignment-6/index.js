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

//Challenge #1: Accessing Data
console.log(restaurant.name);
console.log(restaurant.tags[2]);
console.log(restaurant.staff.chef.name);

for (element of restaurant.tags) {
  console.log(element);
}

//Challenge #2: Updating Data
const newLocation = (restaurant.address = "Lokogoma, Abuja");

restaurant.staff.cleaner = {
  name: "Rachel Daniels",
  phone_number: "987-654-3210",
};
// console.log(restaurant.staff);
delete restaurant.website;
console.log(restaurant);

//Challenge 3 and challenge 4

const menu = {
  egusi: 100,
  okro: 300,
  moimoi: 300,
  akara: 200,
  stew: 300,
  order: (strings) => {
    const orders = [];
    for (let i = 0; i < strings.length; i++) {
      orders.push(menu[strings[i]]);
    }
    console.log(orders.reduce((acc, curr) => acc + curr, 0) + " Naira");
  },
};

menu.order(["egusi", "stew"]);
