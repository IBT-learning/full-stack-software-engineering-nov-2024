import express from 'express';
import path from 'path';

const app = express();
const PORT = 4000;

app.use(express.static('public'));

app.get('/newFile', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'public/todo.json'));

});

app.listen(PORT, () => {
  console.log(`Running on 127.0.0.1:${PORT}`);
});