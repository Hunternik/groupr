const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');
const eventSchema = require('./Events')

const companySchema = new Schema({
	companyId: String,
	name: String,
	industry: String,
	website: String,
	employees: null,
	events: null
});

// first arugment passed into models is the name of the collection, second arg is info
mongoose.model('companies', companySchema);
