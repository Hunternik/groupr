const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');

const companySchema = new Schema({
  eventId: String,
  name: String,
  industry: String,
  website: String,
  employees: [userSchema]
  // events: []
});

// first arugment passed into models is the name of the collection, second arg is info
mongoose.model('companies', companySchema);
