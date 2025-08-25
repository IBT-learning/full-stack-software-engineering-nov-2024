import User from '../models/User.js';
import Post from '../models/Post.js';

// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const postCount = await Post.countDocuments({ 
      userId: userId, 
      isPublished: true 
    });

    res.json({
      ...user.toJSON(),
      postCount
    });
  } catch (error) {
    console.error('Get user profile error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Update user profile (authenticated)
export const updateProfile = async (req, res) => {
  try {
    const allowedUpdates = [
      'displayName', 'bio', 'tagline', 'location', 'website'
    ];
    
    const updates = {};
    Object.keys(req.body).forEach(key => {
      if (allowedUpdates.includes(key)) {
        updates[key] = req.body[key];
      }
    });

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      updates,
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json({
      message: 'Profile updated successfully',
      user: updatedUser
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Delete user account (authenticated)
export const deleteAccount = async (req, res) => {
  try {
    // Soft delete - just mark as inactive
    await User.findByIdAndUpdate(req.user._id, { isActive: false });
    
    // Also unpublish all user's posts
    await Post.updateMany(
      { userId: req.user._id },
      { isPublished: false }
    );

    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    console.error('Delete account error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};