import mongoose from 'mongoose';

const dbConnect = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/auth");
        console.log("MongoDB is connected");

    } catch (err) {
        console.log(`MongoDB connection error: ${err}`);
    }
}

export {mongoose, dbConnect};