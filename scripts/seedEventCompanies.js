const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require('../config/keys');
mongoose.connect(keys.mongoURI);

const seedEventCompanies = async () => {
	const activeEvent = await db.Event.findOne({ active: true });
	const companies  = await db.Company.find({}).limit(2);

	activeEvent.companies = companies.map(company => company._id);

	try {
		const data = await activeEvent.save();
		console.log('successfully seeded file');
		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
}

seedEventCompanies();