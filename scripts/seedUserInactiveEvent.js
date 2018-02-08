const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require("../config/keys");
const mongoURI = process.argv[2] === "prod" ? keys.mongoURIPROD : keys.mongoURI;
mongoose.connect(mongoURI);

(async () => {
	const userEmail = ['jmsjtu@gmail.com'];
  const inactiveEvent = await db.Event.find({ active: false });
  const activeEvent = await db.Event.findOne({ active: true });
  const allEvents = [...inactiveEvent, activeEvent];
  const eventIds = allEvents.map(event => event._id);

  try {
    const data = await db.User.update(
			{ email: { $in: userEmail } },
			{ $set: { events: eventIds } },
      { multi: true }
		)
    console.log("successfully added events");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
