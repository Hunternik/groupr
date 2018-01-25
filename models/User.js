const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    linkedInId: String,
    totpId: String,
});

// first arugment passed into models is the name of the collection, second arg is info
mongoose.model('users', userSchema);