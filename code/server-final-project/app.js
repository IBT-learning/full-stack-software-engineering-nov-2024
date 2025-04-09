import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

// Single endpoint for all posts
app.get("/api/posts", async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, "data", "posts.json"));
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

app.listen(PORT, () => {
  console.log(`TechBlog server running on http://localhost:${PORT}`);
});


