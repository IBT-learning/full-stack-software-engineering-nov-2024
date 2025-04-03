import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// ✅ Corrected route for setting the theme
app.get("/set-theme", (req, res) => {
    const theme = req.query.theme; // Get theme from query

    if (theme) {
        res.cookie("theme", theme, { maxAge: 24 * 60 * 60 * 1000, httpOnly: false });
        res.json({ message: "Theme saved" }); // ✅ Ensure JSON response
    } else {
        res.status(400).json({ error: "Theme is required" }); // ✅ Use json() for errors
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
