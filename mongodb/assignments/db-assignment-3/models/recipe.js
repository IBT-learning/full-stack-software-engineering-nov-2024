import { mongoose } from "../db.js";

const Recipe = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      trim: true,
      maxLength: 200,
      // unique: true,
    },
    createdBy: mongoose.Schema.ObjectId,
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 200,
      // unique: false,
    },
    instructions: {
      type: String,
      // required: true,
      trim: true,
    },
    ingredients: [
      {
        type: String,
        required: true,
        trim: true,
        maxLength: 180,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("recipes", Recipe);
