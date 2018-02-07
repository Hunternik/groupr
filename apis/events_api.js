const mongoose = require("mongoose");
const Events = mongoose.model("event");
const Users = mongoose.model("user");

module.exports.getEvent = async (req, res) => {
  const id = req.params.id;

  try {
    const events = await Events.findOne({ eventId: id })
      .populate({
        path: "companies",
        select: "imgLogoURL"
      })
      .populate({
        path: "attendees",
        select: "displayName bigPhotoURL email"
      })
      .populate({
        path: "recruiters",
        select: "displayName bigPhotoURL email"
      });

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
    user = await Users.populate(user, {
      path: "events",
      select: "eventId"
    });
    event = await event.save();

    const updatedUserEvent = { user: user, event: event };

    res.send(updatedUserEvent);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.addFailQuiz = async (req, res) => {
  const eventId = req.body;
  const user = req.user;

  try {
    let event = await Events.findOne(eventId);

    event.failedquiz.push(user._id);
    event = await event.save();
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
};
