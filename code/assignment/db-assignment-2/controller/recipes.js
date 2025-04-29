import express from "express";

const router = express.Router();

import Recipe from "../model/recipe.js";


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

// create a new recipe
router.post("/new", async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        console.log("Created recipe successfully:", recipe);
        res.status(201).json(recipe);
    } catch (error) {
        console.error("Error creating recipe:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// update a recipe by id
router.put("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recipe) {
            return res.status(404).json({ error: "Recipe not found" });
        } else {
            console.log("Updated recipe successfully:", recipe);
            res.json(recipe);
        }
    } catch (error) {
        console.error("Error updating recipe:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// delete a recipe by id
router.delete("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).json({ error: "Recipe not found" });
        } else {
            console.log("Deleted recipe successfully:", recipe);
            res.json(recipe);
        }
    } catch (error) {
        console.error("Error deleting recipe:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


export default router;