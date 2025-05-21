import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
const SALT = parseInt(process.env.SALT);
const SECRET = process.env.SECRET_KEY;

router.post('/register', async (req, res) => {
  let {displayName, email, password} = req.body;

  if (!displayName || !email || !password){
    return res.status(400).json({'Error': 'Display name, Email and Password are all required to sign up.'});
  }

  try{
    password = await bcrypt.hash(password, SALT);

    const newUser = new User({
      displayName,
      email,
      password
    });

    await newUser.save();

    // once the new user is successfully created what do I want to display??
    return res.status(201).json({'Success': 'New user created'});
  }catch (err){
    console.error(`Error creating new user: `, err);

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

    res.status(500).json({'Error': 'Failed to create a new user due to a server error'});
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
    const {_id, name} = user;

    res.status(200).json({
      'Success': 'Valid user logged in',
      token,
      user: {name, _id}
    });
  }catch (err){
    console.error('Error logging in: ', err);
    res.status(500).json({'Error': 'Failed to login due to a server error'});
  }
});

export default router;