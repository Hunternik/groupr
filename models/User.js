const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  linkedInId: String,
  displayName: String,
  lastName: String,
  firstName: String,
  email: { type: String, required: true },
  company: { type: String, default: '' },
  position: { type: String, default: '' },
  iconPhotoURL: { type: String, default: ''},
  bigPhotoURL: { type: String, default: '' },
  credits: { type: Number, default: 0 },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "events"
    }
	], 
	linkedInProfileURL: { type: String, default: ''},
	googleProfileURL: { type: String, default: '' }
});

// first arugment passed into models is the name of the collection, second arg is info
const Users = mongoose.model("users", userSchema);

module.exports = Users;
