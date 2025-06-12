import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { mongoose } from "../db.js";

import Recipe from "../models/Recipe.js";
import User from "../models/User.js";
const JWT_KEY = process.env.JWT_KEY;
import tokenValidation from "../middlewares/tokenValidation.js";

// 🔁 Reusable ownership check helper
function isOwner(recipe, userId) {
  return recipe.createdBy.toString() === userId.toString();
}

// 🔹 GET all recipes (protected)
router.get("/",  async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: `Error fetching recipes: ${err.message}` });
  }
});

// 🔹 GET recipes by user (protected)
router.get("/user/:userId", tokenValidation, async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: `Invalid user ID: ${userId}` });
    }

    const recipes = await Recipe.find({ createdBy: userId });

    if (recipes.length === 0) {
      return res.status(404).json({ message: `No recipes found for user ID: ${userId}` });
    }

    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: `Error fetching recipes: ${err.message}` });
  }
});

// 🔹 GET a single recipe by ID (new)
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

// 🔹 POST (create new recipe)
router.post("/", tokenValidation, async (req, res) => {
  try {
    const data = req.body;

    if (Array.isArray(data)) {
      const savedRecipes = await Recipe.insertMany(
        data.map((recipe) => ({ ...recipe, createdBy: req.user._id }))
      );
      return res.status(201).json(savedRecipes);
    }

    const recipe = new Recipe({
      ...data,
      createdBy: req.user._id,
    });

    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save recipe" });
  }
});

// 🔹 PUT (update recipe)
router.put("/update/:recipeId", tokenValidation, async (req, res) => {
  try {
    const { recipeId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(recipeId)) {
      return res.status(400).json({ error: "Invalid recipe ID" });
    }

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    if (!isOwner(recipe, req.user._id)) {
      return res.status(403).json({ error: "You do not have permission to modify this recipe" });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, req.body, { new: true });
    res.status(200).json({ message: "Recipe successfully updated", updatedRecipe });
  } catch (err) {
    res.status(500).json({ error: `Error updating recipe: ${err.message}` });
  }
});

// 🔹 DELETE (remove recipe)
router.delete("/delete/:recipeId", tokenValidation, async (req, res) => {
  try {
    const { recipeId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(recipeId)) {
      return res.status(400).json({ error: "Invalid recipe ID" });
    }

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    if (!isOwner(recipe, req.user._id)) {
      return res.status(403).json({ error: "You do not have permission to delete this recipe" });
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
