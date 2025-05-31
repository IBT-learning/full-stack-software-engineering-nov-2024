import express from "express";
import {
  getAllRecipes,
  getSingleRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

// Get All recipes
router.get("/", getAllRecipes);

// Create a recipe
router.post("/", createRecipe);

// Get a recipe
router.get("/:id", getSingleRecipe);

// Delete a single recipe
router.delete("/:id", deleteRecipe);

// UPDATE a recipe
router.patch("/:id", updateRecipe);

// module.exports = router;
export default router;
