import express from "express";

const app = express();

const PORT = 4000;

// / Route
app.get("/", (req, res) => {
  res.send("<h1>This is your home page </h1>");
});

// /about Route
app.get("/about", (req, res) => {
  res.send(
    "<p>My name is Nathan Turkson. Sometimes I question my love for software engineering. However on those difficult days I try to stay positive lol </p>"
  );
});

// /greet/:Username
app.get("/greet/:username", (req, res) => {
  const { username } = req.params;
  res.send(`Hello ${username}. How are you doing today.`);
});

app.get("/favorite", (req,res)=>{
  const {fav} = req.query
  if (!fav){
    return res.send("I don't have a favourite thing to do")
  }
  res.send(`My favorite thing is ${fav}. `)
})

// Extra Challenge 
app.get("/favorites", (req,res)=>{
    let favString = ""
    
    const reqQueryObject = req.query
    console.log(reqQueryObject)
    for (let queryProperty in reqQueryObject){
    favString += `My favorite ${queryProperty} is ${reqQueryObject[queryProperty]}. `;
    }
    res.send(favString)
})

app.listen(PORT, () => {
  console.log(`Server started! Listening on PORT ${PORT}`);
});



