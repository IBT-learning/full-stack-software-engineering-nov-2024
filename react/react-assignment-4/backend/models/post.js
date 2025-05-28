import { mongoose } from "../db.js";

const Post = new mongoose.Schema(
  {
    // author: String,
    title: {
      type: String,
      required: true,
      minLength: [10, "title name must be greater than or equal to 10"],
    },
    description: {
      type: String,
      required: true,
      minLength: [15, "description must be more than or equal to 15"],
    },
    // userId: mongoose.Schema.Types.ObjectId,
    // userToken: {
    //   type: String,
    //   required: true,
    // },
    ingredients: {
      type: [String],
        required: true,

    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("recipes", Post);
