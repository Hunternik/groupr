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
};
