import express from "express";
import booksRouter from "./controllers/books.js"
import {dbConnect} from "./db.js"

const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/books", booksRouter);

app.listen(PORT, () => {
    dbConnect();
    console.log(`Server started on port ${PORT}`);
})