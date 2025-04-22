import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import { mongoose } from "../db.js";
import Book from "../models/book.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const client = new MongoClient("mongodb://localhost:27017/");
client.connect();

const getCollection = () => {
  const db = client.db("books");
  const collection = db.collection("books");
  return collection;
};

// const JWT_KEY = "Secret_key";

router.get("/", async (req, res) => {
  try {
    const books = await getCollection().find().toArray();
    // console.log(books);
    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

router.get("/find/:bookId", async (req, res) => {
  try {
    const db = client.db("mongo-1");
    const collection = getCollection();

    if (ObjectId.isValid(req.params.bookId)) {
      const book = await collection.findOne({
        _id: new ObjectId(req.params.bookId),
      });
      res.status(200).json(book);
    } else {
      res.status(404).json("Invalid Book Id");
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

router.post("/", async (req, res) => {
  try {
    const collection = getCollection();

    const { title, author } = req.body;

    const result = await collection.insertOne({
      title,
      author,
    });

    console.log(result);
    res.status(500).send("done");
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed post new book" });
  }
});

export default router;
