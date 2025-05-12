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

router.get('/find/:recipeId', async (req, res) => {
  const id = req.params.recipeId;
  try{
    if (!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({'Error': 'Invalid recipe Id'});
    }

    const recipe = await Recipe.findById(id);
    if (!recipe){
      return res.status(404).json({'Error': 'Recipe not found'});
    }

    res.json(recipe);
  }catch (err) {
    console.error('Error: ', err);
    res.status(500).json({'Error': 'Cannot retrieve recipe'});
  }
});

export default router;