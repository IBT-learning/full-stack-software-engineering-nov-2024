import express from "express"
import { MongoClient, ObjectId} from "mongodb"

const app = express()
const port = 4000

app.use(express.json())


const client = new MongoClient("mongodb://localhost:27017/")
client.connect()


app.post('/', async (req, res) => {
    try {
        const body = req.body
        console.log("Request Body:", body);

        const db = client.db("newDB")
        const collection = db.collection("newCollection")

        const result = await collection.insertMany(body)

        res.status(201).json({ message: "Document inserted!", result})
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "Something went wrong!"})

    }
})


// Get all documents
app.get("/", async (req, res) => {
    try {
        const db = client.db("newDB")
        const collection = db.collection("newCollection")
        const documents = await collection.find().toArray()
        res.status(200).json(documents)
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch documents"})
    }
})

// get document by id
app.get("/find/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const db = client.db("newDB");
      const collection = db.collection("newCollection");
  
      const document = await collection.findOne({ _id: new ObjectId(id) });
  
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }
  
      res.status(200).json(document);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch document", error: err });
    }
});

//delete a document
app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const db = client.db("newDB");
    const collection = db.collection("newCollection")

    const deleteResult = await collection.deleteOne({ _id: new ObjectId(id) })

    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json({ message: "Document deleted", result: deleteResult });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete document", error:err})
  }
})
  
 // PUT - Update a document by ID
app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const db = client.db("newDB");
    const collection = db.collection("newCollection");

    const updateResult = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json({ message: "Document updated", result: updateResult });
  } catch (err) {
    res.status(500).json({ message: "Failed to update document", error: err });
  }
});





app.listen(port, () => {
    console.log(`Server running at ${port}`)
})