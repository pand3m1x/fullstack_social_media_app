import express from 'express';
import bcrypt from 'bcrypt'

const router = express.Router();

import User from '../models/User.js';

const secret = process.env.JWT_SECRET
const expiration = '24h'

router.post('/register',  async (req, res) => {

try {

  // hash the password
  const saltRounds = 10

  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)

  const user = await User.create({
    ...req.body,
    password: hashedPassword

  });

  const payload = { 
    username: user.username,
    email: user.email,
    _id: user._id
   }

  // create a token
  const token = jwt.sign({ data: payload }, secret, { expiredIn: expiration })

  res.status(201).json({ token, user })

} catch(err) {

  console.log(err.message)
  res.status(400).json({ message: err.message })

}

});