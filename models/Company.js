const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');
const eventSchema = require('./Events')

const companySchema = new Schema({
	companyId: String,
	name: String,
	industry: String,
  website: String,
  jobsOpen: Array,
  primaryContact: String,
  imgLogoURL: String,
<<<<<<< HEAD
	employees: [userSchema],
  // activeEvents: [eventSchema],
  activeEvents: [String],
  pastEvents: [eventSchema],
=======
	employees: [
		{
			type: Schema.Types.ObjectId,
      ref: "user"
		}
	],
  activeEvents: [
		{
			type: Schema.Types.ObjectId,
      ref: "event"
		}
	],
  pastEvents: [
		{
			type: Schema.Types.ObjectId,
      ref: "event"
		}
	],
>>>>>>> d7c85682d0b9e751a8d1bf2657a40e5d92b484e7
});

// first arugment passed into models is the name of the collection, second arg is info
const Companies = mongoose.model('companies', companySchema);

module.exports = Companies;
