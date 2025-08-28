import express from 'express';

const app = express();
const PORT = 4000;

// Endpoint 1: Home route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Express Server!</h1>');
});

// Endpoint 2: About route
app.get('/about', (req, res) => {
  res.send('I am a developer learning to build web servers with Express!');
});

// Endpoint 3: Greet with URL parameter
app.get('/greet/:userName', (req, res) => {
  const userName = req.params.userName;
  res.send(`Hello, ${userName}! Welcome to my server!`);
});

// Endpoint 4: Enhanced favorite with multiple query parameters
app.get('/favorite', (req, res) => {
  const queryKeys = Object.keys(req.query);
  
  if (queryKeys.length === 0) {
    res.send('Please tell me your favorite things by adding query parameters like ?color=blue&food=pizza');
    return;
  }
  
  const favorites = [];
  
  for (const key in req.query) {
    const value = req.query[key];
    favorites.push(`My favorite ${key} is ${value}`);
  }
  
  res.send(favorites.join('. ') + '.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log('📝 Available endpoints:');
  console.log('   • GET / - Home page');
  console.log('   • GET /about - About page');
  console.log('   • GET /greet/:userName - Greet by name');
  console.log('   • GET /favorite?key=value - Show favorites');
  console.log('Press Ctrl+C to stop the server');
});