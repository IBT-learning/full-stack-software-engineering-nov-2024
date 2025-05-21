import express from 'express';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import Post from '../models/Post.js';
import User from '../models/User.js';
import { mongoose } from '../db.js';
import tokenValidator from '../middleware/tokenValidator.js';

const router = express.Router();
dayjs.extend(relativeTime);

// get all posts
router.get('/', async (req, res) => {
  let posts; 
  try{
    posts = await Post.find();
    res.json(posts);
  }catch (err){
    console.error('Error getting posts: ', err);
    res.status(500).json({'Error' : 'Cannot get posts, server error'});
  }
});

// posts from a single user
router.get('/:userId', async (req, res) => {
  const id = req.params.userId;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({'Error': 'Invalid user Id'})
  }

  try{
    const user = await User.findById(id);

    if (!user){
      return res.status(404).json({'Error': 'User not found'});
    }

    const rawPosts = await Post.find({createdBy: id}).populate('createdBy', 'displayName').sort({ createdAt: -1 });
    const postsDisplay = rawPosts.map((post) => {
      return {
        creator: post.createdBy,
        title: post.title,
        body: post.body,
        createdAtAgo: dayjs(post.createdAt).fromNow()
      }
    });

    const profile = rawPosts[0].createdBy.displayName;

    res.status(200).json({
      profile: profile,
      posts: postsDisplay
    });
  }catch (err){
    console.error('Error finding user: ', err);
    res.status(500).json({'Error': 'Cannot find user, server error'});
  }
});

// make new posts
router.post('/', tokenValidator, async (req, res) => {
  console.log(req.body);
  try{
    const newPost = new Post({
      createdBy: req.user.userId,
      ...req.body
    });


    await newPost.save();

    res.status(201).json(newPost);
  }catch (err){
    console.error('Error creating post: ', err);

    // for Mongoose validation errors
    if(err.name === 'ValidationError'){
       return res.status(422).json({
        'Error': 'Validation failed',
        'Details': err.errors
      });
    }

    res.status(422).json({'Error': 'Failed to create post, server error'});
  }
});

// edit own posts
router.put('/edit/:postId', tokenValidator, async (req, res) => {
  const id = req.params.postId;
  const userId = req.user.userId;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(422).json({'Error': 'Invalid post Id'});
  }

  try{
    const post = await Post.findById(id);

    if (!post){
      return res.status(404).json({'Error': 'Post not found'});
    }

    if (userId.toString() !== post.createdBy.toString()){
      return res.status(403).json({'Error': 'Cannot edit a post from another user'});
    }

    const {createdBy, ...editInfo} = req.body 
    const updatedPost = await Post.findByIdAndUpdate({_id: id}, editInfo, {new: true});

    res.status(200).json(updatedPost);
  }catch (err){
    console.error('Error editing post: ', err);

    // for Mongoose validation errors
    if(err.name === 'ValidationError'){
       return res.status(422).json({
        'Error': 'Validation failed',
        'Details': err.errors
      });
    }

    res.status(500).json({'Error': 'Failed to edit post, server error'});
  }
});

// delete own posts
router.delete('/delete/:postId', tokenValidator, async (req, res) => {
  const id = req.params.postId;
  const userId = req.user.userId; 

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(422).json({'Error': 'Invalid post Id'});
  }

  try{
    const post = await Post.findById(id);

    if (!post){
      return res.status(404).json({'Error': 'Post not found'});
    }

    if (userId.toString() !== post.createdBy.toString()){
      return res.status(403).json({'Error': 'Cannot delete a post from another user'});
    }

    await Post.deleteOne({_id: id});

    res.status(200).json({'Success': 'Deleted post'});
  }catch (err){
    console.error('Error deleting post: ', err);
    res.status(500).json({'Error': 'Failed to delete post, server error'});
  }
});

export default router;