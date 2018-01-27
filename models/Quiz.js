const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.model('quiz', new Schema({ question: String }), 'quiz'); // collection name
