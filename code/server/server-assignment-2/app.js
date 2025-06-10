import express, {query} from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send(`<div>
<h1>Hello World!</h1>
<p style="text-align: center">Welcome to my home page</p>
</div>`);
})

app.get('/about', (req, res) => {
    res.send({message: "This is me in my little world; lover of football and more."})
    // res.send("This is me in my little world; lover of football and more.")
})

app.get('/greet/:username', (req, res) => {
    res.send({message:`Welcome, ${req.params.username}`});
})
app.get("/favorite?", (req, res) => {
    const favouriteThing = req.query.fave;
    // if (favouriteThing) {
    //     res.send(`My favorite thing is ${favouriteThing}`);
    // } else {
    //     res.send("Please tell us your favourite hobby?")
    // }
    const queryValues = Object.values(req.query);

    const queryEntries = Object.entries(req.query); // Get key-value pairs from query

    if (queryEntries.length > 0) {
        const response = queryEntries.map(([key, value]) => `My favorite ${key} is ${value}`).join(", ");
        res.send({message: response});
    } else {
        res.send({message: "Please provide some favorite things in the query parameters."});
    }
})

export default app;