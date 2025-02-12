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


//   //Challenge 1
//   console.log(restaurant.name); // Accessing the restaurant's name
//   console.log(restaurant.tags[2]); // Assessing the third item ("dine-in") from the list of tags
//   console.log(restaurant.staff.chef.name); // Assessing the Chef name

//   // Using loop to console log each of the tags
//   tagValue = restaurant.tags
//   for (tag of tagValue){
//     console.log(tag);
//   }

 
  //Challenge 2 Updating Data

  restaurant.address = "90 Brown Road, Surulere, Lagos" // Updating address
  //Adding another staff
  restaurant.staff.director = { 
    name: "Amarachi Odunsi",
    "phone number": "234-903-999-8883",
  }
    
  delete restaurant.website // Deleting website

// console.log(restaurant);


//Challenge 3 Creating new objects
const menu = {
    grilledFish: 9,
    plantain: 8,
    friedRice: 10.5,
    pepperSoup: 30,



    //Challenge 4 Creating object methods
    
    order(orderItem){
        let sum = 0
        for (total of orderItem){
            if(this[total] !== undefined){
                sum += this[total]
            }
        }
        return sum 
    }
        
}
    console.log(menu);
    console.log(menu.order(['grilledFish', 'friedRice','plantain','pepperSoup']));
    console.log(menu.order(['grilledFish', 'friedRice','pepperSoup']));


    // Extra Challenge
    
  
  

  
  

 
  
  
  
  
  