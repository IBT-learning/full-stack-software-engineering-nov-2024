import Post from '../models/Post.js';
import User from '../models/User.js';

// Get all posts (public)
export const getAllPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, tag, userId } = req.query;
    
    const query = { isPublished: true };
    
    if (category) query.category = category;
    if (tag) query.tags = { $in: [tag] };
    if (userId) query.userId = userId;

    const posts = await Post.find(query)
      .populate('userId', 'username displayName profilePhoto')
      .sort({ publishedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean();

    const totalPosts = await Post.countDocuments(query);

    res.json({
      posts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: parseInt(page),
      totalPosts
    });
  } catch (error) {
    console.error('Get all posts error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Get single post (public)
export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    
    const post = await Post.findOne({
      $or: [{ _id: id }, { slug: id }],
      isPublished: true
    }).populate('userId', 'username displayName profilePhoto bio');

    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    // Increment view count
    await Post.findByIdAndUpdate(post._id, { $inc: { views: 1 } });

    res.json(post);
  } catch (error) {
    console.error('Get post error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Create new post (authenticated)
export const createPost = async (req, res) => {
  try {
    const { title, body, excerpt, tags, category, featuredImage } = req.body;

    if (!title || !body) {
      return res.status(400).json({ 
        error: 'Title and body are required.' 
      });
    }

    const newPost = new Post({
      title,
      body,
      excerpt,
      userId: req.user._id,
      tags: tags || [],
      category,
      featuredImage,
    });

    await newPost.save();
    
    // Populate user info before sending response
    await newPost.populate('userId', 'username displayName profilePhoto');

    res.status(201).json({
      message: 'Post created successfully',
      post: newPost
    });
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Update post (authenticated, owner only)
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    // Check if user owns the post
    if (post.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ 
        error: 'Access denied. You can only edit your own posts.' 
      });
    }

    const allowedUpdates = [
      'title', 'body', 'excerpt', 'tags', 'category', 
      'featuredImage', 'isPublished'
    ];
    
    const updates = {};
    Object.keys(req.body).forEach(key => {
      if (allowedUpdates.includes(key)) {
        updates[key] = req.body[key];
      }
    });

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    ).populate('userId', 'username displayName profilePhoto');

    res.json({
      message: 'Post updated successfully',
      post: updatedPost
    });
  } catch (error) {
    console.error('Update post error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Delete post (authenticated, owner only)
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    // Check if user owns the post
    if (post.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ 
        error: 'Access denied. You can only delete your own posts.' 
      });
    }

    await Post.findByIdAndDelete(id);

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Delete post error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Get posts by user (public)
export const getPostsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const posts = await Post.find({ 
      userId, 
      isPublished: true 
    })
      .populate('userId', 'username displayName profilePhoto')
      .sort({ publishedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean();

    const totalPosts = await Post.countDocuments({ 
      userId, 
      isPublished: true 
    });

    res.json({
      posts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: parseInt(page),
      totalPosts
    });
  } catch (error) {
    console.error('Get posts by user error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};