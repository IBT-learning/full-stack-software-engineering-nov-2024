import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePhoto: { type: String, default: '/path/to/default/photo.jpg' },  // Profile photo URL
    bio: { type: String, default: '' },  // Short biography
    createdAt: { type: Date, default: Date.now },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]  // Reference to posts created by this user
  },
  {
    timestamps: true,  // Automatically manage `createdAt` and `updatedAt` fields
  }
);

const User = mongoose.model('User', userSchema);

export default User;
