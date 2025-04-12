import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
app.use(cors());

const app = express();
const PORT = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

// Single endpoint for all posts
app.get("/api/posts", async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, "data", "posts.json"), "utf-8");
    const posts = JSON.parse(data);
    
    if (req.query.userId) {
      const userPosts = posts.filter(post => post.user.id === parseInt(req.query.userId));
      return res.json(userPosts);
    }
    
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to load posts" });
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, "data", "users.json"), "utf-8");
    const users = JSON.parse(data);
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to load users" });
  }
});



app.listen(PORT, () => {
  console.log(`TechBlog server running on http://localhost:${PORT}`);
});


