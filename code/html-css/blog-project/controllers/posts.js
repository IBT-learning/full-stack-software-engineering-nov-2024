import express from "express";
import User from "../models/user.js";
import Post from "../models/post.js";
import authenticator from "../custommiddleware/tokenValidation.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await Post.find({}); // Missing await!
    res.status(200).send(result);
    // console.log(result);
  } catch (err) {
    console.log(err); // Not sending any error response
  }
});

router.get("/:id", authenticator, async (req, res) => {
  try {
    // const { author } = req.body;
    const { id } = req.params;
    const result = await Post.find({ userToken: id });
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/publish/:id", authenticator, async (req, res) => {
  try {
    const token = req.params.id;
    const { title, description } = req.body; // Remove author from destructuring

    const user = await User.findOne({ userToken: token });
    if (!user) return res.status(404).send("No user found.");

    const post = new Post({
      author: user.fullName, // Use user's name from DB
      title,
      description,
      userId: user._id,
      userToken: token,
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", authenticator, async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.deleteOne({ title: id });
    if (!post) return res.status(404).send("This post does not belong to you");
    // res.send(
    //   {
    //     status: 200,
    //     success: true,
    //     message: "Post deleted successfully.",
    //   },
    //   post,
    // );
    res.send(post);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

export default router;
