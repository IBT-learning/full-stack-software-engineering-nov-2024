import express from "express"
const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/h1', (req, res) => {
    res.send(`<h1>The begining of a new Era</h1>`)
})

app.get('/About', (req, res) => {
    res.send("I am goal oriented and dedicated person");    
})

app.get('/Greet/:Username', (req, res) => {
    const RealName= 'John'
    const Greet = req.params.Username
    res.send(`${RealName} is the same as ${Greet}`)
})

app.get('/Favorite', (req, res) => {
    if (req.query.fave) {
        const fave = req.query.fave
        res.send (`My favourite things is ${fave}`)
    } else {
        res.send('My favourite thing is praying'); 
    }
})

app.listen(4000, () => {
    console.log(`listening at port 4000`);
})

