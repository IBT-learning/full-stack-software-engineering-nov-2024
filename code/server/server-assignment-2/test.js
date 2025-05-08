const request = {
    name: "Jeff",
    age: 23
}

for(let user in request){
    console.log(user)
    console.log(request[user])
}