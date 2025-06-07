import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./db.js";
import recipeRouter from "./controllers/recipes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Only recipes, without token validation
app.use("/recipes", recipeRouter);

// Start the server
app.listen(PORT, () => {
  dbConnect();
  console.log(`[server]: listening on port ${PORT}`);
});
