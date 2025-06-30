import express from "express";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Express Server</h1>");
});

app.get("/about", (req, res) => {
  res.send("I am a passionate web developer learning Express.js!");
});

app.get("/greet/:userName", (req, res) => {
  const { userName } = req.params;
  res.send(`Hello, ${userName}! Welcome to my server.`);
});

app.get("/favorite", (req, res) => {
  const { fave } = req.query;

  if (fave) {
    res.send(`My favorite sport is ${fave}.`);
  } else {
    res.send("You didn't provide a favorite thing!");
  }
});


app.get("/favorites", (req, res) => {
  const favorites = req.query;

  if (Object.keys(favorites).length === 0) {
    return res.send("You didn't provide any favorites!");
  }

  const response = Object.entries(favorites)
    .map(([key, value]) => `My favorite ${key} is ${value}.`)
    .join(" ");

  res.send(response);
});

// app.get("/favorites", (req, res) => {
//   const favorites = req.query;

//   // If no favorites are provided, send a JSON error message
//   if (Object.keys(favorites).length === 0) {
//     return res.json({ message: "You didn't provide any favorites!" });
//   }

//   // Otherwise, send the favorites back as JSON
//   res.json({ favorites });
// });


app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  res.send(`Received: Name - ${name}, Email - ${email}, Message - ${message}`);
});

export default app;
