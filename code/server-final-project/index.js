import express from "express";
// import cors from "cors";
import fs from "fs";


const app = express();
const PORT = 4000;

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Load blog data
const blogData = JSON.parse(fs.readFileSync("blogData.json", "utf-8"));

// Endpoints
app.get("/api/posts", (req, res) => {
  res.json(blogData);
});

app.get("/api/posts/:id", (req, res) => {
  const post = blogData.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
