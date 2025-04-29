import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/recipes");
        console.log("Connected to MongoDB database successfully");
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }
}


export default connectDB;