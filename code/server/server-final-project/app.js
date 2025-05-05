import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

// for all the posts
app.get('/posts', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'public/blogData.json'));
});

//
app.get('/posts/:id', (req, res) => {
  const id = req.params.id;

  fs.readFile(path.join(import.meta.dirname, 'public/blogData.json'));
  console.log(id);

  // const post = 
});

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});