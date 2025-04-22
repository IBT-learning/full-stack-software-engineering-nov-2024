
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 4000;

app.use(express.json());

const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

client.connect()
  .then(() => {
    console.log("Connected to MongoDB");

    app.post('/', async (req, res) => {
      const data = req.body;
      console.log("Received:", data);

      try {
        const db = client.db("newDB"); 
        const collection = db.collection("newCollection"); 

        const result = await collection.insertOne(data);
        res.status(201).json({ message: 'Data inserted', id: result.insertedId });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to insert data' });
      }
    });

    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB:", err);
  });
