const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');

const eventSchema = new Schema({
  eventId: String,
  title: String,
  description: String,
  date: Date,
  location: String,
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
	],
	companies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'companies'
    }
  ],
  failedquiz: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  recruiters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  active: Boolean,
  passed: Boolean
});

// first arugment passed into models is the name of the collection, second arg is info
const Event = mongoose.model('event', eventSchema);

module.exports = Event;
