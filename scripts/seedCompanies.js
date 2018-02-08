const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require("../config/keys");
const mongoURI = process.argv[2] === "prod" ? keys.mongoURIPROD : keys.mongoURI;
mongoose.connect(mongoURI);

const associateUsers = async (companies, users, slice) => {
  for (let company of companies) {
    const seedUsers = users.splice(0, slice);
    const userIds = seedUsers.map(user => mongoose.Types.ObjectId(user._id));
    const user = await db.User.find({ _id: { $in: userIds } });
    try {
      const companyData = await db.Company.update(
        { _id: company._id },
        { $set: { employees: userIds } }
      );
      const userData = await db.User.update(
        { _id: { $in: userIds } },
        { $set: { company: company.name } },
        { multi: true }
      );
			console.log(`${companyData.nModified} recruiters successfully seeded to companies`);
			console.log(`${userData.nModified} recruiter companies associated`);
		} catch (error) {
      console.log(error);
      process.exit(1);
    }
	}
	return;
};

module.exports = async () => {
  const activeEvents = await db.Event.find({ active: true });
  const pastEvents = await db.Event.find({ active: false });
  const activeEventIds = activeEvents.map(event => event._id);
  const pastEventIds = pastEvents.map(event => event._id);
  const companySeed = [
    {
      companyId: "google",
      name: "Google",
      industry: "Software",
      website: "https://www.google.com/about/our-company/",
      jobsOpen: ["Software Engineer"],
      primaryContact: "google@gmail.com",
      imgLogoURL: "https://image.flaticon.com/icons/png/512/25/25231.png",
      employees: [],
      activeEvents: activeEventIds,
      pastEvents: pastEventIds
    },
    {
      companyId: "github",
      name: "Github",
      industry: "Internet",
      website: "https://github.com/about",
      jobsOpen: ["Software Engineer"],
      primaryContact: "github@github.com",
      imgLogoURL:
        "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",
      employees: [],
      activeEvents: activeEventIds,
      pastEvents: pastEventIds
    },
    {
      companyId: "amazon",
      name: "Amazon",
      industry: "Software",
      website: "https://www.amazon.com/p/feature/rzekmvyjojcp6uc",
      jobsOpen: ["Software Engineer"],
      primaryContact: "amazon@amazon.com",
      imgLogoURL:
        "http://www.freelogovectors.net/wp-content/uploads/2016/12/amazon_logo.png",
      employees: [],
      activeEvents: activeEventIds,
      pastEvents: pastEventIds
    },
    {
      companyId: "tesla",
      name: "Tesla",
      industry: "Software",
      website: "https://www.tesla.com/about",
      jobsOpen: ["Software Engineer"],
      primaryContact: "tesla@tesla.com",
      imgLogoURL:
        "https://upload.wikimedia.org/wikipedia/commons/6/62/Tesla_Motors_Logo.svg",
      employees: [],
      activeEvents: activeEventIds,
      pastEvents: pastEventIds
    },
    {
      companyId: "spacex",
      name: "SpaceX",
      industry: "Software",
      website: "http://www.spacex.com/about",
      jobsOpen: ["Software Engineer"],
      primaryContact: "spacex@spacex.com",
      imgLogoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/2000px-SpaceX-Logo.svg.png",
      employees: [],
      activeEvents: activeEventIds,
      pastEvents: pastEventIds
    },
    {
      companyId: "airbnb",
      name: "Airbnb",
      industry: "Software",
      website: "https://press.atairbnb.com/about-us/",
      jobsOpen: ["Software Engineer"],
      primaryContact: "airbnb@airbnb.com",
      imgLogoURL:
        "http://pluspng.com/img-png/airbnb-logo-png-airbnb-logo-9-png-22-de-outubro-de-2016-577.png",
      employees: [],
      activeEvents: activeEventIds,
      pastEvents: pastEventIds
    },
    {
      companyId: "facebook",
      name: "Facebook",
      industry: "Software",
      website: "https://www.facebook.com/facebook/info",
      jobsOpen: ["Software Engineer"],
      primaryContact: "facebook@facebook.com",
      imgLogoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1000px-F_icon.svg.png",
      employees: [],
      activeEvents: activeEventIds,
      pastEvents: pastEventIds
    },
    {
      companyId: "microsoft",
      name: "Microsoft",
      industry: "Software",
      website: "https://www.microsoft.com/en-us/about/default.aspx",
      jobsOpen: ["Software Engineer"],
      primaryContact: "microsoft@microsoft.com",
      imgLogoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2000px-Microsoft_logo_%282012%29.svg.png",
      employees: [],
      activeEvents: activeEventIds,
      pastEvents: pastEventIds
    },
    {
      companyId: "ibm",
      name: "IBM",
      industry: "Software",
      website: "https://www.ibm.com/ibm/us/en/",
      jobsOpen: ["Software Engineer"],
      primaryContact: "ibm@ibm.com",
      imgLogoURL:
        "https://seeklogo.com/images/I/ibm-logo-DEFAD88947-seeklogo.com.png",
      employees: [],
      activeEvents: activeEventIds,
      pastEvents: pastEventIds
    }
  ];

  try {
    await db.Company.remove({});
    const companies = await db.Company.collection.insertMany(companySeed);
    let users = await db.User.find({}).limit(50);
		let slice = users.length / companies.ops.length;
		
		console.log(`${companies.insertedCount} companies successfully seeded`);
		await associateUsers(companies.ops, users, slice);
  } catch (err) {
		console.error(err);
    process.exit(1);
	}
	return;
};


