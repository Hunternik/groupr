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
        {
          $oid: "5a7a4aa10d4c8e66f5f39ff7"
        },
        {
          $oid: "5a7a4aa10d4c8e66f5f39ff8"
        },
        {
          $oid: "5a7a4aa10d4c8e66f5f39ff9"
        },
        {
          $oid: "5a7a4aa10d4c8e66f5f39ffa"
        },
        {
          $oid: "5a7a4aa10d4c8e66f5f39ffb"
        },
        {
          $oid: "5a7a4aa10d4c8e66f5f39ffc"
        },
        {
          $oid: "5a7a4aa10d4c8e66f5f39ffd"
        },
        {
          $oid: "5a7a4aa10d4c8e66f5f39ff4"
        },
        {
          $oid: "5a7a4aa10d4c8e66f5f39ff5"
        },
        {
          $oid: "5a7a4aa10d4c8e66f5f39ff6"
        }
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
      {
        $oid: "5a7a4aa10d4c8e66f5f39ff7"
      },
      {
        $oid: "5a7a4aa10d4c8e66f5f39ff8"
      },
      {
        $oid: "5a7a4aa10d4c8e66f5f39ff9"
      },
      {
        $oid: "5a7a4aa10d4c8e66f5f39ffa"
      },
      {
        $oid: "5a7a4aa10d4c8e66f5f39ffb"
      },
      {
        $oid: "5a7a4aa10d4c8e66f5f39ffc"
      },
      {
        $oid: "5a7a4aa10d4c8e66f5f39ffd"
      },
      {
        $oid: "5a7a4aa10d4c8e66f5f39ff4"
      },
      {
        $oid: "5a7a4aa10d4c8e66f5f39ff5"
      },
      {
        $oid: "5a7a4aa10d4c8e66f5f39ff6"
      }
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
