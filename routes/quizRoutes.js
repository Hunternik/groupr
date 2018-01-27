const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const Quiz = mongoose.model("quiz");
const Users = mongoose.model("users");

router.get('/api/quiz', function(req, res) {
    Users.find({}, function(req, res) {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    })
//   Quiz.find({}, function(req, res) {
//       if (err) {
//           console.log(err);
//       } else {
//           res.json(found);
//       }
//   })
});

module.exports = router;
