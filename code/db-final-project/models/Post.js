import mongoose from 'mongoose';


const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageURL: { type: String, default: '/path/to/default/image.jpg' },  // Image associated with the post
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Link to User model
    createdAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true,  // Automatically manage `createdAt` and `updatedAt` fields
  }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
