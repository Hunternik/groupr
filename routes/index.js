const authRoutes = require('./authRoutes');
const quizRoutes = require('./quizRoutes');
const eventRoutes = require('./eventRoutes');

module.exports = app => {
  app.use('/auth', authRoutes);
  app.use('/api', quizRoutes);
	app.use('/api/current_event', eventRoutes);
};
