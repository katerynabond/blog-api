const express = require('express');
const router = express.Router();


router.get('/users', (req,res) => {
  res.send('getting all dem users!!!');
});
router.get('/users/:userID', (req,res) => {
  res.send('getting that one special someone!!!');
});
router.post('/users', (req,res) => {
  res.send('creating that new user you requested!!!');
});
router.put('/users/:userID', (req,res) => {
  res.send('updates!!!');
});
router.delete('/users/:userID', (req,res) => {
  res.send('burning it down!!!');
});

module.exports = router;
