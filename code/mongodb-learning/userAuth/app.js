import "dotenv/config";
import express from "express";
import { dbConnect } from "./db.js";
import router from "./controllers/users.js";
import booksRouter from "./controllers/books.js";
import tokenValidation from "./middlewares/tokenValidation.js";

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use("/auth", router);
app.use("/books", tokenValidation, booksRouter);

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server started on port ${PORT}`);
});
