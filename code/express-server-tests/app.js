// Import express
import express from 'express';

// Create the app object using the express function
const app = express();
const PORT = 4000;

// 1. Home endpoint - returns HTML h1 header with banner
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Express Server!</h1>');
});

// 2. About endpoint - sends a short sentence about yourself
app.get('/about', (req, res) => {
  res.send('I am a web development student learning Express.js and automated testing.');
});

// 3. Greet endpoint - greets person by name using route parameters
app.get('/greet/:userName', (req, res) => {
  const { userName } = req.params;
  res.send(`Hello ${userName}, welcome to my server!`);
});

// 4. Favorite endpoint - uses query strings
app.get('/favorite', (req, res) => {
  const { fave } = req.query;
  
  if (fave !== undefined) {
    res.send(`My favorite thing is ${fave}`);
  } else {
    res.send('Please tell me your favorite thing by adding ?fave=something to the URL');
  }
});

// Extra Challenge: Handle multiple query parameters
app.get('/favorites', (req, res) => {
  const queryParams = Object.keys(req.query);
  
  if (queryParams.length === 0) {
    res.send('Please tell me your favorites by adding query parameters like ?color=blue&food=pizza');
  } else {
    const favorites = queryParams.map(key => {
      return `My favorite ${key} is ${req.query[key]}`;
    });
    res.send(favorites.join('. ') + '.');
  }
});

// Set up listener on port 4000
// Only start server if this file is run directly (not during testing)
if (process.argv[1] === new URL(import.meta.url).pathname) {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log('📡 Server started successfully!');
    console.log('Press Ctrl+C to stop the server');
  });
}

// Export app for testing
export default app;