const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  linkedInId: String,
  displayName: String,
  lastName: String,
  firstName: String,
  email: { type: String, required: true },
  company: String,
  position: String,
  iconPhotoURL: String,
  bigPhotoURL: String,
  credits: { type: Number, default: 0 },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "events"
    }
  ]
});

// first arugment passed into models is the name of the collection, second arg is info
mongoose.model("users", userSchema);
