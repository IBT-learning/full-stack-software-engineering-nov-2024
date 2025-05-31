import "dotenv/config";
import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected!");
  } catch (error) {
    console.error("Failed to connect to the Database: ", error);
    process.exit(1);
  }
};

export default dbConnect;
