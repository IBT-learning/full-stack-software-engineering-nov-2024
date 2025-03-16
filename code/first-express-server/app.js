// Import Express (ES Module)
import express from "express";

// Create an Express application
const app = express();

const PORT = 4000;

// Home Route ("/")
app.get("/", (req, res) => {
    res.send("<h1>Welcome to My Express Server</h1>");
});

// About Route ("/about")
app.get("/about", (req, res) => {
    res.send("I am a passionate web developer learning Express.js!");
});

// Greet Route ("/greet/:userName")
app.get("/greet/:userName", (req, res) => {
    const { userName } = req.params;
    res.send(`Hello, ${userName}! Welcome to my server.`);
});

// Favorite Route ("/favorite")
app.get("/favorite", (req, res) => {
    const { fave } = req.query;

    if (fave) {
        res.send(`My favorite thing is ${fave}.`);
    } else {
        res.send("You didn't provide a favorite thing!");
    }
});

// Extra Challenge: Handle Multiple Favorite Things
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

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
