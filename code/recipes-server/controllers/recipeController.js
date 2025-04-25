const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
};

exports.getRecipeById = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
  res.json(recipe);
};

exports.createRecipe = async (req, res) => {
  const recipe = new Recipe(req.body);
  await recipe.save();
  res.status(201).json(recipe);
};

exports.updateRecipe = async (req, res) => {
  const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
  res.json(recipe);
};

exports.deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findByIdAndDelete(req.params.id);
  if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
  res.json({ message: 'Recipe deleted' });
};
