import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false }, // remove or set required false
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
