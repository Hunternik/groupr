const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require("../config/keys");
const mongoURI = process.argv[2] === "prod" ? keys.mongoURIPROD : keys.mongoURI;
mongoose.connect(mongoURI);
const companyList = [
  "Google",
  "Github",
  "Amazon",
  "Tesla",
  "SpaceX",
  "Airbnb",
  "Facebook",
  "Microsoft",
  "IBM"
];

module.exports = async () => {
  const events = await db.Event.find({}).select("_id");
  const users = await db.User.find({ company: { $nin: companyList } }).select('_id');

  try {
    const data = await db.Event.update(
      { _id: { $in: events } },
      { $set: { attendees: users } },
      { multi: true }
    );
		console.log(`${data.nModified} attendees seeded to events`);
		return;
  } catch (err) {
		console.log(err);
    process.exit(1);
  }
};
