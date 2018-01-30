const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey); 
const requireLogin = require('./middleware/requireLogin');

router.post('/stripe', requireLogin, async (req, res) => {
	const charge = await stripe.charges.create({
		amount: 100,
		currency: 'usd',
		description: '$1 to make you holla credits',
		source: req.body.id // obtained with Stripe.js
	});
	req.user.credits += 1;
	const user = await req.user.save();
	res.send(user);
});

module.exports = router;
