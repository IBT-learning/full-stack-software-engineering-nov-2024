// This file defines the schema for the Recipe model using Mongoose.
// It specifies the structure of the Recipe documents in the MongoDB database.

//import { mongoose } from "../db.js";

import mongoose from "mongoose";

const Recipe = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        unique: true,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true,
        maxlength: 200,
    }],
    instructions: {
        type: String,
        required: true,
    },
    });

    export default mongoose.model("recipe", Recipe);