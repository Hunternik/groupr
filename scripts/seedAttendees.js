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
  const events = await db.Event.find({});
  const users = await db.User.find({ company: { $nin: companyList } });
  const eventsId = events.map(event => mongoose.Types.ObjectId(event._id));
  const usersId = users.map(user => mongoose.Types.ObjectId(user._id));

  try {
    const data = await db.Event.update(
      { _id: { $in: eventsId } },
      { $set: { attendees: usersId } },
      { multi: true }
    );
		console.log(`${data.nModified} attendees seeded to events`);
		return;
  } catch (err) {
		console.log(err);
    process.exit(1);
  }
};
