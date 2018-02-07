const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require('../config/keys');
mongoose.connect(keys.mongoURI);

const eventSeed = [
  {
    eventId: "ATX",
    title: "TechFest Austin",
    description:
      "Are you ready to meet, greet, dance repeat? Well then, you've come to the right place! Our group shares a common passion--we live for Electronic Dance Music. We are overwhelmed by stunning lights, sounds, and we are part of a growing unique and eclectic community. At Rave Meetup, we come together to live and enjoy the pulsating rhythms and melodies of electronica. Become a part of our group and discover why raves and electronic festivals have been growing strong for over 20 years. Our mantra has--and always will be of--PEACE, LOVE, UNITY, and RESPECT so sign-up and join our family.",
    date: new Date(Date.now()),
    location: "618 S Spring St, Los Angeles, CA 90014",
    attendees: [],
    failedquiz: [],
		recruiters: [],
		companies: [],
    active: true,
    passed: false
  },
  {
    eventId: "LA",
    title: "TechFest Los Angeles",
    description:
      "Are you ready to meet, greet, dance repeat? Well then, you've come to the right place! Our group shares a common passion--we live for Electronic Dance Music. We are overwhelmed by stunning lights, sounds, and we are part of a growing unique and eclectic community. At Rave Meetup, we come together to live and enjoy the pulsating rhythms and melodies of electronica. Become a part of our group and discover why raves and electronic festivals have been growing strong for over 20 years. Our mantra has--and always will be of--PEACE, LOVE, UNITY, and RESPECT so sign-up and join our family.",
    date: new Date(Date.now()),
    location: "618 S Spring St, Los Angeles, CA 90014",
    attendees: [],
    failedquiz: [],
		recruiters: [],
		companies: [],
    active: true,
    passed: false
  },
  {
    eventId: "NY",
    title: "TechFest New York",
    description:
      "Are you ready to meet, greet, dance repeat? Well then, you've come to the right place! Our group shares a common passion--we live for Electronic Dance Music. We are overwhelmed by stunning lights, sounds, and we are part of a growing unique and eclectic community. At Rave Meetup, we come together to live and enjoy the pulsating rhythms and melodies of electronica. Become a part of our group and discover why raves and electronic festivals have been growing strong for over 20 years. Our mantra has--and always will be of--PEACE, LOVE, UNITY, and RESPECT so sign-up and join our family.",
    date: new Date(Date.now()),
    location: "618 S Spring St, Los Angeles, CA 90014",
    attendees: [],
    failedquiz: [],
		recruiters: [],
		companies: [],
    active: true,
    passed: false
  },
  {
    eventId: "SF",
    title: "TechFest San Francisco",
    description:
      "Are you ready to meet, greet, dance repeat? Well then, you've come to the right place! Our group shares a common passion--we live for Electronic Dance Music. We are overwhelmed by stunning lights, sounds, and we are part of a growing unique and eclectic community. At Rave Meetup, we come together to live and enjoy the pulsating rhythms and melodies of electronica. Become a part of our group and discover why raves and electronic festivals have been growing strong for over 20 years. Our mantra has--and always will be of--PEACE, LOVE, UNITY, and RESPECT so sign-up and join our family.",
    date: new Date(Date.now()),
    location: "618 S Spring St, Los Angeles, CA 90014",
    attendees: [],
    failedquiz: [],
		recruiters: [],
		companies: [],
    active: true,
    passed: false
  },
  {
    eventId: "SEA",
    title: "TechFest Seattle",
    description:
      "Are you ready to meet, greet, dance repeat? Well then, you've come to the right place! Our group shares a common passion--we live for Electronic Dance Music. We are overwhelmed by stunning lights, sounds, and we are part of a growing unique and eclectic community. At Rave Meetup, we come together to live and enjoy the pulsating rhythms and melodies of electronica. Become a part of our group and discover why raves and electronic festivals have been growing strong for over 20 years. Our mantra has--and always will be of--PEACE, LOVE, UNITY, and RESPECT so sign-up and join our family.",
    date: new Date(Date.now()),
    location: "618 S Spring St, Los Angeles, CA 90014",
    attendees: [],
    failedquiz: [],
		recruiters: [],
		companies: [],
    active: true,
    passed: false
  },
  {
    eventId: "SD",
    title: "TechFest San Diego",
    description:
      "Are you ready to meet, greet, dance repeat? Well then, you've come to the right place! Our group shares a common passion--we live for Electronic Dance Music. We are overwhelmed by stunning lights, sounds, and we are part of a growing unique and eclectic community. At Rave Meetup, we come together to live and enjoy the pulsating rhythms and melodies of electronica. Become a part of our group and discover why raves and electronic festivals have been growing strong for over 20 years. Our mantra has--and always will be of--PEACE, LOVE, UNITY, and RESPECT so sign-up and join our family.",
    date: new Date(Date.now()),
    location: "618 S Spring St, Los Angeles, CA 90014",
    attendees: [],
    failedquiz: [],
		recruiters: [],
		companies: [],
    active: false,
    passed: true
  },
  {
    eventId: "DET",
    title: "TechFest Detroit",
    description:
      "Are you ready to meet, greet, dance repeat? Well then, you've come to the right place! Our group shares a common passion--we live for Electronic Dance Music. We are overwhelmed by stunning lights, sounds, and we are part of a growing unique and eclectic community. At Rave Meetup, we come together to live and enjoy the pulsating rhythms and melodies of electronica. Become a part of our group and discover why raves and electronic festivals have been growing strong for over 20 years. Our mantra has--and always will be of--PEACE, LOVE, UNITY, and RESPECT so sign-up and join our family.",
    date: new Date(Date.now()),
    location: "618 S Spring St, Los Angeles, CA 90014",
    attendees: [],
    failedquiz: [],
		recruiters: [],
		companies: [],
    active: false,
    passed: true
  },
  {
    eventId: "DEN",
    title: "TechFest Denver",
    description:
      "Are you ready to meet, greet, dance repeat? Well then, you've come to the right place! Our group shares a common passion--we live for Electronic Dance Music. We are overwhelmed by stunning lights, sounds, and we are part of a growing unique and eclectic community. At Rave Meetup, we come together to live and enjoy the pulsating rhythms and melodies of electronica. Become a part of our group and discover why raves and electronic festivals have been growing strong for over 20 years. Our mantra has--and always will be of--PEACE, LOVE, UNITY, and RESPECT so sign-up and join our family.",
    date: new Date(Date.now()),
    location: "618 S Spring St, Los Angeles, CA 90014",
    attendees: [],
    failedquiz: [],
		recruiters: [],
		companies: [],
    active: false,
    passed: true
  },
  {
    eventId: "OR",
    title: "TechFest Orlando",
    description:
      "Are you ready to meet, greet, dance repeat? Well then, you've come to the right place! Our group shares a common passion--we live for Electronic Dance Music. We are overwhelmed by stunning lights, sounds, and we are part of a growing unique and eclectic community. At Rave Meetup, we come together to live and enjoy the pulsating rhythms and melodies of electronica. Become a part of our group and discover why raves and electronic festivals have been growing strong for over 20 years. Our mantra has--and always will be of--PEACE, LOVE, UNITY, and RESPECT so sign-up and join our family.",
    date: new Date(Date.now()),
    location: "618 S Spring St, Los Angeles, CA 90014",
    attendees: [],
    failedquiz: [],
		recruiters: [],
		companies: [],
    active: false,
    passed: true
  },
  {
    eventId: "WAS",
    title: "TechFest Washington",
    description:
      "Are you ready to meet, greet, dance repeat? Well then, you've come to the right place! Our group shares a common passion--we live for Electronic Dance Music. We are overwhelmed by stunning lights, sounds, and we are part of a growing unique and eclectic community. At Rave Meetup, we come together to live and enjoy the pulsating rhythms and melodies of electronica. Become a part of our group and discover why raves and electronic festivals have been growing strong for over 20 years. Our mantra has--and always will be of--PEACE, LOVE, UNITY, and RESPECT so sign-up and join our family.",
    date: new Date(Date.now()),
    location: "618 S Spring St, Los Angeles, CA 90014",
    attendees: [],
    failedquiz: [],
		recruiters: [],
		companies: [],
    active: false,
    passed: true
  }
];

db.Event.remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
