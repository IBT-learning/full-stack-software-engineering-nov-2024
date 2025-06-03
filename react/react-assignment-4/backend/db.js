import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(`MongoDB connection error: ${err}`);
  }
};

export { mongoose, dbConnect };
