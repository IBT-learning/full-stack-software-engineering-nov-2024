import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import posts from "./data/posts.json" with { type: "json" };

const server = fileURLToPath(import.meta.url);
const serverFinalProj = path.dirname(server);

const app = express();
const PORT = 4000;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(serverFinalProj, "public")));

// Blog posts endpoint
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
