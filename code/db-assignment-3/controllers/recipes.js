// Create new recipe (protected)

import express from "express"
const router = express.Router()
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { mongoose } from "../db.js";

import Recipe from '../models/Recipe.js'; 
import User from "../models/User.js"
const JWT_KEY = process.env.JWT_KEY
import tokenValidation from '../middlewares/tokenValidation.js';


router.post("/", tokenValidation, async (req, res) => {
    try {
      const data = req.body;
      if (Array.isArray(data)) {
        // If multiple recipes are posted
        const savedRecipes = await Recipe.insertMany(
          data.map((recipe) => ({ ...recipe, createdBy: req.user._id })) // Add createdBy from the validated user
        );
        return res.status(201).json(savedRecipes);
      }
  
      const recipe = new Recipe({
        ...data,
        createdBy: req.user._id, // Assign the logged-in user's _id to createdBy
      });
      const savedRecipe = await recipe.save();
      res.status(201).send(`Added ${savedRecipe.title} by ${savedRecipe.author}`);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to save recipe" });
    }
});



  // Update by ID (protected)
router.put("/update/:recipeId", tokenValidation, async (req, res) => {
    try {
      if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
        const filter = { _id: req.params.recipeId };
        const body = req.body;
        const recipe = await Recipe.findOne(filter);
  
        // Check if the logged-in user is the owner of the recipe
        if (recipe.createdBy.toString() !== req.user._id.toString()) {
          return res.status(403).send("You do not have permission to modify this recipe");
        }
  
        const options = { upsert: true };
        const updatedRecipe = await Recipe.updateOne(filter, body, options);
        console.log(updatedRecipe);
  
        if (updatedRecipe.modifiedCount === 1) {
          res.send("Recipe successfully updated");
        } else if (updatedRecipe.upsertedCount === 1) {
          res.send("Recipe successfully added");
        } else {
          res.send("Operation failed");
        }
      } else {
        res.status(404).send("Invalid recipe ID");
      }
    } catch (err) {
      res.status(500).send("Error updating recipe: " + err.message);
    }
});

  // Delete by ID (protected)
router.delete("/delete/:recipeId", tokenValidation, async (req, res) => {
    try {
      if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
        const filter = { _id: req.params.recipeId };
        const recipe = await Recipe.findOne(filter);
  
        // Check if the logged-in user is the owner of the recipe
        if (recipe.createdBy.toString() !== req.user._id.toString()) {
          return res.status(403).send("You do not have permission to delete this recipe");
        }
  
        const deletionResult = await Recipe.deleteOne(filter);
        if (deletionResult.deletedCount === 1) {
          res.send("Successfully deleted the recipe");
        } else {
          res.send("Something went wrong during deletion");
        }
      } else {
        res.status(404).send("Invalid recipe ID");
      }
    } catch (err) {
      res.status(500).send("Error deleting recipe: " + err.message);
    }
});

export default router
  
  