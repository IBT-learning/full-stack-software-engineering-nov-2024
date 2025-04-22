import express from "express";
import { dbConnect } from "./db.js";
import userRouter from "./controllers/users.js";

const app = express();
app.use(express.json());
app.use("/cooks", userRouter);

const PORT = 4000;

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server started on port: ${PORT}`);
});
