// Controller for creating new Users
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT = 10;
const JWT_SECRET_KEY = "IamtheSecretKey";

const registerUser = async (req, res) => {
  try {
    const userData = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, SALT),
    };
    const newUser = await User.create(userData);
    res.status(201).json({
      message: "User Registered Successfully",
      newUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "User Registration Error",
      err: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const normalizedEmail = email.toLowerCase();
    const registeredUser = await User.findOne({ email: normalizedEmail });

    if (!registeredUser) {
      return res.status(400).json({
        message: "User Login Error",
        error: "No user with that email registered. Register now.",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      registeredUser.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "User Login Error",
        error: "Incorrect password. Access denied.",
      });
    }

    const token = jwt.sign({ userId: registeredUser._id }, JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    const { _id, name } = registeredUser; // only safe fields
    res.json({
      message: "User Login Successful",
      token,
      user: { _id, name, email: registeredUser.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


export { registerUser, loginUser };
