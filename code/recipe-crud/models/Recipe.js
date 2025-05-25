import mongoose from 'mongoose';

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
    maxlength: 1000
  },
  ingredients: {
    type: [String],
    required: true
  }
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
