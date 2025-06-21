import express from 'express';
import { dbConnect } from './db.js';
import recipeRouter from './controllers/recipes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
app.use('/recipes', recipeRouter);

const startServer = async() => {
  try{
    await dbConnect();

    app.listen(PORT, () => {
      console.log(`[Server]: Listening on port ${PORT}`);
    });
  }catch (err){
    console.error('Failed to connect to database, server not started.', err);
  }
};

startServer();