const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/users', (req,res) => {
  res.send('getting all dem users!!!');
});
router.get('/users/:userID', (req,res) => {
  res.send('getting that one special someone!!!');
});
router.post('/users', (req,res) => {

  const newUser = new User({ email: 'J@j.j' });
  newUser.save(function(){
    res.send('created a new user');
  });
//  res.send('creating that new user you requested!!!');
});
router.put('/users/:userID', (req,res) => {
  res.send('updates!!!');
});
router.delete('/users/:userID', (req,res) => {
  res.send('burning it down!!!');
});

module.exports = router;
