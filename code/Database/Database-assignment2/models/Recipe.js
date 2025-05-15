import { mongoose } from "../db.js";

// defining schema
const recipeSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
    maxLength: [100, 'Recipe title cannot exceed 100 characters'],
    minLength: [3, 'Recipe title must be atleast 3 characters long']
  },

  author: {
    type: String, 
    required: true, 
    default: 'Unknown Author',
    maxLength: [60, 'Recipe author cannot exceed 60 characters'],
    minLength: [2, 'Recipe author must be atleast 2 characters long']
  },

  ingredients: {
    type: [String],
    required: true,
    validate: [
      {
        validator: (val) => Array.isArray(val) && val.length > 0,
        message: 'Recipe must have atleast 1 ingredient'
      },
      {
        validator: (val) => Array.isArray(val) && val.length < 51,
        message: 'Recipe cannot have more than 50 ingredients'
      }   
    ]
  },

  instructions: {
    type: String, 
    required: true}
},
{timestamps: true}
);

// compiling model
const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;