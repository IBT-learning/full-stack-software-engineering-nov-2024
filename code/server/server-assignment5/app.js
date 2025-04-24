import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(cookieParser());

app.get('/background', (req, res) => {
  const bgColor =  req.query.bgColor
  res.cookie('color', bgColor);

  console.log(`Saved cookie color: ${bgColor}`);
  res.sendStatus(200);
})

app.listen(PORT, () => {
  console.log(`Running on http://127.0.0.1:${PORT}`);
});