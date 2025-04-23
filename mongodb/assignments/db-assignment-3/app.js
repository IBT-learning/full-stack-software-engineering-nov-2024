import express from "express";
import { dbConnect } from "./db.js";
import userRouter from "./controllers/users.js";
import recipeRouter from "./controllers/recipes.js";
import tokenValidation from "./middlewares/tokenValidation.js";

const app = express();
app.use(express.json());
app.use("/cooks", userRouter);
app.use("/recipes", tokenValidation, recipeRouter);

const PORT = 4000;

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server started on port: ${PORT}`);
});
