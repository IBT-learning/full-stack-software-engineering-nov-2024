import mongoose from "mongoose";

const User = new mongoose.Schema({
    "username": {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    "email": {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    "password": {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
    },
    "createdAt": {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model("user", User);
// This code defines a Mongoose schema for a User model in a MongoDB database. The schema includes fields for username, email, password, and createdAt timestamp. The username and email fields are required and unique, while the password field is required with a minimum length of 6 characters. The createdAt field defaults to the current date and time when a new user is created.