import express from "express"
const app = express()

const PORT = 4000

app.get("/", (req, res) => {
    const data = fs.readFileSync("./static/sports.json")
    const sports = JSON.parse(data)
    res.json(sports)
})


app.get("/find/:sportsId", (req, res) => {
    const data = fs.readFileSync("./static/sports.json")
    const sports = JSON.parse(data)
    const sport = sports.find((s) => s.id == req.params.sportsId)
    res.send(sports)
})



app.listen(PORT, (req, res) => {
    console.log(`listening on the port ${PORT}`);
    
})
