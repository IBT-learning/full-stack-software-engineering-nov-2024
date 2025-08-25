const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const tokenValidation = require('../middleware/tokenValidation');

// @route   GET /api/recipes
// @desc    Get all recipes
// @access  Public
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   GET /api/recipes/user/:userId
// @desc    Get all recipes by a specific user
// @access  Public
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const recipes = await Recipe.find({ createdBy: userId })
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });
    
    if (recipes.length === 0) {
      return res.status(404).json({ 
        message: 'No recipes found for this user' 
      });
    }
    
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching user recipes:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   GET /api/recipes/my-recipes
// @desc    Get all recipes created by the authenticated user
// @access  Private
router.get('/my-recipes', tokenValidation, async (req, res) => {
  try {
    const recipes = await Recipe.find({ createdBy: req.userId })
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });
    
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching user recipes:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   GET /api/recipes/:id
// @desc    Get recipe by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
      .populate('createdBy', 'name email');
    
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    
    res.json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   POST /api/recipes
// @desc    Create a new recipe
// @access  Private
router.post('/', tokenValidation, async (req, res) => {
  try {
    // Add the authenticated user's ID to the recipe data
    const recipeData = {
      ...req.body,
      createdBy: req.userId
    };
    
    const recipe = new Recipe(recipeData);
    await recipe.save();
    
    // Populate creator info before sending response
    await recipe.populate('createdBy', 'name email');
    
    res.status(201).json({
      message: 'Recipe created successfully',
      recipe
    });
  } catch (error) {
    console.error('Error creating recipe:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Validation error', 
        details: error.errors 
      });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   PUT /api/recipes/:id
// @desc    Update a recipe
// @access  Private (owner only)
router.put('/:id', tokenValidation, async (req, res) => {
  try {
    // Find the recipe first
    const recipe = await Recipe.findById(req.params.id);
    
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    
    // Check if the user owns this recipe
    if (recipe.createdBy.toString() !== req.userId.toString()) {
      return res.status(403).json({ 
        error: 'Forbidden: You can only edit your own recipes' 
      });
    }
    
    // Update the recipe
    Object.assign(recipe, req.body);
    recipe.updatedAt = Date.now();
    
    await recipe.save();
    await recipe.populate('createdBy', 'name email');
    
    res.json({
      message: 'Recipe updated successfully',
      recipe
    });
  } catch (error) {
    console.error('Error updating recipe:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Validation error', 
        details: error.errors 
      });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   DELETE /api/recipes/:id
// @desc    Delete a recipe
// @access  Private (owner only)
router.delete('/:id', tokenValidation, async (req, res) => {
  try {
    // Find the recipe first
    const recipe = await Recipe.findById(req.params.id);
    
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    
    // Check if the user owns this recipe
    if (recipe.createdBy.toString() !== req.userId.toString()) {
      return res.status(403).json({ 
        error: 'Forbidden: You can only delete your own recipes' 
      });
    }
    
    // Delete the recipe
    await recipe.deleteOne();
    
    res.json({
      message: 'Recipe deleted successfully',
      deletedRecipe: {
        id: recipe._id,
        title: recipe.title
      }
    });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;