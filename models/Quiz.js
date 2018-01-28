const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.model(
  'quiz',
  new Schema({
    num: {
      question: String,
      answers: {
        A: String,
        B: String,
        C: String,
        D: String
      },
      correct: String
    }
  }),
  'quiz'
); // collection name
