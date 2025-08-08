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

//   challenge#1;Acessing the data
console.log(restaurant.name) ; //restaurant's name
console.log(restaurant.tags[2]) ; //third item(dine-in)
console.log(restaurant.staff.chef.name) ; //chef's name



//   challenge#2; updating the data

restaurant.address ="3rd floor,Afya Center,Kimathi Street, Nairobi"  ;     //change address

restaurant.staff.consultant={ name:"Quol", "Phone Number":"123-444-5468"} ; // adding new start to the staff

console.log(restaurant);
delete restaurant.website ; //removing/deleting website

console.log(restaurant);


//   challenge#3 , challenge#4; creating a new object and method

const menu = {
    chapati: 20.0,
    chicken: 250.0,
    chips : 100.0,
    beans: 60.0,
    beef :120.0,
    
    order (arrayOfStrings){
      let total=0;
      for(let item of arrayOfStrings ){
        total += this[item];

      }
      return total;
    }
}
console.log(menu.order(["chapati","chips"])) ;//240




//  Extra challenge#3 


restaurant.menu=  { chapati: 20.0,
chicken: 250.0,
chips : 100.0,
beans: 60.0,
beef :120.0,

order (arrayOfStrings){
  let total=0;
  for(let item of arrayOfStrings ){
    total += this[item];
    }
  
  return total;
}
}

console.log(restaurant)
console.log(restaurant.menu.order(["chapati","chips"])) ;//240