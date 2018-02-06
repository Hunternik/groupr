const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = require("./User");

const eventSchema = new Schema({
  eventId: String,
  title: String,
  description: String,
  date: Date,
  location: String,
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  failedquiz: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  sponsors: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  active: Boolean,
  passed: Boolean
});

// first arugment passed into models is the name of the collection, second arg is info
const Events = mongoose.model("events", eventSchema);

module.exports = Events;
