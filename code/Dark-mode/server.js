const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const port = 4000;

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/save-cookie', (req, res) => {
  const { theme } = req.query;
  if (theme) {
    res.cookie('theme', theme, { maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.send(`Theme saved: ${theme}`);
  } else {
    res.send('No theme provided.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
