import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import recipeRoutes from "./routes/recipes.js";
import userRoutes from "./routes/users.js";

// express app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/recipes", recipeRoutes);
app.use("/api/user", userRoutes);
//connect to databas
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
