const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection string (adjust if needed)
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// Middleware
app.use(express.json());

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}

// GET route for root path
app.get('/', (req, res) => {
  res.json({
    message: 'MongoDB Express Server is running!',
    endpoints: {
      'POST /': 'Insert a new document',
      'GET /documents': 'Get all documents',
      'GET /documents/:id': 'Get document by ID',
      'PUT /documents/:id': 'Update document by ID',
      'DELETE /documents/:id': 'Delete document by ID'
    }
  });
});

// Basic POST endpoint to add data
app.post('/', async (req, res) => {
  try {
    console.log('Request body:', req.body);
    
    // Get database and collection (creates them if they don't exist)
    const database = client.db('newDB');
    const collection = database.collection('newCollection');
    
    // Insert the document
    const result = await collection.insertOne(req.body);
    
    res.json({
      message: 'Document inserted successfully',
      insertedId: result.insertedId,
      document: req.body
    });
  } catch (error) {
    console.error('Error inserting document:', error);
    res.status(500).json({ error: 'Failed to insert document' });
  }
});

// GET endpoint to retrieve all documents (Extra challenge)
app.get('/documents', async (req, res) => {
  try {
    const database = client.db('newDB');
    const collection = database.collection('newCollection');
    
    const documents = await collection.find({}).toArray();
    
    res.json({
      message: 'Documents retrieved successfully',
      count: documents.length,
      documents: documents
    });
  } catch (error) {
    console.error('Error retrieving documents:', error);
    res.status(500).json({ error: 'Failed to retrieve documents' });
  }
});

// GET endpoint to retrieve a specific document by ID (Extra challenge)
app.get('/documents/:id', async (req, res) => {
  try {
    const database = client.db('newDB');
    const collection = database.collection('newCollection');
    
    const document = await collection.findOne({ _id: new ObjectId(req.params.id) });
    
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }
    
    res.json({
      message: 'Document retrieved successfully',
      document: document
    });
  } catch (error) {
    console.error('Error retrieving document:', error);
    res.status(500).json({ error: 'Failed to retrieve document' });
  }
});

// PUT endpoint to update a document (Extra challenge)
app.put('/documents/:id', async (req, res) => {
  try {
    const database = client.db('newDB');
    const collection = database.collection('newCollection');
    
    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Document not found' });
    }
    
    res.json({
      message: 'Document updated successfully',
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ error: 'Failed to update document' });
  }
});

// DELETE endpoint to delete a document (Extra challenge)
app.delete('/documents/:id', async (req, res) => {
  try {
    const database = client.db('newDB');
    const collection = database.collection('newCollection');
    
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Document not found' });
    }
    
    res.json({
      message: 'Document deleted successfully',
      deletedCount: result.deletedCount
    });
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).json({ error: 'Failed to delete document' });
  }
});

// Start server and connect to MongoDB
app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  await connectToMongoDB();
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\nShutting down gracefully...');
  await client.close();
  process.exit(0);
});