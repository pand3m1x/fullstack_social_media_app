import express from 'express';
import bcrypt from 'bcrypt'

const router = express.Router();

import User from '../models/User.js';

router.post('/register',  async (req, res) => {

try {

  // hash the password
  const saltRounds = 10

  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)

  const user = await User.create({
    ...req.body,
    password: hashedPassword

  });

  // create a token
} catch(err) {

  console.log(err)

}

});