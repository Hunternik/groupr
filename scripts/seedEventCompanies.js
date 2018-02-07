const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require('../config/keys');
const mongoURI = process.argv[2] === 'prod' ? keys.mongoURIPROD : keys.mongoURI
mongoose.connect(mongoURI);

(async () => {
	// const activeEvent = await db.Event.findOne({ active: true });
	const activeEvent = await db.Event.findOne({ eventId: 'SEA' });
	const companies  = await db.Company.find({}).limit(2);

	activeEvent.companies = companies.map(company => company._id);

	try {
		const data = await activeEvent.save();
		console.log('successfully seeded companies on events');
		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
})();