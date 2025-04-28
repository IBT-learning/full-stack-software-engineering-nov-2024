import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./db.js";
import recipeRouter from "./controllers/recipes.js";
import userRouter from "./controllers/users.js";
import tokenValidation from "./middlewares/tokenValidation.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
// app.use("/recipes", recipeRouter); // all recipe routes prefixed with /recipes
app.use("/users", userRouter);     // all user routes prefixed with /users
app.use("/recipes", tokenValidation, recipeRouter)
// app.use("/auth", userRouter)


// Start the server
app.listen(PORT, () => {
  dbConnect();
  console.log(`[server]: listening on port ${PORT}`);
});
