const mongoose = require("mongoose");
const User = mongoose.model("users");

// user.id is referencing the unique id created by mongoDB.
module.exports.serialize = (user, done) => done(null, user.id);

module.exports.deserialize = async (id, done) => {
  const user = await User.findById(id).populate({
    path: "events",
    select: "eventId"
  });

  return done(null, user);
};
