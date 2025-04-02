import express from "express";

const app = express();
const PORT = 4000;

app.use(express.static("public")); // Serve static files (HTML, CSS, JS)

// Save theme preference in a cookie
app.get("/theme", (req, res) => {
  const { theme } = req.query;
  res.cookie("theme", theme, { maxAge: 1000 * 60 * 60 * 24 }); // 1 day cookie
  res.send("Theme preference saved!");
});

// Save custom background and text color preferences in cookies
app.get("/color", (req, res) => {
  const { bgColor, textColor } = req.query;
  res.cookie("bgColor", bgColor, { maxAge: 1000 * 60 * 60 * 24 }); // 1 day cookie
  res.cookie("textColor", textColor, { maxAge: 1000 * 60 * 60 * 24 }); // 1 day cookie
  res.send("Custom colors saved!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
