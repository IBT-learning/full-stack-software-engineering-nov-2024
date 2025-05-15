import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
const SALT = 11;
const SECRET = 'secret-key';

router.post('/register', async (req, res) => {
  let {name, email, password} = req.body;

  if (!name || !email || !password){
    return res.status(400).json({'Error': 'Name, Email and Password are ALL required for sign up'});
  }

  try {
    password = await bcrypt.hash(password, SALT);
  
    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();

    res.status(201).json({'Success': 'New user created'});
  }catch (err){
    console.error('Error creating new user: ', err);

    //for duplicate emails
    if (err.code === 11000) {
      return res.status(409).json({ Error: 'Email already registered' });
    }

    // for Mongoose validation errors
    if(err.name === 'ValidationError'){
       return res.status(422).json({
        'Error': 'Validation failed',
        'Details': err.errors
      });
    }

    res.status(500).json({'Error': 'Failed to create a new user'});
  }
});

router.post('/login', async (req, res) => {
  let {email, password} = req.body;

  if (!email || !password){
    return res.status(400).json({'Error' : 'Both email and password are required to login.'});
  }
  
  try{
    const user = await User.findOne({email});

    if (!user){
      return res.status(401).json({'Error': 'Invalid Email or Password'});
    }

    const validUser = await bcrypt.compare(password, user.password);
    if (!validUser){
      return res.status(401).json({'Error': 'Invalid Email or Password'});
    }

    // if the user is a valid user, create a JWT and attach it to the response
    const payload = {userId: user._id};
    const token = jwt.sign(payload, SECRET, {expiresIn: 60*60*24*7});

    res.status(200).json({
      'Success': 'Valid user logged in',
      token,
      user
    });
  }catch (err){
    console.error('Error logging in: ', err);
    res.status(500).json({'Error': 'Failed to login due to a server error'});
  }
});

export default router;