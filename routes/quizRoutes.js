const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const quizSchema = require('../models/Quiz');
const Quiz = mongoose.model("quiz", quizSchema);
// const Users = mongoose.model("users");

router.get('/quiz', function(req, res) {
    // Users.find({}, function(err, found) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.send(found);
    //     }
    // })
  Quiz.find({}, function(err, found) {
      if (err) {
          console.log(err);
      } else {
          res.json(found);
      }
  })
});

module.exports = router;
