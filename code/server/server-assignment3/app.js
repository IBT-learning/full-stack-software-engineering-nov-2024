import express from 'express';

const app = express(); 
const PORT = 4000; 

app.get('/', (req, res) => {
  res.send(`You have called the GET endpoint`);
});

app.post('/', (req, res) => {
  res.send(`You have called the POST endpoint`);
});

app.put('/', (req, res) => {
  res.send(`You have called the PUT endpoint`);
}); 

app.delete('/', (req, res) => {
  res.send(`You have called the DELETE endpoint`);
});

app.listen(PORT, () => {
  console.log(`Running on 127.0.0.1:${PORT}`);
});