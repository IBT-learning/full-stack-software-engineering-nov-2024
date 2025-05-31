import Recipe from "../models/recipeModel.js";
import mongoose from "mongoose";

// get all recipes
const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find({}).sort({ createdAt: -1 });
  res.status(200).json(recipes);
};

// get a single recipe
const getSingleRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe!!" });
  }

  const recipe = await Recipe.findById(id);

  if (!recipe) {
    return res.status(404).json({ error: "No such recipe!!!" });
  }

  res.status(200).json(recipe);
};

// create a new recipe
const createRecipe = async (req, res) => {
  const { title, author, ingredients, instructions } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!author) {
    emptyFields.push("author");
  }

  if (!ingredients) {
    emptyFields.push("ingredients");
  }

  if (!instructions) {
    emptyFields.push("instructions");
  }
  if (emptyFields.length > 0) {
    return res
      .status(404)
      .json({ error: "Please fill in all the forms", emptyFields });
  }

  try {
    const recipe = await Recipe.create({
      title,
      author,
      ingredients,
      instructions,
    });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a recipe
const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe!!" });
  }

  const recipe = await Recipe.findOneAndDelete({ _id: id });

  if (!recipe) {
    return res.status(404).json({ error: "No such Recipe!!!" });
  }

  res.status(200).json(recipe);
};

// update a Recipe
const updateRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe!!" });
  }

  const recipe = await Recipe.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!recipe) {
    return res.status(404).json({ error: "No such Recipe!!!" });
  }

  res.status(200).json(recipe);
};

export {
  getAllRecipes,
  getSingleRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
};
