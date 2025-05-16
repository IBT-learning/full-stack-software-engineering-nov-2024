// blog-api/controllers/postController.js
import Post from '../models/Post.js';

// Get all posts
export async function getPosts(req, res) {
  try {
    const posts = await Post.find().populate('userId', 'displayName profilePhoto');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
}

// Create a new post
export async function createPost(req, res) {
  try {
    const { title, body, image } = req.body;
    const post = await Post.create({ title, body, image, userId: req.user._id });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create post' });
  }
}

// Update an existing post
export async function updatePost(req, res) {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update post' });
  }
}

// Delete a post
export async function deletePost(req, res) {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete post' });
  }
}
