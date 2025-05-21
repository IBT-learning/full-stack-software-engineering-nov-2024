import { mongoose } from "../db.js";

const userSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  //   maxLength: [100, 'Name cannot contain more than 100 characters'],
  //   minLength: [2, 'Name has to be atleast 2 characters long'],
  //   trim: true
  // },

  displayName: {
    type: String,
    required: true,
    unique: true,
    maxLength: [50, 'Display name cannot contain more than 50 characters'],
    minLength: [2, 'Display name has to be atleast 2 characters long'],
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required:  true,
    trim: true
  },

  profilePhotoURL: {
    type: String,
  }
},
  {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;