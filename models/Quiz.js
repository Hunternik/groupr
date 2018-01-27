const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
  question: String
});

mongoose.model("quiz", quizSchema);

module.exports = quizSchema;
