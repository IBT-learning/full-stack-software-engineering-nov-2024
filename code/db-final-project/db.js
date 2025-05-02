import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Load environment variables

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);  // Use the value from .env
    console.log("[database]: connected to db");
  } catch (err) {
    console.warn(`[database error]: ${err}`);
  }
};

export { dbConnect, mongoose };
