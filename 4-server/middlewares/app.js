import express from "express"

const app = express()

const port = 4000;

function logTime(req, res, next) {
    const now = new Date().toLocaleTimeString();
    console.log("Server started: " + now);
    next();
}

function beansTime(req, res, next) {
    const now = new Date().toLocaleTimeString();
    console.log("beans time: " + now);
    next();
}


app.use(logTime);
app.use("/beans", beansTime);

app.get('/', (req, res, next) => {
    res.send("message sent");
})

app.get('/beans', (req, res, next) => {
    res.send("beans time");
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});