import express from "express"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello you called the GET endpoint!")
})
app.put("/", (req, res) => {
  res.send("Hello you called the PUT endpoint!")
})
app.post("/", (req, res) => {
  res.send("Hello you called the POST endpoint!")
})
app.delete("/", (req, res) => {
  res.send("Hello you called the DELETE endpoint!")
})

app.listen(4000, () => {
  console.log("Server listening on port 4000!")
})
