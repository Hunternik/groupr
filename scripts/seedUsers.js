const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require("../config/keys");
const faker = require("faker");
const mongoURI = process.argv[2] === "prod" ? keys.mongoURIPROD : keys.mongoURI;
mongoose.connect(mongoURI);

const generateUsers = () => {
  const users = [];
  for (let i = 0; i < 70; i++) {
    const firstName = faker.fake("{{name.firstName}}");
    const lastName = faker.fake("{{name.lastName}}");
    const screenName = faker.fake("{{internet.userName}}");
    const user = {
      googleId: faker.fake("{{random.uuid}}"),
      linkedInId: faker.fake("{{random.uuid}}"),
      displayName: `${firstName} ${lastName}`,
      lastName: lastName,
      firstName: firstName,
      email: faker.fake("{{internet.email}}"),
      company: faker.fake("{{company.companyName}}"),
      position: faker.fake("{{name.jobTitle}}"),
      iconPhotoURL: `https://api.adorable.io/avatars/${i}`,
      bigPhotoURL: `https://api.adorable.io/avatars/${i}`,
      credits: 0,
      events: [],
      linkedInProfileURL: `https://www.linkedin.com/in/${screenName}/`,
      googleProfileURL: `https://plus.google.com/${screenName}`
    };
    users.push(user);
  }
  return users;
};

module.exports = async () => {
  const seedUsers = generateUsers();

  try {
    await db.User.remove({});
		const data = await db.User.collection.insertMany(seedUsers);
    console.log(`${data.insertedCount} users successfully seeded`);
		return;
  } catch (err) {
		console.log(err);
    process.exit(1);
  }
};
