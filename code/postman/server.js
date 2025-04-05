const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('You called the GET endpoint');
});

app.post('/', (req, res) => {
  res.send('You called the POST endpoint');
});

app.put('/', (req, res) => {
  res.send('You called the PUT endpoint');
});

app.delete('/', (req, res) => {
  res.send('You called the DELETE endpoint');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
