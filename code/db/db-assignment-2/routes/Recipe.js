import { Router } from "express";
import Recipe from "../models/recipeModel.js";

const route = Router();

route.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    console.log(recipes);
    res.json(recipes);
  } catch (error) {
    console.log("Error fetching all recipes");
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    recipe ? res.json(recipe) : res.send("Recipe not found");
  } catch (error) {
    console.log("Error getting specifc recipe");
  }
});

route.post("/", async (req, res) => {
  try {
    const newRecipe = {
      title: req.body.title,
      author: req.body.author,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
    };
    const recipe = await Recipe.create(newRecipe);
    res.status(201).json(recipe);
  } catch (error) {
    console.log("Error creating recipe", error);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecipe = {
      title: req.body.title,
      author: req.body.author,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
    };
    const recipe = await Recipe.findByIdAndUpdate(id, updatedRecipe);
    res.status(201).json(recipe);
  } catch (error) {
    console.log("Error updating recipe");
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedrecipe = await Recipe.findByIdAndDelete(id);
    console.log("Deleted Recipe", deletedrecipe)
    res.status(200).json(deletedrecipe);
  } catch (error) {
    console.log("Error deleting recipe");
  }
});

export default route;
