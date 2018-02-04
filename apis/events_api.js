const mongoose = require('mongoose');
const Events = mongoose.model('events');

module.exports.getEvent = async (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  try {
    const events = await Events.find({ eventId: id });

    res.send(events);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports.addPassQuiz = async (req, res) => {
  const eventId = req.body;
  const user = req.user;

  try {
    let event = await Events.findOne(eventId);

    event.attendees.push(user);
    event = event.save();
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.addFailQuiz = async (req, res) => {
  const eventId = req.body;
  const user = req.user;

  try {
    let event = await Events.findOne(eventId);

    event.failedquiz.push(user);
    event = event.save();
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
};
