import express from "express";
import { MongoClient } from "mongodb";
import booksRoute from "./routes/booksRoute.js";
const Port = 4000;
const app = express();



app.use("/books", booksRoute);

app.get("/", (req, res) => {
  res.send("This is the main route");
});

app.listen(Port, () => {
  console.log(`Server started listening on Port ${Port}`);
});
