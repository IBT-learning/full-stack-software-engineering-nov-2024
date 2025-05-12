import { mongoose } from "../db.js";

const Book = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 150,
      trim: true,
      maxLength: [150, "Titles must be 150 characters or less"],
    },
    author: {
      type: String,
      required: false,
      default: "Author Unknown",
      maxlength: 150,
    },
    ratings: [
      {
        type: String,
        maxLength: 50,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("books", Book);
