import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
const SALT = 12;
const JWT_KEY = "Secret_key";

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password: bcrypt.hashSync(password, SALT),
    });
    await newUser.save();
    res.send("new user added successfully.");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.send("unknown username");
    } else {
      const verified = await bcrypt.compare(password, user.password);
      if (!verified) {
        res.send("Incorrect Password");
      } else {
        // res.send("User Verified")
        const token = jwt.sign(
          {
            userId: user._id,
          },
          JWT_KEY,
          {
            expiresIn: 60 * 60 * 24,
          },
        );

        res.json({ message: "user verified", token, user });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default router;
