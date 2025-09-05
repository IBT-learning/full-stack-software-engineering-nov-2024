import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


// Serve custom todos JSON
app.get("/todos", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "todos.json"));
});
