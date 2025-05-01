import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
client.connect();
const app = express();
const Port = 4000;

const getCollection = () => {
  try {
    const db = client.db("newDB");
    const collection = db.collection("newCollection");
    return collection;
  } catch (error) {
    console.warn(`Database error: ${error}`);
  }
};

app.use(express.json());

app.get("/", async (req, res) => {
  const collectionData = await getCollection().find().toArray();
  console.log(collectionData);
  res.send(collectionData);
});

app.get("/:id", async (req, res) => {
const specifcbook = await getCollection().findOne({_id:new ObjectId(req.params.id)})
  console.log(specifcbook);
  res.json(specifcbook);
});

app.post("/", async (req, res) => {
  const requestBody = req.body;

  const newEntry = await getCollection().insertOne(requestBody);

  console.log(requestBody);
  res.send(requestBody);
});

app.listen(Port, () => {
  console.log(`Server started. Listening on Port ${Port}`);
});
