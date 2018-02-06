const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require('../config/keys');
mongoose.connect(keys.mongoURI);

const clearEvents = async () => {
	const User = await db.User.findOne({ _id: "5a792cc35758ee486ec3ec4a" });
	User.events = [];
	
	try {
		await User.save();
		console.log('save successful!');
		seedUserEvents();
	} catch(err) {
		console.log(err);
		process.exit(1);
	}
}

const seedUserEvents = async () => {
	const inactiveEvent = await db.Event.find({ active: false });
	const activeEvent = await db.Event.findOne({ active: true });
	const allEvents = [...inactiveEvent, activeEvent];
	const User = await db.User.findOne({ _id: "5a792cc35758ee486ec3ec4a" });

	User.events = allEvents;

	try {
		await User.save();
		console.log('successfully seeded file');
		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
}

clearEvents();