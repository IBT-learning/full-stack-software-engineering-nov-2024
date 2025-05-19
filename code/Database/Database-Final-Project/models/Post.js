import { mongoose } from "../db.js";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [2, 'Post title must be atleast 2 characters'],
    maxLength: [100, 'Post title cannot be more than 100 characters'],
    trim: true
  },

  body: {
    type: String,
    required: true,
    minLength: [2, 'Post title must be atleast 2 characters'],
    maxLength: [100, 'Post title cannot be more than 100 characters'],
    trim: true
  },

  image: {
    type: String
  },

  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
},
  {timestamps: true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;
