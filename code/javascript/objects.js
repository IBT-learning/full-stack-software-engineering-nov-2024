// Challenge 1: Accessing Data
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

console.log(restaurant.name)
console.log(restaurant.tags[2])
console.log(restaurant.staff.chef.name)

for (let tag in restaurant.tags){
    console.log(tag)
}

// Challenge 2: Updating Data
restaurant.address = "19,Herbat Macurly way, Yaba, Lagos."

restaurant.staff.waiter = {
    name: "Joshua",
    "phone number": "444-564-567" 
}

delete restaurant.website
console.log("Updated Restaurant:")
console.log(restaurant)

// Challenge 3: Creating a new object
const menu = {
    burger: 5.0,
    fries: 3.5,
    "Soft Drink": 2.5,
    "Egg Roll": 1.25,
    meatpie: 4.0,
    pasta: 5.25,
    "Pizza Slice":2.25,
}

// Challenge 4: Creating an object method
menu.order = function(items){
    let total = 0
    for (let item of items){
        if (this[item] !== undefined){
            total += this[item]
        }
    }
    return total
}
console.log("Tests: ")
console.log(menu.order(["burger", "fries"]))
console.log(menu.order(["burger", "fries", "fries"]))
console.log(menu.order(["Pizza Slice", "Egg Roll", "Soft Drink"]))

restaurant.menu = menu
console.log(restaurant.menu.order(["burger", "fries", "pasta"]))
