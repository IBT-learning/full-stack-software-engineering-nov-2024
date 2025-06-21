import express from "express";
const app = express();

// Home endpoint
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Patutechz Express Server</h1>");
});

// About endpoint
app.get("/about", (req, res) => {
  res.send({ message : "Hi! there i am Patrick Uche a MERN stack developer"});
});

// Greet User endpoint
app.get("/greet/:userName", (req, res) => {
  const { userName } = req.params;
  res.send({ message : `Hello, ${userName}! Welcome to my server.`});
});

// Favorite color and food endpoint
app.get("/favorite", (req, res) => {
  const { color, food } = req.query;
  if (color && food) {
    res.send({ message : `My favorite color is ${color}. My favorite food is ${food}`});
  } else {
    res.send({ message : "No Favourite color and food :-("});
  }
});

// Listen to Port
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app