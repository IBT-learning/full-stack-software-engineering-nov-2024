import express from 'express';
import Recipe from '../models/Recipe.js';
import { mongoose } from '../db.js';
import tokenValidator from '../middleware/tokenValidator.js';

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
      return res.status(404).json({'Error': 'Requested recipe not found'});
    }

    res.json(recipe);
  }catch (err) {
    console.error('Error finding recipe: ', err);
    res.status(500).json({'Error': 'Cannot retrieve recipe'});
  }
});

router.post('/', tokenValidator, async (req, res) => {
  try{
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  }catch (err){
    console.error('Error creating recipe: ', err);

    // for Mongoose validation errors
    if(err.name === 'ValidationError'){
       return res.status(422).json({
        'Error': 'Validation failed',
        'Details': err.errors
      });
    }

    res.status(422).json({'Error': 'Failed to create recipe'});
  }
});

router.put('/update/:recipeId', tokenValidator, async (req, res) => {
  const id = req.params.recipeId;
  try{
    if (!mongoose.Types.ObjectId.isValid(id)){
      return res.status(422).json({'Error': 'Invalid recipe Id'});
    }

    const result = await Recipe.updateOne({_id: id}, req.body);
    console.log(result);
    if (result.matchedCount === 0){
      return res.status(404).json({'Error': 'Recipe not found'});
    }

    res.status(200).json({'Success': 'Updated a recipe'});
  }catch (err) {
    console.error('Error updating recipe: ', err);

    // for Mongoose validation errors
    if(err.name === 'ValidationError'){
       return res.status(422).json({
        'Error': 'Validation failed',
        'Details': err.errors
      });
    }

    res.status(500).json({'Error': 'Failed to update selected recipe'});
  }
});

router.delete('/delete/:recipeId', tokenValidator, async (req, res) => {
  const id = req.params.recipeId;
  try{
     if (!mongoose.Types.ObjectId.isValid(id)){
      return res.status(422).json({'Error': 'Invalid recipe Id'});
    }

    const result = await Recipe.deleteOne({_id: id});
    // console.log(result);
    if (result.deletedCount === 0){
      return res.status(404).json({'Error': 'Recipe not found'});
    }

    res.status(200).json({'Success': 'Deleted recipe'});
  }catch (err) {
    console.error('Error deleting recipe: ', err);
    res.status(500).json({'Error': 'Failed to delete recipe'});
  }
}); 

export default router;