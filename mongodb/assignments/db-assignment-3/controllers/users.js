import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import Recipe from "../models/recipe.js";
// import * as punycode from "node:punycode";
import jwt from "jsonwebtoken";

const router = express.Router();
const SALT = 12;
const JWT_SECRET = "my secret";

router.get("/", async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
  // console.log(user);
});

router.post("/register", async (req, res) => {
  try {
    const { password, email } = req.body;

    const newUser = new User({
      email,
      password: bcrypt.hashSync(password, SALT),
    });
    const token = jwt.sign(
      {
        userId: newUser._id,
      },
      JWT_SECRET,
      {
        expiresIn: 60 * 60 * 24,
      },
    );
    await newUser.save();
    res.send(token);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default router;
