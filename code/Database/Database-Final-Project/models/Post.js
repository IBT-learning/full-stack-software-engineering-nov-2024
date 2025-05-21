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
    minLength: [2, 'Post must be atleast 2 characters'],
    maxLength: [500, 'Post cannot be more than 500 characters'],
    trim: true
  },

  media: {
    type: [String],
    validate: {
      validator: (val) => val.length < 5,
      message: 'Max of 4 media files allowed'
    }
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
