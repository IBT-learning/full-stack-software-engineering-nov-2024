import express from 'express';
import Recipe from '../models/Recipe.js';
import mongoose from 'mongoose';

const router = express.Router();

// Helper function to validate ObjectId
const isValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

// GET /recipes - Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: recipes.length,
      data: recipes
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch recipes',
      error: error.message
    });
  }
});

// GET /recipes/:id - Get a single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ObjectId format
    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid recipe ID format'
      });
    }
    
    const recipe = await Recipe.findById(id);
    
    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }
    
    res.json({
      success: true,
      data: recipe
    });
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch recipe',
      error: error.message
    });
  }
});

// POST /recipes - Create a new recipe
router.post('/', async (req, res) => {
  try {
    const recipeData = req.body;
    
    // Create new recipe
    const recipe = new Recipe(recipeData);
    const savedRecipe = await recipe.save();
    
    res.status(201).json({
      success: true,
      message: 'Recipe created successfully',
      data: savedRecipe
    });
  } catch (error) {
    console.error('Error creating recipe:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to create recipe',
      error: error.message
    });
  }
});

// PUT /recipes/:id - Update a recipe by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    // Validate ObjectId format
    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid recipe ID format'
      });
    }
    
    // Check if recipe exists first
    const existingRecipe = await Recipe.findById(id);
    if (!existingRecipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }
    
    // Update the recipe
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      updateData,
      { 
        new: true, // Return the updated document
        runValidators: true // Run schema validations
      }
    );
    
    res.json({
      success: true,
      message: 'Recipe updated successfully',
      data: updatedRecipe
    });
  } catch (error) {
    console.error('Error updating recipe:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to update recipe',
      error: error.message
    });
  }
});

// DELETE /recipes/:id - Delete a recipe by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ObjectId format
    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid recipe ID format'
      });
    }
    
    // Find and delete the recipe
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    
    if (!deletedRecipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Recipe deleted successfully',
      data: deletedRecipe
    });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete recipe',
      error: error.message
    });
  }
});

export default router;