import express from "express";
import {
  getAllRecipes,
  getSingleRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
} from "../controllers/recipeController.js";
import tokenValidation from "../middleware/tokenValidation.js";

const router = express.Router();

// Get All recipes
router.get("/", getAllRecipes);

// Get a recipe
router.get("/:id", getSingleRecipe);

// require auth for all recipe routes
router.use(tokenValidation);

// Create a recipe
router.post("/", createRecipe);



// Delete a single recipe
router.delete("/:id", deleteRecipe);

// UPDATE a recipe
router.patch("/:id", updateRecipe);

// module.exports = router;
export default router;
