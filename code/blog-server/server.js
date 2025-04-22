const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.static("public")); 

app.get("/api/posts", (req, res) => {
  fs.readFile("blogData.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read blog data" });
    const posts = JSON.parse(data);
    res.json(posts);
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Blog server running at http://localhost:${PORT}`);
});
