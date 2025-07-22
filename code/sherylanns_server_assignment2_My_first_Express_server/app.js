// Step 1: Import express
const express = require('express');

// Step 2: Create app object
const app = express();

// Step 3: Setup listener on port 4000
app.listen(4000, () => {
  console.log(' Server is running at http://localhost:4000');
});

// Route 1: Home page - /
app.get('/', (req, res) => {
  res.send('<h1> Welcome to My First Express Server!</h1>');
});

// Route 2: About page - /about
app.get('/about', (req, res) => {
  res.send(' Hi, I am Sheryl and I love web development!');
});

// Route 3: Greeting with parameter - /greet/:userName
app.get('/greet/:userName', (req, res) => {
  const name = req.params.userName;
  res.send(` Hello, ${name}! Welcome to the site.`);
});

// Route 4: Favorite with query string - /favorite?fave=something
app.get('/favorite', (req, res) => {
  const fave = req.query.fave;
  if (fave) {
    res.send(` My favorite thing is ${fave}.`);
  } else {
    res.send(' You didn’t tell me your favorite thing!');
  }
});

// EXTRA: Handle multiple query strings like ?color=blue&food=pizza
app.get('/favorite-multi', (req, res) => {
  const queries = req.query;

  if (Object.keys(queries).length === 0) {
    return res.send(' You didn’t provide any favorites!');
  }

  let responseText = '';
  for (const key in queries) {
    responseText += `My favorite ${key} is ${queries[key]}. `;
  }

  res.send(responseText.trim());
});
