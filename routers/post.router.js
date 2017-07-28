
const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');


router.get('/posts', (req, res) => {
   //getting all posts!
    Post.find({}, function(err, posts){
  	if(err) return res.status(500).json({err: err});
	  return res.status(200).json({
	  posts: posts
	  });
  });
});

router.get('/posts/:postId', (req, res) => {
    //getting one post!
    Post.find({ _id: req.params.postId }, function(err, posts){
  	if(err) return res.status(500).json({err: err});
	  return res.status(200).json({
		posts: posts
	  });
  });
});

router.post('/posts', (req, res) => {
      //creating post!
      const post = new Post(req.body);
      post.save(function(err, post){
     	if(err) return res.status(500).json({err: err});
	    return res.status(201).json({
	    msg: 'Successfully created a new post'
	   });
  });
});

router.put('/posts/:postId', (req, res) => {
    //updates on the post!
    Post.findOneAndUpdate({ _id: req.params.postId }, req.body, function(err, post){
   	if(err) return res.status(500).json({ err: err });
	  return res.status(200).json({
		msg: 'Successfully updated a post'
	  });
  });
});

router.delete('/posts/:postId', (req, res) => {
    //burning it down!
    Post.findOneAndRemove({ _id: req.params.postId }, function(err){
   	if(err) return res.status(500).json({ err: err});
	  return res.status(200).json({
		msg: 'Successfully deleted user'
	 });
  });
});

module.exports = router;
