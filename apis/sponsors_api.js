const mongoose = require('mongoose');
const Sponsors = mongoose.model('sponsors');

module.exports.getSponsor = async (req, res) => {
  const id = req.params.id;

  try {
    const sponsors = await Sponsors.find({ eventId: id });
    
    res.send(sponsors);
  } catch (error) {
    res.status(404).send(error);
  }
};
