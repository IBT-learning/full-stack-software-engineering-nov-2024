const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Broadcast Engineering",
    content: "Broadcast engineering combines technical expertise with creative vision...",
    author: "Henry Ogun",
    date: "2024-01-15",
    category: "broadcast-engineering",
    tags: ["audio", "broadcasting", "engineering"]
  },
  {
    id: 2,
    title: "Full-Stack Development Journey",
    content: "My journey from audio engineering to full-stack development...",
    author: "Henry Ogun", 
    date: "2024-01-20",
    category: "development",
    tags: ["javascript", "react", "nodejs"]
  },
  {
    id: 3,
    title: "Bridging Audio and Code",
    content: "How audio engineering principles apply to software development...",
    author: "Henry Ogun",
    date: "2024-01-25", 
    category: "technology",
    tags: ["audio", "programming", "technology"]
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: "Henry Ogun Blog API",
    version: "1.0.0",
    author: "Henry Ogun - SoundMasterH1"
  });
});

// Get all blog posts
app.get('/api/posts', (req, res) => {
  res.json(blogPosts);
});

// Get single blog post
app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  res.json(post);
});

// Get posts by category
app.get('/api/posts/category/:category', (req, res) => {
  const category = req.params.category;
  const filteredPosts = blogPosts.filter(p => p.category === category);
  res.json(filteredPosts);
});

app.listen(PORT, () => {
  console.log(`Henry Ogun Blog API running on http://localhost:${PORT}`);
});