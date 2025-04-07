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



// challenge 1
console.log(restaurant.name)
console.log(restaurant.tags[2])
console.log(restaurant.staff.chef.name)

for (tag of restaurant.tags){
    console.log(tag)
}

// Challenge 2
restaurant.address = "Teshie Nungua Estates Cactus St"
restaurant.staff["shareholder"] =  {
    name: "Nathan Turkson",
    "phone number": "+233 43 5 4 34 23"
}


delete restaurant.website


console.log(restaurant)