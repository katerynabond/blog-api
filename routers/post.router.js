const express = require('express');
const router = express.Router();



router.get('/posts', (req,res) => {
  res.send('getting all posts!!!');
});
router.get('/posts/:postID', (req,res) => {
  res.send('getting one post!!!');
});
router.post('/posts', (req,res) => {
  res.send('creating post!!!');
});
router.put('/posts/:postID', (req,res) => {
  res.send('updates on the post!!!');
});
router.delete('/posts/:postID', (req,res) => {
  res.send('burning it down!!!');
});

module.exports = router;
