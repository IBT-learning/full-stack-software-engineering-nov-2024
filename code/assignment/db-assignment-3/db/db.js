import mongoose from "mongoose";
// This file connects to the MongoDB database using Mongoose.

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/recipes");
        console.log("Connected to MongoDB database successfully");
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }
}

export default dbConnect;