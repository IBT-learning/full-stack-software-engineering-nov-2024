import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { dbConnect } from './db.js';
import postsRouter from './controllers/posts.js';
import authRouter from './controllers/auth.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/posts', postsRouter);
app.use('/auth', authRouter);

const startServer = async() => {
  try{
    await dbConnect();

    app.listen(PORT, () => {
      console.log(`[Server]: Listening on port ${PORT}`);
    });
  }catch (err){
    console.error('[Server error]: Failed to connect to database, server not started.', err);
  }
};

startServer();