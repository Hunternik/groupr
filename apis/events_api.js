const populatePath = require("./constants/populatePath");
const mongoose = require("mongoose");
const Events = mongoose.model("event");
const Users = mongoose.model("user");

module.exports.getEvent = async (req, res) => {
  const id = req.params.id;

  try {
    const events = await Events.findOne({ eventId: id }).populate(
      populatePath.eventPath
    );

    res.send(events);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports.addPassQuiz = async (req, res) => {
  const eventId = req.body;
  const userId = req.user._id;

  try {
    let event = await Events.findOne(eventId);
    let user = await Users.findOne(userId);

    user.events.push(event._id);
    event.attendees.push(user._id);

    user = await user.save();
    user = await Users.populate(user, populatePath.userPath);
    event = await event.save();
    event = await Events.populate(event, populatePath.eventPath);

		const updatedUserEvent = { user: user, event: event };

    res.send(updatedUserEvent);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.addFailQuiz = async (req, res) => {
  const eventId = req.body;
  const userId = req.user._id;

  try {
    let event = await Events.findOne(eventId);
    const user = await Users.findOne(userId);

    event.failedquiz.push(user._id);
    event = await event.save();
    event = await Events.populate(event, populatePath.eventPath);

    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
};
