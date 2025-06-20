import express from 'express'
import { Router } from 'express';
import Post from '../models/Post.js';
import tokenValidation from '../middlewares/tokenValidation.js';
import mongoose from 'mongoose'; // MUST be imported
import User from '../models/User.js'
const router = express.Router()

// Create Post (Protected)
router.post("/", tokenValidation, async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const newPost = new Post({ userId: req.userId, title, content, tags });
    await newPost.save();
    res.status(201).json({ message: 'Post created', post: newPost });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
});

// Get All Posts (Public - for index.html)
router.get("/", async (req, res) => { 
    try {
      const posts = await Post.find()
        .populate('userId', 'username profilePhoto') // Public user info only
        .sort({ createdAt: -1 }) // Newest first
        .limit(20); // Prevent overload
      
      res.json(posts);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      res.status(500).json({ 
        message: 'Error fetching posts', 
        error: process.env.NODE_ENV === 'development' ? error.message : 'Server error' 
      });
    }
  });

// Get post by id
router.get("/my-posts/:id", tokenValidation, async (req, res) => {
    try {
      // Validate ID format
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ 
          message: "Invalid post ID format" 
        });
      }
  
      // Find post with ownership check
      const post = await Post.findOne({
        _id: new mongoose.Types.ObjectId(req.params.id),
        userId: req.userId
      }).populate('userId', 'username profilePhoto');
  
      if (!post) {
        return res.status(404).json({ 
          message: 'Post not found or unauthorized' 
        });
      }
  
      res.json(post);
      
    } catch (error) {
      console.error('Error in /my-posts/:id:', error);
      res.status(500).json({ 
        message: 'Server error',
        error: error.message // Now visible
      });
    }
  })

// Update Route
router.put("/:postId", tokenValidation, async (req, res) => {
    try {
      // 1. Validate post ID format
      if (!mongoose.Types.ObjectId.isValid(req.params.postId)) {
        return res.status(400).json({ message: "Invalid post ID" });
      }
  
      // 2. Find post and verify ownership
      const post = await Post.findOne({
        _id: req.params.postId,
        userId: req.userId  // Critical ownership check
      });
  
      if (!post) {
        return res.status(404).json({ 
          message: 'Post not found or unauthorized' 
        });
      }
  
      // 3. Update post fields (not user fields)
      const { title, content, tags } = req.body;
      
      if (title !== undefined) post.title = title;
      if (content !== undefined) post.content = content; 
      if (tags !== undefined) post.tags = tags;
  
      // 4. Save updated post
      const updatedPost = await post.save();
  
      res.json({
        message: 'Post updated successfully',
        post: updatedPost
      });
  
    } catch (error) {
      console.error('Post update error:', error);
      res.status(500).json({ 
        message: 'Error updating post',
        error: error.message 
      });
    }
  });


router.delete('/:postId', tokenValidation, async (req, res) => {
    try {
      const { postId } = req.params;
      const userId = req.userId;
  
      // 1. Validate ID format
      if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).json({ message: 'Invalid post ID' });
      }
  
      // 2. Find the post
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      // 3. Check ownership (or admin role)
      const user = await User.findById(userId);
      if (post.userId.toString() !== userId && user?.role !== 'admin') {
        return res.status(403).json({ 
          message: 'Unauthorized: Not the owner or admin' 
        });
      }
  
      // 4. Delete the post
      await Post.deleteOne({ _id: postId });
  
      // 5. Update user's post count (if needed)
      await User.findByIdAndUpdate(post.userId, { $inc: { postCount: -1 } });
  
      res.status(200).json({ 
        success: true,
        message: 'Post deleted successfully' 
      });
  
    } catch (error) {
      console.error("Delete error:", error);
      res.status(500).json({ message: 'Server error' });
    }
  });

export default router;