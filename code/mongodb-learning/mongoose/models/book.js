import {mongoose} from "../db.js";

const Book = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 150,
    },
    author: {
        type: String,
        required: false,
        default: "Author Unknown",
        maxlength: 150,
    },
    // genre: {
    //     type: String,
    //     required: false,
    //     enum: ["nonfiction", "history", "whatever"]
    // }
},
    {
        timestamps: true
    },
    )

// const model = mongoose.model("book", Book);

export default mongoose.model("book", Book);