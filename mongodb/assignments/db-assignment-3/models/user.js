import { mongoose } from "../db.js";

const User = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      maxLength: 150,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("users", User);
