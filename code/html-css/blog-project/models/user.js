import { mongoose } from "../db.js";

const User = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "full name is required"],
      minLength: [4, "full name should not be less than 4"],
    },
    address: {
      type: String,
      required: true,
      minLength: [15, "address should not be less than 15"],
    },
    bio: {
      type: String,
      required: true,
      minLength: [30, "Bio should not be less than 30"],
    },
    userToken: {
      type: String,
      required: true,
      // unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("users", User);
