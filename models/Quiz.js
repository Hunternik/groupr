const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
  question: String,
  answers: Array,
  correct: String
});

// first arugment passed into models is the name of the collection, second arg is info
mongoose.model("quiz", quizSchema);
