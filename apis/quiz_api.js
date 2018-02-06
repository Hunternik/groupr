const mongoose = require('mongoose');
const Quiz = mongoose.model('quiz');

module.exports.getQuiz = async (req, res) => {
  try {
		const quiz = await Quiz.find({});
		
    res.send(quiz);
  } catch (error) {
    res.status(404).send(error);
  }
};
