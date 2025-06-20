import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './controllers/users.js';
import postRouter from './controllers/posts.js';
import { connectDB } from './db.js';
import tokenValidation from './middlewares/tokenValidation.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Database
connectDB();

// Routes
app.use('/api/users', userRouter);
app.use('/api/posts', tokenValidation, postRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));