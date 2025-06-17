import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import recipeRoutes from './controllers/recipes.js';
import userRoutes from './controllers/users.js';

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/recipes', recipeRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
