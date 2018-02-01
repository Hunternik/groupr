const mongoose = require('mongoose');
const Companies = mongoose.model('companies');

module.exports.getCompany = async (req, res) => {
  const id = req.params.id;

  try {
    const companies = await Companies.find({ companyId: id });
    
    res.send(companies);
  } catch (error) {
    res.status(404).send(error);
  }

  // If company already exists, add userSchema to db
  // If company doesn't exist, .save into mongoDB
        // with userSchema
        // with eventSchema

};
