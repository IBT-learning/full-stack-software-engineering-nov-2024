import express from 'express';

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});