import express from "express";
const router = express.Router();
import { mongoose } from "../db.js";
import Post from '../models/Post.js'; 
import User from "../models/User.js";
import tokenValidation from '../middlewares/tokenValidation.js';

// Get all posts
router.get("/", tokenValidation, async (req, res) => {
  try {
    const posts = await Post.find().populate('createdBy', 'email profilePhoto');  // Populate user details
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).send(`Error fetching posts: ${err.message}`);
  }
});

// Get posts by a specific user
router.get("/user/:userId", tokenValidation, async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate if userId is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send(`Invalid user ID: ${userId}`);
    }

    // Find posts created by the user
    const posts = await Post.find({ createdBy: userId }).populate('createdBy', 'email profilePhoto');

    if (posts.length === 0) {
      return res.status(404).send(`No posts found for user with ID: ${userId}`);
    }

    res.status(200).json(posts);  // Return the posts as JSON
  } catch (err) {
    res.status(500).send(`Error fetching posts: ${err.message}`);
  }
});

// Create a new post (protected)
router.post("/", tokenValidation, async (req, res) => {
  try {
    const data = req.body;
    
    const post = new Post({
      ...data,
      createdBy: req.user._id,  // Add createdBy from validated user
    });

    const savedPost = await post.save();
    res.status(201).send(`Post titled "${savedPost.title}" by ${req.user.email}`);
    
    // Optionally, add the post ID to the User model if you want to track the posts from users
    await User.findByIdAndUpdate(req.user._id, {
      $push: { posts: savedPost._id }  // Add post ID to user's posts list
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save post" });
  }
});

// Update a post by ID (protected)
router.put("/update/:postId", tokenValidation, async (req, res) => {
  try {
    if (mongoose.Types.ObjectId.isValid(req.params.postId)) {
      const filter = { _id: req.params.postId };
      const body = req.body;
      const post = await Post.findOne(filter);

      // Check if the logged-in user is the owner of the post
      if (post.createdBy.toString() !== req.user._id.toString()) {
        return res.status(403).send("You do not have permission to modify this post");
      }

      const updatedPost = await Post.updateOne(filter, body, { upsert: true });
      if (updatedPost.modifiedCount === 1) {
        res.send("Post successfully updated");
      } else {
        res.send("Post update failed");
      }
    } else {
      res.status(404).send("Invalid post ID");
    }
  } catch (err) {
    res.status(500).send("Error updating post: " + err.message);
  }
});

// Delete a post by ID (protected)
router.delete("/delete/:postId", tokenValidation, async (req, res) => {
  try {
    if (mongoose.Types.ObjectId.isValid(req.params.postId)) {
      const filter = { _id: req.params.postId };
      const post = await Post.findOne(filter);

      // Check if the logged-in user is the owner of the post
      if (post.createdBy.toString() !== req.user._id.toString()) {
        return res.status(403).send("You do not have permission to delete this post");
      }

      const deletionResult = await Post.deleteOne(filter);
      if (deletionResult.deletedCount === 1) {
        res.send("Successfully deleted the post");
      } else {
        res.send("Something went wrong during deletion");
      }
    } else {
      res.status(404).send("Invalid post ID");
    }
  } catch (err) {
    res.status(500).send("Error deleting post: " + err.message);
  }
});

export default router;
