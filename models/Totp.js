const mongoose = require ('mongoose');
const { Schema } = mongoose; 

const userSchema = new Schema ({
	_id: String,
	key: String,
	period: Number
});

mongoose.model('totp', userSchema);