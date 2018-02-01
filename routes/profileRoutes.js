const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('users');
const requireLogin = require('./middleware/requireLogin');

router.post('/', (req, res) => {
	const { _id, updatedFN, updatedLN, updatedEmail, updatedPosition } = req.body;
	
	const user = await User.findById(_id);
	console.log(user);
});

module.exports = router;
