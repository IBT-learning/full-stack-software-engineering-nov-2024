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
    required: true,
    validate: [arr => arr.length > 0, 'At least one ingredient is required']
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // it refers to the User model
    required: true
  }
}, {
  timestamps: true // automatically adds createdAt and updatedAt fields
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
