// app.js
import express from'express';
import { MongoClient, ObjectId } from'mongodb';

const app = express();
const port = 3000;

app.use(express.json());

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/'; // Use your MongoDB URI here
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('newDB');
    const collection = db.collection('newCollection');

    // POST route - insert data
    app.post('/', async (req, res) => {
      const data = req.body;
      console.log('Received data:', data);

      const result = await collection.insertOne(data);
      res.send(result);
    });

    // GET route - fetch all documents
    app.get('/', async (req, res) => {
      const docs = await collection.find().toArray();
      res.send(docs);
    });

    // GET by ID
    app.get('/:id', async (req, res) => {
      const id = req.params.id;
      try {
        const doc = await collection.findOne({ _id: new ObjectId(id) });
        if (doc) {
          res.send(doc);
        } else {
          res.status(404).send({ error: 'Document not found' });
        }
      } catch (err) {
        res.status(400).send({ error: 'Invalid ID format' });
      }
    });

    // PUT route - update by ID
    app.put('/:id', async (req, res) => {
      const id = req.params.id;
      const updateData = req.body;

      try {
        const result = await collection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updateData }
        );
        res.send(result);
      } catch (err) {
        res.status(400).send({ error: 'Update failed' });
      }
    });

    // DELETE route - delete by ID
    app.delete('/:id', async (req, res) => {
      const id = req.params.id;

      try {
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        res.send(result);
      } catch (err) {
        res.status(400).send({ error: 'Delete failed' });
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

run();
