const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const Quiz = mongoose.model('quiz');
const requireLogin = require('./middleware/requireLogin');

router.get('/recruiter', requireLogin, function(req, res) {
  Quiz.find({}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
			console.log('this works');
      // res.json(found);
    }
  });
});

module.exports = router;
