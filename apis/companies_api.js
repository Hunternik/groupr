const mongoose = require('mongoose');
const Company = mongoose.model('companies');

module.exports.insertCompany = async (req, res) => {

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
    const eventSponsors = await Company.find({ companyId }).populate("activeEvents");

    res.send(eventSponsors);
  } catch (error) {
    res.status(404).send(error);
  }
};
