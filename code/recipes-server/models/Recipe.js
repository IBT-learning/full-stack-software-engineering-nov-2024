const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  author: {
    type: String,
    required: true,
    maxlength: 50
  },
  instructions: {
    type: String,
    required: true,
    maxlength: 2000
  },
  ingredients: {
    type: [String],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
