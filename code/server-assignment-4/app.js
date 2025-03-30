import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises"; // Import fs module for reading files asynchronously

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static("public"));

// API route to send todos.json data to the client
app.get("/api/todos", async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, "public", "todos.json"), "utf-8");
        let todos = JSON.parse(data);

        // Check if a userId is provided in the query (e.g., /api/todos?userId=1)
        if (req.query.userId) {
            todos = todos.filter(todo => todo.userId == req.query.userId);
        }

        res.json(todos); // Send filtered or full JSON response
    } catch (error) {
        console.error("Error reading todos.json:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
