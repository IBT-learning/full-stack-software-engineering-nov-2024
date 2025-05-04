import express from "express";
import mongoose from "mongoose";


const router = express.Router();

import Recipe from "../model/recipe.js";
import authenticateToken from "../middlewares/tokenValidation.js";


// find all recipes
router.get("/", async (req, res) => {
    try {
        const recipes = await Recipe.find();
        console.log("Fetched recipes successfully:", recipes);
        res.json(recipes);
    } catch (error) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// find recipe by id
router.get("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        console.log("Fetched recipe successfully:", recipe);
        res.json(recipe);
    } catch (error) {
        console.error("Error fetching recipe:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});



//adding authentication middleware to the routes

router.post('/new', authenticateToken, async (req, res) => {
    try {
        const { title, author, ingredients, instructions } = req.body;
        const recipe = new Recipe({
            title,
            author,
            ingredients,
            instructions,
            createdBy: req.user._id, // Access the user ID from the payload
        });
        await recipe.save();
        console.log("Created recipe successfully:", recipe);
        res.status(201).json(recipe);
    } catch (error) {
        console.error("Error creating recipe:", error);
        res.status(500).send("Internal server error");
    }
});


//update a recipe by id
router.put("/:id", authenticateToken, async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recipe) {
            return res.status(404).send("Recipe not found");
        }
        // Check ownership
        if (!recipe.createdBy || recipe.createdBy.toString() !== req.user._id) {
            return res.status(403).json({ message: "You do not have permission to update this recipe" });
        }
            const updatedRecipe = await Recipe.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );
            res.json(updatedRecipe);
    }catch (error) {
    console.error("Error updating recipe:", error);
    res.status(500).send("Internal server error");
    }
});

//another method
// router.put("/:id", authenticateToken, async (req, res) => {
//     try {
//       const { id } = req.params;
  
//       // Validate ID format
//       if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(400).json({ message: "Invalid recipe ID" });
//       }
//       const recipe = await Recipe.findById(id);
//       if (!recipe) {
//         return res.status(404).json({ message: "Recipe not found" });
//       }
//       console.log("recipe.createdBy:", recipe.createdBy);
//       console.log("req.user._id:", req.user._id);
//       // Check ownership
//       if (!recipe.createdBy || !recipe.createdBy.equals(new mongoose.Types.ObjectId(req.user._id))) {
//         return res.status(403).json({ message: "You do not have permission to update this recipe" });
//       }
  
//       // Update fields (you can make this more strict if needed)
//       const { title, author, ingredients, instructions } = req.body;
//       if (title !== undefined) recipe.title = title;
//       if (author !== undefined) recipe.author = author;
//       if (ingredients !== undefined) recipe.ingredients = ingredients;
//       if (instructions !== undefined) recipe.instructions = instructions;
  
//       await recipe.save();
  
//       res.json({
//         message: "Recipe updated successfully",
//         recipe,
//       });
//     } catch (error) {
//       console.error("Error updating recipe:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   });


router.delete("/:id", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      // Validate ID format
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid recipe ID" });
      }
      const recipe = await Recipe.findById(id);
      if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
      }
      // Check ownership (ensure both sides are ObjectIds)
      if (!recipe.createdBy || !recipe.createdBy.equals(new mongoose.Types.ObjectId(req.user._id))) {
        return res.status(403).json({ message: "You do not have permission to delete this recipe" });
      }
      // Delete the recipe
      await recipe.deleteOne({_id: id});
  
      res.json({
        message: "Recipe deleted successfully",
        recipe,
      });
    } catch (error) {
      console.error("Error deleting recipe:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


// Get all recipes by a specific user
router.get("/user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      // Validate userId
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      // Find all recipes created by the user
      const recipes = await Recipe.find({ createdBy: userId });
      res.json({
        count: recipes.length,
        recipes,
      });
    } catch (error) {
      console.error("Error fetching user's recipes:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });



export default router;