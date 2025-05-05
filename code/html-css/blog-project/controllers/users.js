import express from "express";
import { mongoose } from "../db.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import user from "../models/user.js";
import authenticator from "../custommiddleware/tokenValidation.js";
import Post from "../models/post.js";

const router = express.Router();
const secret = process.env.JWT_KEY;

router.get("/user/:token", authenticator, async (req, res) => {
  try {
    const userId = req.params.token;
    const result = await User.findOne({ userToken: userId });
    res.json(result);
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/", async (req, res) => {
  const { address, fullName, bio } = req.body;

  try {
    const newUser = new User({
      fullName,
      address,
      bio,
    });
    // res.json(newUser);
    const token = jwt.sign({ userId: newUser._id }, secret);
    res.cookie("token", token, { httpOnly: true });
    newUser.userToken = token;
    await newUser.save();
    res.send({
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

router.put("/:id", authenticator, async (req, res) => {
  const { fullName, bio, address } = req.body;
  const userId = req.params.id;

  try {
    // const result
    const result = await user.findOne({ userToken: userId });
    // const posts = await user.find({ userToken: userId }).;
    if (!result) {
      res.send("user not found");
    } else {
      await result.updateOne({
        fullName,
        address,
        bio,
      });
      await Post.updateMany(
        { userToken: userId }, // filter
        { $set: { author: fullName } }, // update operation
      );

      res.send(result);
    }
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

export default router;
