import express from 'express';

const app = express();
const PORT = 3000;



app.listen(PORT, () => {
  console.log(`Running on http://127.0.0.1:${PORT}`);
});