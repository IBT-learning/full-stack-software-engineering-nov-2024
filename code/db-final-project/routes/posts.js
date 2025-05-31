import express from "express";
import {
  getAllPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
} from "../controllers/postController.js";
import tokenValidation from "../middleware/tokenValidation.js";

const router = express.Router();

// Get All posts
router.get("/", getAllPosts);

// Get a post
router.get("/:id", getSinglePost);
// require auth for all post routes
router.use(tokenValidation);

// Create a post
router.post("/", createPost);



// Delete a single post
router.delete("/:id", deletePost);

// UPDATE a post
router.patch("/:id", updatePost);

export default router;
