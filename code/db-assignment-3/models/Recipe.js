import { mongoose } from "../db.js";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    author: {
      type: String,
      required: true,
      maxlength: 50,
    },
    instructions: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId, // Link to User who created it
      required: true,
      ref: "User"
    }
  },
  { timestamps: true }  // This will automatically add createdAt and updatedAt fields
);

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
