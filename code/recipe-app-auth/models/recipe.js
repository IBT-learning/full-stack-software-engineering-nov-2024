const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  ingredients: [{
    type: String,
    required: true
  }],
  instructions: {
    type: String,
    required: true
  },
  prepTime: {
    type: Number,
    min: 0
  },
  cookTime: {
    type: Number,
    min: 0
  },
  servings: {
    type: Number,
    min: 1
  },
  category: {
    type: String,
    enum: ['appetizer', 'main', 'dessert', 'breakfast', 'snack', 'beverage'],
    default: 'main'
  },
  // New field: Foreign key to User collection
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field on save
recipeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Recipe', recipeSchema);