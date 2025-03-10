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
  //CHALLENGE ONE:Accessing Data
  console.log(restaurant.name);
  console.log(restaurant.tags[2]);
  console.log(restaurant.staff.chef.name);
  for(tag of restaurant.tags){
    console.log(tag);
}

//CHALLENGE TWO: Updating Data
restaurant.address=["1, iyanapaja street , abule-egba bustop, ikirun."]
console.log(restaurant.address);
restaurant.staff["Accountant"]={
        name: "Hassan Sherifah",
        "Phone number": "+234-9068-65586-65",
    };


delete restaurant.website;
console.log(restaurant);
  
//CHALLENGE THREE:Creating a new object
const menu = {
    jollofrice: 1000.00,
    "chicken and chips": 5000.00,
    amala:500.00,
    beans:300.00,
    //CHALLENGE FOUR:Creating an object method
    order:function (items){
        let total = 0;
        for(item of items){
            if (this[item]){
              total += this[item];
               
            }
        }
        return total;
    }
  };
  

restaurant.menu = menu;
console.log(restaurant);
console.log(restaurant.menu.order(["jollofrice","amala","beans"]));
console.log(menu.order(["jollofrice","amala","akara"]));//it ignores akara

  