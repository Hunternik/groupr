const Events = require('../models/Events');

module.exports.getEvent = async (req, res) => {
  const id = req.body.id;

  try {
		const events = await Events.find({ eventId: id });
		
    res.send(events);
  } catch (error) {
    res.status(404).send(error);
  }
};
