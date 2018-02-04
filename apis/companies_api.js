const mongoose = require('mongoose');
const Company = mongoose.model('companies');

module.exports.insertCompany = async (req, res) => {
  console.log(req.body);

  // Information from redux form
  const {
    companyId,
    name,
    industry,
    website,
    jobsOpen,
    primaryContact,
    imgLogoURL,
    employees,
    activeEvents,
    pastEvents
  } = req.body;

  const newCompany = {
    companyId: companyId || null,
    name: name || null,
    industry: industry || null,
    website: website || null,
    jobsOpen: [jobsOpen] || null,
    primaryContact: primaryContact || null,
    imgLogoURL: imgLogoURL || null,
    employees: [employees] || null,
    activeEvents: [activeEvents] || null,
    pastEvents: [pastEvents] || null
  };

  // If company already exists, add userSchema to db
  // If company doesn't exist, .save into mongoDB
  // with userSchema
  // with eventSchema

  // 1. Check if employee for that event
  // let existingCompany;

  // 2. Check if company exists for that event
  // Add existing user
  // Return null

  // 3. If companye exists
  // Use Event ID
  // Add employee to array

  // Try catch block
  try {
    const company = await new Company(newCompany).save();
    
    res.send(company);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports.getEventSponsors = async (req, res) => {
  const eventId = req.params.eventId;

  try {
    const eventSponsors = await Companies.find({ activeEvents: eventId });

    res.send(eventSponsors);
  } catch (error) {
    res.status(404).send(error);
  }
};
