const jwt = require('jsonwebtoken');
const User = require('../models/User');

const tokenValidation = async (req, res, next) => {
  try {
    // Get token from header or cookie
    let token = req.header('Authorization');
    
    // Check for token in cookies if not in header
    if (!token && req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }
    
    // Remove 'Bearer ' prefix if present
    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7);
    }
    
    if (!token) {
      return res.status(401).json({ 
        error: 'Access denied. No token provided.' 
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      
      // Get user from database (excluding password)
      const user = await User.findById(decoded.userId).select('-password');
      
      if (!user) {
        return res.status(401).json({ 
          error: 'Invalid token. User not found.' 
        });
      }
      
      // Add user to request object for use in next middleware/route
      req.user = user;
      req.userId = user._id;
      
      next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ 
          error: 'Token expired. Please login again.' 
        });
      } else if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ 
          error: 'Invalid token.' 
        });
      }
      throw error;
    }
  } catch (error) {
    console.error('Token validation error:', error);
    res.status(500).json({ 
      error: 'Server error during authentication.' 
    });
  }
};

module.exports = tokenValidation;