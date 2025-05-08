import { Router } from "express";
import Recipe from "../models/recipeModel.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const route = Router();

route.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.log(error);
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

route.post("/", authMiddleware, async (req, res) => {
  const { userId } = req.user;
  try {
    const newRecipe = {
      title: req.body.title,
      author: req.body.author,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      createdBy: userId,
    };
    const recipe = await Recipe.create(newRecipe);
    res.status(201).json(recipe);
  } catch (error) {
    console.log("Error creating recipe", error);
  }
});

route.put("/:id", authMiddleware, async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;

  try {
    const FoundRecipe = await Recipe.findById(id);
    const createdbyId = FoundRecipe.createdBy.toString();
    console.log("Found Recipe", typeof createdbyId);
    if (userId !== createdbyId) {
      return res.status(400).json({
        message:
          "Unauthorized Access. User did not create this recipe and therefore cannout update it",
      });
    }

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

route.delete("/:id", authMiddleware, async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;

  try {
    const FoundRecipe = await Recipe.findById(id);

    if (!FoundRecipe) {
      return res.status(400).json({ message: "No Recipe with that Id found" });
    }

    const createdbyId = FoundRecipe.createdBy.toString();

    if (userId !== createdbyId) {
      return res.status(400).json({
        message:
          "Unauthorized Access. User did not create this recipe and therefore cannout delete it",
      });
    }

    const deletedrecipe = await Recipe.findByIdAndDelete(id);
    console.log("Deleted Recipe", deletedrecipe);
    res.status(200).json(deletedrecipe);
  } catch (error) {
    console.log("Error deleting recipe", error);
  }
});

export default route;
