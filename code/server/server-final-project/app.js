import express from 'express';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(express.static('public'));

// for all the posts
app.get('/posts', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'public/blogData.json'));
});

//
app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);

  // const post = 
});

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});