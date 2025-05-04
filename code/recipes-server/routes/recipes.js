const express = require('express');
const Recipe = require('../models/Recipe');
const verifyToken = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

router.post('/', verifyToken, async (req, res) => {
  const recipe = await Recipe.create({ ...req.body, createdBy: req.user._id });
  res.json(recipe);
});

router.put('/:id', verifyToken, async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });
  if (!recipe.createdBy.equals(req.user._id)) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  Object.assign(recipe, req.body);
  await recipe.save();
  res.json(recipe);
});

router.delete('/:id', verifyToken, async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });
  if (!recipe.createdBy.equals(req.user._id)) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  await recipe.deleteOne();
  res.json({ message: "Recipe deleted" });
});

module.exports = router;
