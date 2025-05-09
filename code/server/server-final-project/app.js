import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/api/posts', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'public/blogData.json'));
});

app.get('/posts', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'public/index.html'));
})

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});