import express, {json, query} from 'express';
import fs from 'fs';

const app = express();

const port = 4000;

app.get("/", (req, res) => {
    // res.send("Welcome");
    const data = fs.readFileSync("./static/books.json");
    const books  = JSON.parse(data);
    // res.send( books );
})

app.get("/find/:bookid", (req, res) => {
    const data = fs.readFileSync("./static/books.json");
    const books = JSON.parse(data);
    const l = req.params.bookid;
    const book = books.find(book => book.id == l);
    res.send(book);
    console.log("gaga")
})

app.post("/", (req, res) => {
    // app.use(express.json());
    const data = fs.readFileSync("./static/books.json");
    const books  = JSON.parse(data);

    books.push(req.body);

    // fs.writeFileSync("./static/books.json", JSON.stringify(books));

});

// app.put("/books/:bookid", (req, res) => {
//     app.use(express.json());
//     const data = fs.readFileSync("./static/books.json");
//     const books = JSON.parse(data);
//     // console.log(books);
//
//     const id = req.params.bookid;
//     const book = books.find(book => book.id == id);
//
//     console.log(book)
//     const sortedBook = books.find(item => item.title.toLowerCase() == book.title.toLowerCase())
//     const index = books.findIndex((item) => item.id == sortedBook.id);
//     // console.log(index)
//
//     const newAddition = books.splice(0, index === 0 ? index + 1 : 0, {id: 1, title: "Hell and Back", author: "Marthew Cook"});
//
//     fs.writeFileSync("./static/books.json", JSON.stringify(books));
//
//     res.send("successfully updated books");
// })


app.put("/update/:bookId", (req, res) => {
    app.use(express.json());
    const data = fs.readFileSync("./static/books.json");
    const books = JSON.parse(data);
    const book = books.find((b) => b.id == req.params.bookId);

    const newBook = Object.assign(book, req.body);
    // console.log(newBook);
})


app.delete("/delete/:bookId", (req, res) => {
    app.use(express.json());
    const data = fs.readFileSync("./static/books.json");
    const books = JSON.parse(data);

    // const book = books.find((item) => item.id == req.params.bookId);
    // const book = books[books.length - 1];
    const book = books.splice(0, books.length - 1);

    fs.writeFileSync("./static/books.json", JSON.stringify(book));
    res.send("done");
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})