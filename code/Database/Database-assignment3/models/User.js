import { mongoose } from "../db.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxLength: [100, 'Name cannot contain more than 100 characters'],
    minLength: [2, 'Name has to be atleast 2 characters long'],
    trim: true
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true
  }
},
  {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;