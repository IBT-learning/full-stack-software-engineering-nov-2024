import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: { type: String },
  bio: { type: String },
  profilePhoto: { type: String },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
