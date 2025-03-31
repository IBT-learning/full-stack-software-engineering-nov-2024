
import express from "express";
const app = express();
const PORT = 4000;

// Home endpoint
app.get("/", (req, res) => {
    res.send("<h1>Welcome to My First Express Server!</h1>");
});

// About endpoint
app.get("/about", (req, res) => {
    res.send("I am a web developer learning Express.js!");
});

// Greet endpoint
app.get("/greet/:userName", (req, res) => {
    const { userName } = req.params;
    res.send(`Hello, ${userName}! Welcome to my Express server.`);
});

// Favorite endpoint
app.get("/favorite", (req, res) => {
    const queryParams = req.query;
    const keys = Object.keys(queryParams);
    
    if (keys.length === 0) {
        res.send("You didn't tell me your favorite thing!");
        
    }else{
    
    const favorites = keys.map(key => `My favorite ${key} is ${queryParams[key]}.`).join(" ");
    res.send(favorites);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

