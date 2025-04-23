import express from "express";
import Recipe from "../models/recipe.js";
import {mongoose} from "../db.js";

const router = express.Router();

// This route will be accessible at /recipes/
router.get("/", async(req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:recipeId", async(req, res) => {
    try {
        if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
        const recipeId = req.params.recipeId;
        const recipe = await Recipe.findOne({_id:recipeId})

            recipe ? res.json(recipe) : res.status(404).send('Recipe not found');
        }
    } catch (err) {
        res.status(400).send("Invalid Request")
    }
})

router.post("/", async(req, res) => {
    if (Object.keys(req.body).length > 1) {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.send("worked");
    } else {
        res.status(400).send("Invalid Request");
    }
})

router.put("/:recipeId", async(req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
        const recipe = await Recipe.updateOne({_id: req.params.recipeId}, req.body);

        recipe ? res.json(recipe) : res.status(404).send('Recipe not found');
    } else {
        res.status(400).send("Error Ocuured");
    }
})

router.delete("/:recipeId", async(req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
        const recipe = await Recipe.deleteOne({_id: req.params.recipeId});
        recipe ? res.json(recipe) : res.status(404).send('Recipe not found');
    }
})

export default router;