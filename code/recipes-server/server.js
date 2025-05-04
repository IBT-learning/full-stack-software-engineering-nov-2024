const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);

// DB connection
mongoose.connect('mongodb://localhost:27017/recipes')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(4000, () => console.log('Server running on port 4000'));
  })
  .catch(err => console.error('DB connection error:', err));
