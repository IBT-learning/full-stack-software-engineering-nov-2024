import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Recipe title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true,
    maxlength: [50, 'Author name cannot exceed 50 characters']
  },
  instructions: {
    type: String,
    required: [true, 'Instructions are required'],
    trim: true,
    maxlength: [2000, 'Instructions cannot exceed 2000 characters']
  },
  ingredients: {
    type: [String],
    required: [true, 'At least one ingredient is required'],
    validate: {
      validator: function(ingredients) {
        return ingredients && ingredients.length > 0;
      },
      message: 'Recipe must have at least one ingredient'
    }
  },
  servings: {
    type: Number,
    min: [1, 'Servings must be at least 1'],
    max: [50, 'Servings cannot exceed 50'],
    default: 4
  },
  cookTime: {
    type: String,
    trim: true,
    maxlength: [50, 'Cook time cannot exceed 50 characters'],
    default: 'Not specified'
  },
  difficulty: {
    type: String,
    enum: {
      values: ['easy', 'medium', 'hard'],
      message: 'Difficulty must be easy, medium, or hard'
    },
    default: 'medium'
  },
  category: {
    type: String,
    trim: true,
    maxlength: [30, 'Category cannot exceed 30 characters'],
    default: 'General'
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual field to get ingredient count
recipeSchema.virtual('ingredientCount').get(function() {
  return this.ingredients ? this.ingredients.length : 0;
});

// Pre-save middleware to validate ingredients
recipeSchema.pre('save', function(next) {
  if (this.ingredients) {
    // Remove empty strings and trim whitespace
    this.ingredients = this.ingredients
      .filter(ingredient => ingredient && ingredient.trim())
      .map(ingredient => ingredient.trim());
    
    // Check if we still have ingredients after filtering
    if (this.ingredients.length === 0) {
      next(new Error('Recipe must have at least one valid ingredient'));
      return;
    }
  }
  next();
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;