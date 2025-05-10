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

// Challenge 1: Accessing Data
console.log(restaurant.name);
console.log(restaurant.tags[2]);
console.log(restaurant.staff.chef.name);

for (let tag of restaurant.tags){
  console.log(tag);
}

console.log(`\n -----`)

// Challenge 2
restaurant.address = `12 Empire Avenue, Welkom, 9463`;

restaurant.staff.pastryChef = {
  name: 'Florence',
  'phone number': '+2723-456-7890'
};

delete restaurant.website;

console.log(restaurant);
console.log(`\n -----`)

// Challenge 3 and 4
const menu = {
  pizza: 80,
  tunaSandwich: 32.7,
  worsRoll: 39,
  donut: 6.99,
  chocMuffin: 14.5,
  cola: 9.99,
  coffee: 12.5,

  order(items){
    let total = 0;

    for (let item of items){ // item is the string corresponding to the object key in each iteration
      if (! Object.keys(this).includes(item)){
        this[item] = 0;
      }

      total += this[item];
    }

    return total;
  }
}

let order1 = ['worsRoll', 'donut']; 
let order2 = ['pizza', 'chocMuffin', 'cola'];

console.log(menu.order(order1));
console.log(menu.order(order2));
console.log(`\n -----`)

// Extra challenge 4
restaurant.menu = menu;

let order3 = ['tunaSandwich', 'coffee'];
console.log(restaurant.menu.order(order3));

let order4 = ['chocMuffin', 'pepsi']; // pepsi is the invalid input
console.log(restaurant.menu.order(order4));
