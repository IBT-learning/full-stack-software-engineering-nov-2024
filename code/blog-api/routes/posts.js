import express from 'express';
import {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPostsByUser
} from '../controllers/posts.js';
import tokenValidation from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllPosts);
router.get('/user/:userId', getPostsByUser);
router.get('/:id', getPost);

// Protected routes (require authentication)
router.post('/', tokenValidation, createPost);
router.put('/:id', tokenValidation, updatePost);
router.delete('/:id', tokenValidation, deletePost);

export default router;