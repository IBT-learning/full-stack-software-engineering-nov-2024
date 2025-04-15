import express from 'express';
import booksRouter from "./controllers/books.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/books", booksRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})