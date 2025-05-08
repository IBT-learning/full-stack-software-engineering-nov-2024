import express from "express";

const app = express();
const Port = 4000


app.get("/", (req, res) => {
  res.send("You called the GET endpoint");
});
app.post("/", (req, res) => {
  res.send("You called the POST endpoint");
});
app.put("/", (req, res) => {
  res.send("You called the PUT endpoint");
});
app.delete("/", (req, res) => {
  res.send("You called the DELETE endpoint");
});

app.listen(Port, () => {
  console.log(`Server Started. Listening on Port ${Port}`);
});
