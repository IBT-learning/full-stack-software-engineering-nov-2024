import "dotenv/config";
import express from "express";
import fs from "fs";
import cors from "cors";
import { dbConnect } from "./db.js";
import userRouter from "./controllers/users.js";
import postRouter from "./controllers/posts.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static("public"));
app.use("/users", userRouter);
app.use("/posts", postRouter);

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
  dbConnect();
});
