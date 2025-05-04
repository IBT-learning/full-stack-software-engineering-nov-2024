const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  author: String,
  instructions: String,
  ingredients: [String],
  createdBy: mongoose.Schema.ObjectId
});

module.exports = mongoose.model('Recipe', recipeSchema);
