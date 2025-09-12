import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json()); // middleware for JSON

// connection string (local MongoDB)
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// connect once at startup
async function run() {
  try {
    await client.connect();
    console.log(" Connected to MongoDB");

    const db = client.db("newDB");
    const collection = db.collection("newCollection");

    // POST: insert data
    app.post("/", async (req, res) => {
      const doc = req.body;
      const result = await collection.insertOne(doc);
      res.json({ insertedId: result.insertedId, data: doc });
    });

    // GET: fetch all docs
    app.get("/", async (req, res) => {
      const docs = await collection.find().toArray();
      res.json(docs);
    });

    // GET by id
    app.get("/:id", async (req, res) => {
      const { ObjectId } = await import("mongodb");
      try {
        const doc = await collection.findOne({ _id: new ObjectId(req.params.id) });
        if (!doc) return res.status(404).json({ error: "Not found" });
        res.json(doc);
      } catch (err) {
        res.status(400).json({ error: "Invalid ID format" });
      }
    });

    app.listen(4000, () => console.log(" Server running on http://localhost:4000"));
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);
