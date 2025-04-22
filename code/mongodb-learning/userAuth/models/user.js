import {mongoose} from "../db.js";

const User = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        maxlength: 60
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        // maxlength: 150,
    },
    password: {
        type:String,
        required: true,
    }

})

export default mongoose.model("user", User);