import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const tokenValidation = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    
    if (!token) {
      return res.status(401).json({ 
        error: 'Access denied. No token provided.' 
      });
    }

    // Remove 'Bearer ' prefix if present
    const cleanToken = token.startsWith('Bearer ') 
      ? token.slice(7) 
      : token;

    const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);
    
    // Find the user and attach to request
    const user = await User.findById(decoded.userId).select('-password');
    if (!user || !user.isActive) {
      return res.status(401).json({ 
        error: 'Invalid token or user not found.' 
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        error: 'Token expired. Please log in again.' 
      });
    }
    return res.status(401).json({ 
      error: 'Invalid token.' 
    });
  }
};

export default tokenValidation;