import {mongoose} from "../db.js";

const Recipe = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            maxLength: 150,
        },
        author: {
            type: String,
            required: false,
            default: "Author Unknown",
            maxLength: 150,
        },
       instructions: {
            type: String,
           required:true,
       },
    ingredients: [
        {
            type: String,
            maxLength: 15,
        }
    ]
    },
    {
        timestamps: true
    },
)


export default mongoose.model("recipes", Recipe);