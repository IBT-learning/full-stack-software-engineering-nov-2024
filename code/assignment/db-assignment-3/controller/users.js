import express from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const JWT_SECRET = "this is a secret";
const SALT = 12;


import User from '../model/user.js'; // Import the User model

const router = express.Router();


// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if email already exists
        const existingUserWithEmail = await User.findOne({ email });
        if (existingUserWithEmail) {
        return res.status(409).send({ message: 'Email already exists' });
        }

        // Check if username already exists         
        const existingUserWithUsername = await User.findOne({ username });
        if (existingUserWithUsername) {
        return res.status(409).send('Username already exists');
        }

        if (password.length < 6) {
            return res.status(400).send('Password must be at least 6 characters long');
        }
        const hashedPassword = bcrypt.hashSync(password, SALT);
        const newUser = new User({ 
            username, 
            email,
            password: hashedPassword });
        await newUser.save();
        res.status(201).send(`User ${req.body.username} registered successfully`);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal server error');
    }
});

// Login a user
// router.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).send('Invalid email');
//         }
//         // const user = await User.findOne({ username });
//         // if (!user) {
//         //     return res.status(401).send('Invalid username');
//         // }
        
//         const isPasswordValid = bcrypt.compareSync(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).send('Invalid password');
//         }
//         const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
//         console.log("Generated Token:", token);
//         res.status(200).json({ message: "Login successful", token, user });
//     } catch (error) {
//         console.error('Error logging in user:', error);
//         res.status(500).send('Internal server error');
//     }
// });


router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      // Check if email and password are provided
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password required" });
      }
      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      // Compare password
      //const isMatch = await user.comparePassword(password);
      const isMatch = bcrypt.compareSync(password, user.password)
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      // Create JWT
      const token = jwt.sign(
        { _id: user._id, email: user.email },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      // set cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: true, // Only HTTPS in production
        sameSite: "Strict", // or "Lax"
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });
      res.json({ token });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });



router.get('/test-token', (req, res) => {
    const payload = { test: 'data' };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    console.log("Test Token Generated:", token);
    res.json({ token });
});



export default router;
// This code defines a set of routes for user registration and login using Express.js. It includes middleware for JWT authentication, and uses bcrypt for password hashing and verification. The routes handle user registration, login, and token generation, with appropriate error handling and responses.