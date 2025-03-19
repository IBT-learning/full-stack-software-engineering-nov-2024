import express from 'express';

const app = express();

app.get("/", (req, res) => {
    console.log("we got the homepage")
    res.send("We got the homepage");
})

app.get("/triple", (req, res) => {
    console.log("yes");
    res.send(req.query)
})

app.get("/double/:num", (req, res) => {
    console.log(req.params);
    res.send(req.query)
})

app.listen(4000, () => {
    console.log('Server started on port:4000 ');
})

