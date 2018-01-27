const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');

const eventSchema = new Schema({
	eventId: String,
	title: String,
	description: String,
	date: Date,
	location: String,
	attendees: [userSchema],
	sponsors: [userSchema],
	active: Boolean,
	passed: Boolean
});

// first arugment passed into models is the name of the collection, second arg is info
mongoose.model('events', eventSchema);
