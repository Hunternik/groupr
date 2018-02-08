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
        { $set: { company: company.name, companyPhotoURL: company.imgLogoURL } },
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
      imgLogoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png",
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
        "https://image.flaticon.com/icons/png/512/25/25231.png",
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/771px-Tesla_T_symbol.svg.png",
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
        "http://www.doz.com/cms/wp-content/uploads/2015/03/spacex-logo.jpg",
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
        "https://p2a-images.s3.amazonaws.com/production/customers/532/YemNriz3uu6a60oQeu6714756919108024.png",
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
        "http://pngimg.com/uploads/microsoft/microsoft_PNG13.png?i=1",
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
        "https://static1.squarespace.com/static/588fe884a5790a376312498c/5890246f6b8f5ba2ed9cdb1e/58902472ebbd1a33c532d769/1485841580873/IBM+Logo.png",
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


