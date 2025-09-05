import express from "express";

const app = express();
const PORT = 4000;

// Home endpoint
app.get("/", (req, res) => {
  res.send("<h1>Welcome to My First Express Server </h1>");
});

// About endpoint
app.get("/about", (req, res) => {
  res.send("Hi, my name is Daud. Im learning full-stack development!");
});

// Greet endpoint (dynamic route param)
app.get("/greet/:userName", (req, res) => {
  const userName = req.params.userName;
  res.send(`Hello, ${userName}! Nice to meet you`);
});

// Favorite endpoint (query string)
app.get("/favorite", (req, res) => {
  const fave = req.query.fave;
  if (fave) {
    res.send(`My favorite thing is ${fave}`);
  } else {
    res.send("You didn’t tell me your favorite thing");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
