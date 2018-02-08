const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require("../config/keys");
const mongoURI = process.argv[2] === "prod" ? keys.mongoURIPROD : keys.mongoURI;
mongoose.connect(mongoURI);

module.exports = async () => {
  const events = await db.Event.find({}).select("_id");
  const companies = await db.Company.find({});
  const companiesId = companies.map(company =>
    mongoose.Types.ObjectId(company._id)
  );
  let recruiterIds = [];

  companies.forEach(
    company => {
		[first, second, ...rest] = company.employees;
			recruiterIds = [...recruiterIds, first, second];
		}
  );
  recruiterIds = recruiterIds.map(id => mongoose.Types.ObjectId(id));

  try {
    const data = await db.Event.update(
      { _id: { $in: events } },
      { $set: { companies: companiesId, recruiters: recruiterIds } },
      { multi: true }
		);
		console.log(`${data.nModified} companies and recruiters successfully seeded on events`);

		return;
  } catch (err) {
		console.log(err);
    process.exit(1);
  }
};
