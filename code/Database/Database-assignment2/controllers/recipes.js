import express from 'express';
import Recipe from '../models/Recipe.js';
import { mongoose } from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  let recipes;
  try{
    recipes = await Recipe.find();
    res.json(recipes);
  }catch (err) {
    console.error('Error: ', err);
    res.status(500).json({'Error' : 'Cannot get recipes'});
  }
});

export default router;