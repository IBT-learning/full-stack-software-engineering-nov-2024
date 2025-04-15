import express from 'express';
import {mongoose} from "../db.js"

import Book from "../models/book.js";

const router = express.Router();

router.get("/", async(req, res) => {
    // res.send("working")
    const books =await Book.find();
    res.json(books);
    // res.send(books);
})

router.get("/find/:bookId", async(req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.bookId)) {
        const book = await Book.findOne({_id: req.params.bookId});
        book ? res.json(book) : res.status(404).send('Book Not Found');
    } else {
        res.status(404).send('Invalid Book Id');
    }
})

router.post("/", async(req, res) => {
    // if (req.body.title && req.body.author) {
    // const books = await Book.insertOne({
    //     title: req.body.title,
    //     author: req.body.author,
    // });
    // res.json(books);
    // } else {
    //     res.send("Invalid Entry");
    // }

    try {
    const newBook =await new Book(req.body);
    await newBook.save();
        console.log(newBook);
        res.send(`added ${req.body.title} by ${req.body.author}`);

    } catch (err) {
        res.status(422).send("missing fields");
    }
})

router.get("/:bookId", async(req, res) => {
   try {
   const bookInfo = req.params.bookId;
   const books = await Book.find({_id: bookInfo});
   res.json(books);

   } catch (err) {
       res.status(422).send(err);
   }
})

router.put("/update/:bookId", async(req, res) => {

    const filter = {_id: req.params.bookId};
    const body = req.body;
    const options = {
        // multipleCastError: false,
        strict: true,
        upsert: true,
        // timestamps: false,
    }

    try {

        if (mongoose.Types.ObjectId.isValid(req.params.bookId)) {
        const book =  await Book.updateOne(filter, body, options);
        res.json(book);
        } else {
            res.status(404).send('Invalid Book Id');
        }

    } catch (err) {
        res.status(422).send("missing fields");
        console.log(err)
    }
})


router.delete("/delete/:bookId", async(req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.bookId)) {
    try {
        const bookFile = req.params.bookId;
      const book = await Book.deleteOne({_id: bookFile});
        res.json(book);
    } catch (err) {
        console.log(err)
    }
    }
})

export default router;