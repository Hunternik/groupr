const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');

const sponsorSchema = new Schema({
	eventId: String,
	name: String,
	industry: String,
	website: String,
	employees: [userSchema],
	events: [];
});

// first arugment passed into models is the name of the collection, second arg is info
mongoose.model('sponsors', sponsorSchema);
