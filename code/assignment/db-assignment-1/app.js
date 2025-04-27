import express from 'express';
import dbConnect from './db/db.js';
import { MongoClient, ObjectId } from 'mongodb';
const uri = "mongodb://localhost:27017/"

const app = express();
const PORT = 4001;
const client = new MongoClient(uri)

app.use(express.json());


app.post("/", async (req, res) => {
    try {
        console.log("Received data:", req.body);
        const db = client.db("newDB");
        const collection = db.collection("newCollection");
        const result = await collection.insertOne(req.body);
        console.log("Data ID inserted:", result.insertedId);
        res.send("Data inserted successfully");
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data");
    }
});

// Get all data from the collection
app.get("/data", async (req, res) => {
    try {
        const db = client.db("newDB");
        const collection = db.collection("newCollection");
        const result = await collection.find({}).toArray();
        console.log("Data fetched successfully:", result);
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});

// Get data by ID
app.get("/data/:id", async (req, res) => {
    try {
        const db = client.db("newDB");
        const collection = db.collection("newCollection");
        const id = req.params.id;
        const result = await collection.findOne({ _id: new ObjectId(id) });
        if (result) {
            console.log("Data fetched successfully:", result);
            res.json(result);
            res.send("Data fetched successfully");
        } else {
            res.status(404).send("Data not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});



dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});