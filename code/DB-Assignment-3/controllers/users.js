import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  console.log("Registering user with email:", email);
  console.log("Registering user with password:", password);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = new User({ email, password }); // Let schema hash it
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt with email:", email);
  console.log("Password entered:", password);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    console.log("Stored hashed password:", user.password);

    const isMatch = await user.comparePassword(password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})

    res.status(200).json({ message: "Login successful",token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
