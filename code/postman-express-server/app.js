import express from 'express';

const app = express();
const PORT = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint - typically used to retrieve data
app.get('/', (req, res) => {
  res.json({
    message: 'You called the GET endpoint',
    method: 'GET',
    description: 'This endpoint is typically used to retrieve data',
    timestamp: new Date().toISOString()
  });
});

// POST endpoint - typically used to create new data
app.post('/', (req, res) => {
  res.json({
    message: 'You called the POST endpoint',
    method: 'POST',
    description: 'This endpoint is typically used to create new data',
    bodyReceived: req.body,
    timestamp: new Date().toISOString()
  });
});

// PUT endpoint - typically used to update existing data
app.put('/', (req, res) => {
  res.json({
    message: 'You called the PUT endpoint',
    method: 'PUT',
    description: 'This endpoint is typically used to update existing data',
    bodyReceived: req.body,
    timestamp: new Date().toISOString()
  });
});

// DELETE endpoint - typically used to remove data
app.delete('/', (req, res) => {
  res.json({
    message: 'You called the DELETE endpoint',
    method: 'DELETE',
    description: 'This endpoint is typically used to remove data',
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('📝 Available endpoints (all at "/"):');
  console.log('   • GET / - Retrieve data');
  console.log('   • POST / - Create data');
  console.log('   • PUT / - Update data');
  console.log('   • DELETE / - Remove data');
  console.log('\n🔧 Test these endpoints with Postman!');
  console.log('Press Ctrl+C to stop the server');
});