import express from "express";
const router = express.Router();
import { mongoose } from "../db.js";
import Recipe from "../models/Recipe.js";

// GET all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: `Error fetching recipes: ${err.message}` });
  }
});

// GET a single recipe by ID
router.get("/:recipeId", async (req, res) => {
  try {
    const { recipeId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(recipeId)) {
      return res.status(400).json({ error: "Invalid recipe ID" });
    }

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ error: `Error fetching recipe: ${err.message}` });
  }
});

// POST (create new recipe)
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    if (Array.isArray(data)) {
      const savedRecipes = await Recipe.insertMany(data);
      return res.status(201).json(savedRecipes);
    }

    const recipe = new Recipe(data);
    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(500).json({ error: "Failed to save recipe" });
  }
});

// PUT (update recipe)
router.put("/update/:recipeId", async (req, res) => {
  try {``
    const { recipeId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(recipeId)) {
      return res.status(400).json({ error: "Invalid recipe ID" });
    }

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, req.body, { new: true });
    res.status(200).json({ message: "Recipe successfully updated", updatedRecipe });
  } catch (err) {
    res.status(500).json({ error: `Error updating recipe: ${err.message}` });
  }
});

// DELETE (remove recipe)
router.delete("/delete/:recipeId", async (req, res) => {
  try {
    const { recipeId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(recipeId)) {
      return res.status(400).json({ error: "Invalid recipe ID" });
    }

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const deletionResult = await Recipe.deleteOne({ _id: recipeId });
    if (deletionResult.deletedCount === 1) {
      res.status(200).json({ message: "Successfully deleted the recipe" });
    } else {
      res.status(500).json({ error: "Something went wrong during deletion" });
    }
  } catch (err) {
    res.status(500).json({ error: `Error deleting recipe: ${err.message}` });
  }
});

export default router;
