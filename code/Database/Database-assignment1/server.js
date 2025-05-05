import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());

const client = new MongoClient('mongodb://localhost:27017/');

const connectToDatabase = async () => {
  try{
    await client.connect();
    console.log('Connected to database successfully!');

    app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
    });
  }catch (err){
    console.error('Error connecting to database: ', err);
    process.exit(1);
  }
};

app.post('/', async (req, res) => {
  try{
    const db = client.db('newDB');
    const collection = db.collection('newCollection');
    const insertedData = await collection.insertOne(req.body);
    res.status(201).json({'success': 'Successfully inserted data to database!'});
  }catch(err){
    console.error('Error inserting data: ', err);
    res.status(500).json({'Error': 'Cannot insert data to database!'});
  }
});

app.get('/', async (req, res) => {
  try{
    const db = client.db('newDB');
    const collection = db.collection('newCollection');
    const data = await collection.find().toArray();
    res.json(data);
  }catch (err){
    console.error('Error getting data: ', err);
    res.status(500).json({'Error': 'Cannot get data from database!'});
  }
});

app.get('/:id', async (req, res) => {
  try{
    const db = client.db('newDB');
    const collection = db.collection('newCollection');
    const id = req.params.id;

    // check ObjectId format
    if(!ObjectId.isValid(id)){
      return  res.status(400).json({'Error': 'Invalid ID format!'});
    }

    const dataPoint = await collection.findOne({_id: new ObjectId(id)});

    // check if that id exists
    if (!dataPoint){
      return res.status(404).json({'Error': 'Requested document not found in database.'})
    }

    res.json(dataPoint);
  }catch (err){
    console.error('Error getting data: ', err);
    res.status(500).json({'Error': 'Cannot get data from database!'});
  }
});

connectToDatabase();