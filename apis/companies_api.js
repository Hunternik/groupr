const mongoose = require('mongoose');
const Company = mongoose.model('companies');
const Event = mongoose.model('event');
const User = mongoose.model('user');
const populatePath = require('./constants/populatePath');

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
    companyId: companyId,
    name: name,
    industry: industry,
    website: website,
    jobsOpen: [jobsOpen],
    primaryContact: primaryContact,
    imgLogoURL: imgLogoURL,
    employees: [employees],
    activeEvents: [activeEvents],
    pastEvents: [pastEvents]
  };

  try {
		
		const company = await new Company(newCompany).save();
		let event = await Event.findOne({ _id: activeEvents });
		let user = await User.findOne({ _id: employees });

		event.recruiters.push(user._id);
		event.companies.push(company._id);
		user.events.push(event._id);
		
		event = await event.save();
		user = await user.save();
		user = await User.populate(user, populatePath.userPath);
		event = await Event.populate(event, populatePath.eventPath);
		
		const updatedEventUser = { user: user, event: event };

    res.send(updatedEventUser);
  } catch (error) {
		console.log(error);
    res.status(404).send(error);
  }
};

