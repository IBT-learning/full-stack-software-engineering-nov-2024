import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send(`<h1>Building my First Express Server! </h1>`);
});

app.get('/about', (req, res) => {
  res.send('I am currently learning backend development, particularly, building Express servers.');
});

app.get('/greet/:userName', (req, res) => {
  res.send(`Hello ${req.params.userName}`);
});

app.get('/favourite', (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.send('Favourite things not specified!');
    return;
  }
  
  const favoriteStatements = [];

  for (let key in req.query) {
    const value = req.query[key];
    favoriteStatements.push(`My favorite ${key} is ${value}.`);
  }
  
  res.send(favoriteStatements.join(' '));
});

app.listen(4000, () => {
  console.log('Server running on http://127.0.0.1:4000');
});