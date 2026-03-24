import express from 'express';

const router = express.Router();

import Post from '../models/Post.js';

import { authMiddleware } from '../utils/auth.js'

router.use( authMiddleware )
router.post('/', async (req, res) => {
   
  try{

    const posts = await Post.create(req.body)
    res.status(200).json(Post)

  } catch(err) {

    console.log(err.message)
    res.status(400).json({ message: err.message })

  }

})
router.get('/', async (req, res) => {

  try{
    const posts = await Post.find({})
    res.status(200).json(posts)

  } catch(err) {
    console.log(err.message)
    res.status(400).json({ message: err.message })
  }
})

export default router