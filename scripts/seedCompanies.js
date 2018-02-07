const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;
const keys = require('../config/keys');
mongoose.connect(keys.mongoURI);

const companySeed = [
  {
    companyId: "google",
    name: "Google",
    industry: "Software",
    website: "https://www.google.com/about/our-company/",
    jobsOpen: [
        "Software Engineer"
    ],
    primaryContact: "google@gmail.com",
    imgLogoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png",
    employees: null,
    activeEvents: [
        "5a764c7ff36d281a9f55cf09",
        "5a6cfe2bb568b286dbaf2abe",
        "5a6cfe3db568b286dbaf2abf",
        "5a6cfdd8b568b286dbaf2abb",
        "5a6cfdf0b568b286dbaf2abc",
        "5a6cfe19b568b286dbaf2abd"
    ],
    pastEvents: null
  },
  {
    companyId: "github",
    name: "Github",
    industry: "Internet",
    website: "https://github.com/about",
    jobsOpen: [
        "Software Engineer"
    ],
    primaryContact: "github@github.com",
    imgLogoURL: "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",
    employees: null,
    activeEvents: [
        "5a764c7ff36d281a9f55cf09",
        "5a6cfe2bb568b286dbaf2abe",
        "5a6cfe3db568b286dbaf2abf",
        "5a6cfdd8b568b286dbaf2abb",
        "5a6cfdf0b568b286dbaf2abc",
        "5a6cfe19b568b286dbaf2abd"
    ],
    pastEvents: null
  } 
];

db.Company.remove({})
  .then(() => db.Company.collection.insertMany(companySeed))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
