const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

/////////////////////////////////////////////
router.get('/users', (req,res) => {
  //the {} is the query, get them all
  User.find({}, function(err, users){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      users: users
    });
  });
});
////////////////////////////////////////////
//get that one user by the _id
router.get('/users/:userID', (req,res) => {
  User.find({ _id : req.params.userID }, function(err, users){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      users: users
    });

  });

});
///////////////////////////////////////////
router.post('/users', (req,res) => {
  const newUser = new User(req.body);
  newUser.save(function(err, user){
    if(err) return res.status(500).json({err: err});
    return res.status(201).json({
      msg: "successfully created user!"
    });
  });

});
//////////////////////////////////////////

router.put('/users/:userID', (req,res) => {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, function(err){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      msg: "Successfully updated user!"
    });
  });
});

/////////////////////////////////////////
router.delete('/users/:userID', (req,res) => {
  User.findOneAndRemove({ _id: req.params.userID }, function(err, removedUser){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      msg: "User successfully removed!"
    });
  });
});

module.exports = router;
