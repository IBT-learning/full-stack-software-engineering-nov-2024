import express from "express";
import cookieParser from "cookie-parser"; // Allows reading cookies

const app = express();
const PORT = 4000;
app.use(cookieParser());
app.use(express.static("public"));


app.get("/color", (req, res, next) => {
    const bgColor = req.query.bgColor || "ffffff";

    try {
        res.cookie("background", bgColor, {
            maxAge: 60 * 60 * 1000,
            httpOnly: false,
            sameSite: "Lax",
        })
        console.log("Setting cookie:", bgColor);
        res.send("done");
    } catch (e) {
        console.log(e)}
    // res.status(500).send("Error setting cookie");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);``
})
