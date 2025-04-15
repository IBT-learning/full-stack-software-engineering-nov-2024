import express from 'express';
import {ObjectId, MongoClient} from "mongodb"

const app = express();
app.use(express.json());
const PORT = 4000;
const client = new MongoClient("mongodb://localhost:27017/");

client.connect();

const getCollection = async () => {
    const db = client.db("newDB");
    const collection  = await db.collection("newCollection");

    return collection;
}

app.post("/", async(req, res) => {

   try {
    const collection = await getCollection();


    if (req.body && Object.keys(req.body).length > 0) {
        const newData = await collection.insertMany(req.body);
        res.status(200).send("done");
    } else {
        res.status(401).send("Invalid collection");
    }

   } catch (error) {
       console.log(error)
   }

})

app.get("/", async(req, res) => {
    try {
        const collection = await getCollection();

        const allDocuments = await collection.find().toArray();

        res.status(200).send(allDocuments);
    } catch (error) {
        console.log(error)
    }
})

app.get("/find/:id", async(req, res) => {
    try {
        const collection = await getCollection();
        const id = req.params.id;

        const result = await collection.find({_id: new ObjectId(id)}).toArray();
        res.status(200).send(result[0]);

    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log("running on " + PORT)
})

