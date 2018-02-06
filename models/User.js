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
      ref: "event"
    }
	], 
	linkedInProfileURL: { type: String, default: ''},
	googleProfileURL: { type: String, default: '' }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
