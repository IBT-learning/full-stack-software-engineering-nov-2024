import express from "express";
import cookieParser from "cookie-parser"; // Allows reading cookies

const app = express();
const PORT = 4000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Enables reading cookies

app.get("/cookie", (req, res) => {
    res.cookie("newVal", "this is a new cookie", {
        maxAge: 3000,
    });
    res.send("sent!")
})

app.get("/color", (req, res) => {
    try {
        const bgColor = req.query.bgColor || "ffffff";
        console.log("Setting cookie:", bgColor);

        res.cookie("color", bgColor, {
            maxAge: 60 * 60 * 1000, // 1 hour
            httpOnly: false,
            sameSite: "Lax",
        });
        res.send("sent!")
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Error setting cookie");
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})