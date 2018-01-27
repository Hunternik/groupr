const authRoutes = require('./authRoutes');
const quizRoutes = require('./quizRoutes');

module.exports = (app) => {
	app.use('/auth', authRoutes);
	app.use('/api', quizRoutes);
};