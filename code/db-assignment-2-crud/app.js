import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import recipeRoutes from "./routes/recipes.js";

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

//connect to databas
mongoose
  .connect("mongodb://127.0.0.1:27017/Foods")
  .then((result) => {
    // listen for request
    app.listen(4000, () => {
      console.log("connected to db and listening on port", 4000);
    });
  })
  .catch((err) => console.log(err));
