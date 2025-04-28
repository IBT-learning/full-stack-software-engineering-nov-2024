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

app.use("/users", userRouter); 
app.use("/recipes", tokenValidation, recipeRouter)



// Start the server
app.listen(PORT, () => {
  dbConnect();
  console.log(`[server]: listening on port ${PORT}`);
});
