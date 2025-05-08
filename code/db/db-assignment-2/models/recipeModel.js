import mongoose from "mongoose";

const reciepeSchema = new mongoose.Schema({
    title:String,
    author:String,
    instructions:String,
    ingredients:[String]
})

const Recipe = mongoose.model("Recipe", reciepeSchema);


export default Recipe