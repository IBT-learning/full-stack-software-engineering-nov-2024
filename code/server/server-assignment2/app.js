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
  const fave = req.query.fave;
  if (fave){
    res.send(`My favourite thing is ${fave}.`);
  }else{
    res.send('Favourite thing not specified!')
  }
});

app.listen(4000, () => {
  console.log('Server running on http://127.0.0.1:4000');
});