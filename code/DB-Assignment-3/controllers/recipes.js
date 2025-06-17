import express from 'express';
import Recipe from '../models/Recipe.js';
import validateToken from '../middleware/auth.js';

const router = express.Router();

// ✅ Public: GET all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Public: GET a single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Protected: POST create a new recipe
router.post('/', validateToken, async (req, res) => {
  try {
    const recipe = new Recipe({
      ...req.body,
      createdBy: req.user._id // Store the owner
    });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Protected: PUT update a recipe (only if owner)
router.put('/:id', validateToken, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

    if (!recipe.createdBy.equals(req.user._id)) {
      return res.status(403).json({ error: 'Not authorized to update this recipe' });
    }

    Object.assign(recipe, req.body);
    await recipe.save();
    res.json(recipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Protected: DELETE a recipe (only if owner)
router.delete('/:id', validateToken, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

    if (!recipe.createdBy.equals(req.user._id)) {
      return res.status(403).json({ error: 'Not authorized to delete this recipe' });
    }

    await recipe.deleteOne();
    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Extra: GET all recipes by a specific user
router.get('/by-user/:userId', async (req, res) => {
  try {
    const recipes = await Recipe.find({ createdBy: req.params.userId });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
