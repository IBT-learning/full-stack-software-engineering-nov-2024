const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Sample quotations data
const quotations = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "motivation"
  },
  {
    id: 2,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "innovation"
  },
  {
    id: 3,
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    category: "programming"
  },
  {
    id: 4,
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "future"
  },
  {
    id: 5,
    text: "Sound is the vocabulary of nature.",
    author: "Pierre Schaeffer",
    category: "audio"
  }
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get all quotations
app.get('/api/quotes', (req, res) => {
  res.json(quotations);
});

// Get random quotation
app.get('/api/quotes/random', (req, res) => {
  const randomQuote = quotations[Math.floor(Math.random() * quotations.length)];
  res.json(randomQuote);
});

// Get quotations by category
app.get('/api/quotes/category/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  const filteredQuotes = quotations.filter(q => q.category === category);
  res.json(filteredQuotes);
});

app.listen(PORT, () => {
  console.log(`Quotations app running on http://localhost:${PORT}`);
});