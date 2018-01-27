const mongoose = require('mongoose');
const Events = mongoose.model('events');

module.exports.getEvent = async (req, res) => {
  const id = req.params.id;

  try {
		const events = await Events.find({ eventId: id });

    res.send(events);
  } catch (error) {
    res.status(404).send(error);
  }
};
