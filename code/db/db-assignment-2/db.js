import mongoose from "mongoose";

const connectDB = async ()=> {
    try {
        await mongoose.connect("mongodb://localhost:27017/recipedb");
        console.log(`[database]: Connected Succesfully`)
        
    } catch (error) {
        console.warn("Database connection failed")
    }
}


export {mongoose,connectDB}