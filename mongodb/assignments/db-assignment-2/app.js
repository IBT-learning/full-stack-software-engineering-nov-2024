import express from 'express';
import recipeRouter from "./controllers/recipe.js";
import {dbConnect} from "./db.js";

const app = express();
const PORT = 4000;

// Middleware for parsing JSON
app.use(express.json());

// Mount the recipe router
app.use("/recipes", recipeRouter);

// // Add a simple test route on the main app
// app.get("/", (req, res) => {
//     try {
//         res.send("Hello");
//     } catch (e) {
//         console.log(e);
//     }
// });

app.listen(PORT, async () => {
    await dbConnect();
    console.log(`Server started on port http://localhost:${PORT}`);
});