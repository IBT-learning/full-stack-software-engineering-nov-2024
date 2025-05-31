import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());

const PORT = 4000;
const url = "mongodb://127.0.0.1:27017/Foods";
const client = new MongoClient(url);

const startServer = async () => {
  try {
    await client
      .connect()
      .then((result) => {
        // listen for request
        app.listen(PORT, () => {
          console.log("connected to db and listening on port", PORT);
        });
      })
      .catch((err) => console.log(err));
    console.log("Connected to MongoDB");

    // app.listen(PORT, () => {
    //   console.log(`listening on port ${PORT}`);
    // });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

startServer();

app.post('/', async (req, res) => {
  const {name, price, description} = req.body;
  console.log(req.body);

  const db = client.db('newDB');
  const collection = db.collection('newCollection');

  const result = await collection.insertOne({name, price, description});
  console.log("Document inserted:", result.insertedId);

  res.status(201).json({ message: "Document added", id: result.insertedId });
});


