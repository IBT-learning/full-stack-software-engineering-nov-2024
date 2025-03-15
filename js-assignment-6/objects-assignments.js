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

// restuarant name
console.log(restaurant.name);

// restaurant third item (dine-in)
console.log(restaurant.tags[2]);

// restaurant chef name
console.log(restaurant.staff.chef.name)

// Each tags
for (tag in restaurant.tags){
    console.log(restaurant.tags[tag]);
}


restaurant.address = "76 Royce Road Owerri, Imo State Nigeria";
console.log(restaurant.address);

// add another position to staff

restaurant.staff.CEO = {
    name: "Techbro",
    "phone number": "+2348060466102",
} 
console.log(restaurant.staff.CEO);

delete restaurant.website;
console.log(restaurant);

// this menu should have atleast 5 dishes


const menu = {
    burger: 5.0,
    fries: 3.5,
    pizza: 7.0,
    salad: 4.0,
    chicken: 6.0,
    bread: 2.5,
    order(items) {
        let total = 0;
        for (item of items) {
                total += this[item];
        }
        return total;
    }
}

console.log(menu.order(["burger", "fries", "pizza", "salad", "chicken", "bread"]));

restaurant.menu = menu;
console.log(restaurant);