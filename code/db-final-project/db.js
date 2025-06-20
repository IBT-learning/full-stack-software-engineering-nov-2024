import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to database', error);
    process.exit(1);
  }
};
export { mongoose }