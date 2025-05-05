import { mongoose } from "../db.js";

const User = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "user phone number is required"],
    unique: true,
    maxLength: [60, "{value} should not be less than 60"],
    validate: {
      validator: (value) => {
        if (value.toLowerCase().includes("love")) {
          return true;
        }
        return false;
        // ("we need more love");
      },
      message: "All usernames should start or end with love",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    // maxlength: 150,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("user", User);
