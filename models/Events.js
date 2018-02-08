const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = require("./User");

const eventSchema = new Schema({
  eventId: { type: String, default: "" },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  date: Date,
  location: { type: String, default: "" },
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  ],
  companies: [
    {
      type: Schema.Types.ObjectId,
      ref: "companies"
    }
  ],
  failedquiz: [
    {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  ],
  recruiters: [
    {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  ],
  active: Boolean,
  passed: Boolean
});

// first arugment passed into models is the name of the collection, second arg is info
const Event = mongoose.model("event", eventSchema);

module.exports = Event;
