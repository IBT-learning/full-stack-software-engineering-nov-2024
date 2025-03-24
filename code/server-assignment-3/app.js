import express from "express";

const app = express();
const PORT = 3000;

// Define routes for different HTTP methods
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


