

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

// Challenge #1
// using the dot notation
console.log(restaurant.name) // console log the restaurant's name
console.log(restaurant.tags[2]) // console log the third item in the list of tags 
console.log(restaurant.staff.chef.name) // console log the chef name

// using for loop to console log each of the tags
for (const tag of restaurant.tags) {
    console.log(tag)
}

// Challenge #2


restaurant["address"] = "No 28 Oduo-Obi Crescent Ikenegbu, Owerrri" // changing the address of the restaurant

// added myself as a supervisor under staff
restaurant.staff["supervisor"] = {"name": "Darlington", "phone number": "0562246704"}

delete restaurant.website; // remopve website from the object
console.log(restaurant)

// Challenge #3
// creating a new object of menu with prices
const menu = {
    burger: 5.0,
    fries: 3.5,
    masoup: 9.0,
    amala: 25.5,
    fried_rice: 15.9,
    chicken: 12.5,

    order: function(items){
      let total = 0
      for (let i = 0; i < items.length; i++){
        const item = items[i];
        if (this[item]) {
          total += this[item];
        } else {
          console.log(`sorry we don't have ${item} today.`);
        }
      }
      return total;
    },
};
console.log(menu.order(["burger", "fries"]));
console.log(menu.order(["burger", "fries", "fries"]));
console.log(menu.order(["amala", "chicken"]));


// Optional task 

restaurant.menu = {
  burger: 5.0,
    fries: 3.5,
    masoup: 9.0,
    amala: 25.5,
    fried_rice: 15.9,
    chicken: 12.5,
}

console.log(restaurant)

function order(items){
  let total = 0
  const validItems = []
  for (const item of items){
    if (this[item]) {
      total += this[item];
      validItems.push(item);
    } else {
      console.log(`Sorry, we do not have ${item} today.`);
    }
    return total
  } 
}

restaurant.menu.order = order;
const total = restaurant.menu.order(["burger", "fries"]);