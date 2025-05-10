// controllers/recipes.js
import express from "express";
const router = express.Router();
import { mongoose } from "../db.js";
import Recipe from "../models/Recipe.js";

// Get all
router.get("/", async (req, res) => {
  const recipes = await Recipe.find();
  res.send(recipes);
});

// Get one
router.get("/find/:recipeId", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
    const recipe = await Recipe.findOne({ _id: req.params.recipeId });
    recipe ? res.json(recipe) : res.status(404).send("recipe not found");
  } else {
    res.status(404).send("invalid recipe id");
  }
});

// Create new
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    if (Array.isArray(data)) {
      const savedRecipes = await Recipe.insertMany(data);
      return res.status(201).json(savedRecipes);
    }

    const recipe = new Recipe(data);
    const savedRecipe = await recipe.save();
    res.send(`added ${savedRecipe.title} by ${savedRecipe.author}`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save recipe" });
  }
});

// Update by ID
router.put("/update/:recipeId", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
    const filter = { _id: req.params.recipeId };
    const body = req.body;
    const options = { upsert: true };

    const recipe = await Recipe.updateOne(filter, body, options);
    console.log(recipe);

    if (recipe.modifiedCount === 1) {
      res.send("recipe successfully updated");
    } else if (recipe.upsertedCount === 1) {
      res.send("recipe successfully added");
    } else {
      res.send("operation failed");
    }
  } else {
    res.status(404).send("invalid recipe id");
  }
});

// Delete by ID
router.delete("/delete/:recipeId", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
    const filter = { _id: req.params.recipeId };
    const recipe = await Recipe.deleteOne(filter);

    if (recipe.deletedCount === 1) {
      res.send("successfully deleted");
    } else {
      res.send("something went wrong");
    }
  } else {
    res.status(404).send("invalid recipe id");
  }
});

export default router;