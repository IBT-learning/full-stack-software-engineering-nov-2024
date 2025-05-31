import Post from "../models/postModel.js";
import mongoose from "mongoose";

// get all posts
const getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.status(200).json(posts);
};

// get a single post
const getSinglePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post!!" });
  }
  const post = await Post.findById(id);
  if (!post) {
    return res.status(404).json({ error: "No such post!!!" });
  }
  res.status(200).json(post);
};

// create a new post
const createPost = async (req, res) => {
  const { title, image, body } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!image) {
    emptyFields.push("image");
  }

  if (!body) {
    emptyFields.push("body");
  }
  if (emptyFields.length > 0) {
    return res
      .status(404)
      .json({ error: "Please fill in all the forms", emptyFields });
  }

  try {
    const userId = req.user._id;
    const post = await Post.create({
      title,
      image,
      body,
      userId,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a post
const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post!!" });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  if (!post) {
    return res.status(404).json({ error: "No such post!!!" });
  }

  res.status(200).json(post);
};

// update a Post
const updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post!!" });
  }

  const post = await Post.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!post) {
    return res.status(404).json({ error: "No such post!!!" });
  }

  res.status(200).json(post);
};

export {
  getAllPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
};
