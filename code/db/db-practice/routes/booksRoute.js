import express from "express";
import { Router } from "express";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
client.connect();

const route = Router();

route.get("/", async (req, res) => {
  const db = client.db("BooksAPI");
  const collection = db.collection("books");
  const booksCursor = collection.find();
  const books = await booksCursor.toArray();
  console.log(books);
  res.send("Get all Books");
});

route.get("/find/:id", async (req, res) => {
  const db = client.db("BooksAPI");
  const collection = db.collection("books");
  const book = await collection.findOne({ _id: new ObjectId(req.params.id) });
  console.log(book);
  res.json(book)
  res.send("Get Specific Book");
});

route.get("/:id", (req, res) => {
  res.send("Geting Specific Book");
});

export default route;
