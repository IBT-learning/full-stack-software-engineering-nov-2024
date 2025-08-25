import express from 'express';
import { getUserProfile, updateProfile, deleteAccount } from '../controllers/users.js';
import tokenValidation from '../middleware/auth.js';

const router = express.Router();

router.get('/:userId', getUserProfile);
router.put('/profile', tokenValidation, updateProfile);
router.delete('/account', tokenValidation, deleteAccount);

export default router;